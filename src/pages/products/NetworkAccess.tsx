import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChargingPartnerPricing from "@/components/ChargingPartnerPricing";
import ProcessDiagram from "@/components/how-it-works/ProcessDiagram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyConsentCheckbox from "@/components/forms/PrivacyConsentCheckbox";

const howItWorks = [
  {
    number: "01",
    title: "Connect",
    description: "One OCPI endpoint. Hardware-neutral, CPMS-agnostic, live in about an hour.",
  },
  {
    number: "02",
    title: "Publish",
    description: "Choose which sites go live and which Distribution Partners can reach them.",
  },
  {
    number: "03",
    title: "Receive",
    description: "Drivers arrive pre-authenticated and pre-authorised, routed from platforms that already own the relationship.",
  },
  {
    number: "04",
    title: "Settle",
    description: "Session revenue lands in your account automatically, in your currency, with itemised reporting on every payout.",
  },
];

const yours = [
  "Hardware and CPMS",
  "Tariffs, pricing strategy, and commercial model",
  "Existing roaming and app partners",
];

const ours = [
  "Demand from every Distribution Partner",
  "Driver authentication",
  "Payment capture and processing on public-price sessions",
  "Chargebacks and disputes on public-price sessions",
  "Settlement and reconciliation",
];

const networkControls = [
  { title: "Which stations", description: "Publish site by site. Keep any location direct-only." },
  { title: "Which hours", description: "Open off-peak and keep peak for your own drivers." },
  { title: "Which partners", description: "Choose who sees each site, and on which model." },
  { title: "How many", description: "Expose some of the connectors at a site, not all of them." },
];

const specifications = [
  ["Protocol", "OCPI 2.1.1 and 2.2.1; autocharge"],
  ["Connection", "CPMS-agnostic, hardware-neutral"],
  ["Session data", "Live availability, status, and CDRs"],
  ["Authentication", "App-initiated, Autocharge and on request Plug & Charge"],
  ["Pricing", "Public tariff or wholesale rate, per partner"],
  ["Settlement", "Automatic, multi-currency"],
  ["Markets", "Mexico and LATAM, expanding"],
  ["Activation", "Under an hour with a live endpoint"],
];

const NetworkAccess = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responsibilityView, setResponsibilityView] = useState<"yours" | "ours">("yours");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({ variant: "destructive", title: "Missing details", description: "Please fill in your name and business email." });
      return;
    }
    if (!consent) {
      toast({ variant: "destructive", title: "Consent required", description: "Please agree to the Privacy Policy." });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: name.trim(),
          email: email.trim(),
          type: "Network Access",
          message: "Network Access enquiry",
          consent,
        },
      });
      if (error) throw new Error(error.message || "Failed to send");
      if (!data?.success) throw new Error(data?.error || "Failed to send");
      toast({ title: "Message sent!", description: "Thank you for contacting us. We will get back to you soon." });
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please email us directly at victor.p@networkcore.org",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Network Access — Get visibility and revenue for your chargers | NetworkCore</title>
        <meta name="description" content="Get visibility and revenue for your chargers. One connection. Drivers from every platform on the network. Your price, untouched." />
        <meta property="og:title" content="Network Access | NetworkCore" />
        <meta property="og:description" content="Get visibility and revenue for your chargers. One connection. Drivers from every platform on the network. Your price, untouched." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/products/network-access" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Network Access | NetworkCore" />
        <meta name="twitter:description" content="One connection. Drivers from every platform on the network. Your price, untouched." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/products/network-access" />
      </Helmet>

      <Navigation />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/cpo-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-light leading-tight text-white tracking-tight md:text-4xl lg:text-5xl">Network Access</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-white/70 md:text-xl">Get visibility and revenue for your chargers. One connection. Drivers from every platform on the network. Your price, untouched.</p>
        </div>
        <div className="hero-fade-late absolute bottom-6 left-1/2 -translate-x-1/2" style={{ animationDelay: "1300ms" }} aria-hidden>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-transparent via-white/30 to-white/60" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">How it Works</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.number} className="border-t border-border pt-6">
                <p className="mb-4 text-sm tracking-[0.2em] text-muted-foreground">{step.number}</p>
                <h3 className="mb-3 text-xl font-light text-foreground">{step.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <ProcessDiagram kind="charging-partner" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">What's Yours, What's Ours</h2>
          <div className="mb-5">
            <div className="relative flex h-3 w-full overflow-hidden rounded-full">
              <div className="w-1/2 bg-foreground" />
              <div className="w-1/2 bg-primary" />
              <div className={`absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground bg-background shadow-soft transition-all duration-700 ease-out ${responsibilityView === "yours" ? "left-1/4" : "left-3/4"}`} />
            </div>
            <div className="mt-3 flex justify-between"><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Yours</span><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ours</span></div>
          </div>
          <div className="mb-16 flex justify-center gap-3">
            <Button type="button" size="compact" variant={responsibilityView === "yours" ? "default" : "outline"} onClick={() => setResponsibilityView("yours")}>Yours</Button>
            <Button type="button" size="compact" variant={responsibilityView === "ours" ? "default" : "outline"} onClick={() => setResponsibilityView("ours")}>Ours</Button>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">Yours</h3>
              <ul className="space-y-4">
                {yours.map((item) => (
                  <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground" /><span className="font-light leading-relaxed text-foreground">{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">Ours</h3>
              <ul className="space-y-4">
                {ours.map((item) => (
                  <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" /><span className="font-light leading-relaxed text-foreground">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">Get the Network Access brochure in your inbox</h2>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 text-left shadow-soft sm:p-8">
            <div className="space-y-2"><Label htmlFor="sc-name">Name <span className="text-destructive">*</span></Label><Input id="sc-name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></div>
            <div className="space-y-2"><Label htmlFor="sc-email">Business email <span className="text-destructive">*</span></Label><Input id="sc-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /></div>
            <PrivacyConsentCheckbox checked={consent} onCheckedChange={setConsent} id="sc-consent" />
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">{isSubmitting ? "Sending..." : "Send"}</Button>
          </form>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ChargingPartnerPricing />
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-light leading-relaxed text-foreground">Publish it to the network, or agree it privately per partner.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">You Decide What the Network Sees</h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {networkControls.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <h3 className="mb-3 text-xl font-light text-foreground">{item.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-light text-foreground">Change any of it at any time.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">Specification</h2>
          <dl className="border-t border-border">
            {specifications.map(([term, detail]) => (
              <div key={term} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <dt className="font-medium text-foreground">{term}</dt>
                <dd className="font-light text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-light leading-relaxed text-muted-foreground">Funds are safeguarded at partner banks under the applicable regulated entity.</p>
          <Link to="/security-compliance" className="mt-4 inline-block text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground">Security and compliance →</Link>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-light text-foreground tracking-tight md:text-4xl">What are Your Idle Hours Worth?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">Three numbers you already know, and you'll see what each point of utilisation earns you per year. No sign-up.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg"><Link to="/charging-partners/calculator">Open the calculator →</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">Talk to us</a></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetworkAccess;