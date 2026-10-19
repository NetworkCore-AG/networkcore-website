import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  const { t } = useTranslation(['common']);

  const cycleSteps = [
    "More demand → higher utilisation",
    "Higher utilisation → better economics",
    "Better economics → fairer prices",
    "Fairer prices → more drivers",
    "More drivers → faster transition"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charging Benefits | NetworkCore Platform</title>
        <meta name="description" content="Discover EV charging benefits for drivers, CPOs, and distribution partners. NetworkCore aligns incentives with transparent pricing and real-time settlement at scale." />
        <meta property="og:title" content="EV Charging Benefits | NetworkCore Platform" />
        <meta property="og:description" content="Discover EV charging benefits for drivers, CPOs, and distribution partners. NetworkCore aligns incentives with transparent pricing and real-time settlement at scale." />
        <meta property="og:image" content="https://networkcore.org/og/og-benefits-hero.jpg" />
        <meta property="og:url" content="https://networkcore.org/benefits" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Charging Benefits | NetworkCore Platform" />
        <meta name="twitter:description" content="Aligned incentives, transparent pricing, real-time settlement at scale." />
        <meta name="twitter:image" content="https://networkcore.org/og/og-benefits-hero.jpg" />
        <link rel="canonical" href="https://networkcore.org/benefits" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Benefits","item":"https://networkcore.org/benefits"}]})}</script>
      </Helmet>

      <Navigation />

      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/benefits-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-8 px-6 py-2 border border-white/20 rounded-full backdrop-blur-sm">
            <span className="text-white/80 text-sm tracking-[0.2em] uppercase font-light">Benefits</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light mb-8 leading-tight text-white tracking-tight">
            EV charging works better when everyone wins
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
            NetworkCore connects demand, infrastructure, and payments to make EV charging simpler, more transparent, and economically sustainable at scale.
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      </section>

      {/* Aligned Incentives Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">Platform</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              One platform. Aligned incentives.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Fragmentation creates inefficiency, high prices, and slow cash flow. NetworkCore removes friction by standardising access, pricing, and settlement. When incentives are aligned, everyone benefits automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-muted/30">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Drivers Section */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">End Users</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              Drivers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-12">
              NetworkCore makes EV charging feel easy: available, transparent and connected. Find a charger, see the public price, and just plug.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Clear & predictable pricing</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">More accessible: AC & DC</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Plug&Charge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-background">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Distribution Partners Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">OEMs, Apps, Wallets, Insurers, Fleets</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              Distribution Partners
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-12">
              NetworkCore turns EV charging into a monetisable service layer. Connect once and earn revenue every time your users charge. Build brand equity with transparent public price and full availability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Single API</p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Passive income</p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Trust & transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-muted/30">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* CPO Section */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">CPOs</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              Charge Point Operators
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-12">
              NetworkCore helps CPOs focus on operating and scaling infrastructure, not chasing partnerships, payments and compliance auditors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Daily payouts</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Trust & transparency</p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">MoR → omnichannel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-background">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Climate & Society Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              Climate & Society
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-12">
              NetworkCore builds trust in EV charging prices by enabling transparent competition, helping market forces deliver fair and lower public charging prices for drivers. By making EV charging economically efficient, transparent, and scalable, NetworkCore supports broader EV adoption.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Higher EV adoption</p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Optimised infrastructure</p>
            </div>
            <div className="bg-background rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg font-light">Trust & transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-muted/30">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Virtuous Cycle Section - Circular Design */}
      <section className="py-16 md:py-20 lg:py-8 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10 lg:mb-4">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">Cycle</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 lg:mb-4 tracking-tight">
              The virtuous cycle of NetworkCore
            </h2>
          </div>

          {/* Mobile/Tablet: Vertical list with connecting line */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              
              <div className="flex flex-col gap-2 relative">
                {cycleSteps.map((step, idx) => (
                  <div key={step} className="relative flex items-center justify-center">
                    <div className="bg-background border border-border rounded-xl px-6 py-4 shadow-sm text-center w-64 sm:w-72 relative z-10">
                      <p className="text-foreground text-sm font-light leading-snug">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Circular Cycle Diagram */}
          <div className="hidden lg:flex relative items-center justify-center">
            <div className="relative w-[820px] h-[820px] [--cycle-radius:197px]">
              {/* Circle track */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-border"
                />
              </svg>

              {(
                [
                  -90, // top
                  -18, // upper-right
                  54,  // lower-right
                  126, // lower-left
                  198, // upper-left
                ] as const
              ).map((angle, idx) => (
                <div
                  key={cycleSteps[idx]}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--cycle-radius)) rotate(${-angle}deg)`,
                  }}
                >
                  <div className="bg-background border border-border rounded-xl px-4 py-3 shadow-sm text-center w-48">
                    <p className="text-foreground text-sm font-light leading-snug">
                      {cycleSteps[idx]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vertical connector */}
      <div className="flex justify-center bg-background">
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Mission Section with CTA */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight">
              We're on a mission to democratise EV charging
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto mb-12">
              NetworkCore isn't here to add another layer to EV charging, we're here to remove friction, align incentives, and help the entire ecosystem scale sustainably.
            </p>
            
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.location.href = '/#contact'}
              className="px-10"
            >
              Join the platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Benefits;
