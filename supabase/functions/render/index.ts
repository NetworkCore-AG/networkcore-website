import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_URL = "https://networkcore.org";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Bot user-agent patterns for search engines and AI crawlers
const BOT_PATTERNS = [
  /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i,
  /yandexbot/i, /sogou/i, /facebookexternalhit/i, /twitterbot/i,
  /linkedinbot/i, /whatsapp/i, /telegrambot/i, /discordbot/i,
  /slackbot/i, /applebot/i, /petalbot/i, /semrushbot/i, /ahrefsbot/i,
  /mj12bot/i, /dotbot/i, /rogerbot/i, /screaming frog/i,
  // AI crawlers
  /gptbot/i, /chatgpt/i, /claude/i, /anthropic/i, /perplexity/i,
  /cohere/i, /ai2bot/i, /ccbot/i, /bytespider/i, /amazonbot/i,
  /meta-externalagent/i, /google-extended/i,
];

function isBot(userAgent: string): boolean {
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Static page content for core pages
const PAGE_CONTENT: Record<string, { title: string; description: string; body: string }> = {
  "": {
    title: "NetworkCore - The Growth Engine for EV Charging",
    description: "NetworkCore is the growth engine for EV charging. One integration for pricing, routing, payment capture, revenue sharing, and settlement between CPOs and distribution partners.",
    body: `
      <h1>NetworkCore — The Growth Engine for EV Charging</h1>
      <p>NetworkCore is the growth engine for EV charging. One integration for pricing, routing, payment capture, revenue sharing, and settlement between CPOs and distribution partners.</p>
      
      <h2>What We Do</h2>
      <p>EV charging interoperability solved the technical layer. The financial layer remains fragmented. NetworkCore sits between Charge Point Operators and Distribution Partners — wallets, fleets, platforms, insurers and OEMs — and standardises pricing logic, session routing, payment capture and split, revenue sharing, settlement and reconciliation, and compliance.</p>
      
      <h2>For Distribution Partners</h2>
      <p>Embed EV charging without infrastructure, subscriptions, or bilateral contracts. Access public charging networks through one API. Earn transparent revenue share per session. Offer public dynamic pricing across networks and markets. Automate settlement, FX and compliance.</p>
      <a href="/distribution-partners">Learn more about Distribution Partners</a>
      
      <h2>For Charge Point Operators</h2>
      <p>Preserve pricing integrity and improve liquidity. CPOs receive approximately 90% of session revenue with faster payout cycles. No bespoke roaming negotiations. Lower structural costs and healthier margins.</p>
      <a href="/charge-point-operators">Learn more about CPOs</a>
      
      <h2>Built as Infrastructure</h2>
      <p>Plug and Charge and OCPI-native interoperability. Partner PSP-integrated payment rails. Automated invoicing and VAT handling. Compliant, auditable settlement flows.</p>
      
      <nav>
        <h2>Explore</h2>
        <ul>
          <li><a href="/how-it-works">How It Works</a></li>
          <li><a href="/distribution-partners">Distribution Partners</a></li>
          <li><a href="/charge-point-operators">Charge Point Operators</a></li>
          <li><a href="/benefits">Benefits</a></li>
          <li><a href="/the-network">The Network</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    `,
  },
  "how-it-works": {
    title: "How It Works — NetworkCore",
    description: "Learn how NetworkCore connects distribution partners and charge point operators through a single integration with transparent session economics and real-time settlement.",
    body: `
      <h1>How It Works</h1>
      <p>NetworkCore connects demand and supply in EV charging. Distribution partners — wallets, fleets, platforms, insurers, OEMs — integrate once to access a growing network of charge point operators across Europe and beyond.</p>
      <p>Our infrastructure handles pricing, routing, payment capture, revenue sharing, and settlement in real time.</p>
      
      <h2>One Integration, Full Access</h2>
      <p>Connect once to NetworkCore's API. Access thousands of charging stations across multiple CPO networks. No bilateral contracts. No per-network integrations.</p>
      
      <h2>Transparent Session Economics</h2>
      <p>Every session has a clear cost structure: CPO base price, network fee, and distribution partner margin. No hidden markups. No opaque bundling.</p>
      
      <h2>Real-Time Settlement</h2>
      <p>Sessions are captured, validated, and settled automatically. Revenue splits are calculated per session. Payouts are predictable and auditable.</p>
      
      <a href="/distribution-partners">For Distribution Partners</a> | <a href="/charge-point-operators">For CPOs</a> | <a href="/benefits">Benefits</a>
    `,
  },
  "distribution-partners": {
    title: "Distribution Partners — NetworkCore",
    description: "Embed EV charging as a revenue stream for distribution partners. NetworkCore offers global charging access with up to 9% revenue share per session.",
    body: `
      <h1>Distribution Partners</h1>
      <p>Embed EV charging as a revenue stream without infrastructure, subscriptions, or bilateral contracts. Access public charging networks through one API.</p>
      
      <h2>Who Are Distribution Partners?</h2>
      <p>Wallets, super apps, fleet managers, insurers, OEMs, mobility platforms — any organisation with a user base that drives electric vehicles.</p>
      
      <h2>How It Works</h2>
      <p>Integrate NetworkCore's API once. Your users can find, start, and pay for charging sessions across all connected CPO networks. You earn a transparent revenue share on every session.</p>
      
      <h2>Revenue Share</h2>
      <p>Distribution partners earn up to 9% revenue share per session. No upfront costs. No minimum volumes. Revenue scales with usage.</p>
      
      <a href="/how-it-works">How It Works</a> | <a href="/charge-point-operators">For CPOs</a> | <a href="/blog">Blog</a>
    `,
  },
  "charge-point-operators": {
    title: "Charge Point Operators — NetworkCore",
    description: "Preserve pricing integrity, improve liquidity, and sell more sessions. CPOs receive approximately 90% of session revenue with faster payout cycles.",
    body: `
      <h1>Charge Point Operators</h1>
      <p>Preserve pricing integrity and improve liquidity. CPOs receive approximately 90% of session revenue with faster payout cycles.</p>
      
      <h2>Why NetworkCore for CPOs</h2>
      <p>No bespoke roaming negotiations. No opaque middlemen. No revenue leakage. Connect once and access a growing base of distribution partners who bring drivers to your stations.</p>
      
      <h2>Pricing Integrity</h2>
      <p>You set your prices. NetworkCore enforces them. No intermediary overrides or hidden markups.</p>
      
      <h2>Faster Settlement</h2>
      <p>Automated settlement with predictable payout cycles. No manual reconciliation. No invoice chasing.</p>
      
      <a href="/how-it-works">How It Works</a> | <a href="/distribution-partners">For Distribution Partners</a> | <a href="/benefits">Benefits</a>
    `,
  },
  "benefits": {
    title: "Benefits — NetworkCore",
    description: "Discover EV charging benefits for drivers, CPOs, and distribution partners. NetworkCore aligns incentives with transparent pricing and real-time settlement at scale.",
    body: `
      <h1>Benefits</h1>
      <p>More demand leads to higher utilisation. Higher utilisation leads to better economics. Better economics leads to fairer prices. Fairer prices attract more drivers. More drivers accelerate the energy transition.</p>
      
      <h2>For Drivers</h2>
      <p>Access charging stations across multiple networks from a single app. Transparent pricing. No surprise fees.</p>
      
      <h2>For CPOs</h2>
      <p>Higher station utilisation. Predictable revenue. Faster payouts. Lower operational overhead.</p>
      
      <h2>For Distribution Partners</h2>
      <p>New revenue stream with zero infrastructure investment. Transparent economics. Automated compliance.</p>
      
      <a href="/how-it-works">How It Works</a> | <a href="/the-network">The Network</a>
    `,
  },
  "the-network": {
    title: "The Network — NetworkCore",
    description: "Explore the NetworkCore platform — the clearing and settlement layer for the global EV charging ecosystem.",
    body: `
      <h1>The Network</h1>
      <p>NetworkCore is the clearing and settlement layer for the global EV charging ecosystem. One neutral platform connecting CPOs and distribution partners.</p>
      
      <h2>Platform Architecture</h2>
      <p>OCPI-native connectivity. Real-time session routing. Automated pricing enforcement. Payment capture and split. Revenue sharing and settlement. Compliance and reporting.</p>
      
      <a href="/how-it-works">How It Works</a> | <a href="/about">About Us</a>
    `,
  },
  "about": {
    title: "About Us — NetworkCore",
    description: "NetworkCore is reshaping energy and finance from Zug, Switzerland. We build the clearing and settlement layer for the global EV charging ecosystem.",
    body: `
      <h1>About NetworkCore</h1>
      <p>NetworkCore AG is based in Zug, Switzerland. We are reshaping energy and finance by building the clearing and settlement layer for the global EV charging ecosystem.</p>
      <p>Our mission is to make EV charging seamless, transparent, and economically sustainable for all participants.</p>
      
      <a href="/">Home</a> | <a href="/how-it-works">How It Works</a> | <a href="/blog">Blog</a>
    `,
  },
  "privacy": {
    title: "Privacy Policy — NetworkCore",
    description: "NetworkCore AG privacy policy. Learn how we handle your data.",
    body: `
      <h1>Privacy Policy</h1>
      <p>NetworkCore AG is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal data.</p>
      <a href="/">Home</a>
    `,
  },
  "blog": {
    title: "Blog — NetworkCore",
    description: "Insights on EV charging infrastructure, settlement, monetisation, and the financial network powering electrified mobility.",
    body: `
      <h1>NetworkCore Blog</h1>
      <p>Insights on EV charging infrastructure, settlement, monetisation, and the financial network powering electrified mobility.</p>
      <p>Browse our latest articles on EV charging business models, settlement infrastructure, and the future of electrified mobility.</p>
      <a href="/">Home</a> | <a href="/how-it-works">How It Works</a>
    `,
  },
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const userAgent = req.headers.get("user-agent") || "";
    const path = url.searchParams.get("path") || "";

    // If not a bot, redirect to the SPA
    if (!isBot(userAgent)) {
      const redirectUrl = path ? `${SITE_URL}/${path}` : SITE_URL;
      return new Response(null, {
        status: 302,
        headers: { Location: redirectUrl, ...corsHeaders },
      });
    }

    // It's a bot — serve pre-rendered HTML
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Determine if this is a blog post
    const blogMatch = path.match(/^blog\/(.+)$/);
    let title = "";
    let description = "";
    let bodyContent = "";
    let ogImage = `${SITE_URL}/images/og-image.jpg`;
    let ogType = "website";
    let canonicalUrl = path ? `${SITE_URL}/${path}` : SITE_URL;

    if (blogMatch) {
      // Blog post — fetch SEO data and content from Supabase
      const slug = blogMatch[1];
      const { data: seoData } = await supabase
        .from("blog_seo")
        .select("title, description, image_url")
        .eq("slug", slug)
        .single();

      if (seoData) {
        title = seoData.title;
        description = seoData.description;
        ogImage = seoData.image_url.startsWith("http") ? seoData.image_url : `${SITE_URL}${seoData.image_url}`;
        ogType = "article";
        bodyContent = `
          <article>
            <h1>${escapeHtml(title)}</h1>
            <p>${escapeHtml(description)}</p>
            <p><a href="/blog">← Back to Blog</a></p>
            <nav>
              <a href="/">Home</a> | <a href="/how-it-works">How It Works</a> | 
              <a href="/distribution-partners">Distribution Partners</a> | <a href="/charge-point-operators">CPOs</a> |
              <a href="/blog">Blog</a>
            </nav>
          </article>
        `;
      } else {
        // Blog post not found in SEO table — generic
        title = "Blog Post — NetworkCore";
        description = "Read this article on the NetworkCore blog.";
        bodyContent = `<h1>Blog Post</h1><p><a href="/blog">← Back to Blog</a></p>`;
      }
    } else {
      // Core page — use static content
      const cleanPath = path.replace(/^\/|\/$/g, "");
      const pageData = PAGE_CONTENT[cleanPath];
      
      if (pageData) {
        title = pageData.title;
        description = pageData.description;
        bodyContent = pageData.body;
      } else {
        // Unknown page — serve homepage content
        const homePage = PAGE_CONTENT[""];
        title = homePage.title;
        description = homePage.description;
        bodyContent = homePage.body;
      }
    }

    // If it's the blog index, fetch all blog post titles from SEO table
    if (path === "blog" || path === "blog/") {
      const { data: allPosts } = await supabase
        .from("blog_seo")
        .select("slug, title")
        .eq("page_type", "blog")
        .order("created_at", { ascending: false });

      if (allPosts && allPosts.length > 0) {
        bodyContent += `<h2>All Articles</h2><ul>`;
        for (const post of allPosts) {
          bodyContent += `<li><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></li>`;
        }
        bodyContent += `</ul>`;
      }
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="author" content="NetworkCore AG" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(ogImage)}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
  <link rel="icon" href="${SITE_URL}/favicon.png" type="image/png" />
</head>
<body>
  <div style="max-width:960px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;color:#1a1a1a">
    ${bodyContent}
    <footer>
      <hr />
      <p>© 2026 NetworkCore AG. All rights reserved. Zug, Switzerland.</p>
      <a href="/privacy">Privacy Policy</a> | <a href="https://www.linkedin.com/company/networkcore">LinkedIn</a> | <a href="https://x.com/networkcore_ag">X (Twitter)</a>
    </footer>
  </div>
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
    console.error("Error in render function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

Deno.serve(handler);
