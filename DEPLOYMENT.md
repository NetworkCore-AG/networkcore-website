# Deployment — Vercel

This site is hosted on **Vercel**. The codebase stays in Lovable; Vercel watches the GitHub repo and rebuilds on every push. Lovable edits auto-commit to GitHub, so nothing about your editing workflow changes.

## How it works

```
Edit in Lovable  ─►  Auto-commit to GitHub  ─►  Vercel build  ─►  networkcore.org
```

Build steps Vercel runs (defined in `vercel.json`):

1. `npm install` + install Chrome for Puppeteer
2. `npm run build:prerender` — `vite build` → `tsx scripts/prerender.ts` → `tsx scripts/verify-seo.ts`
3. Output (`dist/`) is deployed; every route in `scripts/routes.ts` ships as a real `index.html` with full SEO tags.

Unknown routes fall back to the SPA via the rewrite in `vercel.json`.

---

## One-time setup (~15 min)

### 1. Create the Vercel project
1. Go to https://vercel.com → sign in with GitHub.
2. **Add New… → Project** → import `networkcore-website`.
3. Vercel reads `vercel.json` automatically. Leave Framework Preset as **Other**. Do not override Build Command or Output Directory.
4. **Environment Variables** — add anything from your local `.env` that Vite needs at build time (anything prefixed `VITE_`). At minimum:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY` (or whatever name `src/integrations/supabase/client.ts` uses)
   Set them for **Production, Preview, Development**.
5. Click **Deploy**. First build takes ~5–10 min (Puppeteer + prerender of every route). You'll get a `*.vercel.app` URL — verify it loads and that view-source on `/blog/ev-charging-interoperability` shows real metadata.

### 2. Connect the custom domain
In Vercel:
1. Project → **Settings → Domains** → add `networkcore.org` and `www.networkcore.org`. Pick one as primary (recommend the apex `networkcore.org`); Vercel will auto-redirect the other.
2. Vercel will show DNS records to add. They will be:
   - **Apex** `networkcore.org` → A record → `76.76.21.21`
   - **www** `www.networkcore.org` → CNAME → `cname.vercel-dns.com`

### 3. Update DNS at your registrar
1. Log in to whichever registrar holds `networkcore.org`.
2. **Remove** the existing Lovable A records (currently `185.158.133.1`) for both `@` and `www`.
3. **Add** the two records Vercel showed you above.
4. Leave MX, TXT, DKIM, SPF, DMARC records untouched (email is not affected).

DNS propagation: usually minutes, up to a few hours. Vercel's Domains page shows "Valid Configuration" once it's ready and auto-issues SSL.

### 4. Disconnect the domain in Lovable
**Only after** Vercel shows the domain as Valid and `https://networkcore.org` loads from Vercel:
1. Lovable → **Project Settings → Domains**.
2. Remove `networkcore.org` (and `www`) so Lovable stops trying to serve them.
3. The `*.lovable.app` preview URL keeps working — Lovable preview is unaffected.

Done. Future edits in Lovable → push to GitHub → Vercel rebuilds → live in ~3 min with full SEO.

---

## Day-to-day

- **Publish a blog post or edit a page**: just edit in Lovable. The auto-commit triggers a Vercel deploy. No manual prerender needed.
- **Check a deploy**: Vercel dashboard → Deployments. Each one has a unique preview URL.
- **Branch previews**: any branch you push to GitHub gets its own Vercel preview URL automatically.

## Rollback

Two ways:

1. **Vercel** (recommended, instant): Deployments → find the last good one → ⋯ → **Promote to Production**.
2. **Back to Lovable hosting**: re-add `networkcore.org` in Lovable → switch DNS A record back to `185.158.133.1`. Takes ~1 hour for DNS.

## Troubleshooting

- **Build fails on Puppeteer / Chrome**: Vercel's `installCommand` already installs Chrome. If it still fails, increase build memory in Vercel project settings, or set env var `PUPPETEER_SKIP_DOWNLOAD=false`.
- **Build times out** (Vercel free tier = 45 min build limit): far above what we need. If you hit it, reduce `CONCURRENCY` in `scripts/prerender.ts` is *not* the answer — increase it (currently 2).
- **Page shows SPA shell instead of prerendered HTML**: confirm the route is in `scripts/routes.ts`. If not, add it and push.
- **`verify-seo` script fails the build**: that's intentional. Check the error, fix the missing meta/H1 in the relevant page component, push again.

## Files involved

- `vercel.json` — build command, output dir, SPA fallback, cache headers
- `scripts/routes.ts` — single source of truth for which routes get prerendered
- `scripts/prerender.ts` — runs Puppeteer, writes `dist/<route>/index.html`
- `scripts/verify-seo.ts` — fails the build if any route is missing title/description/H1

## Adding a New Page (SEO checklist)

1. Create the page component under `src/pages/`.
2. Add the route to `src/AppRoutes.tsx`.
3. Register it in `scripts/routes.ts` (adds it to sitemap + prerender).
4. Add to `ROUTE_TO_FILE` in `vite-plugin-sitemap.ts` so it picks up `<lastmod>` from git.
5. In the page's `<Helmet>`, set unique `title`, `description`, `og:image`, `twitter:card`, `canonical`, and a `BreadcrumbList` JSON-LD.
6. Place a per-page OG image (1200×630, < 200KB) under `public/og/og-<page>.jpg`.

`bun run build` will regenerate the sitemap, prerender static HTML, and run `verify-seo.ts` which warns on missing tags.

After a deploy with new pages, re-submit `https://networkcore.org/sitemap.xml` in Google Search Console once.
