import { Check } from "lucide-react";

interface DistributionPartnerPricingProps {
  publicOnly?: boolean;
  title?: string;
}

const DistributionPartnerPricing = ({ publicOnly = false, title = "Two Ways to Buy & Price" }: DistributionPartnerPricingProps) => (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-light text-foreground tracking-tight md:text-4xl">{title}</h2>
          <div className={`grid gap-5 ${publicOnly ? "mx-auto max-w-xl" : "md:grid-cols-2"}`} aria-label={publicOnly ? "Public price" : "Public price and wholesale buying options"}>
            <article className="flex min-w-0 flex-col rounded-lg border border-border/60 bg-electric-green/5 p-6 text-left sm:p-7">
              <p className="mb-3 text-sm font-medium uppercase text-electric-green">Public price</p>
              <h3 className="mb-5 text-2xl font-light leading-tight text-foreground md:min-h-14">The driver pays the public price</h3>
              <div className="mb-5 flex min-w-0 items-center gap-2" aria-label="Charging Partner → Driver">
                <span className="shrink-0 rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">Charging Partner</span>
                <span className="h-0.5 min-w-3 flex-1 bg-foreground" aria-hidden="true" />
                <span className="shrink-0 rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">Driver</span>
              </div>
              <ul className="mb-6 space-y-3 text-base font-light leading-relaxed text-foreground">
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>Your users pay the operator's exact tariff with no markup and no spread</span></li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>CPO is merchant of record</span></li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>Invoicing, VAT, and disputes are handled</span></li>
              </ul>
              <div className="mt-auto border-t border-border pt-4">
                <p className="mb-2 text-sm font-medium uppercase text-muted-foreground">How we are paid</p>
                <p className="text-base font-light leading-relaxed text-foreground">It's free. We get paid from the Charging Partner.</p>
              </div>
            </article>
            {!publicOnly && <article className="flex min-w-0 flex-col rounded-lg border border-border/60 bg-card/60 p-6 text-left sm:p-7">
              <p className="mb-3 text-sm font-medium uppercase text-electric-green">Wholesale Price</p>
              <h3 className="mb-5 text-2xl font-light leading-tight text-foreground md:min-h-14">Buy wholesale &amp; set your price</h3>
              <div className="mb-5 flex min-w-0 items-center gap-2" aria-label="Charging Partner → You → Driver">
                <span className="shrink-0 rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">Charging Partner</span>
                <span className="h-0.5 min-w-3 flex-1 bg-foreground" aria-hidden="true" />
                <span className="shrink-0 rounded-full bg-electric-green/15 px-3 py-1 text-sm font-medium text-foreground">You</span>
                <span className="h-0.5 min-w-3 flex-1 bg-foreground" aria-hidden="true" />
                <span className="shrink-0 rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">Driver</span>
              </div>
              <ul className="mb-6 space-y-3 text-base font-light leading-relaxed text-foreground">
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>You buy at the operator's rate per kWh, and set your own price</span></li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>You are the merchant of record</span></li>
                <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-electric-green" aria-hidden="true" /><span>Invoicing, VAT, and any dispute is on you</span></li>
              </ul>
              <div className="mt-auto border-t border-border pt-4">
                <p className="mb-2 text-sm font-medium uppercase text-muted-foreground">How we are paid</p>
                <p className="text-base font-light leading-relaxed text-foreground">One agreed commission on sessions you sell.</p>
              </div>
            </article>}
          </div>
          {!publicOnly && <p className="mt-10 text-center text-lg font-light leading-relaxed text-foreground max-w-3xl mx-auto">Choose per operator, and run both at once if it suits you.</p>}
        </div>
);

export default DistributionPartnerPricing;
