import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Gift, FileCheck, Globe, Scale, ShieldCheck, Settings, MapPin, Zap, Receipt, KeyRound, TrainFront, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Your platform puts employees in an EV. Add charging to the programme itself, so employees charge on the benefit they already have, with clean receipts and nothing to claim back.";

const layers = [
  { icon: Gift, title: "The benefit that includes charging", description: "Employees charge through the programme itself, inside your platform, on the benefit they already have." },
  { icon: FileCheck, title: "No more expense claims", description: "Charging is paid through the programme, with a clean, compliant receipt for every session." },
  { icon: Globe, title: "Every charger, one connection", description: "One connection gives your members charging at thousands of stations across every network." },
  { icon: Scale, title: "Fair pricing", description: "On public price, employees pay the charger's exact tariff. No markup, no hidden fee." },
  { icon: ShieldCheck, title: "Settled on compliant rails", description: "Every session is cleared and settled, with taxes, currencies, reconciliation and invoices handled." },
  { icon: Settings, title: "Charging-as-a-service", description: "We run support, monitoring and any problems with the networks. You run the programme, we run the charging behind it." },
];
const memberMoments = [
  { icon: MapPin, title: "Find", description: "They see chargers near them, with live price and availability, and can reserve one (limited feature)." },
  { icon: Zap, title: "Charge", description: "They start the session and pay through the programme. No personal card, no separate app." },
  { icon: Receipt, title: "Done", description: "The session and a compliant receipt land in the programme automatically." },
];
const whoFor = [
  { icon: KeyRound, title: "Salary sacrifice and EV leasing benefits", description: "the car and the charging, in one benefit" },
  { icon: TrainFront, title: "Commuter benefits programmes", description: "the EV commute, covered like the transit pass" },
  { icon: Briefcase, title: "Business travel platforms", description: "charging on the road, expensed automatically" },
  { icon: Award, title: "Employee perks and rewards platforms", description: "a high-frequency perk for a growing EV workforce" },
];
const faqs = [
  { question: "What does it cost?", answer: "Nothing to connect. Setup, integration, API access and the front-end module are included, with no subscription and no launch cost. On public price, access to the whole network is free. Where you buy wholesale, you buy at the operator's rate and set what the programme charges." },
  { question: "Who pays for the charging, the employer or the employee?", answer: "That is your programme design, and it stays fully in your control. Whether charging sits inside a salary sacrifice package, a mobility budget, an employer-funded programme or an employee-paid benefit, every session produces a clean, compliant receipt to allocate as your programme defines." },
  { question: "How does this handle tax treatment, like benefit-in-kind?", answer: "Tax treatment stays with your platform and your clients' advisors, as it does for every benefit you run. What we provide is what that treatment depends on: every session documented, with compliant receipts and clean settlement." },
  { question: "Can charging work for business travel and expensing?", answer: "Yes. Sessions on the road run through the platform and land with a compliant receipt automatically, so charging behaves like any other travel expense your platform already handles." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-employee-benefits";
const title = "EV Charging for Employee Benefits & Corporate Mobility Platforms | NetworkCore";

const EvChargingForEmployeeBenefits = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Employee Benefits","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">The EV Benefit Starts With the Car</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The Complete Benefit Wins the Pitch</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>Employees are choosing EVs through salary sacrifice, mobility budgets and company programmes faster every year, and charging is the part of the experience your platform does not touch yet. Every session is friction for the employee, admin for the employer, and a gap in your product.</p>
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
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Members Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {memberMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
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
          formLabel="Corporate & Benefits Partner Signup"
          submitLabel="Become a Partner"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
          ]}
          optionalFields={[
            { name: "tellUsMore", label: "Message (optional)", type: "textarea", placeholder: "Anything you would like us to know?" },
          ]}
          collapseRequiredAfter={3}
          collapseOptional={false}
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

export default EvChargingForEmployeeBenefits;
