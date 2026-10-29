import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, Gift, Globe, Eye, Landmark, Settings, MapPin, Zap, Receipt, PiggyBank, CreditCard, BadgePercent, Briefcase, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";

const description = "Add EV charging to your app so users find, start, and pay for it on the balance or card they already keep with you.";

const layers = [
  { icon: Wallet, title: "Charging in your wallet", description: "Users find, start and pay for charging inside your app, on the balance or card they already keep with you. No separate charging app, no new account." },
  { icon: Gift, title: "Charging powers your rewards", description: "Because charging now runs through your app, your cashback, points and rewards apply to it like any other spend. Your card becomes the one they reach for, again and again." },
  { icon: Globe, title: "Every charger, one connection", description: "Our connection gives your users charging at thousands of stations across every network and market, with no deal or integration per operator." },
  { icon: Eye, title: "Brand-safe pricing", description: "On public price, users pay the charger's exact tariff. No markup, no hidden fee. The price in your app is the price at the plug." },
  { icon: Landmark, title: "Financial", description: "You handle the payment. We handle the clearing and settling each session with every network." },
  { icon: Settings, title: "Charging-as-a-service", description: "We run support, monitoring and any problems with the networks. You distribute charging, we run it." },
];
const userMoments = [
  { icon: MapPin, title: "Find", description: "They see chargers near them, with live price and availability, and can reserve one (limited)." },
  { icon: Zap, title: "Charge", description: "They start the session and pay on the balance or card already in your app." },
  { icon: Receipt, title: "Done", description: "The session and a clean receipt sit alongside the rest of their spending in your app." },
];
const whoFor = [
  { icon: Wallet, title: "Digital wallets and payment apps", description: "capturing a big new recurring spend" },
  { icon: PiggyBank, title: "Neobanks and digital banks", description: "giving account holders charging where their money lives" },
  { icon: CreditCard, title: "Card issuers", description: "driving card preference with rewards on charging" },
  { icon: BadgePercent, title: "Cashback and loyalty apps", description: "" },
  { icon: Briefcase, title: "Expense platforms", description: "letting EV-driving employees charge and expense in one place" },
  { icon: Fuel, title: "Fuel card apps", description: "extending the card from fuel to public charging" },
];
const faqs = [
  { question: "What does it cost?", answer: "Setup, integration, API access and the front-end module are included, with no subscription and no launch cost. On public price, access to the whole network is free. Where you buy wholesale, you buy at the operator's rate and keep whatever margin you choose to set." },
  { question: "Most of our users do not drive EVs yet. Is this worth adding?", answer: "It serves the EV-driving share of your base, which grows every quarter, and for those users charging is one of the most frequent spends they have. It costs nothing to add and captures a category before a competitor does." },
  { question: "Can we negotiate our own rates with specific networks?", answer: "Yes, especially where your volume gives you leverage." },
  { question: "Who handles the money with the charging networks, and where are funds held?", answer: "We do. NetworkCore clears and settles every session with every network, including taxes, currencies, reconciliation and invoices, on rails operated within licensed, safeguarded structures. Where you buy wholesale, the user-facing billing stays with you." },
  { question: "What does integration involve?", answer: "A single REST API for discovery, availability, session control and reporting." },
];

const pageUrl = "https://networkcore.org/distribution-partners/ev-charging-for-financial-platforms";
const title = "EV Charging for Financial Platforms | NetworkCore";

const EvChargingForFinancialPlatforms = () => (
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
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Financial Platforms","item":pageUrl}]})}</script>
    </Helmet>
    <Navigation />

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-left sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Charging Belongs in Your Wallet</h1>
        <p className="mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">{description}</p>
        <div className="flex flex-wrap justify-start gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Become a Partner <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">Share of Wallet Is Decided by Category</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>More of your users drive electric every quarter, and their charging spend is large, frequent and growing. Every session is volume, engagement and card usage. Super-apps win on share of wallet.</p>
          <p>You do not have to build anything, only connect to our API. Charging behaves like any other transaction in your platform, as we handle all the technical, compliance and settlement flow behind the payment, which you handle.</p>
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

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Become a Partner</h2>
        <PartnerSignupForm
          formLabel="Financial Platform Partner Signup"
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
            <p className="font-light leading-relaxed text-foreground"><span className="font-medium">{heading}</span>{text && <>: {text}</>}</p>
          </div>)}
        </div>
      </div>
    </section>

    <PageFaqSection items={faqs} />
    <Footer />
  </div>
);

export default EvChargingForFinancialPlatforms;
