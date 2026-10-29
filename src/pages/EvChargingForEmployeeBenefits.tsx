import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Check, Receipt, Globe, Eye, CreditCard, Settings, Rocket, Sparkles, Building2, TrendingUp, Search, Zap, Car, Wallet, Bus, Plane, Award, PackageCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import PartnerSignupForm from "@/components/forms/PartnerSignupForm";

const layers = [
  { icon: <PackageCheck className="w-5 h-5" />, title: "The Benefit That Includes Charging", description: "Employees charge through the program itself, inside your platform, on the benefit they already have. The EV benefit becomes complete: the car, and the charging that makes it usable." },
  { icon: <Receipt className="w-5 h-5" />, title: "No More Expense Claims", description: "Charging is paid through the program, with a clean, compliant receipt for every session. No personal cards, no claim forms, no chasing receipts, for the employee or the admin who processes them." },
  { icon: <Globe className="w-5 h-5" />, title: "Every Charger, One Connection", description: "One connection gives your members charging at thousands of stations across every network and market, with no deal or integration per operator. The benefit works wherever they drive." },
  { icon: <Eye className="w-5 h-5" />, title: "Fair Public Pricing", description: "Employees pay the charger's exact public price. No markup, no hidden fee. A benefit your employer clients can trust, with nothing buried in the rate." },
  { icon: <CreditCard className="w-5 h-5" />, title: "Settled on Compliant Rails", description: "Every session is cleared and settled, with taxes, currencies, reconciliation, and invoices handled, on rails built within licensed, safeguarded structures. Charging documented to the standard employers and auditors expect." },
  { icon: <Settings className="w-5 h-5" />, title: "Charging-as-a-Service", description: "We run support, monitoring, and any problems with the networks. You run the program, we run the charging behind it. No charging team." },
  { icon: <TrendingUp className="w-5 h-5" />, title: "A More Competitive Platform", description: "Charging makes your program the complete one in every employer pitch, and you earn a transparent share on every session your members run. A stickier product, and a new revenue line on members you already have." },
];

const guarantees = [
  { icon: <Eye className="w-5 h-5" />, title: "Public-Price Guarantee", description: "Employees always pay the charger's exact public price. No markup ever touches your program." },
  { icon: <Sparkles className="w-5 h-5" />, title: "Invisible-Partner Guarantee", description: "The experience is fully yours. NetworkCore never appears to the employee." },
  { icon: <Building2 className="w-5 h-5" />, title: "No-Infrastructure Guarantee", description: "No hardware, no network, no settlement stack to build, no long lock-in." },
  { icon: <Rocket className="w-5 h-5" />, title: "Pilot-First", description: "Start with one employer or one market, prove it, then scale." },
];

const userMoments = [
  { icon: <Search className="w-5 h-5" />, title: "Find", description: "They see chargers near them, with live price and availability, and can reserve one." },
  { icon: <Zap className="w-5 h-5" />, title: "Charge", description: "They start the session and pay through the program. No personal card, no separate app." },
  { icon: <Receipt className="w-5 h-5" />, title: "Done", description: "The session and a compliant receipt land in the program automatically. Nothing to claim back." },
];

const whoFor = [
  { icon: <Car className="w-5 h-5" />, title: "Salary sacrifice & EV leasing benefits", description: "the car and the charging, in one benefit" },
  { icon: <Building2 className="w-5 h-5" />, title: "Mobility benefits platforms", description: "charging as a benefit employees use every week" },
  { icon: <Wallet className="w-5 h-5" />, title: "Mobility budget platforms", description: "charging as a spend category inside the budget" },
  { icon: <Bus className="w-5 h-5" />, title: "Commuter benefits programs", description: "the EV commute, covered like the transit pass" },
  { icon: <Plane className="w-5 h-5" />, title: "Business travel platforms", description: "charging on the road, expensed automatically" },
  { icon: <Award className="w-5 h-5" />, title: "Employee perks & rewards platforms", description: "a high-frequency perk for a growing EV workforce" },
];

const ebFaqs = [
  { question: "Do employees need a separate charging account or app?", answer: "No. Charging runs inside your platform, on the program they already have. Same login, no personal card, no new app." },
  { question: "Does this cover home charging?", answer: "No. This covers public charging. Employees who charge at home keep whatever arrangement they have today, and everything they charge on the road runs through the program with a compliant receipt. Public charging is where the expense mess lives, and that is the part this solves." },
  { question: "Who pays for the charging, the employer or the employee?", answer: "That is your program design, and it stays fully in your control. Whether charging sits inside a salary sacrifice package, a mobility budget, an employer-funded program, or an employee-paid benefit, the sessions run through your platform and every one produces a clean, compliant receipt to allocate as your program defines." },
  { question: "How does this handle tax treatment, like benefit-in-kind?", answer: "Tax treatment stays with your platform and your clients' advisors, as it does for every benefit you run. What we provide is what that treatment depends on: every session documented, with compliant receipts and clean settlement, so your program has the records it needs." },
  { question: "Will a markup hurt the benefit?", answer: "No. Employees pay the charger's exact public price. No markup, no spread. NetworkCore is invisible to them." },
  { question: "Can charging work for business travel and expensing?", answer: "Yes. Sessions on the road run through the platform and land with a compliant receipt automatically, so charging behaves like any other travel expense your platform already handles, without the employee fronting the cost and claiming it back." },
  { question: "How do we earn?", answer: "Charging access becomes a new revenue stream. Commissions with the CPO are programmable and negotiable per relationship, and allocated automatically on every session, on top of the competitive edge and retention the feature drives. The line grows as more of your members drive electric." },
  { question: "What does integration involve?", answer: "A single API for discovery, availability, session control, and reporting, with a ready-made front end if you would rather not build the charging screens. Most launches are operational within weeks." },
];

const scrollToForm = () => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });

const EvChargingForEmployeeBenefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging for Employee Benefits & Corporate Mobility Platforms | NetworkCore</title>
        <meta name="description" content="Add EV charging to your benefits or mobility platform. Employees charge on the program with compliant receipts and no expense claims. Every network, your brand." />
        <meta name="keywords" content="EV charging employee benefit, salary sacrifice EV charging, mobility budget charging, commuter benefits EV, business travel EV charging, EV charging expense management" />
        <meta property="og:title" content="EV Charging for Employee Benefits & Corporate Mobility Platforms | NetworkCore" />
        <meta property="og:description" content="Add EV charging to your benefits or mobility platform. Employees charge on the program with compliant receipts and no expense claims. Every network, your brand." />
        <meta property="og:url" content="https://networkcore.org/distribution-partners/ev-charging-for-employee-benefits" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/distribution-partners/ev-charging-for-employee-benefits" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Distribution Partners","item":"https://networkcore.org/distribution-partners"},{"@type":"ListItem","position":3,"name":"EV Charging for Employee Benefits","item":"https://networkcore.org/distribution-partners/ev-charging-for-employee-benefits"}]})}</script>
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
            The EV Benefit Shouldn't End at the Car
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            Your platform puts employees in an EV. Then the benefit stops at the charger: personal cards, a phone full of operator apps, expense claims, and lost receipts. Add charging to the program itself, so employees charge on the benefit they already have, with clean receipts and nothing to claim back.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light mb-6">
            The car is half the benefit. Charging is the other half.
          </p>
          </div>
          <div id="signup-form" className="hero-lead-form scroll-mt-24">
            <h2 className="hero-lead-form-title">Become a Partner</h2>
            <PartnerSignupForm
              heroMode
            formLabel="Corporate & Benefits Partner Signup"
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
              The Embedded Charging Layer for Corporate & Benefits Platforms
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-5xl mx-auto">
              A complete layer that lets benefits, salary sacrifice, mobility budget, and business travel platforms add public EV charging to the programs they already run, paid through the program with compliant receipts, without building a charging network, integrating operators, or running charging settlement.
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
              The whole offer starts with the benefit you complete and ends with what you earn.
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
            <p>The shift is not EV adoption; it is which platform offers the complete EV benefit.</p>
            <p>Employees are choosing EVs through salary sacrifice, mobility budgets, and company programs faster every year, and charging is the part of the experience your platform does not touch yet. Every session is friction for the employee, admin for the employer, and a gap in your product.</p>
            <p>Employers compare platforms on completeness. The one that includes charging wins the pitch against the one that hands the employee a car and a problem. Charging is the feature your competitors will add. The question is who adds it first.</p>
            <p>And you do not have to build any of it. Charging behaves like any other benefit transaction once the rails are in place, and the rails are already in place.</p>
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
              "The first platform to include charging becomes the complete EV benefit in its market",
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

      {/* Member Experience */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              What Your Members Experience
            </h2>
            <p className="text-lg text-foreground font-light">
              Three steps, all inside the program they already have.
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
              You already run the program employees drive on. NetworkCore adds the charging that completes it.
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

      

      <PageFaqSection items={ebFaqs} background="muted" />
      <Footer />
    </div>
  );
};

export default EvChargingForEmployeeBenefits;
