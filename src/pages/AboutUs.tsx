import { Helmet } from 'react-helmet-async';
import { Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const victorPhoto = '/images/victor-lipszyc.jpg';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About NetworkCore | The Financial Network for EV Charging</title>
        <meta name="description" content="NetworkCore is the neutral pricing, routing, clearing and settlement layer for public EV charging. Headquartered in Zug, Switzerland." />
        <meta property="og:title" content="About NetworkCore | The Financial Network for EV Charging" />
        <meta property="og:description" content="NetworkCore is the neutral pricing, routing, clearing and settlement layer for public EV charging. Headquartered in Zug, Switzerland." />
        <meta property="og:url" content="https://networkcore.org/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content="About NetworkCore | The Financial Network for EV Charging" />
        <meta name="twitter:description" content="The neutral pricing, routing, clearing and settlement layer for public EV charging. Headquartered in Zug, Switzerland." />
        <link rel="canonical" href="https://networkcore.org/about-us" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"About","item":"https://networkcore.org/about-us"}]})}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              About NetworkCore
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light">
              Making EV Charging Brainless
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">Where We Come From</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NetworkCore was started by people who looked at public EV charging and saw the same problem from three different angles: the driver who could never trust the price, the CPO whose chargers sat half-empty waiting weeks for settlement, and the platform with millions of drivers but no clean way to plug into the energy transition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The technical layer of EV charging has been solved for years. OCPI, ISO-15118, the protocols all work. The money layer never was. It was patched together with bilateral agreements, opaque mark-ups, and settlement cycles that belong in a different century. The whole industry agreed on how the cars talk to the chargers. Nobody agreed on how the money moves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We started NetworkCore to build that missing layer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NetworkCore is headquartered in the city of Zug, Switzerland, and operates through international subsidiaries in each market we serve.
              </p>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NetworkCore is the neutral pricing, routing, clearing, and settlement layer for public EV charging. One integration replaces a tangle of bilateral agreements, PSP setups, and manual reconciliation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the supply side, CPOs and Private Hosts settle in T+2 at the public price, with no subscription fees, no exclusivity, and no loss of pricing control. In time, individual hosts will join the network on the same terms, turning any space with a connection into a settled supply point.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the demand side, Distribution Partners (OEM apps, fleet platforms, wallets, neobanks, insurers, mobility super-apps) get simple access to public charging, with no roaming contracts to negotiate and no operational overhead to absorb.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Drivers see the price on the screen and pay the price on the screen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Great infrastructure is invisible. NetworkCore disappears into the background, so our partners can focus on their customers, not on plumbing.
              </p>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NetworkCore is not an EV charging company. EV charging is the first system we are solving, not the last.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wherever assets are shared, energy is consumed, and money needs to move frequently across borders between multiple parties, the same problem repeats: fragmented supply, fragmented standards, fragmented settlement. The technical layer eventually resolves itself. The financial layer almost never does, because no neutral participant ever builds it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are building one.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Public EV charging is the proof. The same architecture extends naturally into Vehicle-to-Grid services, microgrids and distributed energy, micromobility, smart city infrastructure, and any other ecosystem where the question of who pays whom, when, and in what currency, has no good answer today.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NetworkCore's long-term ambition is to become the programmable clearing, settlement, and revenue-sharing network for the physical economy. EV charging is where we start.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Solved well, this makes EV charging cheaper and more equitable everywhere it operates. That is the point.
              </p>
            </div>

            {/* Leadership */}
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground mb-6">Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                NetworkCore was founded by a small team working across Europe and LATAM.
              </p>

              <div className="flex items-center gap-5 mb-6">
                <img
                  src={victorPhoto}
                  alt="Victor Lipszyc, Co-founder and CEO of NetworkCore"
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-medium text-foreground leading-tight">Victor Lipszyc</h3>
                  <p className="text-primary font-light">Co-founder &amp; CEO</p>
                </div>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Victor has spent two decades operating and digitising complex, multi-sided businesses across hospitality, real estate, and e-commerce. In each, he encountered the same pattern: fragmented supply, opaque pricing, and broken reconciliation between parties.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                When he bought his first EV in 2022, he noticed something strange. Public charging worked technically, but the economics underneath were broken. Drivers overpay, operators struggle with margins, and money moves through dozens of bilateral agreements. The problem looked uncannily familiar from those earlier industries, not as an energy challenge, but as a clearing and settlement one.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                He started NetworkCore to solve it from first principles: who pays whom, when, and why systems break before they reach scale.
              </p>
              <a
                href="https://www.linkedin.com/in/victor-lipszyc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Victor Lipszyc on LinkedIn"
                className="inline-flex items-center text-foreground hover:text-foreground/70 transition-colors"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
