import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PageFaqSection from "@/components/PageFaqSection";
import ContactForm from "@/components/ContactForm";
import { Check } from "lucide-react";

const chargingPartnerRows = [
  { label: "Setup, integration, platform access", value: "Included" },
  { label: "Payment processing", value: "Included, no separate gateway or card fees" },
  { label: "Invoicing compliance", value: "Included" },
  { label: "Chargeback and dispute handling", value: "Included" },
  { label: "Commercial model", value: "Public price or wholesale, per partner" },
  { label: "Public price commission", value: "One per-session commission, agreed with you before launch, applied only on the incremental sessions we bring you." },
  { label: "Wholesale price commission", value: "Free, you receive 100% of the price you set." },
  { label: "Settlement", value: "Fast, in your chosen currency" },
  { label: "Everything else", value: "Included" },
];

const distributionPartnerRows = [
  { label: "Setup, integration, API", value: "Included" },
  { label: "Front-end module", value: "Included" },
  { label: "Driver support", value: "Included, or keep your own" },
  { label: "Commercial model", value: "Public price or Wholesale price" },
  { label: "Public price", value: "Free, you offer EV charging to your users at the transparent public price." },
  { label: "Wholesale price", value: "One per-session commission, agreed with you before launch." },
  { label: "Settlement", value: "Automatic, in your chosen currency" },
  { label: "Everything else", value: "Included" },
];

const comparisonRows = [
  { label: "Joining fee", traditional: "Yes", networkCore: "Included" },
  { label: "Annual platform fee", traditional: "Yes, regardless of volume", networkCore: "Included" },
  { label: "Integration, per partner", traditional: "Yes, each one", networkCore: "Included" },
  { label: "Commercial negotiation", traditional: "Weeks to months", networkCore: "Included" },
  { label: "VAT and invoicing", traditional: "Your finance team", networkCore: "Included, or your own" },
  { label: "Driver support", traditional: "Yours to absorb", networkCore: "Included, or your own" },
  { label: "Chargebacks and disputes", traditional: "Yours to absorb", networkCore: "Included, or your own" },
  { label: "Reconciliation", traditional: "Your team, every month", networkCore: "Included" },
  { label: "Public price cost", traditional: "Fees, subscriptions and commissions", networkCore: "One small per-session commission paid by Charging Partner" },
  { label: "Wholesale price cost", traditional: "Fees, subscriptions and commissions", networkCore: "One small per-session commission paid by Distribution Partner" },
  { label: "Time to first session", traditional: "Months", networkCore: "About an hour" },
];

const pricingFaqs = [
  { question: "When do I find out the rate?", answer: "During commercial onboarding, before anything is signed and before any technical work begins. One figure, fixed for the term, itemised on every payout statement." },
  { question: "Why is the rate not published?", answer: "A hotel with four bays and a national operator with three thousand chargers are different conversations. The structure is published here. The number is agreed with you directly." },
  { question: "What is wholesale pricing?", answer: "An operator sets a rate per kWh in NetworkCore and receives 100% of it. The Distribution Partner buys at that rate, sets the driver's price, and becomes the merchant of record for the session." },
  { question: "Do I have to leave my current roaming hub?", answer: "No. NetworkCore runs alongside your existing roaming connections and brings demand from platforms that are not in your distribution mix today." },
];

const PricingTable = ({ rows }: { rows: { label: string; value: string }[] }) => (
  <div className="overflow-hidden rounded-lg border border-border bg-background/90 shadow-soft">
    <dl>
      {rows.map((row, index) => (
        <div key={row.label} className={`grid gap-1.5 px-5 py-4 transition-colors duration-200 hover:bg-primary/10 focus-within:bg-primary/10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] sm:gap-8 sm:px-7 ${index ? "border-t border-border/70" : ""} ${row.label === "Everything else" ? "bg-primary/5" : ""}`}>
          <dt className="font-medium text-foreground">{row.label}</dt>
          <dd className="min-w-0 leading-relaxed text-foreground">
            {row.value.startsWith("Included") && <Check className="mr-2 inline-block h-4 w-4 align-middle text-primary" aria-hidden="true" />}
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

const PricingComparison = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"traditional" | "networkCore">("traditional");

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Traditional roaming vs NetworkCore</h2>
        <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-background/90 shadow-soft" onMouseLeave={() => setSelected(null)}>
          <div className="flex border-b border-border p-2 md:hidden" role="group" aria-label="Compare roaming models">
            <Button type="button" size="sm" variant={mobileView === "traditional" ? "default" : "ghost"} aria-pressed={mobileView === "traditional"} className="h-auto min-h-10 flex-1 whitespace-normal px-2 py-2" onClick={() => setMobileView("traditional")}>Traditional roaming</Button>
            <Button type="button" size="sm" variant={mobileView === "networkCore" ? "secondary" : "ghost"} aria-pressed={mobileView === "networkCore"} className="h-auto min-h-10 flex-1 px-2 py-2" onClick={() => setMobileView("networkCore")}><img src="/images/networkcore-logo-black.png" alt="NetworkCore" className="h-auto w-28 max-w-full" /></Button>
          </div>
          <div className="hidden grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-muted/40 font-medium text-foreground md:grid">
            <span className="px-5 py-4">Cost or requirement</span><span className="px-5 py-4">Traditional roaming</span><span className="flex items-center bg-section-green px-5 py-4"><img src="/images/networkcore-logo-black.png" alt="NetworkCore" className="h-auto w-32 max-w-full" /></span>
          </div>
          <div>
            {comparisonRows.map((row, index) => (
              <div key={row.label} className={`group grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch transition-colors duration-200 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] ${index ? "border-t border-border/70" : ""} ${selected === index ? "bg-primary/10" : "hover:bg-muted/40"}`} onMouseEnter={() => setSelected(index)}>
                <Button type="button" variant="ghost" aria-pressed={selected === index} onFocus={() => setSelected(index)} onClick={() => setSelected(selected === index ? null : index)} className="h-auto min-w-0 justify-start whitespace-normal rounded-none px-5 py-4 text-left text-base font-medium leading-snug text-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-offset-0">{row.label}</Button>
                <span className={`min-w-0 px-5 py-4 leading-relaxed text-foreground ${mobileView === "networkCore" ? "hidden md:block" : ""}`}>{row.traditional}</span>
                <span className={`min-w-0 bg-section-green px-5 py-4 leading-relaxed text-foreground transition-colors duration-200 group-hover:bg-electric-green/15 ${mobileView === "traditional" ? "hidden md:block" : ""}`}>{row.networkCore.startsWith("Included") && <Check className="mr-2 inline-block h-4 w-4 align-middle text-electric-green" aria-hidden="true" />}{row.networkCore}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pricing | NetworkCore</title>
        <meta name="description" content="A sales channel, not a platform. No fees for being connected, only a commission on the sessions we bring you." />
        <meta property="og:title" content="Pricing | NetworkCore" />
        <meta property="og:description" content="A sales channel, not a platform. No fees for being connected, only a commission on the sessions we bring you." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/pricing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing | NetworkCore" />
        <meta name="twitter:description" content="A sales channel, not a platform. No fees for being connected, only a commission on the sessions we bring you." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/pricing" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://networkcore.org/" }, { "@type": "ListItem", position: 2, name: "Pricing", item: "https://networkcore.org/pricing" }] })}</script>
      </Helmet>
      <Navigation transparent />
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src="/campaigns/latam-first-wave.jpg" alt="Electric vehicle charging at a public charge point" className="hero-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/55 to-foreground/75" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
            <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Nobody Pays to Be Here</h1>
            <p className="max-w-3xl text-lg font-light leading-relaxed text-background/80 md:text-xl">A sales channel, not a platform. No subscriptions, no setup, no integration cost. The only money that moves is a share of a session that already happened.</p>
          </div>
          <div id="pricing-contact" className="hero-lead-form scroll-mt-24"><ContactForm heroMode compact /></div>
        </div>
        <div className="hero-fade-late absolute bottom-6 left-1/2 -translate-x-1/2" style={{ animationDelay: "1300ms" }} aria-hidden>
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/30 to-white/60 animate-pulse" />
        </div>
      </section>
      <PricingComparison />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Charging Partners</h2>
          <PricingTable rows={chargingPartnerRows} />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Distribution Partners</h2>
          <PricingTable rows={distributionPartnerRows} />
        </div>
      </section>
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-3xl font-light leading-tight text-foreground md:text-5xl">We Only Earn When You Earn</p>
        </div>
      </section>
      <PageFaqSection items={pricingFaqs} background="muted" />
      <Footer />
    </div>
  );
};

export default Pricing;
