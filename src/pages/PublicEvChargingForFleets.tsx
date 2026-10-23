import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, FileText, BadgeEuro, Layers, MapPin, Zap, Receipt, CircleDollarSign, EyeOff, ShieldCheck, Building2, Truck, Fuel, Package, CarTaxiFront, Briefcase, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "One connection gives your fleets fully handled access to public chargers across every network and market.";

const layers = [
  { icon: Globe, title: "Public charging, everywhere", description: "One connection gives your fleets access to public chargers across every network and market, with no separate deal or integration for each operator. Drivers charge on the road wherever they are, all on one account." },
  { icon: FileText, title: "One bill, settled", description: "Every public session is cleared and settled behind the scenes, with taxes, currencies, reconciliation and invoices handled, rolled into one statement. No chasing operators." },
  { icon: BadgeEuro, title: "A predictable cost to pass through", description: "On public price, your fleets pay the charger's exact tariff with no markup and no hidden fee. When and/or where your volume justifies it, buy wholesale and set the fleet rate yourself." },
  { icon: Layers, title: "Runs behind your platform", description: "Technical roaming access and money settlement are all run by us under your brand, inside your fleet management platform. We handle the operator side, the support, and the rails. You use public charging as needed." },
];
const driverMoments = [
  { icon: MapPin, title: "Find", description: "The driver sees a working public charger nearby in your app." },
  { icon: Zap, title: "Charge", description: "They start the session on the fleet account already set up. No personal card, no separate app." },
  { icon: Receipt, title: "Done", description: "The session settles automatically and rolls into the fleet's bill." },
];
const guarantees = [
  { icon: CircleDollarSign, title: "Price", description: "There is no subscription and no launch cost. On public price, everything is free. On wholesale price, you buy at the operator's rate and we charge a small fee per session." },
  { icon: EyeOff, title: "Invisible partner", description: "The experience is fully yours. NetworkCore never appears to the driver." },
  { icon: ShieldCheck, title: "No cannibalisation", description: "We touch only the public charging sessions we enable. The rest of your platform stays entirely yours." },
  { icon: Building2, title: "Solid infrastructure", description: "We have built the technology stack for you to use it." },
];
const whoFor = [
  { icon: Truck, title: "Fleet management platforms", description: "adding public charging to their software" },
  { icon: Fuel, title: "Fuel and fleet card providers", description: "extending the card to EV charging" },
  { icon: Package, title: "Logistics and delivery fleets", description: "keeping vehicles charged on route" },
  { icon: CarTaxiFront, title: "Taxi, ride-hail and car-share operators", description: "charging across the city" },
  { icon: Briefcase, title: "Corporate and mobility fleet managers", description: "giving drivers public access" },
  { icon: KeyRound, title: "Rental and leasing fleets", description: "offering charging with the vehicle" },
];
const faqs = [
  { question: "What exactly do you provide?", answer: "Two things. Access to public charging across every network we are connected to, and the settlement for every session." },
  { question: "Does this cover depot or home charging?", answer: "No. This covers public charging on the road. Depot and home charging are yours." },
  { question: "Do you handle fleet management, reporting, or driver authorisation?", answer: "That stays in your platform. We provide the public charging access and the settlement underneath it, and your product keeps owning the fleet experience, the reporting and the controls." },
  { question: "How many networks and markets does this cover?", answer: "One connection exposes the whole network, and coverage grows as we add markets, with no new contracts on your side." },
];

const pageUrl = "https://networkcore.org/distribution-partners/public-ev-charging-for-fleets";
const title = "Public EV Charging for Fleets | NetworkCore";

const PublicEvChargingForFleets = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"Public EV Charging for Fleets","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Public Charging for the Whole Fleet</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Fleet Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The Depot Is Solved, the Road Is Not</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>Your fleet is going electric fast, and public charging is where it gets hard. Drivers leave the depot and charging scatters across dozens of networks with no clean way to access or pay for it. Personal cards come out, receipts go missing, and the finance team reconciles by hand. There is negotiation and no transparency in pricing. It's messy.</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Own</h2>
        <div className="grid gap-5 md:grid-cols-2">
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
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become a Fleet Partner <ArrowRight /></a></Button></div>
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

    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Designed for Low-Risk Adoption</h2>
        <div className="grid gap-8 md:grid-cols-2">
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
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Fleet Partner</h2>
        <PartnerSignupForm
          formLabel="Fleet Partner Signup"
          submitLabel="Become a Fleet Partner"
          collapseRequiredAfter={3}
          collapsedRequiredLabel="Complete partner details"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
            { name: "fleetPlatformType", label: "Fleet platform type", type: "select", required: true, placeholder: "Select platform type", options: ["Fleet management platform", "Fuel / fleet card provider", "Logistics or delivery fleet", "Taxi, ride-hail, or car-share", "Corporate or mobility fleet", "Rental or leasing", "Other"] },
            { name: "markets", label: "Markets you operate in", type: "text", required: true, placeholder: "e.g. Germany, UK, Spain" },
            { name: "vehiclesUnderManagement", label: "Vehicles under management", type: "select", required: true, placeholder: "Select range", options: ["Under 1,000", "1,000 to 10,000", "10,000 to 50,000", "50,000 to 250,000", "250,000+"] },
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

export default PublicEvChargingForFleets;
