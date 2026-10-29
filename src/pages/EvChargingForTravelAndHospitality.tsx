import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Star, BatteryCharging, Smartphone, Globe, MapPin, Settings, TrendingUp, Eye, Sparkles, Building2, Rocket, Search, Zap, Receipt, Hotel, ShoppingBag, Plane, Tent, Compass, Award, Code2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <Star className="w-5 h-5" />, title: "A Reason to Choose You", description: "EV drivers now filter hotels, stops, and destinations by charging before they book. Offering it puts you on their shortlist; offering it seamlessly keeps you there. Charging stops being an amenity and becomes a booking driver." },
  { icon: <BatteryCharging className="w-5 h-5" />, title: "Full While They Stay", description: "Dwell time is your asset. The car sits in your car park for hours anyway, so the stay itself fills the battery. Guests leave with a full charge and one more reason to come back." },
  { icon: <Smartphone className="w-5 h-5" />, title: "Charging in Your App", description: "Guests find, reserve, start, and pay for charging inside your app, booking flow, or loyalty program. No separate charging app, no new account, and the session lands next to their booking." },
  { icon: <Globe className="w-5 h-5" />, title: "Every Charger, One Connection", description: "One connection gives your guests charging across every network and market, on the way to you and everywhere they travel. For travel apps, the whole journey is covered, not just the destination." },
  { icon: <MapPin className="w-5 h-5" />, title: "Your Chargers, On the Network", description: "Chargers at your property join the network: visible, reservable, and payable to every driver on it, not just your guests. Your car park starts appearing on the map EV drivers actually search, bringing new visitors and earning on every session." },
  { icon: <Settings className="w-5 h-5" />, title: "Handled End to End", description: "We run support, monitoring, settlement, and compliant receipts behind your brand: taxes, currencies, reconciliation, and invoices included. You run the destination, we run the charging. No charging team." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "A New Revenue Stream", description: "You earn on the sessions your guests run through your app, and on the sessions your own chargers serve. Two streams from assets you already have: your audience and your car park." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "On the public network, guests pay the operator's exact public price. No markup ever touches your brand." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is fully yours. NetworkCore never appears to the guest." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No network to build, no settlement stack to run, no long lock-in." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start with one property, one market, or one feature, prove it, then scale." },
];

const userMoments = [
  { icon: <Search className="w-5 h-5" />, title: "Find", description: "They see charging at your property and around it while booking or on arrival, with live price and availability, and can reserve." },
  { icon: <Zap className="w-5 h-5" />, title: "Charge", description: "They plug in, start the session from your app, and go enjoy the stay. The car fills while they do." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session and a clean receipt sit alongside their booking. They check out with a full battery." },
];

const whoFor = [
  { icon: <Hotel className="w-5 h-5" />, title: "Hotels & resort groups", description: "the stay that fills the battery, bookable by charging" },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Retail & leisure destinations", description: "footfall and dwell time from drivers who shop while they charge" },
  { icon: <Plane className="w-5 h-5" />, title: "Airports & travel hubs", description: "the car charges while they fly" },
  { icon: <Tent className="w-5 h-5" />, title: "Holiday & caravan parks", description: "a week parked becomes a week charged" },
  { icon: <Compass className="w-5 h-5" />, title: "Travel apps & booking platforms", description: "answer \"can I charge there\" for every trip" },
  { icon: <Award className="w-5 h-5" />, title: "Hospitality loyalty programs", description: "charging as the perk members use every visit" },
];

const travelFaqs = [
  { question: "Do you install chargers at our properties?", answer: "No. We are the network and the rails, not an installer. If you already have chargers, we connect them so they are visible, reservable, and payable to every driver on the network, and they earn. If you do not have chargers yet, you can still offer guests charging through your app across the public network, and we can point you to operators who deploy hardware." },
  { question: "Our chargers are for guests. Can we control who uses them and when?", answer: "Your chargers, your rules. You decide how they are offered, to your guests, to the wider network, or both, and on what terms. Opening them to the network brings new visitors and revenue, but it is your call." },
  { question: "Can we offer charging free or discounted as a guest perk?", answer: "Yes. Many destinations treat charging as the modern welcome drink. You decide the perk and fund it, and we run the charging behind it, with every session documented." },
  { question: "What do guests pay on the public network?", answer: "The operator's exact public price. No markup, no spread. On your own chargers, the tariff is yours to set." },
  { question: "We are a travel app without physical properties. Does this still fit?", answer: "Yes. You are the pure platform case: your travelers find, reserve, and pay for charging through your app across every network, on the whole journey. Answering \"can I charge there\" becomes something you do natively." },
  { question: "Who runs support when a guest has a charging problem?", answer: "We do, behind your brand. Session monitoring, operator coordination, and problem-solving are handled, so charging never becomes a front-desk issue or a review complaint." },
  { question: "How do we earn?", answer: "Two ways. A transparent per-session share on charging your guests run through your app, and revenue from sessions on your own connected chargers. Both paid automatically, both from assets you already have." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control, and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForTravelAndHospitality = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Hotels, Destinations & Travel Platforms | NetworkCore</title>
        <meta name="description" content="Add EV charging to your hotel, destination, or travel platform. Guests charge while they stay, your chargers join the network, and every session earns." />
        <meta name="keywords" content="hotel EV charging, EV charging for hotels, destination EV charging, travel app EV charging, airport EV charging, holiday park EV charging" />
        <meta property="og:title" content="EV Charging for Hotels, Destinations & Travel Platforms | NetworkCore" />
        <meta property="og:description" content="Add EV charging to your hotel, destination, or travel platform. Guests charge while they stay, your chargers join the network, and every session earns." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-travel-and-hospitality" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-travel-and-hospitality" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Travel & Hospitality","item":"https://networkcore.org/distribution-partners/ev-charging-for-travel-and-hospitality"}]})}</script>
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
            The Car Charges While They Stay
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            Your guests park for hours: a night at the hotel, an afternoon at the mall, a week at the airport. That is the best charging there is, no waiting, no detour, the battery fills while they sleep, shop, or fly.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Partner</h2>
            <PartnerSignupForm
              heroMode
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
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* The wedge */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              The Embedded Charging Layer for Travel & Hospitality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-5xl mx-auto">
              A complete layer that lets hotels, destinations, and travel platforms offer charging to guests through the app and booking experience they already run, put their own chargers on the network map, and earn on every session, without building charging operations, integrating operators, or running settlement.
            </p>
          </div>
        </div>
      </section>

      {/* What You Own */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The whole offer starts with why guests choose you and ends with what you earn.
            </p>
          </div>

          <div className="space-y-14">
            {layers.map((l, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-6">
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
          <div className="max-w-5xl mx-auto space-y-5 text-lg text-foreground leading-relaxed font-light text-center">
            <p>The shift is not EV adoption; it is whether EV drivers can book you with confidence.</p>
            <p>More of your guests arrive in EVs every season, and they plan around charging before they plan around you.</p>
            <p>Dwell time makes this yours to win. Highway fast-charging competes on speed; you do not have to.</p>
            <p>And you do not have to become a charging company. Your app and your chargers connect to rails that already exist, and everything behind them is run for you.</p>
          </div>
          <div className="text-center mt-10">
            <Button
              variant="ghost"
              size="compact"
              onClick={scrollToForm}
              className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Why Destinations Move Early */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Destinations Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early partners do not just add charging. They claim the position before someone else does.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "One anchor partner per market, with preferential economics reserved for early movers",
              "Priority integration and a say in the roadmap",
              "The first destination brand with seamless charging becomes where EV travelers default to",
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

      {/* Guest Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Guests Experience
            </h2>
            <p className="text-lg text-foreground font-light">
              Three steps, all inside the experience they already booked.
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
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/60 bg-card/40">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground font-light">
                Every step is fully customisable to your brand and flow through our API.
              </span>
            </div>
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
              You already own the destination and the guest. NetworkCore adds the charging that makes EV drivers choose it.
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

      

      <PageFaqSection items={travelFaqs} background="muted" />
      <Footer />
    </div>
  );
};

export default EvChargingForTravelAndHospitality;
