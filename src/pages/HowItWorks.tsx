import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AmbientOrbs from "@/components/motion/AmbientOrbs";
import Reveal from "@/components/motion/Reveal";
import AnimatedDivider from "@/components/motion/AnimatedDivider";
import ProcessDiagram from "@/components/how-it-works/ProcessDiagram";
import ContactForm from "@/components/ContactForm";

const HowItWorks = () => {
  const steps = [
    {
      title: "The Driver",
      diagram: "driver" as const,
      content: (
        <>
          They open an app they already use and trust: their car's navigation, their bank, their fleet app, their parking app. They find a charger, plug in, and drive away. No new app, no card to register, no{" "}
          <Link to="/blog/what-is-ev-roaming" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
            roaming price
          </Link>{" "}
          to decipher. They see the price before they start, and that is what they pay.
        </>
      ),
      extra: null as null | { to: string; label: string }
    },
    {
      title: "The Charging Partner",
      diagram: "charging-partner" as const,
      content: (
        <>
          Drivers arrive pre-authenticated and pre-paid. Keep your public price and stay merchant of record, or set a wholesale rate and receive 100% of it. Either way, you supply the energy exactly as you do today, and payment, invoicing, VAT, fraud and disputes are handled for you.
        </>
      ),
      extra: { to: "/charging-partners/calculator", label: "What are your idle hours worth? →" }
    },
    {
      title: "The Distribution Partner",
      diagram: "distribution-partner" as const,
      content: (
        <>
          Your users get every charger on the{" "}
          <Link to="/the-network" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
            network
          </Link>{" "}
          through a single integration, under your brand. Pass the operator's public price straight through, or buy at their wholesale rate and set your own. No infrastructure to build, no operators to negotiate with, no payments operation to run.
        </>
      ),
      extra: null
    }
  ];

  const middleSteps = [
    { title: "Authentication", description: "The driver is verified through their platform before the session starts." },
    { title: "Pricing", description: "Whatever the CP and DP have agreed, public price or a wholesale rate, is applied and locked the moment the session starts." },
    { title: "Payment", description: "Captured, split, and reconciled the moment the session ends." },
    { title: "Compliance", description: "Invoicing, VAT, fraud, disputes, and audit records, per market." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How It Works | NetworkCore</title>
        <meta name="description" content="See how one NetworkCore charging session connects drivers, Charging Partners and Distribution Partners through authentication, pricing, payment and compliance." />
        <meta property="og:title" content="How It Works | NetworkCore" />
        <meta property="og:description" content="See how one NetworkCore charging session connects drivers, Charging Partners and Distribution Partners through authentication, pricing, payment and compliance." />
        <meta property="og:image" content="https://networkcore.org/og/og-how-it-works-hero.jpg" />
        <meta property="og:url" content="https://networkcore.org/how-it-works" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works | NetworkCore" />
        <meta name="twitter:description" content="One session. Three points of view. NetworkCore is the part in the middle that makes all three happen at once." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-how-it-works-hero.jpg" />
        <link rel="canonical" href="https://networkcore.org/how-it-works" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"How It Works","item":"https://networkcore.org/how-it-works"}]})}</script>
      </Helmet>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Car Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/how-it-works-hero.jpg"
            alt="Classic electric car with charging cable"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        </div>

        {/* Title and contact form overlay */}
        <div className="hero-lead-grid">
          <div className="hero-lead-copy">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight tracking-tight">
              One Session With<br className="hidden lg:block" />{" "}Three Points of View
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl font-light">
              A driver charges. A charger earns. A platform serves its users. NetworkCore is the part in the middle that makes all three happen at once.
            </p>
          </div>
          <div className="hero-lead-form">
            <h2 className="hero-lead-form-title">Contact Us</h2>
            <ContactForm heroMode compact fallbackMessage="How It Works enquiry" />
          </div>
        </div>
        <div className="hero-fade-late absolute bottom-6 left-1/2 -translate-x-1/2" style={{ animationDelay: "1300ms" }} aria-hidden>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-transparent via-white/30 to-white/60" />
        </div>
      </section>

      {/* Three Points of View */}
      {steps.map((step, index) => (
        <section 
          key={step.title}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-section-cool'} relative overflow-hidden`}
        >
          {index % 2 === 0 && <AmbientOrbs />}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center space-y-4 mb-8">
              <Reveal as="h2" className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
                {step.title}
              </Reveal>
              <AnimatedDivider className="w-16 mx-auto" />
            </div>
            <Reveal delay={120} as="p" className="text-lg text-muted-foreground leading-relaxed font-light text-center max-w-5xl mx-auto">
              {step.content}
            </Reveal>
            <Reveal delay={220} className="mt-12">
              <ProcessDiagram kind={step.diagram} />
            </Reveal>
            {step.extra && (
              <div className="mt-10 text-center">
                <Link to={step.extra.to} className="text-base font-normal text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
                  {step.extra.label}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* What Happens In Between */}
      <section className="py-24 bg-section-green relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <Reveal as="h2" className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
              What Happens in Between
            </Reveal>
            <AnimatedDivider className="w-16 mx-auto" />
            <Reveal delay={120} as="p" className="text-muted-foreground font-light">Four things, on every session, automatically.</Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {middleSteps.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm h-full">
                  <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
