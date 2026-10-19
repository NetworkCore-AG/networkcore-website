import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, FileText, MapPin, WalletCards } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacyConsentCheckbox from "@/components/forms/PrivacyConsentCheckbox";

const designLines = [
  "Who receives it: value per driver, and set it per campaign, per market, per segment.",
  "Where it works: whole network, or selected operators, regions, site types and hours.",
  "We shape it around a moment you already own: the sale, the handover, onboarding, renewal, a win-back, a sign-up.",
  "Change any of it at any time.",
];

const laterSteps = [
  { number: "02", title: "Issue", description: "The allowance appears in your product, bound to a vehicle, an account or a cohort." },
  { number: "03", title: "Charge", description: "Your driver charges at any charger in the Pack. The allowance applies automatically, at the price you have chosen to show." },
  { number: "04", title: "Settle", description: "Operators are paid. Sessions are reconciled. You fund only what was used, and you see all of it on one statement." },
];

const flow = [
  { label: "Your allowance", icon: WalletCards },
  { label: "Chargers you choose", icon: MapPin },
  { label: "One statement", icon: FileText },
];

const funders = [
  { title: "You fund it", description: "Marketing budget becomes charging. You own the moment, and you own the driver afterwards." },
  { title: "An operator funds it", description: "A charging network wants traffic at particular sites, in particular hours. A Pack sends drivers exactly there, and the network pays for the demand it actually wanted rather than for impressions." },
  { title: "Both of you fund it", description: "A carmaker and a charging network agree a package together. The network discounts hard to win the drivers onto its sites. The carmaker funds the rest. The driver charges for nothing for three months and stops thinking about charging altogether." },
];


const costs = [
  ["Set-up", "One-off, scoped with you. Programme design, configuration, and operator negotiation where the Pack is co-funded."],
  ["Management", "Ongoing, scaled to the size of the programme. Issuance, redemption tracking, reconciliation and reporting."],
  ["The charging itself", "Funded on redemption, at public price or at a wholesale rate you have agreed. Where an operator co-funds, their share is set inside the programme."],
];

const h2 = "text-center text-3xl font-light text-foreground tracking-tight md:text-4xl";

const ChargePack = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        body: { name: name.trim(), email: email.trim(), type: "Charge Pack", message: "Charge Pack brochure request", consent },
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
        <title>Charge Pack - Funded charging for your drivers | NetworkCore</title>
        <meta name="description" content="Charging on you. Funded by you, by a charging operator, or by both together. Redeemable across the network, under your brand." />
        <meta property="og:title" content="Charge Pack - Funded charging for your drivers | NetworkCore" />
        <meta property="og:description" content="Charging on you. Funded by you, by a charging operator, or by both together. Redeemable across the network, under your brand." />
        <meta property="og:url" content="https://networkcore.org/products/charge-pack" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://networkcore.org/products/charge-pack" />
      </Helmet>

      <Navigation />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-light leading-tight text-white tracking-tight md:text-4xl lg:text-5xl">Charge Pack</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-white/70 md:text-xl">Charging on you. Funded by you, by a charging operator, or by both together. Redeemable across the network, under your brand.</p>
        </div>
        <div className="hero-fade-late absolute bottom-6 left-1/2 -translate-x-1/2" style={{ animationDelay: "1300ms" }} aria-hidden>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-transparent via-white/30 to-white/60" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className={`mb-12 ${h2}`}>The First Charge is the Hardest</h2>
          <div className="space-y-7 text-center text-lg font-light leading-relaxed text-muted-foreground">
            <p>Before they even buy an EV, a driver is anxious about how charging works. Then the first public charge arrives: the one they are most likely to get wrong, and the one that decides whether they ever do it again inside your product. Unfamiliar plug, unfamiliar screen, a card they would rather not enter, a price they cannot predict.</p>
            <p>So most people put it off. And when they finally do it, they do it somewhere else, in somebody else's app, and that becomes the default.</p>
            <p className="text-xl text-foreground">You can build the best embedded charging in the market and still lose the driver at the moment they first need it.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={`mb-16 ${h2}`}>How It Works</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/70 p-8 shadow-soft md:p-10">
              <p className="mb-4 text-sm tracking-[0.2em] text-identity-pack">01</p>
              <h3 className="mb-4 text-2xl font-light text-foreground">Design</h3>
              <p className="mb-6 text-lg font-light leading-relaxed text-foreground">Set the allowance and how long it lasts.</p>
              <ul className="space-y-4 border-t border-border/60 pt-6">
                {designLines.map((line) => (
                  <li key={line} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 flex-shrink-0 text-identity-pack" /><span className="font-light leading-relaxed text-muted-foreground">{line}</span></li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {laterSteps.map((step) => (
                <div key={step.number} className="rounded-2xl border border-border/60 bg-card/70 p-7 shadow-soft md:p-8">
                  <div className="flex items-baseline gap-4">
                    <p className="text-sm tracking-[0.2em] text-identity-pack">{step.number}</p>
                    <h3 className="text-xl font-light text-foreground">{step.title}</h3>
                  </div>
                  <p className="mt-3 font-light leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/60 bg-identity-pack/5 px-6 py-8 sm:flex-row sm:gap-6">
            {flow.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-identity-pack/40 bg-background text-identity-pack"><Icon className="h-5 w-5" strokeWidth={1.6} /></span>
                    <span className="text-base font-light text-foreground">{node.label}</span>
                  </div>
                  {index < flow.length - 1 && <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground sm:rotate-0" aria-hidden />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={`mb-6 ${h2}`}>Who Funds It</h2>
          <p className="mx-auto mb-14 max-w-3xl text-center text-lg font-light leading-relaxed text-muted-foreground">A Charge Pack can be funded by the platform, by the charging operator, or by both together. The third is only possible because we sit between them.</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {funders.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/70 p-7">
                <h3 className="mb-3 text-xl font-light text-foreground">{item.title}</h3>
                <p className="font-light leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-light text-foreground">We broker it, price it, and run it. One programme, one statement, whoever paid for it.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className={`mb-10 ${h2}`}>What It Buys After It Runs Out</h2>
          <p className="mb-6 text-xl font-light text-foreground">The cost of a first charge is one-off. The habit is not.</p>
          <p className="text-lg font-light leading-relaxed text-muted-foreground">A driver who has charged three times inside your product has an account, a saved payment method, a route they trust and no reason to look elsewhere. You pay once to become the default.</p>
        </div>
      </section>


      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className={`mb-12 ${h2}`}>What It Costs</h2>
          <dl className="border-t border-border">
            {costs.map(([term, detail]) => (
              <div key={term} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <dt className="font-medium text-foreground">{term}</dt><dd className="font-light leading-relaxed text-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-lg font-light text-foreground">Nothing is held in advance. You only ever fund what was used.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className={`mb-6 ${h2}`}>The First Charge Is The One They Remember</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">Tell us who your drivers are and when you meet them. Fifteen minutes and we'll map a pilot: one cohort, one city, one month.</p>
          <Button asChild size="lg"><a href="#contact">Book a scoping call</a></Button>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className={`mb-8 ${h2}`}>Get the Charge Pack brochure in your inbox</h2>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6 text-left shadow-soft sm:p-8">
            <div className="space-y-2"><Label htmlFor="cp-name">Name <span className="text-destructive">*</span></Label><Input id="cp-name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></div>
            <div className="space-y-2"><Label htmlFor="cp-email">Business email <span className="text-destructive">*</span></Label><Input id="cp-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" required /></div>
            <PrivacyConsentCheckbox checked={consent} onCheckedChange={setConsent} id="cp-consent" />
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">{isSubmitting ? "Sending..." : "Send"}</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargePack;
