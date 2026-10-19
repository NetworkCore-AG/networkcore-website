/* eslint-disable no-console */
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { getAllRoutes } from "./routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");

interface Issue {
  route: string;
  level: "error" | "warn";
  message: string;
}

function routeToFilePath(route: string): string {
  const trimmed = route.replace(/^\/+|\/+$/g, "");
  if (!trimmed) return path.join(DIST, "index.html");
  return path.join(DIST, trimmed, "index.html");
}

function pick(html: string, re: RegExp): string | null {
  const m = re.exec(html);
  return m ? m[1].trim() : null;
}

async function checkRoute(route: string): Promise<Issue[]> {
  const file = routeToFilePath(route);
  const issues: Issue[] = [];

  let html: string;
  try {
    html = await fs.readFile(file, "utf-8");
  } catch {
    issues.push({ route, level: "error", message: `missing file: ${path.relative(DIST, file)}` });
    return issues;
  }

  const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
  if (!title || title.length < 10) {
    issues.push({ route, level: "error", message: `title missing or too short ("${title ?? ""}")` });
  }

  const desc = pick(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  if (!desc || desc.length < 50) {
    issues.push({ route, level: "error", message: `description missing or too short (${desc?.length ?? 0} chars)` });
  }

  const ogImage = pick(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (!ogImage) issues.push({ route, level: "warn", message: "og:image missing" });

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count === 0) issues.push({ route, level: "error", message: "no <h1>" });
  else if (h1Count > 1) issues.push({ route, level: "warn", message: `${h1Count} <h1> tags (should be 1)` });

  // Image alt: every <img> tag needs an alt attribute (empty alt is OK for decorative)
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = imgs.filter((tag) => !/\balt\s*=/.test(tag));
  if (missingAlt.length) {
    issues.push({
      route,
      level: "warn",
      message: `${missingAlt.length} <img> without alt attribute`,
    });
  }

  const twitterCard = pick(html, /<meta[^>]+name=["']twitter:card["'][^>]+content=["']([^"']+)["']/i);
  if (!twitterCard) issues.push({ route, level: "warn", message: "twitter:card missing" });

  const canonical = pick(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (!canonical) issues.push({ route, level: "warn", message: "canonical link missing" });

  return issues;
}

async function main() {
  const routes = getAllRoutes();
  console.log(`[verify-seo] checking ${routes.length} routes`);

  const allIssues: Issue[] = [];
  const titlesByRoute = new Map<string, string>();
  for (const route of routes) {
    const issues = await checkRoute(route);
    for (const issue of issues) allIssues.push(issue);

    // collect title for duplicate detection
    try {
      const html = await fs.readFile(routeToFilePath(route), "utf-8");
      const t = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
      if (t) titlesByRoute.set(route, t);
    } catch {
      /* already reported */
    }
  }

  // duplicate titles across routes
  const titleCounts = new Map<string, string[]>();
  for (const [route, title] of titlesByRoute) {
    const arr = titleCounts.get(title) || [];
    arr.push(route);
    titleCounts.set(title, arr);
  }
  for (const [title, dups] of titleCounts) {
    if (dups.length > 1) {
      for (const r of dups) {
        allIssues.push({ route: r, level: "warn", message: `duplicate title "${title}" — also on ${dups.filter((x) => x !== r).join(", ")}` });
      }
    }
  }

  const errors = allIssues.filter((i) => i.level === "error");
  const warns = allIssues.filter((i) => i.level === "warn");

  for (const i of errors) console.error(`  ✗ ${i.route} — ${i.message}`);
  for (const i of warns) console.warn(`  ! ${i.route} — ${i.message}`);

  console.log(
    `[verify-seo] ${routes.length - new Set(errors.map((e) => e.route)).size}/${routes.length} clean — ${errors.length} errors, ${warns.length} warnings`,
  );

  // Do not fail the deploy on SEO issues — surface them in build logs only.
}

main().catch((e) => {
  console.error("[verify-seo] fatal:", e);
  process.exit(1);
});
