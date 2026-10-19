import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const WEB3FORMS_API_KEY = Deno.env.get("WEB3FORMS_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_HOURS = 1;

interface ContactFormRequest {
  name: string;
  email: string;
  type: string;
  message: string;
  extraFields?: Record<string, string>;
  formLabel?: string;
  referredByName?: string;
  referredByEmail?: string;
  company?: string;
  phone?: string;
  consent: boolean;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    // Get IP address for rate limiting
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // Check rate limits
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
    
    const { data: rateLimit } = await supabase
      .from("contact_rate_limits")
      .select("*")
      .eq("ip_address", ipAddress)
      .gte("last_submission_at", windowStart)
      .maybeSingle();

    if (rateLimit && rateLimit.submission_count >= RATE_LIMIT_MAX) {
      console.log("Rate limit exceeded for contact form request");
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, type, message, extraFields, formLabel, referredByName, referredByEmail, company, phone, consent, source }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format and length
    const trimmedEmail = email.trim().toLowerCase();
    if (trimmedEmail.length > 255 || !EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!type || typeof type !== "string" || type.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Type is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (consent !== true) {
      return new Response(
        JSON.stringify({ error: "Please agree to the Privacy Policy" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate field lengths
    const trimmedName = name.trim();
    const trimmedType = type.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name must be less than 100 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (trimmedMessage.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message must be less than 1000 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Processing contact form submission");

    // Build extra fields block
    let extraBlock = "";
    if (extraFields && typeof extraFields === "object") {
      const lines = Object.entries(extraFields)
        .filter(([, v]) => v !== undefined && v !== null && String(v).trim().length > 0)
        .map(([k, v]) => `${k}: ${String(v).slice(0, 500)}`);
      if (lines.length > 0) {
        extraBlock = `\n\n--- Additional details ---\n${lines.join("\n")}`;
      }
    }

    // Update rate limit counter
    if (rateLimit) {
      await supabase
        .from("contact_rate_limits")
        .update({
          submission_count: rateLimit.submission_count + 1,
          last_submission_at: new Date().toISOString(),
        })
        .eq("id", rateLimit.id);
    } else {
      await supabase
        .from("contact_rate_limits")
        .insert({
          ip_address: ipAddress,
          submission_count: 1,
          last_submission_at: new Date().toISOString(),
        });
    }

    // Persist submission to contact_submissions (also triggers contacts sync)
    try {
      const derivedCompany =
        company ||
        (extraFields && (extraFields["Company"] || extraFields["company"])) ||
        null;
      await supabase.from("contact_submissions").insert({
        name: trimmedName,
        email: trimmedEmail,
        audience_type: trimmedType,
        message: trimmedMessage + extraBlock,
        company: derivedCompany ? String(derivedCompany).slice(0, 255) : null,
        phone: phone ? String(phone).slice(0, 50) : null,
        referred_by_name: referredByName ? String(referredByName).slice(0, 100) : null,
        referred_by_email: referredByEmail ? String(referredByEmail).toLowerCase().slice(0, 255) : null,
        consent: consent === true,
        source: source ? String(source).slice(0, 100) : "website",
      });
    } catch (dbErr) {
      console.error("Failed to persist contact submission to DB");
    }

    console.log("Contact form processed successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in contact form function");
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
