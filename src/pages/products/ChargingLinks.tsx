import { Helmet } from "react-helmet-async";
import { ArrowRight, Link2, Network, FileText, Smartphone, Mail, CalendarCheck, MapPin, Headphones, FlaskConical, Zap, Code2, UserRoundCheck, ChartNoAxesCombined, Layers, CircleDollarSign, Infinity } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";
import ChargingLinksBrochureForm from "@/components/forms/ChargingLinksBrochureForm";
import { chargingLinksProduct } from "@/data/chargingLinks";
import heroPoster from "@/assets/hero-background.jpg";

const steps = [
  ["01", "Receive", "Every connector on the network has its own permanent link. We share the set with you, scoped to the operators, regions and sites you want."],
  ["02", "Place", "Put them anywhere you already reach drivers: your app, a map listing, an email, a message, a booking confirmation, a support reply."],
  ["03", "Charge", "The driver taps, finds a charger, pays by card, and charges. No app to download, no account to create."],
  ["04", "Settle", "Operators are paid. Sessions are reconciled. You see all of it on one statement."],
];
const placements = [
  { icon: Smartphone, title: "Inside your app", text: "Charging live in your product before a single line of integration work." },
  { icon: Mail, title: "In an email or message", text: "A welcome sequence, a renewal, a win-back, a seasonal campaign." },
  { icon: CalendarCheck, title: "In a booking or order confirmation", text: "Charging offered at the moment someone has committed to arriving." },
  { icon: MapPin, title: "On a map or route listing", text: "A link from the place drivers already plan their journeys." },
  { icon: Headphones, title: "In a support conversation", text: "A driver who needs a charge now, answered with something they can use now." },
  { icon: FlaskConical, title: "In a pilot", text: "Test demand in one city, one cohort or one campaign before anyone builds anything." },
];
const benefits = [
  { icon: Zap, text: "Live in a day, not a quarter" },
  { icon: Code2, text: "No app, no SDK, no release cycle, no roadmap slot" },
  { icon: UserRoundCheck, text: "No account for the driver, no download, nothing to sign up for" },
  { icon: Network, text: "Every charger on the network, or selected operators, regions and site types" },
  { icon: ChartNoAxesCombined, text: "Sessions, energy, spend and location, reported by link" },
  { icon: Layers, text: "An upgrade path to a full integration whenever you are ready" },
  { icon: CircleDollarSign, text: "Launching costs you nothing" },
  { icon: Infinity, text: "Links are permanent, so anything you publish keeps working" },
];
const specifications = [
  ["Creation", "CSV or REST API"],
  ["Scope", "Whole network, operator, region, or single site"],
  ["Driver requirement", "None. No app, no account"],
  ["Payment", "Card, at the link (more payment methods will come)"],
  ["Pricing", "Public price"],
  ["Validity", "Open-ended or time-limited"],
  ["Reporting", "Sessions, energy, spend and location, by link"],
  ["Launch", "Same day"],
];
const description = chargingLinksProduct.description;
const title = "Charging Links - EV charging without an integration | NetworkCore";

export default function ChargingLinks() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://networkcore.org${chargingLinksProduct.href}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://networkcore.org${chargingLinksProduct.href}`} />
      </Helmet>
      <Navigation />
      <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-foreground pt-24 pb-16">
        <video autoPlay muted loop playsInline poster={heroPoster} className="absolute inset-0 h-full w-full object-cover">
          <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Charging Links</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-background/80 md:text-xl">{description}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The Fastest Way In</h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
            <p>Every other way into the network needs (at least a little) engineering time. An API to integrate, screens to design, a release to ship, a roadmap slot to win.</p>
            <p>Most platforms agree charging belongs in their product long before they can find the quarter to build it. So nothing happens, and their drivers keep charging somewhere else.</p>
            <p className="text-foreground">A link needs none of that.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">How It Works</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, heading, text]) => <div key={number} className="border-t border-border pt-6"><p className="mb-4 text-sm text-muted-foreground">{number}</p><h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3><p className="font-light leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 border-y border-border py-8 text-center sm:flex-row" aria-label="Your link → Every charger on the network → One statement">
            {[{ icon: Link2, text: "Your link" }, { icon: Network, text: "Every charger on the network" }, { icon: FileText, text: "One statement" }].map(({ icon: Icon, text }, index) => <div className="contents" key={text}>{index > 0 && <ArrowRight className="h-5 w-5 rotate-90 text-electric-green sm:rotate-0" aria-hidden="true" />}<div className="flex items-center gap-3 text-foreground"><Icon className="h-6 w-6 shrink-0 text-electric-blue" strokeWidth={1.5} aria-hidden="true" /><span className="font-light">{text}</span></div></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Where Links Live</h2>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {placements.map(({ icon: Icon, title: heading, text }) => <div key={heading}><Icon className="mb-5 h-7 w-7 text-electric-blue" strokeWidth={1.5} aria-hidden="true" /><h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3><p className="font-light leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-light text-foreground md:text-4xl">Get the Payment Links brochure in your inbox</h2>
          <ChargingLinksBrochureForm />
        </div>
      </section>

      <section id="buy-price" className="scroll-mt-24 py-20 md:py-28">
        <DistributionPartnerPricing publicOnly={chargingLinksProduct.pricing === "public"} title="Buy & Price" />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Get</h2>
          <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {benefits.map(({ icon: Icon, text }) => <li className="flex items-start gap-4" key={text}><Icon className="mt-1 h-6 w-6 shrink-0 text-electric-blue" strokeWidth={1.5} aria-hidden="true" /><span className="text-lg font-light leading-relaxed text-foreground">{text}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">Specification</h2>
          <dl className="border-t border-border">{specifications.map(([term, detail]) => <div key={term} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[11rem_1fr] sm:gap-8"><dt className="font-medium text-foreground">{term}</dt><dd className="font-light text-muted-foreground">{detail}</dd></div>)}</dl>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-light text-foreground md:text-4xl">Charging live tomorrow, not next quarter.</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">Tell us where you already reach drivers. Fifteen minutes and we'll have links in your hands.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg"><a href="#contact">Book a scoping call</a></Button>
            <Button asChild size="lg" variant="outline"><a href="#buy-price">See pricing</a></Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}