import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessDiagram from "@/components/how-it-works/ProcessDiagram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyConsentCheckbox from "@/components/forms/PrivacyConsentCheckbox";

const howItWorks = [
  { number: "01", title: "Design", description: "We map the integration to what you already run. Your gateway or ours. Your support desk or ours. Your interface or our front-end module." },
  { number: "02", title: "Integrate", description: "One API connects you to every charger on the network, with live prices and live availability." },
  { number: "03", title: "Launch", description: "Charging appears natively in your product, under your brand, at the price you have chosen to show." },
  { number: "04", title: "Success", description: "Drivers charge seamlessly under your brand. You see every session. You handle only what you chose to handle." },
];

const alwaysYours = ["Your brand", "Your interface", "Your drivers", "Your commercial strategy"];
const alwaysOurs = ["Access to every charger on the network", "Session orchestration and control", "Price integrity", "Operator settlement and clearing", "Fiscal compliance and audit records"];
const youDecide = ["The payment gateway", "First-line driver support", "Driver invoicing and VAT", "Fraud, chargebacks, and disputes", "The charging interface itself"];

const whatYouGet = [
  "Public prices, or buy wholesale and set your own",
  "Every charger on the network through one integration",
  "Live availability and session state",
  "An integration shaped around your stack, not ours",
  "No charging operation to build and no operators to negotiate with",
  "Launching costs you nothing",
];

const presets = [
  { label: "Fully Integrated", split: 20 },
  { label: "Hybrid", split: 50 },
  { label: "Embedded", split: 80 },
];

const specifications = [
  ["API", "REST"],
  ["Data", "Live availability, pricing, and session state"],
  ["Session control", "Start, stop, monitor"],
  ["Front end", "Pre-built module, or build your own"],
  ["Authentication", "Your users, your identity system"],
  ["Pricing", "Public price or wholesale, per operator"],
  ["Settlement", "Automatic, multi-currency"],
  ["Launch", "Weeks, not quarters"],
];

const JustCharge = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [split, setSplit] = useState(50);
  const [activePreset, setActivePreset] = useState("Hybrid");

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
        body: { name: name.trim(), email: email.trim(), type: "Just Charge", message: "Just Charge enquiry", consent },
      });
      if (error) throw new Error(error.message || "Failed to send");
      if (!data?.success) throw new Error(data?.error || "Failed to send");
      toast({ title: "Message sent!", description: "Thank you for contacting us. We will get back to you soon." });
      setName("");
      setEmail("");
      setConsent(false);
    } catch {
      toast({ variant: "destructive", title: "Error", description: "Failed to send message. Please email us directly at victor.p@networkcore.org" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Just Charge — Public charging, live inside your product | NetworkCore</title>
        <meta name="description" content="Public charging, live inside your product. Fully integrated or embedded, under your brand, at public or wholesale prices. You decide how much of it we run." />
        <meta property="og:title" content="Just Charge | NetworkCore" />
        <meta property="og:description" content="Public charging, live inside your product. Fully integrated or embedded, under your brand, at public or wholesale prices. You decide how much of it we run." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/products/just-charge" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Just Charge | NetworkCore" />
        <meta name="twitter:description" content="Public charging, live inside your product. Fully integrated or embedded, under your brand, at public or wholesale prices." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/products/just-charge" />
      </Helmet>

      <Navigation />

      <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-foreground pt-24 pb-16">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-light leading-tight text-white tracking-tight md:text-4xl lg:text-5xl">Just Charge</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-white/70 md:text-xl">Public charging, live inside your product. Fully integrated or embedded, under your brand, at public or wholesale prices. You decide how much of it we run.</p>
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
          <div className="mt-16"><ProcessDiagram kind="distribution-partner" /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">What's Yours, What's Ours</h2>
          <div className="mb-4">
            <div className="relative flex h-3 w-full overflow-hidden rounded-full">
              <div className="bg-primary transition-all duration-700 ease-out" style={{ width: `${split}%` }} />
              <div className="bg-foreground transition-all duration-700 ease-out" style={{ width: `${100 - split}%` }} />
              <div className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground bg-background shadow-soft transition-all duration-700 ease-out" style={{ left: `${split}%` }} />
            </div>
            <div className="mt-3 flex justify-between"><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">You run</span><span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">We run</span></div>
          </div>
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {presets.map((preset) => (
              <Button key={preset.label} type="button" size="compact" variant={activePreset === preset.label ? "default" : "outline"} onClick={() => { setSplit(preset.split); setActivePreset(preset.label); }}>{preset.label}</Button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              ["Always yours", alwaysYours, "text-foreground"],
              ["Always ours", alwaysOurs, "text-primary"],
              ["Yours or ours, you decide", youDecide, "text-muted-foreground"],
            ].map(([title, items, iconClass]) => (
              <div key={title as string}>
                <h3 className="mb-8 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">{title}</h3>
                <ul className="space-y-4">
                  {(items as string[]).map((item) => <li key={item} className="flex items-start gap-3"><Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${iconClass}`} /><span className="font-light leading-relaxed text-foreground">{item}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">Get the Just Charge brochure in your inbox</h2>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 text-left shadow-soft sm:p-8">
            <div className="space-y-2"><Label htmlFor="jc-name">Name <span className="text-destructive">*</span></Label><Input id="jc-name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></div>
            <div className="space-y-2"><Label htmlFor="jc-email">Business email <span className="text-destructive">*</span></Label><Input id="jc-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /></div>
            <PrivacyConsentCheckbox checked={consent} onCheckedChange={setConsent} id="jc-consent" />
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">{isSubmitting ? "Sending..." : "Send"}</Button>
          </form>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <DistributionPartnerPricing />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-light text-foreground tracking-tight md:text-4xl">What You Get</h2>
          <ul className="inline-block space-y-5 text-left">
            {whatYouGet.map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" /><span className="text-lg font-light leading-relaxed text-foreground">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">Specification</h2>
          <dl className="border-t border-border">
            {specifications.map(([term, detail]) => (
              <div key={term} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <dt className="font-medium text-foreground">{term}</dt><dd className="font-light text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 font-light leading-relaxed text-muted-foreground">Funds are safeguarded at partner banks under the applicable regulated entity.</p>
          <Link to="/security-compliance" className="mt-4 inline-block text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground">Security and compliance →</Link>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-light text-foreground tracking-tight md:text-4xl">Tell Us What You Already Run</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">Your gateway or ours. Your support desk or ours. Your interface or our module. Fifteen minutes and we'll map it.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg"><a href="#contact">Book a scoping call</a></Button>
            <Button asChild size="lg" variant="outline"><Link to="/pricing">See pricing</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JustCharge;