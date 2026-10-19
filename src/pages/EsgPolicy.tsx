import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-border pt-12">
    <h2 className="text-2xl font-light text-foreground mb-6 tracking-tight">{title}</h2>
    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const PillarCard = ({ pillar, title, body }: { pillar: string; title: string; body: string }) => (
  <div className="rounded-lg border border-border bg-section-neutral p-6 sm:p-8">
    <div className="text-xs uppercase tracking-widest text-primary font-medium mb-3">{pillar}</div>
    <h3 className="text-xl font-medium text-foreground mb-3">{title}</h3>
    <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
  </div>
);

const sdgs = [
  { code: 'SDG 7', title: 'Affordable & Clean Energy', body: 'Lowering the cost and friction of EV charging for drivers everywhere.' },
  { code: 'SDG 10', title: 'Reduced Inequalities', body: 'Opening EV infrastructure to emerging markets and underserved communities.' },
  { code: 'SDG 13', title: 'Climate Action', body: 'Accelerating the shift away from fossil-fuel transport at the infrastructure level.' },
  { code: 'SDG 9', title: 'Industry & Innovation', body: 'Building open, resilient financial infrastructure for the clean transport economy.' },
  { code: 'SDG 11', title: 'Sustainable Cities', body: 'Enabling scalable, city-wide EV charging ecosystems for urban populations.' },
  { code: 'SDG 17', title: 'Partnerships for the Goals', body: 'Connecting charging networks, payment platforms, and regulators across borders.' },
];

const afir = [
  { title: 'Price Transparency', body: "EV drivers deserve to know what they're paying before they plug in. Our platform is designed to make pricing clear, consistent, and visible — meeting and exceeding EU regulatory standards for transparent charging." },
  { title: 'Interoperability', body: 'We believe any driver should be able to charge at any station, through any app. Our infrastructure is built on internationally recognised open standards, so networks connect seamlessly without barriers.' },
  { title: 'Non-Discrimination', body: 'Our platform is open to all — regardless of vehicle brand, network affiliation, or geography. No mandatory subscriptions, no preferential treatment. Equal access is a design principle, not an afterthought.' },
  { title: 'EU Deployment Mandate', body: 'AFIR requires member states to rapidly expand public charging infrastructure across the EU. As that network grows, we grow with it — providing the financial layer that makes it all work.' },
];

const commitments = [
  { title: 'Net-Zero Pathway', body: 'Committed to establishing a formal net-zero target aligned with internationally recognised standards as we scale.' },
  { title: 'Transparent Pricing', body: 'Public, visible pricing is non-negotiable on our platform. Drivers always know what they\'re paying.' },
  { title: 'Emerging Market Focus', body: 'We deliberately build in markets where financial infrastructure is most needed — not just where it is easiest.' },
  { title: 'Data Privacy', body: 'We operate to GDPR standards and beyond — data minimisation, purpose limitation, and user rights built in from day one.' },
  { title: 'Regulatory Compliance', body: 'We enter every market through a regulated framework. Compliance isn\'t a box-tick — it\'s how we build trust.' },
  { title: 'Annual ESG Reporting', body: 'We will publish an annual ESG progress report from our first full year of operations, open to the public.' },
];

const EsgPolicy = () => {
  return (
    <>
      <Helmet>
        <title>ESG Policy | NetworkCore</title>
        <meta name="description" content="NetworkCore's ESG profile: built for the energy transition, fair access and transparent pricing, regulated from day one. Aligned with UN SDGs and EU AFIR." />
        <meta property="og:title" content="ESG Policy | NetworkCore" />
        <meta property="og:description" content="Environment, social and governance commitments aligned with UN SDGs and EU AFIR." />
        <meta property="og:url" content="https://networkcore.org/esg-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://networkcore.org/images/og-image.jpg" />
        <meta name="twitter:title" content="ESG Policy | NetworkCore" />
        <meta name="twitter:description" content="Environment, social and governance commitments aligned with UN SDGs and EU AFIR." />
        <link rel="canonical" href="https://networkcore.org/esg-policy" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-16 bg-section-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
              ESG Policy
            </h1>
            <p className="text-xl md:text-2xl text-primary font-light">
              Our Model is Structurally Aligned With the Energy Transition
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div>
              <h2 className="text-2xl font-light text-foreground mb-6 tracking-tight">Our ESG Profile</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                NetworkCore is a financial technology company building open infrastructure for the global electric vehicle charging market. ESG is not a compliance exercise for us — it is the reason we exist. Our business model is structurally aligned with the energy transition, and we hold ourselves accountable to the highest standards of transparency, access, and responsible governance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <PillarCard
                pillar="Environment"
                title="Built for the Energy Transition"
                body="Our business exists because cleaner transport needs better financial infrastructure. Every connection we enable between a driver and a charge point is a small step toward a world less dependent on fossil fuels. We operate a lean, digital-first model — no physical hardware, minimal footprint, maximum impact."
              />
              <PillarCard
                pillar="Social"
                title="Fair Access, Transparent Pricing"
                body="We believe EV charging should be accessible and fairly priced — regardless of who you are or where you live. Our platform is designed around openness: no hidden fees, no walled gardens, no lock-in. We prioritise markets where better financial infrastructure is needed most."
              />
              <PillarCard
                pillar="Governance"
                title="Regulated From Day One"
                body="We take compliance seriously — not because we have to, but because it's the right foundation to build on. NetworkCore operates within regulated financial frameworks across every market it enters, with robust data protection, financial crime prevention, and ethical business conduct at its core."
              />
            </div>

            <Section title="Aligned with EU AFIR Regulation">
              <p>
                The EU's Alternative Fuels Infrastructure Regulation (AFIR), in force since April 2024, sets the standard for how EV charging infrastructure should work across Europe. NetworkCore's platform was designed with these principles at its core — not retrofitted to meet them.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {afir.map((a) => (
                  <div key={a.title} className="rounded-lg border border-border bg-section-neutral p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none mt-1">✓</span>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-2">{a.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{a.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Aligned with the UN Sustainable Development Goals">
              <p>
                Our work connects directly to six of the UN's 17 Sustainable Development Goals. These aren't aspirational labels — they describe what NetworkCore actually does and the problems it actually solves.
              </p>
              <div className="overflow-x-auto pt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground uppercase tracking-wider w-32">Goal</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground uppercase tracking-wider">Focus</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-foreground uppercase tracking-wider">How NetworkCore Contributes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sdgs.map((s) => (
                      <tr key={s.code} className="border-b border-border/50">
                        <td className="py-4 px-4 text-foreground font-medium">{s.code}</td>
                        <td className="py-4 px-4 text-foreground">{s.title}</td>
                        <td className="py-4 px-4 text-muted-foreground text-base">{s.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Our Commitments">
              <p>
                We believe accountability means stating what we stand for and reporting on it honestly. These are NetworkCore's core ESG commitments — publicly made and publicly tracked.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {commitments.map((c) => (
                  <div key={c.title} className="rounded-lg border border-border bg-section-neutral p-6">
                    <h3 className="text-base font-medium text-foreground mb-2">{c.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EsgPolicy;
