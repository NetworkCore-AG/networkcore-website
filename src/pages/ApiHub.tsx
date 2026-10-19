import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApiHeroSection from "@/components/api-hub/ApiHeroSection";
import ApiValuePropSection from "@/components/api-hub/ApiValuePropSection";
import ApiCapabilitiesSection from "@/components/api-hub/ApiCapabilitiesSection";
import ApiPreviewSection from "@/components/api-hub/ApiPreviewSection";
import ApiScaleSection from "@/components/api-hub/ApiScaleSection";
import ApiCtaSection from "@/components/api-hub/ApiCtaSection";

const ApiHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NetworkCore API | One Integration for EV Charging, Payments & Settlement</title>
        <meta name="description" content="One API integration for multi-network EV charging access, automated settlement, revenue sharing, transparent pricing, cross-border VAT compliance, and enriched CDRs." />
        <meta property="og:title" content="NetworkCore API | One Integration for EV Charging, Payments & Settlement" />
        <meta property="og:description" content="One API integration for multi-network EV charging access, automated settlement, revenue sharing, transparent pricing, cross-border VAT compliance, and enriched CDRs." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/api" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NetworkCore API | One Integration for EV Charging" />
        <meta name="twitter:description" content="One API for multi-network EV charging access, settlement, revenue sharing and cross-border VAT compliance." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/api" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"API","item":"https://networkcore.org/api"}]})}</script>
      </Helmet>

      <Navigation />
      <ApiHeroSection />
      <ApiValuePropSection />
      <ApiCapabilitiesSection />
      <ApiPreviewSection />
      <ApiScaleSection />
      <ApiCtaSection />
      <Footer />
    </div>
  );
};

export default ApiHub;
