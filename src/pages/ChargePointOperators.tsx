import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChargingPartnerPricing from "@/components/ChargingPartnerPricing";
import { Check, TrendingUp, DollarSign, Zap } from "lucide-react";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import PageFaqSection from "@/components/PageFaqSection";

const cpoFaqs = [
  { question: "Is NetworkCore a replacement for my roaming hubs or apps?", answer: "No. NetworkCore is additive. Your existing roaming connections, white-label apps, and direct customers stay exactly as they are. We sit alongside your current stack and bring demand from platforms that are not in your distribution mix today." },
  { question: "Where does the additional demand come from?", answer: "From Distribution Partners that own large driver bases but have no clean way to embed charging: OEMs, fleet platforms, wallets, neobanks, insurers, parking and tolling apps, loyalty programmes, and public sector mobility interfaces. Their users already charge somewhere. Through NetworkCore, those sessions land at your chargers." },
  { question: "Are there fees, subscriptions, or minimums?", answer: "No sign-up fees. No monthly fees. No SaaS. No exit fees. NetworkCore charges one per-session commission, agreed with you before launch, and only on the incremental sessions we route to you. If we bring you no new sessions, you pay nothing. On wholesale price you receive 100% of the price you set." },
  { question: "What is required technically, and how long does integration take?", answer: "A functioning OCPI endpoint and tariff configuration. That is the full technical prerequisite. If your endpoint is ready, you are operational within hours. Commercial onboarding takes minutes. Autocharge is coming soon, so is Plug&Charge on request." },
];

const included = [
  "Setup", "Platform access", "Integration", "Payment processing (gateway fees)", "Invoicing compliance",
  "Reconciliation and itemised reporting", "Driver authentication", "Fraud detection", "Chargeback and dispute handling",
  "Audit-ready records on every session",
];

const costRows = [
  ...included.map((label) => ({ label, value: "Included" })),
];

const unlocks = [
  { icon: <TrendingUp className="w-5 h-5" />, title: "Sessions you are not currently reaching", text: "Demand from platforms that already own the driver. Not sessions moved between apps, but sessions that would not otherwise have happened at your sites." },
  { icon: <Zap className="w-5 h-5" />, title: "Cash in days, not weeks", text: "Automatic settlement in your chosen currency, with itemised reporting. Working capital stays in your business." },
  { icon: <DollarSign className="w-5 h-5" />, title: "The financial layer, handled", text: "Authentication, payment capture, fraud, chargebacks, VAT and energy invoicing, disputes, and audit-ready records." },
];

const controls = [
  { title: "Which stations", text: "Publish site by site. Keep any location direct-only." },
  { title: "Which hours", text: "Open off-peak and keep peak for your own drivers." },
  { title: "Which partners", text: "Choose who sees each site, and on which model." },
  { title: "How many", text: "Expose some of the connectors at a site, not all of them." },
];


const ChargePointOperators = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Charge Point Operators | NetworkCore EV Roaming</title>
        <meta name="description" content="Increase utilisation, get paid in 48 hours, and keep full pricing control. NetworkCore enables CPOs to grow revenue per charger without adding hardware." />
        <meta property="og:title" content="Charge Point Operators | NetworkCore EV Roaming" />
        <meta property="og:description" content="Increase utilisation, get paid in 48 hours, and keep full pricing control. NetworkCore enables CPOs to grow revenue per charger without adding hardware." />
        <meta property="og:image" content="https://networkcore.org/og/og-cpo-hero.jpg" />
        <meta property="og:url" content="https://networkcore.org/charge-point-operators" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Charge Point Operators | NetworkCore EV Roaming" />
        <meta name="twitter:description" content="Increase utilisation, get paid in 48 hours, and keep full pricing control." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-cpo-hero.jpg" />
        <link rel="canonical" href="https://networkcore.org/charge-point-operators" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Charge Point Operators","item":"https://networkcore.org/charge-point-operators"}]})}</script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/cpo-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-white tracking-tight">
            Increase Utilisation.
            <br /> Get Paid in 48 Hours.
            <br /> Keep Full Pricing Control.
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light mb-6">
            A distribution channel that sits alongside everything you already run. More sessions on the chargers you have built, at the prices you set, settled in two business days.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Ready to Increase Revenue per Charger?</h2>
            <PartnerSignupForm
              heroMode
            formLabel="CPO Signup"
            submitLabel="Get connected"
            requiredFields={[
              { name: "company", label: "Company name", type: "text", required: true, placeholder: "Your company" },
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              {
                name: "country",
                label: "Country of operations",
                type: "select",
                required: true,
                placeholder: "Select country",
                options: ["Mexico", "Brazil", "Colombia", "Chile", "USA", "Spain", "France", "Germany", "UK", "Netherlands", "Italy", "Portugal", "Other"],
              },
              {
                name: "stations",
                label: "Number of charging stations",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: ["1–10", "10–50", "50–250", "250–1,000", "1,000+"],
              },
            ]}
            optionalFields={[
              {
                name: "csms",
                label: "CSMS in use",
                type: "select",
                placeholder: "Select CSMS",
                options: ["Ampeco", "Driivz", "ChargePoint", "Monta", "EVgo OS", "Greenflux", "Etrel", "Not sure", "Other"],
              },
              {
                name: "acdc",
                label: "Mix of AC / DC",
                type: "select",
                placeholder: "Select mix",
                options: ["Mostly AC", "Mostly DC", "Roughly balanced", "Not sure"],
              },
              {
                name: "notes",
                label: "Anything else we should know?",
                type: "textarea",
                placeholder: "Optional — share anything that would help us prepare.",
              },
            ]}
          />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* The Only Lever That Moves */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-10">The Only Lever That Moves</h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p className="text-foreground text-xl md:text-2xl">The capex is spent. The grid connection is paid for. The hardware works.</p>
            <p>From here, there is exactly one variable that decides whether a site pays back in four years or in nine, and that is how many hours of the day it is in use.</p>
            <p>Every other lever has been pulled. Hardware costs are what they are. Energy prices do what they do. Utilisation is the one number still in play, and it depends on demand you do not own, sitting inside apps you are not connected to.</p>
            <p className="text-foreground font-normal">That is the gap we close.</p>
          </div>
        </div>
      </section>

      {/* Demand Engine */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">The NetworkCore Demand Engine</h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>One OCPI integration connects your network to every Distribution Partner on the network: OEM in-car apps, fleet platforms, wallets, neobanks, insurers, parking apps, and mobility super-apps.</p>
            <p>Drivers arrive pre-authenticated, pre-authorised, and pre-paid. Money lands in your account in two business days.</p>
            <p className="border-l-2 border-primary pl-5 text-foreground">Your hardware, your CPMS, your tariffs, your roaming hubs, and your direct customers all stay exactly as they are. NetworkCore is additive by design.</p>
          </div>
        </div>
      </section>

      {/* What You Unlock */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-14">What You Unlock</h2>
          <div className="grid md:grid-cols-6 gap-5">
            {unlocks.map((u) => (
              <div key={u.title} className="md:col-span-2 rounded-2xl border border-border/60 bg-card/60 p-7">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">{u.icon}</div>
                <h3 className="text-lg font-medium text-foreground mb-3">{u.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell It Your Way */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChargingPartnerPricing />
          <p className="mt-10 text-lg text-foreground font-light leading-relaxed max-w-3xl mx-auto">Publish it to the network, or agree it privately per partner.</p>
        </div>
      </section>

      {/* You Decide What the Network Sees */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight text-center text-balance mb-10">You Decide What the <span className="whitespace-nowrap">Network Sees</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-y border-border/60 divide-y sm:divide-y-0 lg:divide-x divide-border/60">
            {controls.map((c) => (
              <div key={c.title} className="py-5 lg:px-6">
                <h3 className="text-base font-medium text-foreground mb-1.5">{c.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm md:text-base text-muted-foreground font-light">Change any of it at any time.</p>
        </div>
      </section>

      {/* What It Costs */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-10">What It Costs</h2>
          <p className="mb-8 text-center text-lg font-medium text-foreground">No fixed costs. No setup fees. No monthly subscriptions. No integration fees.</p>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60">
            <dl>
              {costRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid gap-1.5 px-5 py-4 transition-colors duration-200 hover:bg-primary/5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] sm:gap-8 sm:px-7 ${index ? "border-t border-border/60" : ""}`}
                >
                  <dt className="text-base font-normal text-foreground">{row.label}</dt>
                  <dd className="min-w-0 text-base font-light leading-relaxed text-foreground">
                    {row.value === "Included" && <Check aria-label="Included" className="mr-2 inline-block h-4 w-4 align-middle text-electric-green" />}
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">We Only Earn When You Earn</p>
        </div>
      </section>

      <PageFaqSection items={cpoFaqs} background="background" />

      <Footer />
    </div>
  );
};

export default ChargePointOperators;
