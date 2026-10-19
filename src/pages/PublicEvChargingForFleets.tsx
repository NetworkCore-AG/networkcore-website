import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Globe, Receipt, Tag, MapPin, Layers, Eye, Sparkles, ShieldOff, Rocket, Truck, CreditCard, Package, Car, Building2, Briefcase, Key } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <Globe className="w-5 h-5" />, title: "Public Charging, Everywhere", description: "One connection gives your fleets access to public chargers across every network and market, with no separate deal or integration for each operator. Drivers charge on the road wherever they are, all on one account." },
  { icon: <Receipt className="w-5 h-5" />, title: "One Bill, Settled", description: "Every public session is cleared and settled behind the scenes, with taxes, currencies, reconciliation, and invoices handled, and rolled into one statement. Charging spend lands as one clean, reconciled line. No chasing operators." },
  { icon: <Tag className="w-5 h-5" />, title: "Public Price, No Markup", description: "Your fleets pay the charger's public price. No markup, no hidden fee. A predictable charging cost you can pass through cleanly." },
  { icon: <MapPin className="w-5 h-5" />, title: "Find a Working Charger", description: "Drivers see which public chargers are free and working, so they are not detouring to a dead one. Less downtime, fewer failed stops." },
  { icon: <Layers className="w-5 h-5" />, title: "Runs Behind Your Platform", description: "The access and settlement run under your brand, inside your fleet platform. We handle the operator side, the support, and run the rails." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Fleets always pay the charger's public price. No markup ever touches your brand." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is fully yours. NetworkCore never appears to the driver." },
  { icon: <ShieldOff className="w-5 h-5" />, title: "No-Cannibalization Guarantee", description: "We earn only on charging sessions we enable. The rest of your platform stays entirely yours." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No hardware, no network, no settlement stack to build." },
];

const driverMoments = [
  { icon: <MapPin className="w-5 h-5" />, title: "Find", description: "The driver sees a working public charger nearby in your app." },
  { icon: <Car className="w-5 h-5" />, title: "Charge", description: "They start the session on the fleet account already set up. No personal card, no separate app." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session settles automatically and rolls into the fleet's bill." },
];

const whoFor = [
  { icon: <Layers className="w-5 h-5" />, title: "Fleet management platforms", description: "adding public charging to their software" },
  { icon: <CreditCard className="w-5 h-5" />, title: "Fuel and fleet card providers", description: "extending the card to EV charging" },
  { icon: <Package className="w-5 h-5" />, title: "Logistics and delivery fleets", description: "keeping vehicles charged on route" },
  { icon: <Car className="w-5 h-5" />, title: "Taxi, ride-hail, and car-share operators", description: "charging across the city" },
  { icon: <Briefcase className="w-5 h-5" />, title: "Corporate and mobility fleet managers", description: "giving drivers public access" },
  { icon: <Key className="w-5 h-5" />, title: "Rental and leasing fleets", description: "offering charging with the vehicle" },
];

const fleetFaqs = [
  { question: "What exactly do you provide?", answer: "Two things. Access to public charging across every network we are connected to, and the settlement for every session. That is the layer. Your platform does the rest." },
  { question: "Does this cover depot or home charging?", answer: "No. This covers public charging on the road. Depot and home charging are yours." },
  { question: "Do you handle fleet management, reporting, or driver authorization?", answer: "That stays in your platform. We provide the public charging access and the settlement underneath it, and your product keeps owning the fleet experience, the reporting, and the controls." },
  { question: "Who settles with the charging networks?", answer: "We do. Every public session is cleared and settled, with taxes, currencies, reconciliation, and invoices, and rolled into one bill for you." },
  { question: "Will a markup hurt our cost story?", answer: "No. Fleets pay the charger's public price. No markup, no spread." },
  { question: "How many networks and markets does this cover?", answer: "One connection exposes the whole network, and coverage grows as we add markets, with no new contracts on your side." },
  { question: "Can we earn on charging?", answer: "If you want to. The model supports a transparent share on sessions, though most fleet platforms prioritise a clean, low cost for their customers over margin. Your choice." },
  { question: "What does integration involve?", answer: "One connection for access, availability, session control, and settlement reporting, with a ready-made front end available if you would rather not build the charging screens." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const PublicEvChargingForFleets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Public EV Charging for Fleets | NetworkCore</title>
        <meta name="description" content="Add public EV charging to your fleet platform with one connection. Every network, one settled bill, your brand. Access and settlement handled, you build nothing." />
        <meta property="og:title" content="Public EV Charging for Fleets | NetworkCore" />
        <meta property="og:description" content="Add public EV charging to your fleet platform with one connection. Every network, one settled bill, your brand. Access and settlement handled, you build nothing." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/public-ev-charging-for-fleets" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/public-ev-charging-for-fleets" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"Public EV Charging for Fleets","item":"https://networkcore.org/distribution-partners/public-ev-charging-for-fleets"}]})}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight text-white tracking-tight">
            Public Charging for the Whole Fleet
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light mb-4">
            One connection gives your fleets access to public chargers across every network and market, with every session handled end-to-end.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light mb-6">
            No monthly costs, and a guaranteed discount on public prices.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Fleet Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Fleet Partner Signup"
            submitLabel="Become a Fleet Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
              {
                name: "fleetPlatformType",
                label: "Fleet platform type",
                type: "select",
                required: true,
                placeholder: "Select platform type",
                options: [
                  "Fleet management platform",
                  "Fuel / fleet card provider",
                  "Logistics or delivery fleet",
                  "Taxi, ride-hail, or car-share",
                  "Corporate or mobility fleet",
                  "Rental or leasing",
                  "Other",
                ],
              },
              { name: "markets", label: "Markets you operate in", type: "text", required: true, placeholder: "e.g. Germany, UK, Mexico" },
              {
                name: "vehiclesUnderManagement",
                label: "Vehicles under management",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: [
                  "Under 1,000",
                  "1,000 to 10,000",
                  "10,000 to 50,000",
                  "50,000 to 250,000",
                  "250,000+",
                ],
              },
            ]}
            optionalFields={[
              { name: "tellUsMore", label: "Tell us more", type: "textarea", placeholder: "Anything else we should know?" },
            ]}
          />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
            The Public Charging Layer for Fleets
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            Give your fleet public charging across every network, settled and compliant, without integrating operators. You keep everything you already do for fleets. We add the public charging.
          </p>
        </div>
      </section>

      {/* What You Own */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Two core pieces: access and settlement, and the support around them
            </p>
          </div>

          <div className="space-y-14">
            {layers.map((l, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {l.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">{l.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{l.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why This Matters Now
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-foreground leading-relaxed font-light">
            <p>Fleets are going electric fast, and public charging is where it gets hard. Drivers leave the depot, and suddenly charging is scattered across dozens of networks with no clean way to access or pay for it.</p>
            <p>The fleet that can charge anywhere public, on one bill, stays your fleet.</p>
          </div>
          <div className="text-center mt-10">
            <Button
              variant="ghost"
              size="compact"
              onClick={scrollToForm}
              className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
            >
              Become a Fleet Partner
            </Button>
          </div>
        </div>
      </section>


      {/* Guarantees */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Designed for Low-Risk Adoption
            </h2>
            <p className="text-lg text-foreground font-light">
              Add public charging with no exposure and a clear path to scale.
            </p>
          </div>
          <div className="space-y-14">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {g.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">{g.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Experience */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Drivers Experience
            </h2>
            <p className="text-lg text-foreground font-light">
              Three steps, on the road
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {driverMoments.map((m, i) => (
              <div key={i} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 mb-4">
                  {m.icon}
                </div>
                <div className="text-xs text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-light text-foreground mb-3 tracking-tight">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Who This Is For
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light max-w-3xl mx-auto">
              If you already have or serve fleets, public charging is the piece you can add without building it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoFor.map((w, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-card/50 hover:border-foreground/20 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60">
                  {w.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-foreground mb-1 tracking-tight">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <PageFaqSection items={fleetFaqs} background="background" />
      <Footer />
    </div>
  );
};

export default PublicEvChargingForFleets;
