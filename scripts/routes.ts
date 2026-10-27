import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Single source of truth for every URL that should be:
 *   - listed in sitemap.xml
 *   - pre-rendered to a static HTML file in dist/
 *
 * Drop the /:lang/* variants — site is English-only for now.
 */

export const CORE_ROUTES: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/how-it-works", changefreq: "monthly", priority: "0.9" },
  { path: "/charging-partners", changefreq: "monthly", priority: "0.9" },
  { path: "/distribution-partners", changefreq: "monthly", priority: "0.9" },
  { path: "/distribution-partners/ev-charging-for-oems", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-parking-and-road-platforms", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-car-rental", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/public-ev-charging-for-fleets", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-financial-platforms", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-insurance-and-driver-services", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-public-sector-mobility", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-employee-benefits", changefreq: "monthly", priority: "0.8" },
  { path: "/distribution-partners/ev-charging-for-travel-and-hospitality", changefreq: "monthly", priority: "0.8" },
  { path: "/charge-point-operators", changefreq: "monthly", priority: "0.9" },
  { path: "/private-hosts", changefreq: "monthly", priority: "0.8" },
  { path: "/fleet-hosts", changefreq: "monthly", priority: "0.8" },
  { path: "/benefits", changefreq: "monthly", priority: "0.8" },
  { path: "/the-network", changefreq: "monthly", priority: "0.8" },
  { path: "/about-us", changefreq: "monthly", priority: "0.7" },
  { path: "/work-with-us", changefreq: "monthly", priority: "0.6" },
  { path: "/api", changefreq: "monthly", priority: "0.7" },
  { path: "/security-compliance", changefreq: "monthly", priority: "0.6" },
  { path: "/esg-policy", changefreq: "monthly", priority: "0.6" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/ev-roaming-hub-integration", changefreq: "monthly", priority: "0.8" },
  { path: "/introductions", changefreq: "monthly", priority: "0.7" },
  { path: "/products/network-access", changefreq: "monthly", priority: "0.8" },
  { path: "/products/just-charge", changefreq: "monthly", priority: "0.8" },
  { path: "/products/charge-pack", changefreq: "monthly", priority: "0.8" },
  { path: "/products/charging-links", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/faqs", changefreq: "monthly", priority: "0.7" },
  { path: "/charge-point-operators/latam-first-wave", changefreq: "monthly", priority: "0.7" },
  { path: "/es/charge-point-operators/latam-first-wave", changefreq: "monthly", priority: "0.7" },
  { path: "/pt/charge-point-operators/latam-first-wave", changefreq: "monthly", priority: "0.7" },
];

/**
 * Parse top-level blog post slugs from src/data/blogPosts.ts.
 * Only matches lines indented with exactly 4 spaces (the post objects
 * themselves), not nested arrays like `relatedSlugs`.
 */
export function getBlogSlugs(): string[] {
  const file = path.resolve(__dirname, "../src/data/blogPosts.ts");
  const content = fs.readFileSync(file, "utf-8");
  const slugs: string[] = [];
  // Match each post object block so we can skip entries that live outside /blog
  // (those declare a canonicalPath and get their own core route instead).
  const blockRe = /^ {2}\{[\s\S]*?^ {2}\},?/gm;
  let block: RegExpExecArray | null;
  while ((block = blockRe.exec(content)) !== null) {
    const text = block[0];
    if (text.includes("canonicalPath")) continue;
    const m = /^ {4}slug:\s*["']([^"']+)["']/m.exec(text);
    if (m) slugs.push(m[1]);
  }
  return slugs;
}

export function getAllRoutes(): string[] {
  return [...CORE_ROUTES.map((r) => r.path), ...getBlogSlugs().map((s) => `/blog/${s}`)];
}
