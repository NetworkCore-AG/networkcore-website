import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, CalendarCheck, MapPin, Eye, CreditCard, Settings, Rocket, Sparkles, Building2, Car, LifeBuoy, Wrench, Users, Activity, Search, Zap, Receipt, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Charging, Built Into the Cover", description: "Charging lives inside your app, your policy, or your membership. Drivers find, start, and pay for it without leaving your ecosystem, and without a separate charging account. The protection you sell now covers the thing EV drivers worry about most, and the driver stays yours." },
  { icon: <CalendarCheck className="w-5 h-5" />, title: "A Reason to Engage Every Week", description: "Charging is the most frequent thing an EV driver does. Putting it inside your app turns a relationship they thought about once a year into one they use all the time. More touchpoints, less churn at renewal, and a real hook to win EV drivers from competitors who only show up once a year." },
  { icon: <MapPin className="w-5 h-5" />, title: "Never Stuck Hunting for a Charge", description: "One connection gives your drivers every network, with live availability and the ability to reserve, so a low or worried driver always finds a working charger nearby. Your promise to keep them moving holds, even when the problem is a charge and not a tow." },
  { icon: <Eye className="w-5 h-5" />, title: "Brand-Safe Public Pricing", description: "Drivers pay the charger's public price. No markup, no hidden fee. The price in your app is the price at the plug, and the trust your brand is built on stays intact." },
  { icon: <CreditCard className="w-5 h-5" />, title: "Settlement on Regulated Rails", description: "We clear and settle every session with every network, including taxes, currencies, reconciliation, and invoices, on rails built within licensed, safeguarded structures. Charging settles cleanly behind your brand, on infrastructure a regulated business can stand behind." },
  { icon: <Settings className="w-5 h-5" />, title: "Charging-as-a-Service", description: "We run support, monitoring, and any problems with the networks. You add charging. We run it. No charging team." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "A New Revenue Stream", description: "You earn on every session your drivers run, on top of the retention and acquisition it drives. A recurring revenue line, and a service that pays for itself while it keeps drivers close." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Drivers always pay the charger's public price. No markup ever touches your brand." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is fully yours. NetworkCore never appears to the driver." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No hardware, no network, no settlement stack to build, no long lock-in." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start in one market, prove it, then scale." },
];

const driverMoments = [
  { icon: <Search className="w-5 h-5" />, title: "Find", description: "They see working chargers near them, with live price and availability, and can reserve one." },
  { icon: <Zap className="w-5 h-5" />, title: "Charge", description: "They start the session and pay inside your app. No separate charging account." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session and a clean receipt sit alongside the rest of their cover or membership." },
];

const whoFor = [
  { icon: <Car className="w-5 h-5" />, title: "Motor and EV insurers", description: "turning a yearly policy into a weekly service, and a hook to win EV drivers" },
  { icon: <LifeBuoy className="w-5 h-5" />, title: "Roadside assistance providers", description: "answering the new breakdown, the driver who needs a charge" },
  { icon: <Wrench className="w-5 h-5" />, title: "Warranty and breakdown cover providers", description: "extending cover to the EV driver's real worry" },
  { icon: <Users className="w-5 h-5" />, title: "Driver membership and motoring clubs", description: "adding the highest-frequency benefit a member can use" },
  { icon: <Activity className="w-5 h-5" />, title: "Telematics and usage-based insurers", description: "giving EV drivers a service they touch all the time" },
];

const insFaqs = [
  { question: "Most of our members do not drive EVs yet. Is this worth adding?", answer: "It serves the EV-driving share of your base, which grows every year, and for those members charging is the most frequent thing they do behind the wheel. It costs little to add, it lifts retention, and it gives you a real reason to win EV drivers from competitors." },
  { question: "Do you provide mobile or emergency charging, like a van that comes to the driver?", answer: "No. We help drivers find, reach, and pay for working public chargers through your app. Physical rescue, towing, and any mobile charging stay your operation. We make the everyday and the low-battery moments easy, and your core service handles the rest." },
  { question: "Can we use charging to attract or keep EV drivers?", answer: "Yes. You can offer charging access, credits, or rewards as a policy or membership benefit. You decide and fund the perk. We provide the charging behind it." },
  { question: "Does this give us charging or driving data for pricing or underwriting?", answer: "Charging happens inside your ecosystem, but NetworkCore is not an analytics or risk-scoring product, and this offer does not promise underwriting data. If usage insight is a goal, treat it as a separate conversation, not part of this layer." },
  { question: "Will a markup hurt our brand?", answer: "No. Drivers pay the charger's public price. No markup, no spread. NetworkCore is invisible to them." },
  { question: "Who settles with the charging networks, and is it regulated?", answer: "We do. Every session is cleared and settled, including taxes, currencies, reconciliation, and invoices, on rails operated within licensed, safeguarded structures." },
  { question: "How do we earn?", answer: "Charging access becomes a new revenue stream. Commissions with the CPO are programmable and negotiable per relationship, and allocated automatically on every session, on top of the retention and acquisition value the service drives." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control, and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForInsuranceAndDriverServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Insurance & Driver Services | NetworkCore</title>
        <meta name="description" content="Add EV charging to the cover or membership you already sell. Drivers always find a charge, you stay useful between renewals, settlement handled, your brand." />
        <meta name="keywords" content="EV charging for insurers, EV roadside assistance charging, charging benefit for drivers, EV breakdown cover charging, embedded EV charging insurance, driver membership EV charging" />
        <meta property="og:title" content="EV Charging for Insurance & Driver Services | NetworkCore" />
        <meta property="og:description" content="Add EV charging to the cover or membership you already sell. Drivers always find a charge, you stay useful between renewals, settlement handled, your brand." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-insurance-and-driver-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-insurance-and-driver-services" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Insurance & Driver Services","item":"https://networkcore.org/distribution-partners/ev-charging-for-insurance-and-driver-services"}]})}</script>
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
            Keep Your Drivers Moving
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            Add EV charging to the cover or membership you already offer, so your drivers can always find a working charger near them, pay for it inside your app, and reach you for the thing they now worry about most.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Insurance & Driver Services Partner Signup"
            submitLabel="Become a Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              {
                name: "platformType",
                label: "Platform type",
                type: "select",
                required: true,
                placeholder: "Select type",
                options: [
                  "Motor / EV insurer",
                  "Roadside assistance",
                  "Warranty / breakdown cover",
                  "Driver membership / motoring club",
                  "Telematics / usage-based insurer",
                  "Other",
                ],
              },
              {
                name: "monthlyActiveUsers",
                label: "Members or policyholders",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: [
                  "Under 100,000",
                  "100,000 to 1M",
                  "1M to 5M",
                  "5M to 20M",
                  "20M+",
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              The Embedded Charging Layer for Insurance & Driver Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-5xl mx-auto">
              With NetworkCore you get a complete layer that lets you add EV charging to the protection you already sell, stay useful to drivers between renewals, and earn on every session, without building a charging network, integrating operators, or running charging settlement.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-5 text-base md:text-lg text-foreground leading-relaxed font-light">
            <p>A growing share of your members are going electric. This makes you useful to them!</p>
          </div>
        </div>
      </section>

      {/* What You Own — layers */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The whole offer, in order. It starts with the promise you already make and ends with what you earn.
            </p>
          </div>

          <div className="space-y-14">
            {layers.map((l, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                    {l.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">
                      {l.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{l.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partners Move Early */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Partners Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early partners do not just add charging. They claim the position before someone else does.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "One anchor partner per market, with preferential economics reserved for early movers",
              "Priority integration and a say in the roadmap",
              "The first protection brand to own charging in a market becomes the one EV drivers turn to",
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
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Designed for Low-Risk Adoption
            </h2>
            <p className="text-lg text-foreground font-light">
              Add charging with full brand control, minimal exposure, and a clear path to scale.
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
              Three steps, all inside the app or membership they already have.
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
              You already promise to keep drivers safe and moving. Charging is the part of that promise EV drivers now use the most.
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

      

      <PageFaqSection items={insFaqs} background="background" />
      <Footer />
    </div>
  );
};

export default EvChargingForInsuranceAndDriverServices;
