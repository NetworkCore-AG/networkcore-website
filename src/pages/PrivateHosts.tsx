import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChargingPartnerPricing from "@/components/ChargingPartnerPricing";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";
import PageFaqSection from "@/components/PageFaqSection";
import ProcessDiagram from "@/components/how-it-works/ProcessDiagram";

const phFaqs = [{"question": "Does this make me a charging operator?", "answer": "No. Your hardware stays, your software stays, your direct customers stay. We run alongside as an extra demand channel and handle payments, invoicing, VAT and disputes on the sessions we bring you."}, {"question": "Can I keep bays free for my guests?", "answer": "Yes. Open only some connectors, only at the hours that suit you, at only the sites you choose. Change any of it at any time."}, {"question": "What happens to my existing customers?", "answer": "Nothing. We only earn on sessions we bring you. Drivers already using your bays directly remain yours."}, {"question": "Do I need to change hardware or software?", "answer": "No. We are hardware-neutral and work with any CPMS over OCPI. We never ask you to switch vendors."}, {"question": "What if you bring me no new drivers?", "answer": "You pay nothing. And if your sessions have not increased within 90 days, the commission is waived for the next 90."}];
const costRows = [{"label": "Setup", "value": "Included"}, {"label": "Platform access", "value": "Included"}, {"label": "Integration", "value": "Included"}, {"label": "Payment processing", "value": "Included"}, {"label": "Invoicing and VAT", "value": "Included"}, {"label": "Driver authentication", "value": "Included"}, {"label": "Fraud, chargebacks and disputes", "value": "Included"}, {"label": "Reconciliation and reporting", "value": "Included"}, {"label": "Audit-ready records", "value": "Included"}, {"label": "Public price commission", "value": "One per-session commission, agreed with you before launch, only on the sessions we bring you"}, {"label": "Wholesale rate commission", "value": "Free, you receive 100% of the price you set"}, {"label": "Commitment", "value": "Free to leave, thirty days' notice"}];
const controls = [{"title": "Which bays", "text": "Open some and keep the rest for the people you built them for."}, {"title": "Which hours", "text": "Open the quiet part of the day and keep check-in and evenings for your guests."}, {"title": "Which sites", "text": "Publish site by site. Keep any location direct-only."}, {"title": "Which partners", "text": "Choose who sees each site, and on which terms."}];
const handled = ["Driver identity and authorisation", "Payment capture and processing", "Invoicing, VAT and energy tax", "Fraud, chargebacks and disputes", "Reconciliation and audit records", "Settlement into your account, in your currency"];

const PrivateHosts = () => (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Private Hosts - Earn from Your Charger | NetworkCore</title>
        <meta name="description" content="Monetise your existing EV chargers with zero ops. NetworkCore turns private hosts — hotels, retail, workplaces — into earning sites on a global demand network." />
        <meta property="og:title" content="Private Hosts - Earn from Your Charger | NetworkCore" />
        <meta property="og:description" content="Monetise your existing EV chargers with zero ops. NetworkCore turns private hosts — hotels, retail, workplaces — into earning sites on a global demand network." />
        <meta property="og:image" content="https://networkcore.org/og/og-private-hosts.jpg" />
        <meta property="og:url" content="https://networkcore.org/private-hosts" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Hosts - Earn from Your Charger | NetworkCore" />
        <meta name="twitter:description" content="Monetise your existing EV chargers with zero ops. Hotels, retail, workplaces become earning sites on a global demand network." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-private-hosts.jpg" />
        <link rel="canonical" href="https://networkcore.org/private-hosts" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Private Hosts","item":"https://networkcore.org/private-hosts"}]})}</script>
      </Helmet>
      <Navigation />
      <section className="relative min-h-[90svh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/videos/private-hosts.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-background"><span className="block">More drivers.</span><span className="block">Same chargers.</span><span className="block">Nothing to run.</span></h1>
          <p className="text-lg md:text-xl text-background/80 leading-relaxed max-w-3xl font-light mb-8">Your bays were built for guests. Most of the day they sit empty. We fill them with paying drivers from the apps those drivers already use, and handle everything that follows.</p>
          <div className="flex flex-wrap gap-4"><Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><Link to="/charging-partners/calculator">What are my bays worth?</Link></Button><Button asChild size="lg" variant="outline" className="border-background/50 text-background bg-transparent hover:bg-background/10 hover:text-background"><a href="#signup-form">Talk to us</a></Button></div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-px bg-background/50 motion-safe:animate-pulse" aria-hidden />
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">You Did Not Set Out to Run a Charging Business</h2>
<div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed text-center">
              <p>You host EV charging because your business depends on something else. The chargers exist to serve guests, customers, tenants, employees, residents.</p>
              <p>They sit idle most of the day. The economics rarely work. And the obvious fix, going out and finding drivers, means becoming a charging operator: pricing, payments, invoicing, tax, disputes, support.</p>
              <p>That is not your job and you do not want it to be. So the bays stay empty, and the investment stays unpaid.</p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">How It Works</h2>
<div className="grid md:grid-cols-3 gap-8 text-lg text-muted-foreground font-light leading-relaxed">
<p className="border-t border-border pt-6">Your chargers connect to NetworkCore once, through your existing CPMS. No new hardware, no migration, no vendor change.</p><p className="border-t border-border pt-6">Your sites then appear inside the apps drivers already use: car navigation, fleet platforms, wallets, insurers, parking apps. Drivers arrive already identified and already paid for.</p><p className="border-t border-border pt-6">Everything you run today carries on exactly as it is. We sit alongside it and bring drivers on top.</p>
          </div>
          <div className="mt-14">
            <ProcessDiagram kind="charging-partner" />
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">What We Handle</h2>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {handled.map((item) => <li key={item} className="flex items-start gap-3 font-light text-foreground"><Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-electric-green" /><span>{item}</span></li>)}
          </ul>
          <p className="mt-10 text-lg text-foreground text-center font-light">Your team never becomes a charging team.</p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChargingPartnerPricing />
        <p className="mt-10 text-center text-lg text-muted-foreground font-light leading-relaxed">You can use one with some partners and the other with others, and change your mind at any time.</p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">You Decide What the Network Sees</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {controls.map((item) => <div key={item.title} className="border-t border-border pt-5"><h3 className="text-xl font-light text-foreground mb-3">{item.title}</h3><p className="font-light leading-relaxed text-muted-foreground">{item.text}</p></div>)}
          </div>
          <p className="mt-10 text-center text-lg font-light text-foreground">Change any of it at any time.</p>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">What It Costs</h2>
          <p className="mb-8 text-center text-lg font-medium text-foreground">No fixed costs. No setup fees. No monthly subscriptions. No integration fees.</p>
          <div className="overflow-hidden rounded-lg border border-border/60 bg-card/60">
            <dl>{costRows.filter((row) => !row.label.toLowerCase().includes("commission")).map((row, index) => <div key={row.label} className={`grid gap-1.5 px-5 py-4 transition-colors hover:bg-primary/5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] sm:gap-8 sm:px-7 ${index ? "border-t border-border/60" : ""}`}><dt className="text-base font-normal text-foreground">{row.label}</dt><dd className="min-w-0 text-base font-light leading-relaxed text-foreground">{row.value === "Included" && <Check aria-hidden className="mr-2 inline-block h-4 w-4 align-middle text-electric-green" />}{row.value}</dd></div>)}</dl>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20"><div className="max-w-5xl mx-auto px-4 text-center"><p className="text-3xl md:text-5xl font-light text-foreground leading-tight">We Only Earn When You Earn</p></div></section>
      <PageFaqSection items={phFaqs} />
      <section id="signup-form" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">Apply to become a Private Host</h2>
            <PartnerSignupForm
              collapseRequiredAfter={2}
            formLabel="Private Host Signup"
            submitLabel="Start earning more from my chargers"
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
              {
                name: "siteType",
                label: "Site type",
                type: "select",
                required: true,
                placeholder: "Select site type",
                options: ["Hotel", "Retail", "Office / business park", "Restaurant", "Residential building", "Parking", "Other"],
              },
              {
                name: "chargerCount",
                label: "Number of chargers installed",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: ["1", "2–5", "6–20", "20+", "Planning to install"],
              },
            ]}
            optionalFields={[
              {
                name: "location",
                label: "City / region / country",
                type: "text",
                placeholder: "e.g. Madrid, Spain",
              },
              {
                name: "cpms",
                label: "CPMS / management system in use",
                type: "select",
                placeholder: "Select system",
                options: ["None", "Ampeco", "Monta", "Wallbox", "ChargePoint", "Other", "Not sure"],
              },
              {
                name: "utilisation",
                label: "Average current utilisation",
                type: "select",
                placeholder: "Select utilisation",
                options: ["Mostly empty", "Some use", "Busy", "Don't know"],
              },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
);

export default PrivateHosts;
