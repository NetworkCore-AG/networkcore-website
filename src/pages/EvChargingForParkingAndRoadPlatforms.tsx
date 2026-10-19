import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Smartphone, Globe, Eye, CreditCard, Settings, Database, TrendingUp, Sparkles, Building2, Rocket, Gauge, Cpu, Receipt, ParkingCircle, Route, Wallet, Map, Car, Briefcase, Landmark } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <Smartphone className="w-5 h-5" />, title: "Native to Your App", description: "Users find, start, and pay for charging inside your app, on the card they already have. No new app, no new account; they charge where they already park and pay. The transaction stays yours." },
  { icon: <Globe className="w-5 h-5" />, title: "Global Access, One Integration", description: "One connection covers thousands of chargers in every market. Big enough volume? Cut your own deals for better rates. Coverage from day one, with room to negotiate." },
  { icon: <Eye className="w-5 h-5" />, title: "Brand-Safe Public Pricing", description: "Users pay the charger's public price. No markup, no hidden fee. The price in your app is the price at the plug." },
  { icon: <CreditCard className="w-5 h-5" />, title: "Charging Settlement, Handled", description: "We handle the money behind the scenes: taxes, currencies, reconciliation, invoices. For you its one clean line in your revenue." },
  { icon: <Settings className="w-5 h-5" />, title: "Charging-as-a-Service", description: "Support, monitoring, and problems with the networks are all handled. You don't need an opex or finance team. You add charging. We run it." },
  { icon: <Database className="w-5 h-5" />, title: "Real-Time Availability & Reservation", description: "Users see free chargers, reserve one, and start or stop from your app. Just like parking. Fewer wasted trips, more success." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "A New Revenue Stream", description: "You earn a share of every session, automatically. New income from users you already have. More transactions, more app opens, more revenue as EVs grow." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Users always pay the operator's exact public tariff. No markup ever touches your brand." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is 100% yours. NetworkCore never appears to the user." },
  { icon: <Wallet className="w-5 h-5" />, title: "No-Cannibalization Guarantee", description: "We earn only on charging sessions we enable. Your parking, tolling, and existing payment business stays entirely yours and entirely untouched." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No hardware, no network, no operator-settlement stack to build, no long-term lock-in." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start with one market or one feature, prove the model, then scale. No platform-wide commitment up front." },
];

const userMoments = [
  { icon: <Gauge className="w-5 h-5" />, title: "Find & reserve", description: "In the same app they use to find parking and tolling, users now see available chargers nearby, with live price and availability, and can reserve a stall before they arrive." },
  { icon: <Cpu className="w-5 h-5" />, title: "Start & charge", description: "They start the session from the app. Payment runs on the card already on file. One tap, no new account." },
  { icon: <Receipt className="w-5 h-5" />, title: "Receipt & wallet", description: "The session, the cost, and a compliant receipt land in the same wallet as their parking and tolls." },
];

const whoFor = [
  { icon: <ParkingCircle className="w-5 h-5" />, title: "Parking apps", description: "park-and-charge in a single flow, in the bay they already booked" },
  { icon: <Map className="w-5 h-5" />, title: "On-street & garage payment apps", description: "charging added to the space they're already paying for" },
  { icon: <Route className="w-5 h-5" />, title: "Tolling & road-usage apps", description: "charging along the roads you already serve, when range matters most" },
  { icon: <Wallet className="w-5 h-5" />, title: "Mobility payment platforms & wallets", description: "the missing category in the one-wallet promise" },
  { icon: <Landmark className="w-5 h-5" />, title: "MaaS aggregators", description: "charging slotted into the multimodal journey" },
  { icon: <CreditCard className="w-5 h-5" />, title: "Fuel & fleet mobility cards", description: "public EV charging added to the card drivers already carry" },
  { icon: <Building2 className="w-5 h-5" />, title: "Parking operators with their own app and lots", description: "your bays can also earn as charging sites" },
];

const faqs = [
  { question: "Do users need a separate charging account?", answer: "No. Charging runs on the payment method already on file in your app — same login, same wallet, same history. No new account, no redirect." },
  { question: "How is this different from just linking out to a charging app?", answer: "A handoff gives the user, the transaction data, and the engagement to someone else. Native charging keeps all of it inside your app." },
  { question: "Does it work across parking, tolling, and payment use cases?", answer: "Yes — it's one charging layer behind whichever flow you run. Parking apps surface charging at the bay; road apps surface it along the route; payment platforms add it as a wallet category. One integration underneath all three." },
  { question: "Who handles settlement with the charging operators?", answer: "We do. The consumer charge runs on your existing rails; NetworkCore clears and settles every session with every CPO, and handles charging VAT, FX, reconciliation, and compliant invoicing. You add a fully passive revenue line item." },
  { question: "Will charging markups hurt our brand?", answer: "No. Users pay the operator's exact public tariff — no markup, no spread. NetworkCore is invisible to the driver." },
  { question: "Can we negotiate directly with specific charging networks?", answer: "Yes. Standard access gives your users the whole network at public tariffs with no negotiation. Where your volume gives you leverage, you can strike direct, one-to-one agreements with individual CPOs — preferential rates, reserved capacity, co-branded locations — cleared through the same hub. You choose whether to keep the improved economics as margin or pass them to users as a perk." },
  { question: "How many chargers, and which markets?", answer: "One integration exposes the full network, and coverage expands as we add markets — with no new contracts on your side." },
  { question: "Can we earn on charging?", answer: "Yes — charging access becomes a new revenue stream. Commissions with the CPO are programmable and negotiable per relationship, and allocated automatically on every session, on net-new transaction volume from users you already have." },
  { question: "What does integration involve?", answer: "A single OCPI-native API for discovery, availability, session control, and reporting — plus a pre-built front-end module if you'd rather not design the charging UI yourself." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForParkingAndRoadPlatforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Parking & Mobility Platforms | NetworkCore</title>
        <meta name="description" content="Add native EV charging to your parking, tolling, or mobility-payment app — same user, same card, one integration. We run operator settlement; you keep the transaction." />
        <meta property="og:title" content="EV Charging for Parking & Mobility Platforms | NetworkCore" />
        <meta property="og:description" content="Add native EV charging to your parking, tolling, or mobility-payment app — same user, same card, one integration. We run operator settlement; you keep the transaction." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-parking-and-road-platforms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-parking-and-road-platforms" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Parking & Road Platforms","item":"https://networkcore.org/distribution-partners/ev-charging-for-parking-and-road-platforms"}]})}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/distribution-partners-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight text-white tracking-tight">
            Park & Charge
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light mb-6">
            Add EV charging directly into your parking, tolling, or mobility-payment app — discovery, reservation, session control, and payment, all on the rails you already run. No charging network to build, no operator settlement stack to run, just earn from your users.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Distribution Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Parking & Road Platform Partner Signup"
            submitLabel="Become a Distribution Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              { name: "company", label: "Company", type: "text", required: true, placeholder: "Platform / company name" },
              {
                name: "platformType",
                label: "Platform type",
                type: "select",
                required: true,
                placeholder: "Select platform type",
                options: [
                  "Parking",
                  "Tolling",
                  "Mobility payments",
                  "Other",
                ],
              },
              { name: "markets", label: "Markets you operate in", type: "text", required: true, placeholder: "e.g. Germany, UK, Mexico" },
              {
                name: "monthlyActiveUsers",
                label: "Monthly active users",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: [
                  "Under 50,000",
                  "50,000 to 500,000",
                  "500,000 to 2M",
                  "2M to 10M",
                  "10M+",
                ],
              },
            ]}
            optionalFields={[
              { name: "tellUsMore", label: "Tell us more", type: "textarea", placeholder: "Anything else we should know?" },
            ]}
          />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* Engine intro */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
            The Embedded Charging Layer for Parking & Road Platforms
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
            A complete charging layer that lets parking, tolling, and mobility-payment platforms add native EV charging to the app and the payment relationship they already own — and earn on every session — without building a network, integrating operators one by one, or running charging settlement and support.
          </p>
        </div>
      </section>

      {/* What You Own */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              It starts with what your users get and ends with what you earn
            </p>
          </div>

          <div className="space-y-14">
            {layers.map((l, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {l.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">
                    {l.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{l.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why This Matters Now
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5 text-lg text-foreground leading-relaxed font-light">
            <p>The shift isn't EV adoption by itself, but whose app the driver opens at the charger.</p>
            <p>EV charging is the fastest-growing, highest-frequency category of mobility spend, and right now it flows through charging apps and operator apps, not yours. Every EV driver in your base who charges elsewhere is transaction volume, engagement, and data you're handing to someone else.</p>
            <p>The mobility wallet is consolidating, and parking and charging are physically merging. As more bays become charging bays, an app that can route a driver to a space but can't power the car in it loses that driver to a charging app at the exact moment it had them.</p>
          </div>
          <div className="text-center mt-10">
            <Button
              variant="ghost"
              size="compact"
              onClick={scrollToForm}
              className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
            >
              Become a Distribution Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Why Platforms Move Early */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Platforms Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early platform partners claim the charging category before their users build the habit somewhere else.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "Founding-platform economics, locked for the partnership term",
              "Priority integration and roadmap influence on park-and-charge and route-charging flows",
              "A limited number of founding-partner slots per region, to protect rollout quality",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Designed for Low-Risk Adoption
            </h2>
            <p className="text-lg text-foreground font-light">
              Add charging with full brand control, minimal exposure, and a clear path to scale.
            </p>
          </div>
          <div className="space-y-14">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {g.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">{g.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Users Experience
            </h2>
            <p className="text-lg text-foreground font-light">
              Three moments all inside the app they already use, via the NetworkCore layer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userMoments.map((m, i) => (
              <div key={i} className="p-6 rounded-xl border border-border/50 bg-card/50">
                <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 mb-4">
                  {m.icon}
                </div>
                <div className="text-xs text-muted-foreground mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-light text-foreground mb-3 tracking-tight">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Who This Is For
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light max-w-3xl mx-auto">
              You already own the driver's payment relationship and the moment that matters. NetworkCore adds the one category that completes it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoFor.map((w, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-card/50 hover:border-foreground/20 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60">
                  {w.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-foreground mb-1 tracking-tight">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <PageFaqSection items={faqs} background="background" />
      <Footer />
    </div>
  );
};

export default EvChargingForParkingAndRoadPlatforms;
