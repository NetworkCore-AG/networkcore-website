import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessDiagram from "@/components/how-it-works/ProcessDiagram";
import PageFaqSection from "@/components/PageFaqSection";
import {
  Building2,
  Truck,
  Zap,
  Mail,
  ArrowRight,
  Users,
  Wallet,
  ShieldCheck,
  SlidersHorizontal,
  Globe2,
} from "lucide-react";

const heroLinks = [
  { icon: Zap, title: "CPOs", href: "/charge-point-operators" },
  { icon: Building2, title: "Private Hosts", href: "/private-hosts" },
  { icon: Truck, title: "Fleet Hosts", href: "/fleet-hosts" },
  { icon: Mail, title: "Contact Us", href: "/#contact" },
];

const offers = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "New Demand",
    text: "Drivers arrive through the apps, cars, wallets and fleet platforms they already use. Our connection reaches all of them, and it grows as the network grows.",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Fast Settlement",
    text: "Money for the sessions you deliver arrives in days, not weeks, in the currency you want it in.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Chargebacks and Fraud Absorbed",
    text: "Chargebacks and fraud are handled beneath the connection, with evidence assembled at the time the session happens rather than months later.",
  },
  {
    icon: <SlidersHorizontal className="w-5 h-5" />,
    title: "Your Pricing, Your Control",
    text: "You set the tariff. You decide which stations are published to the network and which stay direct-only, and you can change it at any time.",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    title: "One Integration, Every Market",
    text: "Standard OCPI into the CSMS/CPMS you already run. Work on standard terms or negotiate individually with eMSPs.",
  },
];

const products = [
  {
    identity: "identity-cp",
    band: "Charging Partners",
    title: "Network Access",
    href: "/products/network-access",
    text: "The way in for anyone who runs chargers. You keep the chargers and the pricing. We bring the drivers, settle the money and carry the paperwork.",
  },
  {
    identity: "identity-pack",
    band: "Charging & Distribution Partners",
    title: "Charge Pack",
    href: "/products/charge-pack",
    text: "Funded charging you can co-fund to win first sessions on your sites. Scoped by value, region, site type and hours, funded only when it is redeemed.",
  },
];

const cpFaqs = [
  {
    question: "What does it cost to connect?",
    answer: "Nothing to connect and nothing to hold. There are no subscriptions, no access fees and no minimums. We are paid an agreed commission only on the sessions we actually deliver to your chargers, so the connection only ever costs anything while it is producing revenue.",
  },
  {
    question: "Do I lose control of my pricing?",
    answer: "No. You set your tariff and it reaches the driver exactly as you set it, with nothing added on the way through. If you would rather sell a partner energy at an agreed rate per kWh and let them price their own drivers, you can do that too, and you receive that rate in full.",
  },
  {
    question: "Do I have to publish all of my chargers?",
    answer: "No. You choose which stations are visible to the network and which stay direct-only, and you can change it at any time. Connecting does not hand your network over.",
  },
  {
    question: "Is this exclusive, and can I keep my existing roaming?",
    answer: "It is not exclusive and you keep everything you already have. NetworkCore is an additional demand channel that sits alongside your direct customers, your own app and any roaming hubs you already use.",
  },
  {
    question: "What do I actually have to build?",
    answer: "In most cases, nothing. We connect over standard OCPI to the CSMS or CPMS you already run. No hardware changes, no new back office, and no operational team to hire.",
  },
];

const ChargingPartners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Charging Partners | EV Charging Demand, Settlement and Roaming | NetworkCore</title>
        <meta name="description" content="For charge point operators, private hosts and fleet depots. Bring paying drivers to chargers you have already built, keep your own pricing, and get paid fast. One OCPI connection, no capex, no exclusivity." />
        <meta property="og:title" content="Charging Partners | EV Charging Demand, Settlement and Roaming | NetworkCore" />
        <meta property="og:description" content="You run the chargers. We run the rest. NetworkCore is the demand and settlement layer that brings drivers to chargers you have already built, at the prices you set." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/charging-partners" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Charging Partners | EV Charging Demand and Settlement | NetworkCore" />
        <meta name="twitter:description" content="You run the chargers. We run the rest. The demand and settlement layer for chargers you have already built." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/charging-partners" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Charging Partners","item":"https://networkcore.org/charging-partners"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":cpFaqs.map(f=>({"@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer}}))})}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/cpo-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Fill Your Chargers</h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">
            If you own chargers, you have already done the hard part. NetworkCore is the demand and settlement layer that brings drivers to them and money to you.
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {heroLinks.map(({ icon: Icon, title, href }) => (
              <Link
                key={href}
                to={href}
                className="flex min-w-0 items-center gap-4 rounded-lg border border-background/25 bg-background/5 p-4 text-left text-background backdrop-blur-sm transition-colors hover:border-background/60 hover:bg-background/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background/30 text-background/80">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1 text-base font-light">{title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-background/50" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The proposition */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-8 text-balance">
            You Run the Chargers. We Run the Rest.
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            A Charging Partner is anyone with chargers in the ground: a public charging network, a hotel or retail site, a workplace, a depot. Whatever the setting, the problem is the same. The asset is built and paid for, and the thing that decides whether it earns is how many drivers can actually reach it and how quickly the money comes back.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            NetworkCore connects your chargers to the platforms that already own the drivers, then handles the payment, the settlement, the invoicing and the disputes underneath.
          </p>
        </div>
      </section>

      {/* How we connect */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-12">How We Connect</h2>
          <ProcessDiagram kind="charging-partner" />
          <p className="mt-10 text-center text-base text-muted-foreground font-light">
            The full mechanics are on <Link to="/how-it-works" className="text-primary underline hover:no-underline">How It Works</Link>, and the live coverage is on <Link to="/the-network" className="text-primary underline hover:no-underline">The Network</Link>.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-14">What You Get</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border/60 bg-card/60 p-7">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">{o.icon}</div>
                <h3 className="text-lg font-medium text-foreground mb-3">{o.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who you are */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-5">Find Your Side of the Network</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              The commercial model is the same for everyone. What changes is what the chargers are for and who was already using them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Link to="/charge-point-operators" className="group rounded-2xl border border-border/60 bg-card/60 p-7 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5"><Zap className="w-5 h-5" /></div>
              <h3 className="text-lg font-medium text-foreground mb-3">Charge Point Operators</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">Public networks adding a demand channel that costs nothing to hold and settles fast. Utilisation without more capex.</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">For CPOs <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
            </Link>
            <Link to="/private-hosts" className="group rounded-2xl border border-border/60 bg-card/60 p-7 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5"><Building2 className="w-5 h-5" /></div>
              <h3 className="text-lg font-medium text-foreground mb-3">Private Hosts</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">Hotels, retail, workplaces and car parks earning from bays that already exist, without becoming a charging business.</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">For hosts <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
            </Link>
            <Link to="/fleet-hosts" className="group rounded-2xl border border-border/60 bg-card/60 p-7 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5"><Truck className="w-5 h-5" /></div>
              <h3 className="text-lg font-medium text-foreground mb-3">Fleet Hosts</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">Depot charging that earns during the working day while your own vehicles stay first in line, on hours you set.</p>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">For depots <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-5">The Products Behind It</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Same rails underneath, different ways in.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((p) => (
              <Link key={p.title} to={p.href} className={`${p.identity} identity-card group flex flex-col rounded-2xl overflow-hidden`}>
                <div className="flex-1 p-7">
                  <h3 className="text-xl font-medium text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-5">{p.text}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Explore {p.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                <div className="identity-band flex items-center justify-between gap-2 px-7 py-3">
                  <span className="text-[9px] uppercase font-medium whitespace-nowrap">{p.band}</span>
                  <span className="identity-marker h-1 w-10 rounded-full" aria-hidden />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercials, lightly */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-8 text-balance">
            A Sales Channel, Not a Fixed Cost
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
            There are no subscriptions, no access fees and no minimums. Connecting costs nothing to set up and nothing to hold.
          </p>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
            You choose how each partner reaches your chargers: at your own public tariff, passed to the driver untouched, or at a wholesale rate you set and receive in full while the partner prices its own drivers.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-full text-foreground font-medium hover:bg-muted transition-colors"
          >
            See the full pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Closing line */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight mb-10">We Only Earn When You Earn</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-foreground text-background font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Become a Charging Partner
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PageFaqSection items={cpFaqs} background="muted" />

      <Footer />
    </div>
  );
};

export default ChargingPartners;
