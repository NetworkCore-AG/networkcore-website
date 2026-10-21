import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Car, Wallet, Truck, ParkingCircle, Plane, Building2, Shield, Landmark, Network, Palette, Plug, Route, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import DistributionPartnerPricing from "@/components/DistributionPartnerPricing";
import ApiPreviewSection from "@/components/api-hub/ApiPreviewSection";
import PageFaqSection from "@/components/PageFaqSection";

const categories = [
  {
    "title": "OEMs and automotive",
    "description": "Native in-car and in-app charging, under your badge.",
    "linkLabel": "EV charging for OEMs",
    "href": "/distribution-partners/ev-charging-for-oems"
  },
  {
    "title": "Financial platforms",
    "description": "Wallets, neobanks, card issuers, loyalty and expense apps. Capture the spend.",
    "linkLabel": "EV charging for financial platforms",
    "href": "/distribution-partners/ev-charging-for-financial-platforms"
  },
  {
    "title": "Fleets",
    "description": "Public charging on the road, on one bill, for the fleets you already serve.",
    "linkLabel": "Public EV charging for fleets",
    "href": "/distribution-partners/public-ev-charging-for-fleets"
  },
  {
    "title": "Parking and road platforms",
    "description": "Park and charge in a single flow, in the bay they already booked.",
    "linkLabel": "EV charging for parking and road platforms",
    "href": "/distribution-partners/ev-charging-for-parking-and-road-platforms"
  },
  {
    "title": "Travel and hospitality",
    "description": "Hotels, destinations and travel apps. The car charges while they stay.",
    "linkLabel": "EV charging for travel and hospitality",
    "href": "/distribution-partners/ev-charging-for-travel-and-hospitality"
  },
  {
    "title": "Employee benefits",
    "description": "Salary sacrifice, mobility budgets and corporate programmes. The benefit that includes charging.",
    "linkLabel": "EV charging for employee benefits",
    "href": "/distribution-partners/ev-charging-for-employee-benefits"
  },
  {
    "title": "Insurance and driver services",
    "description": "Insurers, roadside assistance and motoring clubs. The new breakdown is an empty battery.",
    "linkLabel": "EV charging for insurance and driver services",
    "href": "/distribution-partners/ev-charging-for-insurance-and-driver-services"
  },
  {
    "title": "Public sector mobility",
    "description": "Cities, authorities and campuses. One neutral, official way to charge.",
    "linkLabel": "EV charging for public sector mobility",
    "href": "/distribution-partners/ev-charging-for-public-sector-mobility"
  }
];
const categoryIcons = [Car, Wallet, Truck, ParkingCircle, Plane, Building2, Shield, Landmark];
const benefitIcons = [Network, Palette, Plug, Route, Landmark, Headphones];
const benefits = [
  {
    "title": "Every charger, one connection",
    "description": "One integration reaches every operator on the network, across markets, with no deal and no technical work per operator. Coverage grows as we add markets."
  },
  {
    "title": "Your brand, your interface",
    "description": "The charging experience lives inside your product, with your design and your transaction. NetworkCore never appears to the user."
  },
  {
    "title": "Nothing to build",
    "description": "No chargers, no roaming agreements, no payments operation, no charging team. You distribute charging. We run it."
  },
  {
    "title": "Mapping & Routing",
    "description": "We work with mapping and routing partners as needed, or you run your stack and we sit behind for the technical and financial charging session."
  },
  {
    "title": "Settled on regulated rails",
    "description": "Clearing, settlement, taxes, currencies, reconciliation and compliant invoicing, on rails built within licensed, safeguarded structures."
  },
  {
    "title": "Support handled at source",
    "description": "Session monitoring, operator coordination and problems with the networks are ours. Charging never becomes a ticket in your queue. End user support can also be ours, or yours."
  }
];
const dpFaqs = [
  {
    "question": "What does it cost?",
    "answer": "Setup, integration, API access and the front-end module are included, with no subscription and no launch cost. We work with two models: Public Price and Wholesale Price. On public price, access to the whole network is free. On wholesale price, we charge you a small commission per transaction."
  },
  {
    "question": "How do drivers see this in my app? Is it my brand?",
    "answer": "Yours entirely. Your interface, your brand, your transaction. NetworkCore is invisible to the driver."
  },
  {
    "question": "Can we choose which operators appear in our product?",
    "answer": "Yes. Select which operators and which sites appear, and on which model."
  },
  {
    "question": "What does integration involve?",
    "answer": "A single REST-native API for discovery, availability, session control and reporting. Most launches are operational within weeks. Ask us for documentation to review it."
  }
];

const DistributionPartners = () => (
  <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Distribution Partners | NetworkCore</title>
        <meta name="description" content="Embed EV charging as a new revenue stream for distribution partners. NetworkCore offers convenient access to public charging networks with programmable commissions per session." />
        <meta property="og:title" content="EV Charging for Distribution Partners | NetworkCore" />
        <meta property="og:description" content="Embed EV charging as a new revenue stream for distribution partners. NetworkCore offers convenient access to public charging networks with programmable commissions per session." />
        <meta property="og:image" content="https://networkcore.org/og/og-distribution-partners-hero.jpg" />
        <meta property="og:url" content="https://networkcore.org/distribution-partners" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Charging for Distribution Partners | NetworkCore" />
        <meta name="twitter:description" content="Embed EV charging as a new revenue stream. Convenient access to public charging networks with programmable commissions." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-distribution-partners-hero.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"}]})}</script>
      </Helmet>
    <Navigation />
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-section-dark">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-light leading-tight text-background md:text-4xl lg:text-5xl">Charging, Inside Your Product</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg font-light leading-relaxed text-background/70 md:text-xl">Your users already charge. You can now bring every charger on the network into your product, under your brand, at no cost to you.</p>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><a href="#apply">Get connected <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="border border-background/60 text-background hover:bg-background/10 hover:text-background"><Link to="/pricing">See pricing</Link></Button>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return <Link key={category.href} to={category.href} className="flex min-w-0 items-center gap-4 rounded-lg border border-background/25 bg-background/5 p-4 text-left text-background backdrop-blur-sm transition-colors hover:border-background/60 hover:bg-background/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background/30 text-background/80">{Icon && <Icon className="h-5 w-5" />}</span>
              <span className="min-w-0 flex-1 text-base font-light">{category.title}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-background/50" />
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light text-foreground md:text-4xl">EV Charging Everywhere</h2>
        <div className="space-y-5 text-lg font-light leading-relaxed text-foreground">
          <p>EV charging is the fastest-growing, highest-frequency category of mobility spend, and almost none of it runs through the platforms that already own the driver.</p>
          <p>Every session that happens somewhere else is transaction volume, engagement and data which you can monetise.</p>
          <p>You do not have to build any of it. Charging with NetworkCore behaves like any other transaction once the rails are in place, and the rails are already in place.</p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-light text-foreground md:text-4xl">What You Get</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return <div key={benefit.title} className="rounded-lg border border-border/50 bg-card/30 p-6">
            {Icon && <Icon className="mb-4 h-5 w-5 text-electric-green" aria-hidden="true" />}
            <h3 className="mb-3 text-xl font-light text-foreground">{benefit.title}</h3>
            <p className="text-base font-light leading-relaxed text-foreground">{benefit.description}</p>
          </div>; })}
        </div>
      </div>
    </section>

    <section className="py-20">
      <DistributionPartnerPricing hideNote />
      <div className="mt-8 text-center"><Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90"><a href="#apply">Get connected <ArrowRight /></a></Button></div>
    </section>

    <ApiPreviewSection title="What Your Users Could Experience" description="Three moments of the charging journey, which can be fully embedded inside your product" />

    <section id="apply" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-light text-foreground md:text-4xl">Get connected</h2>
        <PartnerSignupForm
          formLabel="Distribution Partner Signup"
          submitLabel="Get connected"
          collapseRequiredAfter={3}
          collapsedRequiredLabel="Complete partner details"
          helperText="We'll reach out within 48 hours. No spam, no automated sequences."
          requiredFields={[
            { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
            { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
            { name: "company", label: "Company", type: "text", required: true, placeholder: "Company name" },
            { name: "platformType", label: "Platform type", type: "select", required: true, placeholder: "Select platform type", options: ["Automotive (OEM, leasing, dealerships, marketplaces)", "Mobility & Fleet", "Financial (wallets, neobanks, cards, loyalty)", "Parking & Tolling", "Travel, Hospitality & Destinations", "Insurance & Driver Services", "Corporate & Benefits", "Public Sector Mobility", "Other"] },
            { name: "monthlyActiveUsers", label: "Monthly active users", type: "select", required: true, placeholder: "Select range", options: ["Under 50,000", "50,000 to 500,000", "500,000 to 2M", "2M to 10M", "10M+"] },
          ]}
          optionalFields={[{ name: "tellUsMore", label: "Tell us more", type: "textarea", placeholder: "Anything else we should know?" }]}
        />
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-light text-foreground md:text-4xl">Find Your Category</h2>
        <p className="mb-12 text-center text-lg font-light leading-relaxed text-foreground">The layer is the same for everyone. What changes is the moment you already own.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return <Link key={category.href} to={category.href} className="flex min-w-0 items-start gap-4 rounded-lg border border-border/50 bg-card/30 p-6 transition-colors hover:border-foreground/30">
              {Icon && <Icon className="mt-1 h-5 w-5 shrink-0 text-electric-green" />}
              <div className="min-w-0">
                <h3 className="mb-2 text-xl font-light text-foreground">{category.title}</h3>
                <p className="mb-4 text-base font-light leading-relaxed text-foreground">{category.description}</p>
                <span className="text-sm font-light text-foreground">→ {category.linkLabel}</span>
              </div>
            </Link>;
          })}
        </div>
      </div>
    </section>
    <PageFaqSection items={dpFaqs} />
    <Footer />
  </div>
);

export default DistributionPartners;
