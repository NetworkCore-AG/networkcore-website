import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Car, Globe, Eye, Settings, Route, Landmark, Gauge, Cpu, Receipt, Building2, Rocket, Smartphone, Briefcase, Repeat, Store, Truck, Tag, Key, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const layers = [
  { icon: Car, title: "Native to the vehicle", description: "The entire charging journey stays inside your brand. You own the screen, the data, and the relationship. A Tesla-grade experience, on your EVs." },
  { icon: Globe, title: "Global access, one integration", description: "Real coverage from day one, plus the option to turn your scale into negotiating power with the operators that matter most to your drivers." },
  { icon: Eye, title: "Brand-safe pricing", description: "Every charge reinforces trust instead of eroding it. On public price, the number on the car's screen is the number at the plug." },
  { icon: Settings, title: "Charging-as-a-service", description: "You run the experience, we run the charging business.", chargePack: true },
  { icon: Route, title: "Mapping & Routing", description: "We work with mapping and routing partners as needed, or you run your stack and we sit behind for the technical and financial charging session." },
  { icon: Landmark, title: "Financial infrastructure, handled", description: "Clearing, settlement, taxes, currencies and invoicing, on rails built within licensed, safeguarded structures. You never become a payments company." },
];
const driverMoments = [
  { icon: Gauge, title: "In-dash discovery and reservation", description: "The car finds an available, compatible stall, shows live price and availability, and lets the driver reserve it (limited)." },
  { icon: Cpu, title: "Experience", description: "The driver plugs in, taps start charge. The car authenticates and authorises payment automatically. No app, no card. Price is same as public." },
  { icon: Receipt, title: "Account and invoice", description: "Session, cost and compliant invoice land in the driver's account in your product. Clean, branded, done." },
];
const guarantees = [
  { icon: Eye, title: "No markup, ever", description: "On public price, drivers pay the operator's exact public tariff, positively reinforcing your brand. Where you buy wholesale, you set the price and own it end to end." },
  { icon: Car, title: "Invisible partner", description: "The experience is one hundred per cent yours. NetworkCore never appears to the driver. First line of support can be yours or ours." },
  { icon: Building2, title: "No infrastructure", description: "No capex, no hardware, no network to build, no long-term lock-in." },
  { icon: Rocket, title: "Pilot first", description: "Start in a single market, prove the model, then scale. No global commitment up front." },
];
const whoFor = [
  { icon: Smartphone, title: "Connected-car and companion apps", description: "the in-app charging account and history", separator: ": " },
  { icon: Car, title: "In-vehicle infotainment and head units", description: "native in-dash discovery, routing and control", separator: ": " },
  { icon: Briefcase, title: "Leasing and financing arms", description: "charging bundled into the monthly relationship", separator: ": " },
  { icon: Repeat, title: "Vehicle subscription programmes", description: "charging as an included or metered feature", separator: "_ " },
  { icon: Store, title: "Certified pre-owned and used-EV marketplaces", description: "a native experience that follows the car to its second owner", separator: ": " },
  { icon: Truck, title: "OEM fleet and commercial sales", description: "managed charging for B2B buyers", separator: ": " },
  { icon: Key, title: "Dealer networks", description: "charging set up the moment the keys change hands", separator: ": " },
  { icon: Tag, title: "OEM-branded charging programmes", description: "your charging brand, our rails", separator: ": " },
];
const oemFaqs = [
  { question: "How is this different from building our own network, or joining a roaming hub?", answer: "Building a network is billions and a new business to run. A traditional roaming hub gives you connectivity but not the brand-safe pricing, the financial rails, or the managed operations. NetworkCore gives you the whole layer, and you integrate once." },
  { question: "Who owns the driver and the charging data?", answer: "You do. NetworkCore is invisible to the driver, and the charging intelligence feeds your navigation, range and product planning. We are the layer, not the brand." },
  { question: "Can we negotiate directly with specific charging networks?", answer: "Yes. Operators set wholesale rates you can buy at directly, and where your volume or brand justifies it you can agree a rate privately with an individual network. On those sessions you set the price and stand as merchant of record. Everything runs through the same hub and settlement rails." },
];

const EvChargingForOems = () => (
  <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for OEMs | NetworkCore</title>
        <meta name="description" content="Native, brand-owned EV charging for automakers — in-car, Plug & Charge ready, every market, one integration. No network to build. Earn on every session." />
        <meta property="og:title" content="EV Charging for OEMs | NetworkCore" />
        <meta property="og:description" content="Native, brand-owned EV charging for automakers — in-car, Plug & Charge ready, every market, one integration. No network to build. Earn on every session." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-oems" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-oems" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for OEMs","item":"https://networkcore.org/distribution-partners/ev-charging-for-oems"}]})}</script>
      </Helmet>
    <Navigation />
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Seamless Access to Public EV Charging</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">Embed charging directly into the vehicle and your app: discovery, pricing, authentication, payment, and invoicing, all under your brand.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become an OEM Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">Whoever Owns the Charging Screen Owns the Driver</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>The charging experience is now part of the car. Drivers judge your EVs, and review them, partly on how charging feels. Tesla set the bar: native, in-car, no card.</p>
          <p>Today the screen and charging flow belongs to third-party apps. Every month they deepen a relationship that should be yours: the routing, the payment, the data, the habit. And if you think you have a solution, you are basically running a charging operation with payments, invoicing, VAT, etc.</p>
          <p>Building your own network could be the answer, but that’s billions, and to be honest, you can do better…</p>
          <p>Integration is the answer, and it is measured in weeks and development resources.</p>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Own</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map(({ icon: Icon, title, description, chargePack }) => <article key={title} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{title}</h3>
            <p className="font-light leading-relaxed text-foreground">{description}{chargePack && <> See our <Link to="/products/charge-pack" className="underline underline-offset-4">Charge Pack product</Link> to manage successfully your EV launches.</>}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className="py-20">
      <DistributionPartnerPricing hideNote />
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become an OEM Partner <ArrowRight /></a></Button></div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Drivers Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {driverMoments.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{title}</h3>
            <p className="font-light leading-relaxed text-foreground">{description}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Designed for Low-Risk Adoption</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {guarantees.map(({ icon: Icon, title, description }) => <div key={title} className="border-t border-border pt-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{title}</h3>
            <p className="font-light leading-relaxed text-foreground">{description}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become an OEM Partner</h2>
        <PartnerSignupForm
          formLabel="OEM Partner Signup"
          submitLabel="Become an OEM Partner"
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
          {whoFor.map(({ icon: Icon, title, description, separator }) => <div key={title} className="flex items-start gap-4 border-t border-border py-5">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-electric-green" aria-hidden="true" />
            <p className="font-light leading-relaxed text-foreground"><span className="font-medium">{title}</span>{separator}{description}</p>
          </div>)}
        </div>
      </div>
    </section>
    <PageFaqSection items={oemFaqs} />
    <Footer />
  </div>
);

export default EvChargingForOems;
