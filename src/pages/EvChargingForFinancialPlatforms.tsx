import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Wallet, Gift, Globe, Eye, CreditCard, Settings, Rocket, Sparkles, Building2, Smartphone, Receipt, Landmark, Award, Briefcase, Fuel, TrendingUp, Search, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <Wallet className="w-5 h-5" />, title: "Charging in Your Wallet", description: "Users find, start, and pay for charging inside your app, on the balance or card they already keep with you. No separate charging app, no new account. You get a big, recurring spend now running through your wallet instead of someone else's." },
  { icon: <Gift className="w-5 h-5" />, title: "Charging Powers Your Rewards", description: "Because charging now runs through your app, your cashback, points, and rewards apply to it like any other spend. Your card becomes the one they reach for, again and again." },
  { icon: <Globe className="w-5 h-5" />, title: "Every Charger, One Connection", description: "One connection gives your users charging at thousands of stations across every network and market, with no deal or integration per operator." },
  { icon: <Eye className="w-5 h-5" />, title: "Brand-Safe Public Pricing", description: "Users pay the charger's public price: no markup, no hidden fee. The price in your app is the price at the plug, and the trust your brand runs on stays intact." },
  { icon: <CreditCard className="w-5 h-5" />, title: "Settlement on Regulated Rails", description: "You already move your users' money, and we handle the part you do not: clearing and settling each session with every network, including taxes, currencies, reconciliation, and invoices, on rails built within licensed, safeguarded structures." },
  { icon: <Settings className="w-5 h-5" />, title: "Charging-as-a-Service", description: "We run support, monitoring, and any problems with the networks. You distribute charging, we run it." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "A New Revenue Stream", description: "You earn a recurring revenue line, and more reasons for users to open your app and pay with you." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Users always pay the charger's public price. No markup ever touches your brand." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is fully yours. NetworkCore never appears to the user." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No hardware, no network, no settlement stack to build, no long lock-in." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start in one market, prove it, then scale." },
];

const userMoments = [
  { icon: <Search className="w-5 h-5" />, title: "Find", description: "They see chargers near them, with live price and availability, and can reserve one." },
  { icon: <Zap className="w-5 h-5" />, title: "Charge", description: "They start the session and pay on the balance or card already in your app." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session and a clean receipt sit alongside the rest of their spending in your app." },
];

const whoFor = [
  { icon: <Smartphone className="w-5 h-5" />, title: "Digital wallets and payment apps", description: "capturing a big new recurring spend" },
  { icon: <Landmark className="w-5 h-5" />, title: "Neobanks and digital banks", description: "giving account holders charging where their money lives" },
  { icon: <CreditCard className="w-5 h-5" />, title: "Card issuers", description: "driving card preference with rewards on charging" },
  { icon: <Award className="w-5 h-5" />, title: "Cashback and loyalty apps", description: "adding the highest-frequency category they are missing" },
  { icon: <Briefcase className="w-5 h-5" />, title: "Expense platforms", description: "letting EV-driving employees charge and expense in one place" },
  { icon: <Fuel className="w-5 h-5" />, title: "Fuel card apps", description: "extending the card from fuel to public charging" },
];

const fpFaqs = [
  { question: "Do users need a separate charging account?", answer: "No. Charging runs on the balance or card already in your app, with the same login and the same history. No new account, no redirect." },
  { question: "Most of our users do not drive EVs yet. Is this worth adding?", answer: "It serves the EV-driving share of your base, which grows every quarter, and for those users charging is one of the most frequent spends they have. It costs little to add, captures a category, and produces extra revenue per existing user." },
  { question: "Can users earn cashback or rewards on charging?", answer: "Yes. Because the spend now runs through your app, your existing cashback, points, and rewards apply to charging like any other transaction. You run your rewards." },
  { question: "Who handles the money with the charging networks, and where are funds held?", answer: "We do. Your users pay you the way they already do, and NetworkCore clears and settles every session with every network, including taxes, currencies, reconciliation, and invoices, on rails operated within licensed, safeguarded structures." },
  { question: "Will a markup hurt our brand?", answer: "No. Users pay the charger's public price. No markup, no spread. NetworkCore is invisible to them." },
  { question: "Can we negotiate our own rates with specific networks?", answer: "Yes. Standard access gives the whole network at public prices. Where your volume gives you leverage, you can strike direct deals with individual networks, and we settle them through the same hub." },
  { question: "How do we earn?", answer: "Charging access becomes a new revenue stream. Commissions with the CPO are programmable and negotiable per relationship, and allocated automatically on every session, on top of the card usage and engagement the category drives. The line grows with your EV-driving base, at no extra operational cost." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control, and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForFinancialPlatforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Financial Platforms (Wallets, Neobanks, Loyalty Apps, Expense Platforms, Fuel Cards) | NetworkCore</title>
        <meta name="description" content="Add EV charging to your wallet or neobank with one connection. Users pay and earn rewards on the card they already have, settlement handled, your brand. Built for fintech." />
        <meta name="keywords" content="EV charging for fintech, add EV charging to wallet, EV charging for neobanks, charging cashback rewards, embedded EV charging payments, EV charging for digital wallets" />
        <meta property="og:title" content="EV Charging for Financial Platforms | NetworkCore" />
        <meta property="og:description" content="Add EV charging to your wallet or neobank with one connection. Users pay and earn rewards on the card they already have, settlement handled, your brand." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-financial-platforms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-financial-platforms" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Financial Platforms","item":"https://networkcore.org/distribution-partners/ev-charging-for-financial-platforms"}]})}</script>
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
            Charging Belongs in Your Wallet
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            Add EV charging to your app so users find, start, and pay for it on the balance or card they already keep with you. Charging is one of the biggest recurring spends an EV driver has. Right now, it doesn't run through you, but it can!
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Financial Platform Partner Signup"
            submitLabel="Become a Partner"
            helperText="We'll reach out within 48 hours. No spam, no automated sequences."
            requiredFields={[
              { name: "fullName", label: "Full name", type: "text", required: true, placeholder: "First and last name" },
              { name: "email", label: "Business email", type: "email", required: true, placeholder: "you@company.com" },
              {
                name: "platformType",
                label: "Platform type",
                type: "select",
                required: true,
                placeholder: "Select type",
                options: [
                  "Digital wallet / payment app",
                  "Neobank / digital bank",
                  "Card issuer",
                  "Cashback / loyalty app",
                  "Expense platform",
                  "Fuel card app",
                  "Other",
                ],
              },
              {
                name: "monthlyActiveUsers",
                label: "Monthly active users",
                type: "select",
                required: true,
                placeholder: "Select range",
                options: [
                  "Under 100,000",
                  "100,000 to 1M",
                  "1M to 10M",
                  "10M to 50M",
                  "50M+",
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

      {/* The wedge */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              The Embedded Charging Layer for Financial Platforms
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-5xl mx-auto">
              A complete layer that lets wallets, neobanks, and financial super-apps add EV charging to the money relationship they already own, earn on every session, and turn charging into engagement and card usage — without building a charging network, integrating operators, or running charging settlement.
            </p>
          </div>
        </div>
      </section>

      {/* What You Own — layers */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What You Own
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The whole offer starts with the spend you capture and ends with what you earn.
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
          <div className="max-w-5xl mx-auto space-y-5 text-lg text-foreground leading-relaxed font-light">
            <p>The shift is not EV adoption; it is whose wallet an EV driver pays their charging from.</p>
            <p>More of your users drive electric every quarter, and their charging spend is large, frequent, and growing. Today it flows through charging apps, not your wallet. Every session is volume, engagement, and card usage you are handing to someone else.</p>
            <p>Super-apps win on share of wallet: the one that holds the most of a user's spending becomes the one they keep open and the card they keep using. Charging is a category your competitors will add. The question is who adds it first.</p>
            <p>And you do not have to build it. Charging behaves like any other transaction once the rails are in place, and the rails are already in place.</p>
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

      {/* Why Platforms Move Early */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Platforms Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early partners do not just add charging — they claim the position before someone else does.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "One anchor partner per market, with preferential economics reserved for early movers",
              "Priority integration and a say in the roadmap",
              "The first wallet to own charging in a market becomes where its EV drivers pay to charge",
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
              Three steps, all inside the app they already use.
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
              You already own the money and the relationship. Charging is the spend category you can now add to it.
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


      

      <PageFaqSection items={fpFaqs} background="background" />
      <Footer />
    </div>
  );
};

export default EvChargingForFinancialPlatforms;
