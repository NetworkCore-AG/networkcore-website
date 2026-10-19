import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  id: string;
  title: string;
  intro?: string;
  items: FaqItem[];
}

const groups: FaqGroup[] = [
  {
    "id": "about-networkcore",
    "title": "About NetworkCore",
    "items": [
      {
        "q": "What is NetworkCore?",
        "a": "The financial network for EV charging. We sit between everyone who owns chargers and everyone who owns drivers, and handle everything that happens with the money around a session: pricing, routing, payment, settlement, FX, VAT, and compliance."
      },
      {
        "q": "How is NetworkCore different from a roaming hub like Hubject, Gireve or Emobi?",
        "a": "Roaming hubs move data. We move the money. Sell at your public price and we enforce it, or set a wholesale rate and receive 100% of it. Either way VAT, FX, invoicing and settlement are automatic, and nobody pays a subscription to be here."
      },
      {
        "q": "Is NetworkCore a replacement for my roaming hub?",
        "a": "No. We are additive. Your existing roaming connections, apps and direct customers stay exactly as they are, and we bring demand from platforms that are not in your mix today."
      },
      {
        "q": "How does NetworkCore make money?",
        "a": "On public price, one per-session commission on the charging side, taken only when a session settles. On wholesale, the operator receives 100% of the rate they set. No subscriptions, no setup costs, no minimums."
      },
      {
        "q": "Where is NetworkCore based?",
        "a": "NetworkCore AG is headquartered in Zug, Switzerland, with regulated operating nodes in each market we deploy in."
      },
      {
        "q": "Is my money safe? How does settlement work?",
        "a": "Client funds sit in safeguarded accounts at partner banks under the applicable regulated entity, ring-fenced from our operating capital and never lent or invested. Every movement from driver payment to payout carries a full audit trail."
      },
      {
        "q": "How does cross-border charging work?",
        "a": "A driver charges abroad and pays in their home currency. We handle the session, convert at close, and settle each participant locally. No bilateral agreements between countries required."
      },
      {
        "q": "What standards and protocols does NetworkCore support?",
        "a": "OCPI natively, for authentication, session data and CDR reconciliation. ISO-15118 Plug & Charge is available on request via partner certificates, and Autocharge is coming soon."
      },
      {
        "q": "Who handles VAT and invoicing?",
        "a": "On public price, we do: end-customer invoices in the Charging Partner's name with the correct local VAT, plus the commission and revenue-share invoices. On wholesale, the Distribution Partner is the merchant of record and invoices the driver directly. Invoices can also be emitted by your connected CSMS or CPMS."
      }
    ]
  },
  {
    "id": "charging-partners",
    "title": "Charging Partners",
    "items": [
      {
        "q": "What is NetworkCore for a Charging Partner?",
        "a": "A new distribution channel. We bring sessions from platforms that already own drivers: OEM apps, fleets, wallets, neobanks, insurers, super-apps. Everything you run today stays exactly as it is."
      },
      {
        "q": "Where does the additional demand come from?",
        "a": "From Distribution Partners with large driver bases and no clean way to embed charging. Their users already charge somewhere. Through us, those sessions land at your chargers."
      },
      {
        "q": "What is the difference between public price and wholesale?",
        "a": "On public price you stay the merchant of record, the driver pays your tariff exactly as set, and you keep the majority of the session. On wholesale you set a rate per kWh and receive 100% of it, and the partner prices the session and becomes the merchant of record."
      },
      {
        "q": "When would I use wholesale?",
        "a": "When you want one counterparty and no retail exposure. The partner invoices the driver, handles the VAT and owns any dispute. You invoice them once a month for everything they bought."
      },
      {
        "q": "Can my wholesale rate be higher than my public price?",
        "a": "Yes. The rate is yours to set, above or below, published to the network or agreed privately with one partner."
      },
      {
        "q": "Can I use both models at once?",
        "a": "Yes. Public price with one partner, wholesale with another. Changeable at any time."
      },
      {
        "q": "Do I lose pricing control?",
        "a": "No. On public price we transmit your tariff exactly as you set it. On wholesale you set the rate and receive all of it."
      },
      {
        "q": "Are there fees, subscriptions, or minimums?",
        "a": "None. No sign-up, monthly, SaaS or exit fees. On public price, one per-session commission agreed before launch and applied only to the sessions we bring you. On wholesale, you receive 100% of your rate."
      },
      {
        "q": "Can I choose which of my sites are published?",
        "a": "Yes. Site by site, hour by hour, partner by partner, and you can expose some connectors at a site rather than all. Change any of it at any time."
      },
      {
        "q": "Is there exclusivity?",
        "a": "No. No category exclusivity, no volume commitments. Deselect any partner at any time without affecting the others."
      },
      {
        "q": "What is required technically, and how long does integration take?",
        "a": "A working OCPI endpoint and your tariffs configured. If the endpoint is ready, you are live within the hour."
      },
      {
        "q": "How quickly do I get paid?",
        "a": "Automatically, in your chosen currency, with itemised reporting on every payout. Sessions typically convert to cash within two business days."
      },
      {
        "q": "Who carries the chargeback risk?",
        "a": "On public price, we do, and you are never debited for a session we routed. On wholesale the partner is merchant of record and carries it, with our session data behind them."
      },
      {
        "q": "I host chargers for guests or tenants, not as a business. Is this for me?",
        "a": "Yes. Hotels, retail, offices, parking operators, hospitals and universities all qualify. Your hardware, CPMS and direct flow stay as they are, and we run alongside as an extra demand channel."
      },
      {
        "q": "What happens to my existing direct customers?",
        "a": "Nothing. We earn only on incremental sessions. We never market to, capture, or compete for drivers you already have."
      },
      {
        "q": "Do I need to switch hardware or CPMS?",
        "a": "No. We are hardware-neutral and CPMS-agnostic, and connect over OCPI."
      },
      {
        "q": "My depot sits empty during the day. How does that work?",
        "a": "You open the bays and hours that suit you, with reserve capacity for your own vehicles enforced on every session. Pause external access instantly, for any reason, with no notice and no penalty."
      },
      {
        "q": "Can I exit anytime?",
        "a": "Yes, on thirty days' notice. Your setup stays exactly as it was."
      }
    ]
  },
  {
    "id": "distribution-partners",
    "title": "Distribution Partners",
    "items": [
      {
        "q": "What is a Distribution Partner?",
        "a": "Any platform that already owns the driver and wants charging inside it: OEM apps, fleets, wallets, neobanks, insurers, parking apps, super-apps, loyalty programmes, public sector mobility."
      },
      {
        "q": "What does it cost?",
        "a": "Nothing to connect. Setup, integration, API and the front-end module are included, with no subscription and no launch cost."
      },
      {
        "q": "What is the difference between public price and wholesale?",
        "a": "On public price your users pay the operator's exact tariff, the operator is merchant of record, and invoicing, VAT and disputes are handled for you. On wholesale you buy at the operator's rate, set your own price, keep the difference, and become the merchant of record."
      },
      {
        "q": "Which should we choose?",
        "a": "Public price for the whole network with no obligations. Wholesale if you want to set your own price and keep the margin, and your product already invoices users and handles disputes. Many partners run both, by operator."
      },
      {
        "q": "Can we negotiate our own rates with specific operators?",
        "a": "Yes. Operators set wholesale rates you can buy at directly, and where your volume gives you leverage you can agree a rate privately. Both settle on the same rails."
      },
      {
        "q": "Do I need to build or operate charging infrastructure?",
        "a": "No. One integration connects you to the whole network, and we handle everything between the plug and the bank account."
      },
      {
        "q": "How do drivers see this in my app? Is it my brand?",
        "a": "Yours entirely. Your interface, your brand, your transaction. NetworkCore is invisible to the driver."
      },
      {
        "q": "Will my users see different prices versus competitor apps?",
        "a": "On public price, no: the operator's tariff is enforced whichever app starts the session. On wholesale, you set the price and position it as you choose."
      },
      {
        "q": "Can we choose which operators appear in our product?",
        "a": "Yes. Select which operators and which sites appear, and on which model."
      },
      {
        "q": "What does integration involve?",
        "a": "A single OCPI-native API, with mapping, filtering, session control and reporting. Use our front-end module or build your own. Most launches are live within weeks."
      },
      {
        "q": "How are settlement, FX, and currency handled?",
        "a": "Automatically, in your preferred currency, with FX applied at session close. No manual reconciliation and no separate billing for international sessions."
      },
      {
        "q": "Who handles compliance and regulatory burden?",
        "a": "On public price, we do: AML and KYC checks, sanctions screening, monitoring, VAT invoicing per jurisdiction, disputes and audit-ready records. On wholesale you are merchant of record, so driver-facing invoicing, VAT and disputes sit with you."
      },
      {
        "q": "Is there exclusivity? Can I be the only Distribution Partner in my country?",
        "a": "We onboard a limited number of anchor partners per market, discussed during commercial onboarding. The network stays open to partners joining later, each managed independently."
      }
    ]
  }
];

const allItems = groups.flatMap((g) => g.items);

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://networkcore.org/' },
    { '@type': 'ListItem', position: 2, name: 'FAQs', item: 'https://networkcore.org/faqs' },
  ],
};

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | NetworkCore — EV Charging Financial Network</title>
        <meta
          name="description"
          content="How NetworkCore works for Charging Partners and Distribution Partners: pricing, settlement, VAT, FX, OCPI and compliance, in plain English."
        />
        <meta property="og:title" content="FAQs | NetworkCore — EV Charging Financial Network" />
        <meta
          property="og:description"
          content="How NetworkCore works for Charging Partners and Distribution Partners: pricing, settlement, VAT, FX, OCPI and compliance, in plain English."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://networkcore.org/faqs" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs | NetworkCore" />
        <meta
          name="twitter:description"
          content="How NetworkCore works for Charging Partners and Distribution Partners: pricing, settlement, VAT, FX, OCPI and compliance, in plain English."
        />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <link rel="canonical" href="https://networkcore.org/faqs" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-section-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-4xl mx-auto">
              How NetworkCore works for Charging Partners and Distribution Partners: pricing, settlement, VAT, FX, OCPI and compliance, in plain English.
            </p>
          </div>
        </section>

        {/* Quick nav */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="text-sm px-4 py-2 rounded-full border border-border bg-muted/30 text-foreground hover:bg-muted hover:border-foreground/30 transition-colors"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Groups */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {groups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-tight">
                  {group.title}
                </h2>
                <Accordion type="multiple" className="w-full">
                  {group.items.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${group.id}-${idx}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Faqs;
