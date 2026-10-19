import { Eye, ShieldOff, Settings, Rocket } from "lucide-react";

const riskItems = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Price Transparency Guaranteed",
    description: "Charging is billed at official public charging prices — no hidden markups, no pricing discrepancies, no risk to user trust.",
  },
  {
    icon: <ShieldOff className="w-5 h-5" />,
    title: "No Infrastructure Exposure",
    description: "You do not deploy or manage infrastructure — no capex, no technical build, no long-term commitments.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Zero Operational Overhead",
    description: "All charging operations are handled by NetworkCore — including session management, settlement, invoicing, reconciliation, and support.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Controlled Pilot, No Upfront Risk",
    description: "Start with a defined city-level launch and expand only once the model is proven.",
  },
];

const DPLowRiskSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            Designed for Low-Risk Adoption
          </h2>
          <p className="text-lg text-foreground font-light">
            NetworkCore is designed so you can launch EV charging with full control, minimal exposure, and a clear path to scale.
          </p>
        </div>

        <div className="space-y-14">
          {riskItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DPLowRiskSection;
