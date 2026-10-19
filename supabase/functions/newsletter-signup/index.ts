import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  consent: z.boolean().refine((v) => v === true, "Please agree to the Privacy Policy"),
});

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");

// NetworkCore Newsletter Signups sheet
const SPREADSHEET_ID = "1PxMajApwASnx2_wQXnyvPDbZoY6OkIE456rWAoIZlcU";
const SHEET_RANGE = "Signups!A:C";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

async function appendToSheet(name: string, email: string, createdAt: string) {
  if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
    console.warn("Google Sheets connector not configured; skipping sync");
    return;
  }

  const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [[name, email, createdAt]] }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Sheets append failed [${res.status}]: ${text}`);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { error: insertErr } = await supabase
      .from("newsletter_signups")
      .insert({ name: parsed.data.name, email: parsed.data.email, consent: parsed.data.consent });

    if (insertErr && insertErr.code !== "23505") {
      console.error("Insert error:", insertErr);
      return new Response(
        JSON.stringify({ error: "Could not save signup" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Only append to the sheet if this was a new signup (not a duplicate)
    if (!insertErr) {
      try {
        await appendToSheet(
          parsed.data.name,
          parsed.data.email,
          new Date().toISOString(),
        );
      } catch (e) {
        console.error("Sheets sync error:", e);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
