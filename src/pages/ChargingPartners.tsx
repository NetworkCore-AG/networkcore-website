import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Home, Truck, Zap, ArrowRight } from "lucide-react";

const partnerTypes = [
  { icon: <Zap className="w-5 h-5" />, title: "CPOs", description: "Public charging networks", href: "/charge-point-operators" },
  { icon: <Building2 className="w-5 h-5" />, title: "Private Hosts", description: "Guests, customers, tenants", href: "/private-hosts" },
  { icon: <Truck className="w-5 h-5" />, title: "Fleet Hosts", description: "Depot chargers", href: "/fleet-hosts" },
  { icon: <Home className="w-5 h-5" />, title: "Peer-to-Peer", description: "Coming soon", href: null },
];

const ChargingPartners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Charging Partners | Fill Your Chargers | NetworkCore</title>
        <meta name="description" content="Bring paying drivers to chargers you have already built. No capex, no operations, keep your prices, and get paid fast. Become a NetworkCore Charging Partner." />
        <meta property="og:title" content="Charging Partners | Fill Your Chargers | NetworkCore" />
        <meta property="og:description" content="Bring paying drivers to chargers you have already built. No capex, no operations, keep your prices, and get paid fast." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/charging-partners" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Charging Partners | Fill Your Chargers | NetworkCore" />
        <meta name="twitter:description" content="Bring paying drivers to chargers you have already built. No capex, no operations, get paid fast." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/charging-partners" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Charging Partners","item":"https://networkcore.org/charging-partners"}]})}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/cpo-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-white tracking-tight">
              <span className="block">Fill your chargers.</span>
              <span className="block">Keep your prices.</span>
              <span className="block">Get paid fast.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {partnerTypes.map((p) =>
              p.href ? (
                <Link
                  key={p.title}
                  to={p.href}
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm text-left hover:border-white/60 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base font-light text-white tracking-tight">{p.title}</h2>
                    <p className="text-sm text-white/60 font-light">{p.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/50" />
                </Link>
              ) : (
                <div
                  key={p.title}
                  className="flex items-center gap-4 p-5 rounded-xl border border-dashed border-white/20 bg-white/5 backdrop-blur-sm text-left opacity-60 cursor-not-allowed"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base font-light text-white/70 tracking-tight">{p.title}</h2>
                    <p className="text-sm text-white/50 font-light">{p.description}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-10 animate-in fade-in duration-1000">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargingPartners;
