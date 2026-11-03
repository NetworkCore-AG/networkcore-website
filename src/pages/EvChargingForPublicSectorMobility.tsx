import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Network, Scale, Users, Wallet, ShieldCheck, MapPin, Zap, Receipt, Eye, EyeOff, FlaskConical, Smartphone, Bus, Cpu, GraduationCap, Globe, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Give residents one neutral way to find, use and pay for charging across every network in your city or region, inside the mobility platform they already use.";

const layers = [
  { icon: Landmark, title: "Your way to charge", description: "Residents charge across the city through one official, trusted interface, inside the mobility platform they already use." },
  { icon: Network, title: "Every operator, no lock-in", description: "One connection reaches every charging network you connect to, at the same public price, with no preference for any operator and no vendor lock-in." },
  { icon: Scale, title: "Fair public pricing, always", description: "Residents pay the operator's exact public price. No markup, no spread, no profiteering." },
  { icon: Users, title: "Charging access for everyone", description: "Charging access becomes a public good, not a privilege of private driveways." },
  { icon: Wallet, title: "Built without capex or operations", description: "No infrastructure to fund, no charging or payments to operate, no team to hire." },
  { icon: ShieldCheck, title: "Settled on compliant, safeguarded rails", description: "Every session is cleared and settled, with taxes, currencies, reconciliation and invoices handled." },
];
const residentMoments = [
  { icon: MapPin, title: "Find", description: "They see chargers near them across every operator, with live price and availability." },
  { icon: Zap, title: "Charge", description: "They start the session and pay inside your platform. One experience, every network." },
  { icon: Receipt, title: "Done", description: "The session and a clean, compliant receipt sit inside the official app they already trust." },
];
const guarantees = [
  { icon: Eye, title: "Fair-price guarantee", description: "Residents pay the operator's exact tariff. No markup ever touches your city's name." },
  { icon: EyeOff, title: "Invisible partner", description: "The interface is fully yours. NetworkCore never appears to the resident." },
  { icon: FlaskConical, title: "Pilot first", description: "Start with one district or one city, prove the model, then scale across the region." },
];
const whoFor = [
  { icon: Smartphone, title: "City and regional mobility apps", description: "one official interface to charging for every resident" },
  { icon: Bus, title: "Public transport authorities", description: "adding the EV leg to multimodal travel" },
  { icon: Cpu, title: "Smart city platforms", description: "charging as part of the connected-city stack" },
  { icon: GraduationCap, title: "Campus mobility ecosystems", description: "universities, business parks and large sites" },
  { icon: Globe, title: "Regional and national transport agencies", description: "neutral, fair access across jurisdictions" },
  { icon: ParkingCircle, title: "Municipal parking and curbside authorities", description: "charging where residents already park" },
];
const faqs = [
  { question: "What does it cost the city?", answer: "Nothing. Setup, integration, API access and the front-end module are included, with no subscription and no capital cost." },
  { question: "Do we have to operate charging or payments ourselves?", answer: "No. You provide the official interface residents trust. NetworkCore connects it to every charging network, handles payment, settlement, invoicing and support, and runs everything behind your brand." },
  { question: "Does this favour one charging network over others?", answer: "No. The layer is neutral by design. One connection reaches every operator you connect to, at the same public price, with no preference and no vendor lock-in. That neutrality is the point, and it is what keeps the model procurement-friendly." },
  { question: "Who handles the money, and is it compliant?", answer: "NetworkCore clears and settles every session with every network, including taxes, currencies, reconciliation and invoices, on rails operated within licensed, safeguarded structures. Confirm the exact regulatory position for your jurisdiction during onboarding." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-public-sector-mobility";
const title = "EV Charging for Public Sector & City Mobility Platforms | NetworkCore";

const EvChargingForPublicSectorMobility = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Public Sector & City Mobility Platforms","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">One Official Way to Charge Across Your City</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">Fair Access Is the Policy Question</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>The shift is not EV adoption. It is whether every resident gets a fair, neutral way to charge.</p>
          <p>Residents without a driveway depend entirely on public charging, and today that means a patchwork of operator apps, inconsistent pricing and no single place to turn. The residents least able to charge at home face the most friction paying for it.</p>
          <p>A city cannot solve that by picking one operator. It solves it by giving every operator the same front door.</p>
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
      <DistributionPartnerPricing publicOnly title="One Way to Buy & Price" />
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become a Partner <ArrowRight /></a></Button></div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Residents Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {residentMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Designed for Low-Risk Adoption</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {guarantees.map(({ icon: Icon, title: heading, description: text }) => <div key={heading} className="border-t border-border pt-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Partner</h2>
        <PartnerSignupForm
          formLabel="Public Sector Mobility Partner Signup"
          submitLabel="Become a Partner"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Work email", type: "email", required: true, placeholder: "you@organisation.org" },
            { name: "company", label: "Organisation", type: "text", required: true, placeholder: "City, authority or organisation" },
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

export default EvChargingForPublicSectorMobility;
