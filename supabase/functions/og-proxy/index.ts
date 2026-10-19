import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_URL = "https://networkcore.org";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");

    if (!slug) {
      return new Response(
        JSON.stringify({ error: "Missing 'slug' parameter" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Fetch SEO data from Supabase
    const { data, error } = await supabase
      .from("blog_seo")
      .select("title, description, image_url, page_type")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      // Redirect to homepage if not found
      return new Response(null, {
        status: 302,
        headers: { Location: SITE_URL, ...corsHeaders },
      });
    }

    const canonicalUrl = data.page_type === "blog"
      ? `${SITE_URL}/blog/${slug}`
      : `${SITE_URL}/${slug}`;

    const ogType = data.page_type === "blog" ? "article" : "website";

    const absoluteImage = data.image_url.startsWith("http")
      ? data.image_url
      : `${SITE_URL}${data.image_url}`;

    const title = escapeHtml(data.title);
    const description = escapeHtml(data.description);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${absoluteImage}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${absoluteImage}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <meta http-equiv="refresh" content="0;url=${escapeHtml(canonicalUrl)}" />
</head>
<body>
  <p>Redirecting to <a href="${escapeHtml(canonicalUrl)}">${title}</a>...</p>
  <script>window.location.replace("${canonicalUrl.replace(/"/g, '\\"')}");</script>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error in OG proxy function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

Deno.serve(handler);
