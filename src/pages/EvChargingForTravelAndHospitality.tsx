import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, PlugZap, LifeBuoy, MapPin, Zap, Receipt, Eye, EyeOff, Building2, BedDouble, ShoppingBag, PlaneTakeoff, Tent, Map, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "EV drivers filter hotels, stops and destinations by charging before they book. Offering it puts you on the shortlist. Offering it seamlessly keeps you there.";

const layers = [
  { icon: Smartphone, title: "Charging in your app", description: "Guests find, reserve, start and pay for charging inside your app, booking flow or loyalty programme. No separate charging app, no new account, and the session lands next to their booking." },
  { icon: Globe, title: "Every charger, one connection", description: "One connection covers charging on the way to you and everywhere they travel. For travel apps, the whole journey, not just the destination." },
  { icon: PlugZap, title: "Your chargers, on the network", href: "/private-hosts", description: "Chargers at your property can join the network: visible, reservable and payable to every driver on it, not just your guests. Your car park starts appearing on the map EV drivers actually search." },
  { icon: LifeBuoy, title: "Handled end to end", description: "Support, monitoring, settlement and compliant receipts, behind your brand. You run the destination, we run the charging." },
];
const guestMoments = [
  { icon: MapPin, title: "Find", description: "They see charging availability and price at your property and around it while booking or on arrival." },
  { icon: Zap, title: "Charge", description: "They plug in and start the session from your app." },
  { icon: Receipt, title: "Done", description: "The session and a clean receipt sit alongside their booking." },
];
const guarantees = [
  { icon: Eye, title: "No markup, ever", description: "On public price, guests pay the operator's exact tariff and no markup touches your brand. Where you buy wholesale, you set the price and own it end to end." },
  { icon: EyeOff, title: "Invisible partner", description: "The experience is fully yours. NetworkCore never appears to the guest." },
  { icon: Building2, title: "No infrastructure", description: "No network to build, no settlement stack to run, no long lock-in." },
];
const whoFor = [
  { icon: BedDouble, title: "Hotels and resort groups", description: "the stay that fills the battery, bookable by charging" },
  { icon: ShoppingBag, title: "Retail and leisure destinations", description: "footfall and dwell time from drivers who shop while they charge" },
  { icon: PlaneTakeoff, title: "Airports and travel hubs", description: "the car charges while they fly" },
  { icon: Tent, title: "Holiday and caravan parks", description: "a week parked becomes a week charged" },
  { icon: Map, title: "Travel apps and booking platforms", description: "answer \"can I charge there\" for every trip" },
  { icon: Award, title: "Hospitality loyalty programmes", description: "charging as the perk members use every visit" },
];
const faqs = [
  { question: "What does it cost?", answer: "On public price, access to the whole network is free. When you buy wholesale, you buy at the operator's rate and decide what your guests pay. There are no subscription or setup fees." },
  { question: "Our chargers are for guests. Can we control who uses them and when?", answer: "Your chargers, your rules. You decide how they are offered, to your guests, to the wider network, or both, and on what terms." },
  { question: "Can we offer charging free or discounted as a guest perk?", answer: "Yes. Many destinations treat charging as the modern welcome drink. You decide the perk and fund it, and we run the charging behind it, with every session documented. Buying wholesale makes the same budget go further." },
  { question: "Who runs support when a guest has a charging problem?", answer: "We do, behind your brand. Session monitoring, operator coordination and problem-solving are handled, so charging never becomes a front-desk issue or a review complaint. If you want to run support, we can also give your team the tools. It's simple." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-travel-and-hospitality";
const title = "EV Charging for Hotels, Destinations & Travel Platforms | NetworkCore";

const EvChargingForTravelAndHospitality = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Travel & Hospitality","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">A Reason to Choose You</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">EV Drivers Book Around Charging</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>More of your guests arrive in EVs every season, and they plan around charging before they plan around you. Charging has moved from an amenity to a filter: if the answer to "can I charge there" is unclear, you are off the list before you were ever considered.</p>
          <p>Dwell time makes this yours to win. Highway fast-charging competes on speed. You do not have to. The car is sitting in your car park for hours anyway.</p>
          <p>And you do not have to become a charging company. Your app and your chargers connect to rails that already exist, and everything behind them is run for you.</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Own</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {layers.map(({ icon: Icon, title: heading, description: text, href }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{href ? <Link to={href} className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">{heading}</Link> : heading}</h3>
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
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Guests Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {guestMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
        <p className="mt-10 text-center text-lg font-light leading-relaxed text-foreground">Every step is customisable to your brand and flow through our API.</p>
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
          formLabel="Travel & Hospitality Partner Signup"
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

export default EvChargingForTravelAndHospitality;
