import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CalendarClock, Eye, Landmark, Settings, MapPin, Zap, Receipt, Shield, Users, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Add EV charging to the cover or membership you already offer, so your drivers can always find a working charger near them, and pay for it using your app.";

const layers = [
  { icon: ShieldCheck, title: "Charging, built into the cover", description: "Charging lives inside your app, or digital product. Drivers find, start and pay for it without leaving your ecosystem, and without a separate charging account." },
  { icon: CalendarClock, title: "A reason to engage every week", description: "Charging is the most frequent thing an EV driver does. Putting it inside your app turns an annual relationship into a weekly one. More touchpoints, less churn at renewal, and a real hook to win EV drivers from competitors." },
  { icon: Eye, title: "Brand-safe pricing", description: "On public price, drivers pay the charger's exact tariff. No markup, no hidden fee. The price in your app is the price at the plug." },
  { icon: Landmark, title: "Settlement on regulated rails", description: "We clear and settle every session with every network, including taxes, currencies, reconciliation and invoices, on rails built within licensed, safeguarded structures." },
  { icon: Settings, title: "Charging-as-a-service", description: "We run support, monitoring and any problems with the networks. You add charging. We run it." },
];
const driverMoments = [
  { icon: MapPin, title: "Find", description: "They see working chargers near them, with live price and availability, and can reserve one." },
  { icon: Zap, title: "Charge", description: "They start the session and pay inside your app." },
  { icon: Receipt, title: "Done", description: "The session and a clean receipt sit alongside the rest of their cover or membership." },
];
const whoFor = [
  { icon: Shield, title: "Motor and EV insurers", description: "turning a yearly policy into a weekly service" },
  { icon: Users, title: "Driver membership and motoring clubs", description: "adding the highest-frequency benefit a member can use" },
  { icon: Radar, title: "Telematics and usage-based insurers", description: "giving EV drivers a service they touch all the time" },
];
const faqs = [
  { question: "What does it cost?", answer: "On public price, access to the whole network is free. Where you buy wholesale, you buy at the operator's rate and keep whatever margin you choose to set. In both cases, there are no setup or subscription fees." },
  { question: "Most of our members do not drive EVs yet. Is this worth adding?", answer: "It serves the EV-driving share of your base, which grows every year, and for those members charging is the most frequent thing they do behind the wheel." },
  { question: "Can we use charging to attract or keep EV drivers?", answer: "Yes. You can offer charging access, credits or rewards as a policy or membership benefit. You decide and fund the perk, and buying wholesale makes the same budget go further." },
  { question: "Who settles with the charging networks, and is it regulated?", answer: "We do. Every session is cleared and settled, including taxes, currencies, reconciliation and invoices, on rails operated within licensed, safeguarded structures." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-insurance-and-driver-services";
const title = "EV Charging for Insurance & Driver Services | NetworkCore";

const EvChargingForInsuranceAndDriverServices = () => (
  <div className="min-h-screen bg-background">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
      <link rel="canonical" href={pageUrl} />
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Insurance & Driver Services","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Keep Your Drivers Moving</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The New Breakdown Is an Empty Battery</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>A growing share of your members are going electric, and the thing they worry about is no longer the thing you were built around. It is not a flat tyre or a dead starter motor. It is whether there is a working charger within range.</p>
          <p>That is a promise you already make, in words. Charging is how you keep it.</p>
          <p>It is also the difference between a relationship they think about once a year and one they use every week. Most of your competitors will still be showing up at renewal.</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Own</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <DistributionPartnerPricing hideNote />
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become a Partner <ArrowRight /></a></Button></div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Drivers Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {driverMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Partner</h2>
        <PartnerSignupForm
          formLabel="Insurance & Driver Services Partner Signup"
          submitLabel="Become a Partner"
          collapseRequiredAfter={3}
          collapsedRequiredLabel="Complete partner details"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
            { name: "platformType", label: "Platform type", type: "select", required: true, placeholder: "Select type", options: ["Motor / EV insurer", "Roadside assistance", "Warranty / breakdown cover", "Driver membership / motoring club", "Telematics / usage-based insurer", "Other"] },
            { name: "monthlyActiveUsers", label: "Members or policyholders", type: "select", required: true, placeholder: "Select range", options: ["Under 100,000", "100,000 to 1M", "1M to 5M", "5M to 20M", "20M+"] },
          ]}
          optionalFields={[
            { name: "tellUsMore", label: "Tell us more", type: "textarea", placeholder: "Anything else we should know?" },
          ]}
        />
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Who This Is For</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {whoFor.map(({ icon: Icon, title: heading, description: text }) => <div key={heading} className="flex items-start gap-4 border-t border-border py-5">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-electric-green" aria-hidden="true" />
            <p className="font-light leading-relaxed text-foreground"><span className="font-medium">{heading}</span>: {text}</p>
          </div>)}
        </div>
      </div>
    </section>

    <PageFaqSection items={faqs} />
    <Footer />
  </div>
);

export default EvChargingForInsuranceAndDriverServices;
