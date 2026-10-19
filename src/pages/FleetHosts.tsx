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

const fhFaqs = [{"question": "Will external drivers interfere with my own vehicles charging?", "answer": "No. You set reserve capacity and time windows, and the platform enforces them on every session. External charging can only use headroom you have explicitly released, so your vehicles always have first call on the connection."}, {"question": "Will this change my energy costs?", "answer": "No. You set a power ceiling and external sessions draw only from the headroom you release, so they cannot push the site into a higher demand band. The energy they use is paid for at the rate you set, so the sessions carry their own cost."}, {"question": "Who comes onto my site, and how do I control it?", "answer": "Only as far as you choose. You decide the physical perimeter: a fenced sub-section, a row of bays near the entrance, or nothing at all. Every driver is pre-authenticated through a Distribution Partner, with identity verified and payment authorised before the session starts, and every session is logged against a named account."}, {"question": "What if I need the capacity back at short notice?", "answer": "Pause external access instantly, for as long as you like, with no notice period and no penalty. Peak weeks, fleet surges and maintenance windows are exactly what the control is for."}, {"question": "Does this turn my depot into a public charging business?", "answer": "No. Payment, invoicing, VAT, fraud, disputes and compliance all sit with NetworkCore. Your depot team keeps running the depot. The visible change is a revenue line."}, {"question": "What if my fleet grows into the capacity later?", "answer": "Reduce the hours or the bays you release, or close external access entirely. The platform adapts to whatever you set, and there is no penalty for scaling back."}];
const costRows = [{"label": "Setup", "value": "Included"}, {"label": "Platform access", "value": "Included"}, {"label": "Integration", "value": "Included"}, {"label": "Load management configuration", "value": "Included"}, {"label": "Payment processing", "value": "Included"}, {"label": "Invoicing and VAT", "value": "Included"}, {"label": "Driver authentication", "value": "Included"}, {"label": "Fraud, chargebacks and disputes", "value": "Included"}, {"label": "Reconciliation and reporting", "value": "Included"}, {"label": "Audit-ready records", "value": "Included"}, {"label": "Public price commission", "value": "One per-session commission, agreed with you before launch, only on the sessions we bring you"}, {"label": "Wholesale rate commission", "value": "Free, you receive 100% of the price you set"}, {"label": "Commitment", "value": "Free to leave, thirty days' notice"}];
const priorityItems = [{"title": "Your power is reserved", "text": "Set the headroom your fleet needs. External sessions draw only from what is left, and can never push your site into a higher demand band."}, {"title": "Your hours are yours", "text": "Open the part of the day that suits your operation. Outside those windows the depot is entirely yours, exactly as it is today."}, {"title": "Your bays are yours", "text": "Open a fenced sub-section, a row near the gate, or nothing at all. Most Fleet Hosts start with the bays closest to the entrance."}, {"title": "Pause instantly, for any reason", "text": "Peak week, fleet surge, maintenance, a bad feeling. Close external access with immediate effect. No notice, no penalty, no conversation."}];
const handled = ["Driver identity and authorisation", "Payment capture and processing", "Invoicing, VAT and energy tax", "Fraud, chargebacks and disputes", "Reconciliation and audit records", "Settlement into your account, in your currency"];

const FleetHosts = () => (
  <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fleet Hosts - Earn from Depot Charging | NetworkCore</title>
        <meta name="description" content="Turn idle depot charging hours into revenue. NetworkCore fills your fleet bays with paying drivers while your vehicles keep first call on every connection." />
        <meta property="og:title" content="Fleet Hosts - Earn from Depot Charging | NetworkCore" />
        <meta property="og:description" content="Turn idle depot charging hours into revenue. NetworkCore fills your fleet bays with paying drivers while your vehicles keep first call on every connection." />
        <meta property="og:image" content="https://networkcore.org/og/og-cpo-hero.jpg" />
        <meta property="og:url" content="https://networkcore.org/fleet-hosts" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fleet Hosts - Earn from Depot Charging | NetworkCore" />
        <meta name="twitter:description" content="Turn idle depot charging hours into revenue. Your vehicles keep first call on every connection." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-cpo-hero.jpg" />
        <link rel="canonical" href="https://networkcore.org/fleet-hosts" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Fleet Hosts","item":"https://networkcore.org/fleet-hosts"}]})}</script>
      </Helmet>
    <Navigation />
    <section className="relative min-h-[90svh] flex items-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/videos/cpo-hero.mp4" type="video/mp4" /></video>
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-28">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-background"><span className="block">Same depot.</span><span className="block">New revenue.</span><span className="block">Fleet always first.</span></h1>
        <p className="text-lg md:text-xl text-background/80 leading-relaxed max-w-3xl font-light mb-8">Your depot was built for its busiest hour, and that hour happens overnight. We fill the rest of the day with paying drivers, in the bays and windows you choose.</p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><Link to="/charging-partners/calculator">What is my depot worth?</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-background/50 text-background bg-transparent hover:bg-background/10 hover:text-background"><a href="#signup-form">Talk to us</a></Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-px bg-background/50 motion-safe:animate-pulse" aria-hidden />
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">The Depot Paradox</h2>
        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed text-center">
          <p>You sized the connection for the whole fleet charging at once. Groundworks, switchgear, transformer capacity, hardware, all specified for your busiest hour.</p>
          <p>Your busiest hour happens overnight.</p>
          <p>From the moment the vehicles roll out to the moment they return, the most capable charging asset in your postcode does nothing. Not because there is no demand, but because there has never been a safe way to let anyone else use it.</p>
          <p>Depots hold the scarcest resource in urban charging, grid capacity that already exists, and it is the least used infrastructure in the market.</p>
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">Your Fleet Always Comes First</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-muted-foreground font-light leading-relaxed text-center">Everything else on this page depends on this, so it comes first. Your vehicles always have first call on the connection, and the platform enforces it on every session.</p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {priorityItems.map((item) => <div key={item.title} className="border-t border-border pt-5"><h3 className="text-xl font-light text-foreground mb-3">{item.title}</h3><p className="font-light leading-relaxed text-muted-foreground">{item.text}</p></div>)}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-lg text-muted-foreground font-light leading-relaxed">
          <p className="border-t border-border pt-6">Your depot CPMS connects to NetworkCore once, over OCPI. No new hardware, no migration, no vendor change.</p>
          <p className="border-t border-border pt-6">You set the bays, the hours, the power ceiling and the reserve capacity for your own vehicles. Your depot then appears to drivers across the network, visible only inside the windows you opened.</p>
          <p className="border-t border-border pt-6">Drivers arrive pre-authenticated, with identity verified and payment authorised before they reach your gate. No anonymous arrivals, no cash, no forecourt staff, and every session logged against a named account.</p>
        </div>
        <div className="mt-14"><ProcessDiagram kind="charging-partner" firstNodeLabel="Your depot" /></div>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">What We Handle</h2>
        <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
          {handled.map((item) => <li key={item} className="flex items-start gap-3 font-light text-foreground"><Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-electric-green" /><span>{item}</span></li>)}
        </ul>
        <p className="mt-10 text-lg text-foreground text-center font-light">Your depot team keeps running the depot.</p>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChargingPartnerPricing />
        <p className="mt-10 text-center text-lg text-muted-foreground font-light leading-relaxed">Either rate can sit above what a public forecourt charges. Fast DC capacity in an industrial area is scarce, your hours are predictable enough for partners to plan around, and you are entitled to price both. Use one model with some partners and the other with others, and change your mind at any time.</p>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">What It Costs</h2>
          <p className="mb-8 text-center text-lg font-medium text-foreground">No fixed costs. No setup fees. No monthly subscriptions. No integration fees.</p>
        <div className="overflow-hidden rounded-lg border border-border/60 bg-card/60">
          <dl>{costRows.filter((row) => !row.label.toLowerCase().includes("commission")).map((row, index) => <div key={row.label} className={`grid gap-1.5 px-5 py-4 transition-colors hover:bg-primary/5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] sm:gap-8 sm:px-7 ${index ? "border-t border-border/60" : ""}`}><dt className="text-base font-normal text-foreground">{row.label}</dt><dd className="min-w-0 text-base font-light leading-relaxed text-foreground">{row.value === "Included" && <Check aria-hidden className="mr-2 inline-block h-4 w-4 align-middle text-electric-green" />}{row.value}</dd></div>)}</dl>
        </div>
        <p className="mt-8 text-center text-muted-foreground font-light">No capex. No new hardware. No change to your fleet operation.</p>
      </div>
    </section>
    <section className="py-16 md:py-20"><div className="max-w-5xl mx-auto px-4 text-center"><p className="text-3xl md:text-5xl font-light text-foreground leading-tight">We Only Earn When You Earn</p></div></section>
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">What Are Your Idle Hours Worth?</h2>
        <p className="text-lg text-muted-foreground font-light leading-relaxed text-center mb-8">Three numbers you already know, and you will see what every hour of use is worth across a year. No sign-up.</p>
        <div className="text-center"><Button asChild size="lg"><Link to="/charging-partners/calculator">Open the calculator →</Link></Button></div>
        <p className="mt-10 text-center text-lg text-muted-foreground font-light leading-relaxed">Logistics and last-mile depots, bus and coach operators, taxi and ride-hailing hubs, rental and leasing branches, corporate and utility fleets, waste and municipal yards. If you built charging for your own vehicles, this is for you.</p>
      </div>
    </section>
    <PageFaqSection items={fhFaqs} />
    <section id="signup-form" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-10">Apply to become a Fleet Host</h2>
            <PartnerSignupForm
              collapseRequiredAfter={2}
            formLabel="Fleet Host Signup"
            submitLabel="Start earning from my depot"
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              { name: "companyName", label: "Company name", type: "text", required: true, placeholder: "Your company" },
              { name: "country", label: "Country of operations", type: "text", required: true, placeholder: "e.g. United Kingdom" },
              {
                name: "fleetType",
                label: "Fleet type",
                type: "select",
                required: true,
                placeholder: "Select fleet type",
                options: ["Logistics & Delivery", "Public Transport", "Taxi & Ride-Hailing", "Rental & Leasing", "Corporate & Utility", "Waste & Municipal", "Other"],
              },
              {
                name: "chargerCount",
                label: "Number of depot chargers",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: ["1 to 5", "6 to 25", "26 to 100", "101 to 500", "500+"],
              },
            ]}
            optionalFields={[
              {
                name: "message",
                label: "Tell us more",
                type: "textarea",
                placeholder: "Anything else we should know about your depot...",
              },
            ]}
            optionalToggleLabel="Tell us more (optional)"
          />
      </div>
    </section>
    <Footer />
  </div>
);

export default FleetHosts;
