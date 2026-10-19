import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Globe2, Network, Scale, Users2, Building2, ShieldCheck, PiggyBank, Eye, Sparkles, Rocket, Search, Zap, Receipt, Landmark, Bus, Cpu, GraduationCap, MapPin, ParkingCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <Globe2 className="w-5 h-5" />, title: "One Official Way to Charge", description: "Residents charge across the city through one official, trusted interface, inside the mobility platform they already use. Not a patchwork of operator apps, but a single public front door to charging, under your brand." },
  { icon: <Network className="w-5 h-5" />, title: "Every Operator, No Lock-In", description: "One connection reaches every charging network you connect to, at the same public price, with no preference for any operator and no vendor lock-in. Open, interoperable access that stays neutral and procurement-friendly." },
  { icon: <Scale className="w-5 h-5" />, title: "Fair Public Pricing, Always", description: "Residents pay the operator's exact public price. No markup, no spread, no profiteering. Charging your city can stand behind, with full transparency." },
  { icon: <Users2 className="w-5 h-5" />, title: "Charging Access for Everyone", description: "Residents who cannot charge at home, and those across every neighborhood, get one reliable way to find, reach, and pay at public chargers. Charging access becomes a public good, not a privilege of private driveways." },
  { icon: <Building2 className="w-5 h-5" />, title: "Built Without Capex or Operations", description: "No infrastructure to fund, no charging or payments to operate, no team to hire. You deliver charging access without a capital project, and we run everything behind it." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Settled on Compliant, Safeguarded Rails", description: "Every session is cleared and settled, with taxes, currencies, reconciliation, and invoices handled, on rails built within licensed, safeguarded structures. Charging settles to the standards a public body has to meet." },
  { icon: <PiggyBank className="w-5 h-5" />, title: "A Self-Sustaining Model", description: "An optional, programmable commission per session can fund the program itself, so charging access does not burden the public budget. A model that can pay its own way, with no cost to taxpayers." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Residents always pay the operator's exact public price. No markup ever touches your city's name." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The interface is fully yours. NetworkCore never appears to the resident." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No capex, no hardware, no network to build, no long lock-in, no operator to favor." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start with one district or one city, prove the model, then scale across the region." },
];

const residentMoments = [
  { icon: <Search className="w-5 h-5" />, title: "Find", description: "They see chargers near them across every operator, with live price and availability, and can reserve one." },
  { icon: <Zap className="w-5 h-5" />, title: "Charge", description: "They start the session and pay inside your platform. One experience, every network." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session and a clean, compliant receipt sit inside the official app they already trust." },
];

const whoFor = [
  { icon: <Landmark className="w-5 h-5" />, title: "City and regional mobility apps", description: "one official interface to charging for every resident" },
  { icon: <Bus className="w-5 h-5" />, title: "Public transport authorities", description: "adding the EV leg to multimodal travel" },
  { icon: <Cpu className="w-5 h-5" />, title: "Smart city platforms", description: "charging as part of the connected-city stack" },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Campus mobility ecosystems", description: "universities, business parks, and large sites" },
  { icon: <MapPin className="w-5 h-5" />, title: "Regional and national transport agencies", description: "neutral, fair access across jurisdictions" },
  { icon: <ParkingCircle className="w-5 h-5" />, title: "Municipal parking and curbside authorities", description: "charging where residents already park" },
];

const psFaqs = [
  { question: "Do we have to operate charging or payments ourselves?", answer: "No. You provide the official interface residents trust. NetworkCore connects it to every charging network, handles payment, settlement, invoicing, and support, and runs everything behind your brand. No capital project, no operations team." },
  { question: "Does this favor one charging network over others?", answer: "No. The layer is neutral by design. One connection reaches every operator you connect to, at the same public price, with no preference and no vendor lock-in. That neutrality is the point, and it is what keeps the model procurement-friendly." },
  { question: "Can residents who cannot charge at home use this?", answer: "Yes. The whole purpose is one reliable way for any resident to find, reach, and pay at public chargers, regardless of whether they have a driveway. The layer connects residents to existing public charging across operators. It does not deploy chargers, so coverage depends on the public and private stations already in the ground." },
  { question: "What does it cost the city, and does the city profit?", answer: "There is no capital cost and no infrastructure to fund. An optional, programmable commission per session can make the program self-sustaining, so it does not burden the public budget. This is built for access and sustainability, not profit, and you decide how it is structured." },
  { question: "Who handles the money, and is it compliant?", answer: "NetworkCore clears and settles every session with every network, including taxes, currencies, reconciliation, and invoices, on rails operated within licensed, safeguarded structures. Confirm the exact regulatory position for your jurisdiction during onboarding." },
  { question: "What about coverage across our whole region?", answer: "One connection exposes every operator we are connected to, and coverage grows as we add operators and markets, with no new contracts on your side." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control, and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForPublicSectorMobility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Public Sector & City Mobility Platforms | NetworkCore</title>
        <meta name="description" content="Give residents one neutral, official way to charge across every network in your city or region. Fair public prices, compliant rails, your brand. No infrastructure to build." />
        <meta name="keywords" content="EV charging for cities, public sector EV charging, smart city EV charging, municipal EV charging access, neutral EV charging roaming, campus EV charging platform" />
        <meta property="og:title" content="EV Charging for Public Sector & City Mobility Platforms | NetworkCore" />
        <meta property="og:description" content="Give residents one neutral, official way to charge across every network in your city or region. Fair public prices, compliant rails, your brand. No infrastructure to build." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-public-sector-mobility" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-public-sector-mobility" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Public Sector & City Mobility Platforms","item":"https://networkcore.org/distribution-partners/ev-charging-for-public-sector-mobility"}]})}</script>
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
            One Official Way to Charge Across Your City
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            Give residents one neutral way to find, use, and pay for charging across every network in your city or region, inside the mobility platform they already use.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Public Sector Mobility Partner Signup"
            submitLabel="Become a Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Work email", type: "email", required: true, placeholder: "you@organization.gov" },
              { name: "organization", label: "Organization", type: "text", required: true, placeholder: "City, authority, or platform name" },
              { name: "role", label: "Role", type: "text", required: true, placeholder: "Your role" },
              { name: "region", label: "Region or city served", type: "text", required: true, placeholder: "City, region, or jurisdiction" },
              {
                name: "residentsServed",
                label: "Residents or users served",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: [
                  "Under 50,000",
                  "50,000 to 250,000",
                  "250,000 to 1M",
                  "1M to 5M",
                  "5M+",
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

      {/* The wedge */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              The Neutral Charging Access Layer for Public Sector Mobility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-5xl mx-auto">
              A complete layer that lets cities, transport authorities, and campus platforms give residents EV charging across every network through one official, neutral interface, at fair public prices, without building infrastructure, operating payments, or locking the public to a single operator.
            </p>
          </div>
        </div>
      </section>

      {/* What You Own */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              One neutral, public interface to charging, with everything behind it handled.
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why This Matters Now
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              The shift is not EV adoption; it is whether the city gives every resident a fair, neutral way to charge.
            </p>
          </div>
          <div className="text-center mt-10">
            <Button
              variant="ghost"
              size="compact"
              onClick={scrollToForm}
              className="border border-foreground/40 text-foreground hover:bg-transparent hover:text-foreground hover:border-foreground font-medium px-6"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cities Move Early */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Cities Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early public partners shape the rollout and become the reference others follow.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "A limited number of public partners per region, to protect quality of rollout",
              "Priority integration and a say in the roadmap and standards",
              "The first city to offer neutral, fair charging access becomes the regional reference",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Designed for Low-Risk Adoption
            </h2>
            <p className="text-lg text-foreground font-light">
              Deliver charging access with full control, minimal exposure, and a clear path to scale.
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

      {/* Resident Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Residents Experience
            </h2>
            <p className="text-lg text-foreground font-light">
              Three steps, all inside the platform they already use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentMoments.map((m, i) => (
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Who This Is For
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light max-w-3xl mx-auto">
              You already run the official interface residents trust. NetworkCore extends it into charging, neutrally.
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

      

      <PageFaqSection items={psFaqs} background="muted" />

      <Footer />
    </div>
  );
};

export default EvChargingForPublicSectorMobility;
