import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
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

interface WhitepaperRequest {
  email: string;
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
      console.log("Rate limit exceeded for request");
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { email }: WhitepaperRequest = await req.json();

    // Validate email is provided
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

    console.log("Processing whitepaper request");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NetworkCore <onboarding@resend.dev>",
        to: ["victor.p@networkcore.org"],
        subject: "NetworkCore Whitepaper request",
        // Use text instead of html to prevent any XSS risk
        text: `Whitepaper request from: ${trimmedEmail}`,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Email API error");
      throw new Error("Failed to send request");
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

    // Persist whitepaper request to contact_submissions
    try {
      await supabase.from("contact_submissions").insert({
        name: trimmedEmail.split("@")[0],
        email: trimmedEmail,
        audience_type: "Whitepaper request",
        message: "Whitepaper download requested",
        consent: true,
      });
    } catch (dbErr) {
      console.error("Failed to persist whitepaper request to DB");
    }

    console.log("Whitepaper request processed successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in whitepaper request function");
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
