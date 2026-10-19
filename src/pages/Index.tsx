import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
const heroBackground = "/images/hero-background.jpg";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Reveal from "@/components/motion/Reveal";
import AnimatedDivider from "@/components/motion/AnimatedDivider";
import MagneticButton from "@/components/motion/MagneticButton";
import AmbientOrbs from "@/components/motion/AmbientOrbs";
import { 
  Zap,
  Globe,
  CreditCard,
  PieChart,
  BarChart3,
  TrendingUp,
  Plug,
  ShieldCheck,
  Users,
  ArrowRight,
  BadgeCheck
} from "lucide-react";

const Index = () => {
  const { t } = useTranslation(['home', 'common']);
  const sectionIds = ['home', 'what-we-do', 'for-cpos', 'for-distribution-partners', 'contact'];
  useScrollSpy({ sectionIds });


  const heroTitle = t('home:hero.title');

  const cardClass =
    "group flex items-start gap-4 p-5 bg-card border border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-medium";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NetworkCore - The Growth Engine for EV Charging</title>
        <meta name="description" content="NetworkCore is the growth engine for EV charging. One integration for pricing, routing, payment capture, revenue sharing, and settlement between CPOs and distribution partners." />
        <meta property="og:title" content="NetworkCore - The Growth Engine for EV Charging" />
        <meta property="og:description" content="NetworkCore is the growth engine for EV charging. One integration for pricing, routing, payment capture, revenue sharing, and settlement between CPOs and distribution partners." />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta property="og:url" content="https://networkcore.org/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NetworkCore - The Growth Engine for EV Charging" />
        <meta name="twitter:description" content="One integration for pricing, routing, payment capture, revenue sharing, and settlement between CPOs and distribution partners." />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/" />
      </Helmet>
      <Navigation transparent />
      
      {/* Home Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <img
          src={heroBackground}
          alt="Electric vehicle connected to a public charge point"
          className="absolute inset-0 w-full h-full object-cover hero-zoom"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start">
          <div className="pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-tight">
              {heroTitle.split(" ").map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="hero-word mr-[0.28em]"
                  style={{ animationDelay: `${100 + i * 70}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p
              className="hero-fade-late text-lg md:text-xl font-light text-white/80 mt-4 max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "700ms" }}
            >
              We bring the drivers. You keep the price. Everybody wins.
            </p>
          </div>
        </div>


        <div
          className="hero-fade-late absolute bottom-6 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "1300ms" }}
          aria-hidden
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-black/30 to-black/50 animate-pulse" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-section-cool-light relative overflow-hidden" id="what-we-do">
        <AmbientOrbs />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-12">
            <Reveal as="h2" className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              How It Works
            </Reveal>
            <AnimatedDivider className="w-16" />
            <Reveal delay={120} as="p" className="text-base md:text-lg text-foreground font-light leading-relaxed max-w-3xl mx-auto">
              One integration connects everyone who owns chargers to everyone who owns drivers.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Globe, label: "Drivers find your chargers inside the apps they already use" },
              { icon: Plug, label: "Sessions start, run, and stop through a single connection" },
              { icon: BarChart3, label: "Selling & buying at public or wholesale" },
              { icon: CreditCard, label: "Payment & compliance are handled automatically" },
              { icon: Zap, label: "We move money fast" },
              { icon: ShieldCheck, label: "OCPI-native, hardware-neutral, and live in 1 hour" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} className={cardClass}>
                <div className="p-2 bg-muted rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-foreground font-light">{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Charging Partners Section */}
      <section className="py-24 bg-section-cool relative overflow-hidden" id="for-cpos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-12">
            <Reveal as="h2" className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Charging Partners
            </Reveal>
            <AnimatedDivider className="w-16" />
            <Reveal delay={120} as="p" className="text-base md:text-lg text-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Everyone who owns chargers: networks, venues, depots. We bring the drivers, you set the price, and the money moves fast.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Users, label: "Access aggregated driver demand" },
              { icon: BadgeCheck, label: "Your price, always" },
              { icon: Zap, label: "Fast, automatic settlement" },
              { icon: TrendingUp, label: "Sell retail or wholesale" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} className={cardClass}>
                <div className="p-2 bg-muted rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-foreground font-light">{item.label}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="pt-10 flex justify-center">
            <MagneticButton>
              <Link
                to="/charging-partners"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2 bg-foreground text-background font-medium tracking-wide hover:bg-foreground/90 transition-colors rounded-md"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* For Distribution Partners Section */}
      <section className="py-24 bg-section-cool-light relative overflow-hidden" id="for-distribution-partners">
        <AmbientOrbs />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-12">
            <Reveal as="h2" className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Distribution Partners
            </Reveal>
            <AnimatedDivider className="w-16" />
            <Reveal delay={120} as="p" className="text-base md:text-lg text-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Platforms that already own the driver: OEM apps/telematics, wallets, fleets, parking. Charging becomes a native part of your product, and a revenue line.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Zap, label: "Every charger in the network, one integration" },
              { icon: BadgeCheck, label: "Public prices, always free" },
              { icon: ShieldCheck, label: "Buy wholesale, set your own price" },
              { icon: Globe, label: "Your brand, your interface" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} className={cardClass}>
                <div className="p-2 bg-muted rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-foreground font-light">{item.label}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="pt-10 flex justify-center">
            <MagneticButton>
              <Link
                to="/distribution-partners"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2 bg-foreground text-background font-medium tracking-wide hover:bg-foreground/90 transition-colors rounded-md"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>


      {/* Pay for Drivers Section */}
      <section className="py-24 bg-section-cool relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Reveal as="h2" className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
            Nobody Pays to Be Here
          </Reveal>
          <AnimatedDivider className="w-16 mx-auto" />
          <Reveal delay={120} as="p" className="text-base md:text-lg text-foreground font-light leading-relaxed mt-6 mb-10">
            No setup, no subscription, no integration cost. The only money that moves is a share of a session that already happened.
          </Reveal>
          <Reveal delay={200}>
            <MagneticButton>
              <Link
                to="/pricing"
                className="group inline-flex items-center justify-center gap-2 px-6 py-2 bg-foreground text-background font-medium tracking-wide hover:bg-foreground/90 transition-colors rounded-md"
              >
                See pricing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>


      {/* Divider before Contact */}
      <div className="px-4 sm:px-6 lg:px-8 bg-section-cool">
        <AnimatedDivider className="max-w-6xl w-full" />
      </div>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
