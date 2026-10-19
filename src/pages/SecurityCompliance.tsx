import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-border pt-12">
    <h2 className="text-2xl font-light text-foreground mb-6">{title}</h2>
    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const SecurityCompliance = () => {
  return (
    <>
      <Helmet>
        <title>Security & Compliance | NetworkCore</title>
        <meta name="description" content="NetworkCore is regulated financial infrastructure for EV charging: IFPE process underway, safeguarded funds, PCI-DSS, GDPR, AML/KYC, and T+2 settlement." />
        <meta property="og:title" content="Security & Compliance | NetworkCore" />
        <meta property="og:description" content="Regulated financial infrastructure by design: licensing path, safeguarded funds, security architecture, AML/KYC, and payment rails." />
        <meta property="og:url" content="https://networkcore.org/security-compliance" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content="Security & Compliance | NetworkCore" />
        <meta name="twitter:description" content="Regulated financial infrastructure by design." />
        <link rel="canonical" href="https://networkcore.org/security-compliance" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://networkcore.org/"},{"@type":"ListItem","position":2,"name":"Security & Compliance","item":"https://networkcore.org/security-compliance"}]})}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-16 bg-section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              Security &amp; Compliance
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light">
              Regulated financial infrastructure by design
            </p>

          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NetworkCore is being built as regulated financial infrastructure, not a software overlay. Compliance, safeguarding, and audit are core architecture, not features added on. Every charging session processed through the platform moves through controls designed to meet regulatory standards across the jurisdictions where we operate today, and where we plan to operate next.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This page explains the architecture, the controls already in place, and the licensing path ahead.
              </p>
            </div>

            <Section title="Status">
              <p>
                Across LATAM, NetworkCore operates today through licensed BaaS partner structures, with client funds safeguarded at partner banks under the applicable regulated entity in each market.
              </p>
              <p>
                In Mexico, the IFPE authorisation process is underway with CNBV and PCGA as legal counsel. Once issued, the licence will bring the financial logic, custody relationships, and settlement orchestration in Mexico under NetworkCore's direct regulatory permission, without changing the underlying architecture partners are integrating with today.
              </p>
              <p>
                Every transaction processed through our infrastructure already moves on regulated rails.
              </p>
            </Section>

            <Section title="Regulatory Architecture">
              <p>
                NetworkCore's stack is structured in four distinct layers. Each has a defined role, and each is operated by a party with the appropriate regulatory permission for its function.
              </p>
              <p>
                <span className="text-foreground font-medium">Banking Layer.</span> Partner banks hold safeguarded funds and settlement balances. They provide custody, bankruptcy-remote treatment of client funds, and access to domestic and cross-border payment rails.
              </p>
              <p>
                <span className="text-foreground font-medium">Regulatory Layer.</span> The regulated operating entity provides the legal permission to operate wallets, safeguard funds, and execute regulated payment flows. Across LATAM, NetworkCore operates through licensed BaaS partner structures today. Mexico is the first market where NetworkCore is pursuing a direct regulated node via the IFPE authorisation. Additional regulated entities will be added as transaction volume and corridor density justify them.
              </p>
              <p>
                <span className="text-foreground font-medium">NetworkCore System.</span> NetworkCore operates the proprietary financial logic of the network: clearing ledger, reconciliation engine, pricing logic, revenue allocation, settlement orchestration, FX logic, invoicing, and audit reporting.
              </p>
              <p>
                <span className="text-foreground font-medium">Payment Access Layer.</span> Payment service providers and acquiring partners handle payment acceptance, including card acquiring and local payment methods. These providers capture the driver payment and interface with the NetworkCore settlement stack.
              </p>
              <p>
                This separation ensures that legal custody of funds, regulatory permission, banking infrastructure, and financial logic are each clearly defined while remaining operationally integrated.
              </p>

              <div className="pt-6">
                <div className="space-y-2">
                  {[
                    { title: "Banking Layer", sub: "Safeguarding, custody, payment rails", owner: "Partner banks", highlight: false },
                    { title: "Regulatory Layer", sub: "Permission for regulated flows", owner: "Regulated entity", highlight: false },
                    { title: "NetworkCore System", sub: "Clearing, ledger, settlement, FX, invoicing", owner: "NetworkCore", highlight: true },
                    { title: "Payment Access Layer", sub: "Card acquiring, local payment methods", owner: "Payment service providers", highlight: false },
                  ].map((layer) => (
                    <div
                      key={layer.title}
                      className={`rounded-lg border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${
                        layer.highlight
                          ? "bg-foreground border-foreground text-background"
                          : "bg-section-neutral border-border text-foreground"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className={`text-base font-medium ${layer.highlight ? "text-background" : "text-foreground"}`}>
                          {layer.title}
                        </div>
                        <div className={`text-sm mt-1 ${layer.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                          {layer.sub}
                        </div>
                      </div>
                      <div className={`text-sm sm:text-right shrink-0 ${layer.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                        {layer.owner}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="sr-only">
                  NetworkCore four-layer regulatory architecture: Banking Layer (Partner banks), Regulatory Layer (Regulated entity), NetworkCore System (NetworkCore), Payment Access Layer (Payment service providers).
                </p>
              </div>
            </Section>


            <Section title="Safeguarded Funds">
              <p>
                All client funds are held in safeguarded accounts at partner banks under the applicable regulated entity. They are legally ring-fenced from NetworkCore's operating capital, bankruptcy-remote, and not available for investment or lending.
              </p>
              <p>
                Safeguarded balances typically remain in the clearing system for one to two business days before settlement execution. Total safeguarded funds are reconciled continuously against participant wallet balances. The two figures must match at all times, by construction.
              </p>
            </Section>

            <Section title="Security & Data Protection">
              <p>
                <span className="text-foreground font-medium">PCI-DSS compliance via gateway tokenisation.</span> NetworkCore does not store cardholder data. Payment Account Numbers are tokenised at the payment service provider layer using network vaults. The NetworkCore platform handles transaction references, not card data.
              </p>
              <p>
                <span className="text-foreground font-medium">Encryption at rest and in transit.</span> All sensitive data is encrypted with industry-standard algorithms across the full stack.
              </p>
              <p>
                <span className="text-foreground font-medium">HSM-backed key management.</span> Cryptographic keys are managed in hardware security modules with strict least-privilege access controls.
              </p>
              <p>
                <span className="text-foreground font-medium">Immutable audit trails.</span> Every ledger entry is append-only and cryptographically secured. Retroactive modification of settled records is not possible by design.
              </p>
              <p>
                <span className="text-foreground font-medium">GDPR-compliant data architecture.</span> Personal data is processed under the General Data Protection Regulation across the platform, regardless of participant jurisdiction.
              </p>
              <p>
                <span className="text-foreground font-medium">ISO 27001 and SOC 2.</span> Both certifications are on the active compliance roadmap and will be pursued as the platform scales.
              </p>
            </Section>

            <Section title="AML, KYC & Transaction Monitoring">
              <p>
                NetworkCore's compliance framework is calibrated for B2B2C settlement integrity rather than direct consumer onboarding.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Risk-based onboarding of all counterparties, including Charge Point Operators, Private Hosts, and Distribution Partners.</li>
                <li>KYC documentation and Ultimate Beneficial Owner verification, with enhanced due diligence where required.</li>
                <li>Sanctions and Politically Exposed Person screening at onboarding and continuously thereafter.</li>
                <li>Transaction monitoring for velocity anomalies, geographic irregularities, refund patterns, and unusual settlement behaviour.</li>
                <li>Four-eyes approval for key operational actions, including settlement parameter changes, counterparty status updates, and dispute decisions.</li>
                <li>Full audit-ready access logging and immutable ledger evidence on every session.</li>
              </ul>
              <p>
                As additional regulated nodes come online, these controls extend across jurisdictions under the same underlying NetworkCore engine.
              </p>
            </Section>

            <Section title="Payment Rails & Network Integrity">
              <p>
                <span className="text-foreground font-medium">Settlement corridors.</span> SPEI for domestic Mexico, SEPA for euro-denominated settlement, and SWIFT for cross-border corridors. Additional rails are added as markets are onboarded.
              </p>
              <p>
                <span className="text-foreground font-medium">T+2 settlement.</span> CPOs and Private Hosts settle in T+2 in their preferred currency. Distribution Partners settle on daily bundled or weekly cycles as configured.
              </p>
              <p>
                <span className="text-foreground font-medium">Three-layer chargeback defence.</span> Prevention at the session layer using metadata invisible to the card network. Influence at the payment service provider layer through risk-scored 3D Secure and network token enforcement. Absorption through rolling reserves and a first-loss absorption envelope that protects CPOs from baseline dispute rates.
              </p>
              <p>
                <span className="text-foreground font-medium">Pre-funded clearing model.</span> All session revenue allocations occur only after confirmed payment capture from the payment service provider. NetworkCore carries no unsecured credit exposure to participants.
              </p>
            </Section>

            <Section title="Group Structure">
              <p>
                NetworkCore AG, headquartered in Zug, Switzerland, is the parent company and strategic control centre of the group. Swiss governance provides legal certainty, neutrality, and robust standards across the corporate structure.
              </p>
              <p>
                Across LATAM, NetworkCore operates through licensed BaaS partner structures. The first wholly-owned regulated operating node is a subsidiary in Mexico, which will hold the IFPE authorisation once issued by CNBV. Additional regulated subsidiaries will be established in each market we enter, each authorised under its local regulatory framework while operating on shared NetworkCore architecture.
              </p>
              <p>
                This structure preserves the advantages of Swiss domicile at group level while allowing regulation to develop where it is commercially most useful.
              </p>
            </Section>

            <Section title="Compliance Enquiries">

              <p>
                For partners, legal counsel, or regulators seeking further detail on NetworkCore's compliance architecture or due diligence materials, contact compliance [at] networkcore [dot] org. A dedicated dataroom is available for serious commercial counterparties under non-disclosure.
              </p>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SecurityCompliance;
