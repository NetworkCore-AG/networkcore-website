import { Zap, Clock, Percent, Eye, Globe, FileText } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Multi-Network Charging Access",
    description: "Connect to thousands of charge points across OCPI-connected networks through one API.",
  },
  {
    icon: Clock,
    title: "Automated Settlement",
    description: "CPOs are settled within 48 hours. No manual reconciliation. No delays.",
  },
  {
    icon: Percent,
    title: "Programmable Commissions",
    description: "A single low single-digit all-in commission per session, programmable and negotiable between CPOs and Distribution Partners. Allocated automatically on every session — CPOs keep the majority.",
  },
  {
    icon: Eye,
    title: "Transparent Public Pricing",
    description: "The CPO's published tariff is what the driver pays. No markup. No intermediary margin.",
  },
  {
    icon: Globe,
    title: "Cross-Border VAT & Compliance",
    description: "Jurisdiction-specific VAT calculation, e-invoicing (including CFDI in Mexico), and audit-ready reporting — built into the transaction layer.",
  },
  {
    icon: FileText,
    title: "Charge Detail Records",
    description: "Validated, enriched CDRs delivered per session for downstream invoicing, reporting, and reconciliation.",
  },
];

const ApiCapabilitiesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-lg border border-border bg-card"
            >
              <cap.icon className="w-6 h-6 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiCapabilitiesSection;
