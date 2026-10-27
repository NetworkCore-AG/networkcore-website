import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, KeyRound, Globe, ThumbsUp, SlidersHorizontal, LifeBuoy, CalendarCheck, Zap, Receipt, Repeat, Users, Wrench, Luggage } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Every EV rental comes with charging that works inside your app or on a link handed over at the counter.";

const layers = [
  { icon: KeyRound, title: "Charging that arrives with the car", description: "The customer gets public charging the moment they get the keys, in your app, in the booking confirmation, or on a link handed over at the counter. Nothing to download, nothing to sign up for." },
  { icon: Globe, title: "Every charger in the market", description: "One connection covers every operator in every market you rent in, with live price and availability. One-way rentals and cross-border trips included, with no deal per country." },
  { icon: ThumbsUp, title: "An EV your counter staff want to offer", description: "When charging is handled, the EV upgrade becomes an easy yes instead of a conversation nobody wants to have. Utilisation on the EV fleet goes up." },
  { icon: SlidersHorizontal, title: "Charging on your terms", description: "Choose which operators and sites your customers see, set a value per rental, and decide whether charging is included, metered or sold as an upgrade." },
  { icon: LifeBuoy, title: "Handled end to end", description: "Payment, invoicing, VAT, disputes and support sit with us. Your counter team never becomes a charging helpdesk." },
];
const customerMoments = [
  { icon: CalendarCheck, title: "Charging anticipated", description: "Charging arrives with the booking. A link, or a page in your app, covering every charger around them." },
  { icon: Zap, title: "On the road", description: "They find a working charger, see the price before they start, plug in and charge. No operator app, no new account, no card they did not expect. All stays with your brand." },
  { icon: Receipt, title: "At return", description: "Charging is already settled and documented. Nothing to reconcile, nothing to dispute, nothing to explain." },
];
const whoFor = [
  { icon: KeyRound, title: "Car rental brands and franchises", description: "charging handed over with the keys" },
  { icon: Repeat, title: "Car subscription services", description: "charging as part of the monthly package" },
  { icon: Users, title: "Car sharing and peer-to-peer platforms", description: "charging for a driver in a car that is not theirs" },
  { icon: Wrench, title: "Dealer courtesy and loaner fleets", description: "an EV loaner the customer can actually use" },
  { icon: Luggage, title: "Mobility and travel packages", description: "charging bundled with the vehicle, not sold beside it" },
];
const faqs = [
  { question: "What does it cost?", answer: "On public price, access to the whole network is free. When you buy wholesale, you buy at the operator's rate and decide what the rental charges. There are no subscription or setup fees." },
  { question: "Do we have to integrate with our reservation system?", answer: "No. You can start by handing a link over at the counter or adding it to the confirmation email, with no change to your systems. A full integration into your app is available whenever you want it, on the same rails." },
  { question: "What about one-way rentals and cross-border trips?", answer: "One connection covers every operator in every market we are connected to. The customer charges the same way whether they return the car to the same branch or three countries away." },
  { question: "Who handles it when a customer has a problem charging?", answer: "We do, behind your brand. Session monitoring, operator coordination and problem-solving sit with us, so charging never becomes a call to your branch or a line in a review." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-car-rental";
const title = "EV Charging for Car Rental | NetworkCore";

const EvChargingForCarRental = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Car Rental","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Hand Over the Keys and the Charging</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Rental Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">The Fuel Policy Is Solved. The Charging Policy Isn't.</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>Full-to-full has worked for a century. Everyone understands it, nobody argues about it, and it closes at the counter in one second. There is no EV equivalent.</p>
          <p>The customer is the problem, and it is not their fault. They have an unfamiliar car, in an unfamiliar city, often for the first time in their life, with a plug they have never seen and a dozen operators between them and a charge. Meanwhile the ICE in the next bay has a petrol station on every corner.</p>
          <p className="font-normal">You bought the EVs, but the charging experience is what decides whether anyone takes them.</p>
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
      <div className="mt-8 text-center"><Button asChild size="lg"><a href="#apply">Become a Rental Partner <ArrowRight /></a></Button></div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">Charging Included, with Charge Pack</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p><Link to="/products/charge-pack" className="underline underline-offset-4 hover:no-underline">Charge Pack</Link> is a charging allowance you issue with the rental. You set the size, and you decide who funds it: you, a charging operator, or both together.</p>
          <p>Build it into the daily rate and advertise charging included. Sell a bigger one at the counter. Or just cover the first charge, which is the one that scares people.</p>
          <p>Either way the customer drives off with charging they already have, so there is nothing to settle when they bring the car back.</p>
        </div>
        <div className="mt-10"><Button asChild size="lg"><a href="#apply">Become a Rental Partner <ArrowRight /></a></Button></div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What Your Customers Experience</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {customerMoments.map(({ icon: Icon, title: heading, description: text }) => <article key={heading} className="rounded-lg border border-border/50 bg-card/30 p-6">
            <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-light text-foreground">{heading}</h3>
            <p className="font-light leading-relaxed text-foreground">{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Rental Partner</h2>
        <PartnerSignupForm
          formLabel="Car Rental Partner Signup"
          submitLabel="Become a Rental Partner"
          collapseRequiredAfter={3}
          collapsedRequiredLabel="Complete partner details"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
            { name: "rentalType", label: "Business type", type: "select", required: true, placeholder: "Select business type", options: ["Car rental brand / franchise", "Car subscription", "Car sharing / peer-to-peer", "Dealer courtesy / loaner fleet", "Mobility / travel package", "Other"] },
            { name: "markets", label: "Markets you operate in", type: "text", required: true, placeholder: "e.g. Germany, UK, Spain" },
            { name: "evFleetSize", label: "EVs in your fleet", type: "select", required: true, placeholder: "Select range", options: ["Under 100", "100 to 1,000", "1,000 to 10,000", "10,000 to 50,000", "50,000+"] },
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

export default EvChargingForCarRental;
