import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, Gauge, Settings, MapPin, Zap, Receipt, EyeOff, ShieldCheck, Building2, ParkingCircle, Map, Route, Wallet, Landmark, CreditCard, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Add EV charging directly into your mobility app: discovery, reservation, session control and payment, all on the rails you already run.";

const layers = [
  { icon: Smartphone, title: "Native to your app", description: "Users find, start and pay for charging inside your app, on the card they already have." },
  { icon: Globe, title: "Global access, one integration", description: "One connection covers thousands of chargers in every market." },
  { icon: Gauge, title: "Real-time availability and reservation", description: "Users see free chargers, reserve one, and start or stop from your app. Just like parking." },
  { icon: Settings, title: "Charging-as-a-service", description: "Support, monitoring and problems with the networks are all handled." },
];
const userMoments = [
  { icon: MapPin, title: "Find and reserve", description: "Users see available chargers nearby, with live price and availability, and can reserve a stall before they arrive." },
  { icon: Zap, title: "Start and charge", description: "They start the session from the app. Payment runs on the card already on file. One tap, no new account." },
  { icon: Receipt, title: "Receipt and wallet", description: "The session, the cost and a compliant receipt land in your ecosystem." },
];
const infrastructure = [
  { icon: EyeOff, title: "Invisible partner", description: "The experience is one hundred per cent yours; we never appear." },
  { icon: ShieldCheck, title: "No cannibalisation", description: "We touch only the charging sessions we enable." },
  { icon: Building2, title: "No infrastructure", description: "No hardware, no network, no operator-settlement stack to build." },
];
const whoFor = [
  { icon: ParkingCircle, title: "Parking apps", description: "park-and-charge in a single flow, in the bay they already booked" },
  { icon: Map, title: "On-street and garage payment apps", description: "charging added to the space they are already paying for" },
  { icon: Route, title: "Tolling and road-usage apps", description: "charging along the roads you already serve, when range matters most" },
  { icon: Wallet, title: "Mobility payment platforms and wallets", description: "the missing category in the one-wallet promise" },
  { icon: Landmark, title: "MaaS aggregators", description: "charging slotted into the multimodal journey" },
  { icon: CreditCard, title: "Fuel and fleet mobility cards", description: "public EV charging added to the card drivers already carry" },
  { icon: Warehouse, title: "Parking operators with their own app and lots", description: "your bays can also earn as charging sites" },
];
const faqs = [
  { question: "What does it cost?", answer: "Nothing to connect. Setup, integration, API access and the front-end module are included, with no subscription and no launch cost. On public price, access to the whole network is free. Where you buy wholesale, you buy at the operator's rate and keep whatever margin you choose to set. We charge a small commission on wholesale." },
  { question: "Do users need a separate charging account?", answer: "No. Charging runs on the payment method already on file in your app. Same login, same wallet, same history. No new account, no redirect." },
  { question: "How is this different from just linking out to a charging app?", answer: "A handoff gives the user, the transaction data and the engagement to someone else. Native charging keeps all of it inside your app." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-parking-and-road-platforms";
const title = "EV Charging for Parking & Mobility Platforms | NetworkCore";

const EvChargingForParkingAndRoadPlatforms = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Parking & Road Platforms","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Park &amp; Charge</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Distribution Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The Bay and the Charger Are Becoming the Same Thing</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>EV charging is the fastest-growing, highest-frequency category of mobility spend. Are you missing out on it? Every EV driver in your base who charges elsewhere is transaction volume, engagement and data you could be managing.</p>
          <p>The mobility wallet is consolidating, and parking and charging are physically merging. As more bays become charging bays, an app that can route a driver to a space but cannot power the car in it misses an opportunity to shine.</p>
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
      <DistributionPartnerPricing />
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become a Distribution Partner <ArrowRight /></a></Button></div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Users Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {userMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Solid Infrastructure</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {infrastructure.map(({ icon: Icon, title: heading, description: text }) => <div key={heading} className="border-t border-border pt-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Distribution Partner</h2>
        <PartnerSignupForm
          formLabel="Parking & Road Platform Partner Signup"
          submitLabel="Become a Distribution Partner"
          collapseRequiredAfter={3}
          collapsedRequiredLabel="Complete partner details"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Platform / company name" },
            { name: "platformType", label: "Platform type", type: "select", required: true, placeholder: "Select platform type", options: ["Parking", "Tolling", "Mobility payments", "Other"] },
            { name: "markets", label: "Markets you operate in", type: "text", required: true, placeholder: "e.g. Germany, UK, Spain" },
            { name: "monthlyActiveUsers", label: "Monthly active users", type: "select", required: true, placeholder: "Select range", options: ["Under 50,000", "50,000 to 500,000", "500,000 to 2M", "2M to 10M", "10M+"] },
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

export default EvChargingForParkingAndRoadPlatforms;
