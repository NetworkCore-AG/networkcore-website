import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageFaqSection from "@/components/PageFaqSection";
import Reveal from "@/components/motion/Reveal";
import AnimatedDivider from "@/components/motion/AnimatedDivider";
import MagneticButton from "@/components/motion/MagneticButton";
import AmbientOrbs from "@/components/motion/AmbientOrbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Clock, CreditCard, Wrench, SlidersHorizontal, MapPin, Globe, Handshake } from "lucide-react";

const EvRoamingHubIntegration = () => {
  return (
    <>
      <Helmet>
        <title>EV Roaming Hub Integration | NetworkCore</title>
        <meta name="description" content="EV roaming hub integration with NetworkCore: connect once, reach every partner, settle in T+2 at your own transparent public price — with no integration cost, because we do the work for you." />
        <meta property="og:title" content="EV Roaming Hub Integration | NetworkCore" />
        <meta property="og:description" content="Connect once. Reach every partner. Settle in two days, at your own transparent price. And pay nothing to integrate." />
        <meta property="og:image" content="https://networkcore.org/blog/ev-roaming-hub-integration.jpg" />
        <meta property="og:image:alt" content="EV roaming hub integration — NetworkCore" />
        <meta property="og:url" content="https://networkcore.org/ev-roaming-hub-integration" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EV Roaming Hub Integration | NetworkCore" />
        <meta name="twitter:description" content="Connect once. Reach every partner. Settle in two days, at your own transparent price. And pay nothing to integrate." />
        <meta name="twitter:image" content="https://networkcore.org/blog/ev-roaming-hub-integration.jpg" />
        <link rel="canonical" href="https://networkcore.org/ev-roaming-hub-integration" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"EV Roaming Hub Integration","item":"https://networkcore.org/ev-roaming-hub-integration"}]})}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation transparent />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src="/blog/ev-roaming-hub-integration.jpg"
            alt="EV roaming hub integration — NetworkCore"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              EV Roaming Hub Integration
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Connect once. Reach every partner. Settle in two days, at your own transparent price. And pay nothing to integrate.
            </p>
            <MagneticButton>
              <Link to="/#contact">
                <Button size="lg" variant="outline" className="gap-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </section>

        {/* What EV roaming hub integration is */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                What EV Roaming Hub Integration Is
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                A roaming hub sits between charging networks and connects them, so that operators and mobility providers do not have to build a separate integration with every counterparty individually. EV roaming hub integration is the act of connecting a network to that shared layer, so its chargers become reachable by drivers from across the ecosystem, and its own drivers gain access to chargers on other networks.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                The technical standard underneath this is OCPI, the Open Charge Point Interface, now the de facto global roaming protocol. A well-built EV roaming hub integration exchanges the essential data cleanly: charging locations, live availability, tariffs, session records, and authorisation. This is genuinely valuable infrastructure, and it is what makes cross-network charging possible at all. The wider picture of how roaming fits the charging value chain is set out in our guide to{" "}
                <Link to="/blog/what-is-ev-roaming" className="text-primary underline hover:no-underline">EV charging roaming</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The established hubs */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                The Established Hubs, And Where They Stop
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                The current landscape of EV roaming hub integration is dominated by a small number of established hubs, principally Hubject and Gireve, which built the connective tissue of European charging over the past decade. They solved a real problem, and they solved it well: technical interoperability, at scale, across borders.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                But their model was designed around one job, moving data between networks, and it stops where the money begins. A traditional EV roaming hub integration typically leaves a Charging Partner with:
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Wholesale, obscured pricing.",
                  text: "The operator's price becomes a wholesale input that an intermediary marks up before the driver sees a retail number, so the operator loses pricing visibility and control.",
                },
                {
                  icon: Clock,
                  title: "Slow settlement.",
                  text: "Payment for a session delivered today can take 30, 60, or 90 days to arrive, netted and bundled, freezing the operator's working capital.",
                },
                {
                  icon: CreditCard,
                  title: "Access and membership fees.",
                  text: "Fees charged for the connection itself, whether or not it delivers meaningful demand.",
                },
                {
                  icon: Wrench,
                  title: "Integration cost and effort.",
                  text: "The connection is a technical project the partner scopes, builds, and maintains.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100} className="border border-border/50 rounded-xl p-6 bg-card/30">
                  <item.icon className="h-6 w-6 text-primary mb-4" />
                  <p className="text-foreground font-medium mb-2">{item.title}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                None of this makes the established hubs bad at what they do. It means their EV roaming hub integration was built to exchange data, not to move money well, price transparently, or bring demand. That is the gap NetworkCore was built to close. The broader case for moving beyond traditional roaming is made in{" "}
                <Link to="/blog/charging-app-vs-roaming-hub" className="text-primary underline hover:no-underline">Charging App vs Roaming Hub</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The NetworkCore integration */}
        <section className="relative py-20 bg-background overflow-hidden">
          <AmbientOrbs />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                The NetworkCore EV Roaming Hub Integration
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                NetworkCore provides a modern EV roaming hub integration that keeps everything the technical layer does well and adds the financial and commercial layer the established hubs leave out. It is OCPI-native, so it interoperates with the roaming standard rather than replacing it, and it sits alongside the systems a partner already runs — including any existing roaming hub. We are not trying to displace Hubject or Gireve. We target a different layer of distribution: wallets, fintechs, insurers, fleets, travel platforms, and other demand channels that need more than raw technical roaming.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                What a NetworkCore EV roaming hub integration adds:
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                {
                  title: "Connection to many sellers through one integration.",
                  text: "A Charging Partner connects once and reaches a growing network of Distribution Partners, fleets, OEMs, fintechs, wallets, insurers, and mobility apps, each a new source of demand, without negotiating and building a separate connection to each.",
                },
                {
                  title: "Faster settlement.",
                  text: "Every party is settled in T+2, two business days, rather than the 30-to-90-day cycles of traditional roaming. Money for a session delivered today is available within days.",
                },
                {
                  title: "Transparent public pricing.",
                  text: "The driver pays the operator's own transparent public price, transmitted intact, with no intermediary mark-up. The operator keeps pricing control, and the price the driver sees matches the price they pay.",
                },
                {
                  title: "No access or membership fees.",
                  text: <>There is no fee for the connection. A commission is earned only when the network actually delivers a session, so cost is aligned with value delivered. Unlike a traditional{" "}<a href="https://memberclicks.com/blog/membership-dues/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">membership fee</a>, you never pay for access itself.</>,
                },
                {
                  title: "Selectable supply and demand.",
                  text: "As a Charging Partner, you choose which stations to expose and which to keep for direct traffic only. As a Distribution Partner, you choose which Charging Partners or geographies your users see. By default, every connected Charging Partner is available to every Distribution Partner, and vice versa — but discounts and fixed-price agreements can be negotiated directly.",
                },
                {
                  title: "No integration cost, and the work done for you.",
                  text: "This is the part worth stating plainly: there is no cost to integrate, and NetworkCore handles the integration work on the partner's behalf.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80} className="border border-border/50 rounded-xl p-6 bg-card/30">
                  <p className="text-foreground font-medium mb-2">{item.title}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                The mechanics of how demand reaches a Charging Partner through this connection are set out in our guide to the{" "}
                <Link to="/blog/ev-charging-demand-platform" className="text-primary underline hover:no-underline">EV charging demand platform</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* How the integration works */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                How The Integration Works
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                A NetworkCore EV roaming hub integration is designed to be as light as possible on the partner, because we carry the work.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Connect.",
                  text: "The partner's network connects to NetworkCore over standard OCPI, alongside whatever CSMS, roaming, and systems it already runs. We handle the integration setup.",
                },
                {
                  step: "02",
                  title: "Configure.",
                  text: "The Charging Partner keeps its own tariffs, including time-of-use and dynamic pricing, and its own rules. NetworkCore transmits them intact.",
                },
                {
                  step: "03",
                  title: "Go live.",
                  text: "The partner's chargers become reachable by the network's Distribution Partners, and its drivers gain access to the network's supply.",
                },
                {
                  step: "04",
                  title: "Get settled.",
                  text: "Every session is reconciled per session and settled to each party in T+2 at the transparent public price, with invoicing and compliance handled beneath the integration.",
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 100} className="border border-border/50 rounded-xl p-6 bg-card/30">
                  <p className="text-primary font-mono text-sm mb-3">{item.step}</p>
                  <p className="text-foreground font-medium mb-2">{item.title}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                The result is a connection that reaches more demand, settles faster, prices transparently, and costs nothing to establish. How that settlement works in practice is covered in{" "}
                <Link to="/blog/cpo-settlement-timing" className="text-primary underline hover:no-underline">CPO Settlement Timing</Link>{" "}
                and{" "}
                <Link to="/blog/ev-charging-financial-backbone" className="text-primary underline hover:no-underline">EV Charging Financial Backbone</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Selective distribution and negotiated terms */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                You Choose What to Share, And Who to Buy From
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                A roaming connection does not have to mean opening every station to every counterparty. NetworkCore gives both sides control over what is exposed, while keeping the default wide open so value flows from day one.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: SlidersHorizontal,
                  title: "Charging Partners choose what to show.",
                  text: "You decide which stations are available through the network and which remain direct-only. Keep your premium sites for your own app, list slower sites to fill utilisation, or expose everything — the choice is yours per location.",
                },
                {
                  icon: MapPin,
                  title: "Distribution Partners choose where their users charge.",
                  text: "You decide which Charging Partners, countries, or network tiers your users can see. You can limit the map to trusted operators, prefer local partners, or open the full catalogue.",
                },
                {
                  icon: Globe,
                  title: "Everything is available by default.",
                  text: "Unless one side opts to restrict access, every connected Charging Partner is reachable by every connected Distribution Partner, and vice versa. The network starts open and becomes more precise only if you want it to.",
                },
                {
                  icon: Handshake,
                  title: "Discounts and fixed prices can be negotiated.",
                  text: "Beyond the operator's transparent public price, partners can agree direct commercial terms — volume discounts, fixed session prices, or preferential rates — and NetworkCore applies them at settlement.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100} className="border border-border/50 rounded-xl p-6 bg-card/30">
                  <item.icon className="h-6 w-6 text-primary mb-4" />
                  <p className="text-foreground font-medium mb-2">{item.title}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                NetworkCore vs Traditional Roaming Hubs
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                A neutral, side-by-side view of what a Charging Partner gets from each kind of EV roaming hub integration.
              </p>
            </Reveal>
            <Reveal className="overflow-x-auto">
              <table className="w-full border border-border/50 rounded-xl overflow-hidden text-left">
                <thead>
                  <tr className="bg-muted/40">
                    <th className="px-5 py-4 text-foreground font-medium"></th>
                    <th className="px-5 py-4 text-foreground font-medium">Traditional roaming hub</th>
                    <th className="px-5 py-4 text-foreground font-medium">NetworkCore</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    ["Core function", "Technical interoperability (data exchange)", "Interoperability plus settlement and demand"],
                    ["Pricing to driver", "Wholesale, marked up by intermediary", "Operator's transparent public price, intact"],
                    ["Settlement speed", "Typically 30 to 90 days", "T+2, two business days"],
                    ["Connection fees", "Access / membership fees common", "None; commission only on delivered sessions"],
                    ["Demand", "Connects networks to each other", "Routes demand from Distribution Partners to supply"],
                    ["Integration cost", "Partner scopes, builds, maintains", "None; NetworkCore does the integration for you"],
                    ["Standard", "OCPI", "OCPI-native, interoperates with existing roaming"],
                  ].map(([label, traditional, nc]) => (
                    <tr key={label}>
                      <td className="px-5 py-4 text-foreground font-medium align-top">{label}</td>
                      <td className="px-5 py-4 text-muted-foreground font-light align-top">{traditional}</td>
                      <td className="px-5 py-4 text-muted-foreground font-light align-top">{nc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal className="text-center mt-10">
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                The established hubs remain valuable for the technical layer they were built for. A NetworkCore EV roaming hub integration is for partners who want the interoperability and the financial and commercial layer that sits on top of it, delivered as one connection, and for demand channels — fintechs, insurers, fleets, travel apps — that traditional roaming was not designed to serve. The transparency framework that governs our pricing is set out in{" "}
                <Link to="/blog/ev-charging-pricing-transparency" className="text-primary underline hover:no-underline">EV Charging Pricing Transparency</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Integration cost */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <AmbientOrbs />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                Integration Cost: There Is None, And We Handle It
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                Worth its own section, because it is the question every partner asks. A NetworkCore EV roaming hub integration has no integration cost. We do not charge to connect you, and we take on the integration work ourselves rather than handing you a technical project to resource. There is no subscription and no{" "}
                <a href="https://memberclicks.com/blog/membership-dues/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">membership fee</a>.
                NetworkCore earns a commission only when it delivers a session, which means the connection costs nothing to establish and nothing to hold, and only ever costs anything when it is actively making the partner money. The barrier to a better roaming connection is, deliberately, close to zero. The full commercial model is on our{" "}
                <Link to="/pricing" className="text-primary underline hover:no-underline">pricing page</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <PageFaqSection
          background="background"
          items={[
            {
              question: "What is EV roaming hub integration?",
              answer: "It is the connection that links a charging network to a shared roaming layer, so drivers from one network can charge on another and a Charging Partner can reach demand beyond its own app. It runs on the OCPI standard.",
            },
            {
              question: "How is NetworkCore different from Hubject or Gireve?",
              answer: "The established hubs provide technical interoperability, the data exchange between networks. A NetworkCore EV roaming hub integration adds fast T+2 settlement, transparent public pricing, access to a network of Distribution Partners, and no integration cost, on top of that interoperability. We are not a replacement. We target different demand channels — fintechs, insurers, fleets, travel platforms, and similar — that need a financial and commercial layer, not just raw roaming.",
            },
            {
              question: "How much does a NetworkCore integration cost?",
              answer: "There is no integration cost and no membership fee. NetworkCore handles the integration work, and earns a commission only when it delivers a session.",
            },
            {
              question: "How fast does NetworkCore settle?",
              answer: "Every party is settled in T+2, two business days, rather than the 30-to-90-day cycles common in traditional roaming.",
            },
            {
              question: "Does NetworkCore replace my existing roaming or CSMS?",
              answer: "No. NetworkCore is OCPI-native and sits alongside the systems you already run, adding the financial and demand layer rather than replacing your management system or your existing roaming connections.",
            },
            {
              question: "What price does the driver pay?",
              answer: "The operator's own transparent public price, transmitted intact, with no intermediary mark-up. The price the driver sees matches the price they pay.",
            },
          ]}
        />

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                Connect Your Network
              </h2>
              <AnimatedDivider className="w-16 mb-8" />
              <p className="text-muted-foreground font-light leading-relaxed mb-10">
                A better EV roaming hub integration should reach more demand, settle faster, price transparently, and cost nothing to establish. That is what NetworkCore is built to provide, on top of the open standards your network already runs on, with the integration work handled for you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <MagneticButton>
                  <Link to="/#contact">
                    <Button size="lg" className="gap-2">
                      Talk to our team <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </MagneticButton>
                <Link
                  to="/the-network"
                  className="inline-flex items-center gap-2 text-foreground font-light underline underline-offset-4 hover:text-foreground/70 transition-colors"
                >
                  Explore the network <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EvRoamingHubIntegration;
