import { Check } from "lucide-react";

const tariffs = [
  {
    label: "Public tariff",
    title: "The driver pays your price",
    parties: ["You", "Driver"],
    benefits: ["Your price, passed through unchanged", "You stay merchant of record"],
    payment: "One agreed commission on sessions we bring.",
  },
  {
    label: "Wholesale tariff",
    title: "You receive your price in full",
    parties: ["You", "Partner", "Driver"],
    benefits: ["100% of the wholesale price you set", "Opens partners who only buy wholesale"],
    payment: "You pay nothing. We get paid from the Distribution Partner.",
  },
];

const ChargingPartnerPricing = () => (
  <div className="partner-pricing mx-auto w-full max-w-4xl">
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-light leading-tight text-foreground md:text-4xl">
        Two Ways to Price, Choose per Partner
      </h2>
    </div>
    <div className="grid gap-5 md:grid-cols-2" aria-label="Public and wholesale tariff comparison">
      {tariffs.map((tariff, index) => (
        <article key={tariff.label} className={`flex min-w-0 flex-col rounded-lg border border-border/60 p-6 text-left sm:p-7 ${index === 0 ? "bg-electric-green/5" : "bg-card/60"}`}>
          <p className="mb-3 text-sm font-medium uppercase text-electric-green">{tariff.label}</p>
          <h3 className="mb-5 text-2xl font-light leading-tight text-foreground md:min-h-14">{tariff.title}</h3>
          <div className="mb-5 flex min-w-0 items-center gap-2" aria-label={tariff.parties.join(" → ")}>
            {tariff.parties.map((party, partyIndex) => (
              <div key={party} className={`flex items-center gap-2 ${partyIndex === 0 ? "flex-1" : ""}`}>
                <span className={`shrink-0 rounded-full px-3 py-1 text-sm font-medium ${partyIndex === 0 ? "bg-electric-green/15 text-foreground" : "bg-foreground text-background"}`}>{party}</span>
                {partyIndex < tariff.parties.length - 1 && <span className="h-0.5 min-w-3 flex-1 bg-foreground" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <ul className="mb-6 space-y-3 text-base font-light leading-relaxed text-foreground">
            {tariff.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>{benefit}</span></li>)}
          </ul>
          <div className="mt-auto border-t border-border pt-4">
            <p className="mb-2 text-sm font-medium uppercase text-muted-foreground">How we are paid</p>
            <p className="text-base font-light leading-relaxed text-foreground">{tariff.payment}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ChargingPartnerPricing;