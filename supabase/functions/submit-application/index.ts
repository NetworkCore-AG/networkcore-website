import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_AREAS = new Set([
  "engineering","product","commercial","operations","compliance","marketing","finance","other",
]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeFilename(name: string) {
  const dot = name.lastIndexOf(".");
  const base = (dot >= 0 ? name.slice(0, dot) : name)
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "cv";
  const ext = dot >= 0 ? name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, "") : "";
  return ext ? `${base}.${ext}` : base;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;

  try {
    const form = await req.formData();
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim().toLowerCase();
    const location = String(form.get("location") ?? "").trim();
    const area = String(form.get("area") ?? "").trim();
    const linkedin = String(form.get("linkedin") ?? "").trim();
    const about = String(form.get("about") ?? "").trim();
    const consent = String(form.get("consent") ?? "").trim();
    const cv = form.get("cv");

    // Validate
    const errors: Record<string, string> = {};
    if (fullName.length < 2 || fullName.length > 200) errors.fullName = "Invalid name";
    if (!EMAIL_REGEX.test(email) || email.length > 255) errors.email = "Invalid email";
    if (location.length < 1 || location.length > 200) errors.location = "Invalid location";
    if (!ALLOWED_AREAS.has(area)) errors.area = "Invalid area";
    if (about.length < 100 || about.length > 5000) errors.about = "Invalid about";
    if (linkedin && (linkedin.length > 300 || !/^https?:\/\//i.test(linkedin))) errors.linkedin = "Invalid URL";
    if (consent !== "true") errors.privacyConsent = "Please agree to the Privacy Policy";
    if (!(cv instanceof File)) errors.cv = "CV required";
    else {
      if (cv.size > MAX_FILE_SIZE) errors.cv = "File too large";
      else if (cv.size === 0) errors.cv = "Empty file";
      else if (!ALLOWED_MIME.has(cv.type) && !/\.(pdf|docx)$/i.test(cv.name)) errors.cv = "Invalid file type";
    }
    if (Object.keys(errors).length) return json({ error: "validation", errors }, 400);

    // Rate limit
    if (ip) {
      const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
      const { count, error: rlErr } = await supabase
        .schema("careers")
        .from("application_rate_limits")
        .select("id", { count: "exact", head: true })
        .eq("ip_address", ip)
        .gte("created_at", since);
      if (rlErr) {
        console.error("rate limit query failed");
      } else if ((count ?? 0) >= RATE_LIMIT_MAX) {
        return json({ error: "rate_limit" }, 429);
      }
    }

    // Upload CV
    const file = cv as File;
    const path = `${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
    const { error: upErr } = await supabase.storage
      .from("careers-cvs")
      .upload(path, file, { contentType: file.type || "application/octet-stream", upsert: false });
    if (upErr) {
      console.error("upload failed");
      return json({ error: "upload_failed" }, 500);
    }

    // Insert application
    const { error: insErr } = await supabase
      .schema("careers")
      .from("applications")
      .insert({
        full_name: fullName,
        email,
        location,
        area_of_interest: area,
        cv_storage_path: path,
        linkedin_url: linkedin || null,
        about,
        consent: true,
        ip_address: ip,
        user_agent: req.headers.get("user-agent")?.slice(0, 500) ?? null,
      });
    if (insErr) {
      console.error("insert failed");
      await supabase.storage.from("careers-cvs").remove([path]);
      return json({ error: "save_failed" }, 500);
    }

    if (ip) {
      await supabase.schema("careers").from("application_rate_limits").insert({ ip_address: ip });
    }

    return json({ success: true });
  } catch (e) {
    console.error("submit-application error");
    return json({ error: "server_error" }, 500);
  }
});
