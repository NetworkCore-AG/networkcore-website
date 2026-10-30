import { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { CORE_ROUTES, getBlogSlugs } from "./scripts/routes";

/**
 * Vite plugin that auto-generates sitemap.xml from the shared routes manifest
 * (scripts/routes.ts) every time the dev server starts or the project builds.
 *
 * Adds <lastmod> per URL based on git commit time of the source file, falling
 * back to today's date when git data is unavailable.
 */
export function sitemapPlugin(): Plugin {
  return {
    name: "vite-plugin-sitemap",
    buildStart() {
      generateSitemap();
    },
  };
}

function gitMtime(file: string): string {
  try {
    const ts = execSync(`git log -1 --format=%cI -- "${file}"`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (ts) return ts.split("T")[0];
  } catch {
    /* ignore */
  }
  return new Date().toISOString().split("T")[0];
}

const ROUTE_TO_FILE: Record<string, string> = {
  "/": "src/pages/Index.tsx",
  "/how-it-works": "src/pages/HowItWorks.tsx",
  "/distribution-partners": "src/pages/DistributionPartners.tsx",
  "/distribution-partners/ev-charging-for-oems": "src/pages/EvChargingForOems.tsx",
  "/distribution-partners/ev-charging-for-parking-and-road-platforms": "src/pages/EvChargingForParkingAndRoadPlatforms.tsx",
  "/distribution-partners/public-ev-charging-for-fleets": "src/pages/PublicEvChargingForFleets.tsx",
  "/distribution-partners/ev-charging-for-financial-platforms": "src/pages/EvChargingForFinancialPlatforms.tsx",
  "/distribution-partners/ev-charging-for-insurance-and-driver-services": "src/pages/EvChargingForInsuranceAndDriverServices.tsx",
  "/distribution-partners/ev-charging-for-public-sector-mobility": "src/pages/EvChargingForPublicSectorMobility.tsx",
  "/distribution-partners/ev-charging-for-employee-benefits": "src/pages/EvChargingForEmployeeBenefits.tsx",
  "/distribution-partners/ev-charging-for-travel-and-hospitality": "src/pages/EvChargingForTravelAndHospitality.tsx",
  "/distribution-partners/ev-charging-for-car-rental": "src/pages/EvChargingForCarRental.tsx",
  "/charging-partners": "src/pages/ChargingPartners.tsx",
  "/charge-point-operators": "src/pages/ChargePointOperators.tsx",
  "/private-hosts": "src/pages/PrivateHosts.tsx",
  "/fleet-hosts": "src/pages/FleetHosts.tsx",
  "/benefits": "src/pages/Benefits.tsx",
  "/the-network": "src/pages/Platform.tsx",
  "/about-us": "src/pages/AboutUs.tsx",
  "/faqs": "src/pages/Faqs.tsx",
  "/security-compliance": "src/pages/SecurityCompliance.tsx",
  "/esg-policy": "src/pages/EsgPolicy.tsx",
  "/work-with-us": "src/pages/WorkWithUs.tsx",
  "/charge-point-operators/latam-first-wave": "src/pages/LatamFirstWave.tsx",
  "/es/charge-point-operators/latam-first-wave": "src/pages/LatamFirstWave.tsx",
  "/pt/charge-point-operators/latam-first-wave": "src/pages/LatamFirstWave.tsx",
  "/api": "src/pages/ApiHub.tsx",
  "/pricing": "src/pages/Pricing.tsx",
  "/blog": "src/pages/Blog.tsx",
  "/ev-roaming-hub-integration": "src/pages/EvRoamingHubIntegration.tsx",
  "/introductions": "src/pages/Introductions.tsx",
  "/products/network-access": "src/pages/products/NetworkAccess.tsx",
  "/products/just-charge": "src/pages/products/JustCharge.tsx",
  "/products/charge-pack": "src/pages/products/ChargePack.tsx",
  "/products/charging-links": "src/pages/products/ChargingLinks.tsx",
  "/privacy": "src/pages/PrivacyPolicy.tsx",
};

function generateSitemap() {
  const DOMAIN = "https://networkcore.org";
  const slugs = getBlogSlugs();
  const blogPostsFile = "src/data/blogPosts.ts";
  const blogLastmod = gitMtime(blogPostsFile);

  const urls: string[] = [];

  for (const page of CORE_ROUTES) {
    const file = ROUTE_TO_FILE[page.path];
    const lastmod = file ? gitMtime(file) : new Date().toISOString().split("T")[0];
    urls.push(`  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  for (const slug of slugs) {
    urls.push(`  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <lastmod>${blogLastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  const outputPath = path.resolve(__dirname, "public/sitemap.xml");
  fs.writeFileSync(outputPath, xml, "utf-8");
  console.log(`[sitemap] Generated sitemap.xml with ${CORE_ROUTES.length} pages + ${slugs.length} blog posts`);
}
