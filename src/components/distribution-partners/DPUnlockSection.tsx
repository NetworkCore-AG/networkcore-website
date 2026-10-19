import { TrendingUp, Globe, Zap, Shield, Eye, CreditCard, Settings, Layers } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Access to Charging Networks",
    description: "Unlock immediate access to thousands of charging stations through one integration — giving you real coverage from day one.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "One Charging Experience, Everywhere",
    description: "Give your users a single, seamless way to charge across public charging networks — one consistent experience, fully integrated into your platform.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Turn Charging Into Revenue",
    description: "Capture value from every charging session happening across your user base — turning real-world energy consumption into a recurring revenue stream.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Keep the Driver Relationship",
    description: "Embed charging directly into your platform so users never leave your ecosystem — your interface, your brand, your transaction.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Transparent Pricing, Built for Trust",
    description: "Offer charging at official public charging prices — giving your users full transparency and reinforcing long-term trust in your brand.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Charging Works Like a Payment",
    description: "Settlement, billing, reconciliation, and revenue allocation are handled automatically — just like any financial transaction.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Fully Managed Charging Operations",
    description: "Deliver a seamless charging experience while NetworkCore handles session management, operator coordination, settlement, invoicing, and support.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Charging as a Native Service",
    description: "Offer EV charging directly within your platform — with infrastructure, backend systems, and operations fully handled.",
  },
];

const DPUnlockSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            What You Unlock
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Everything you need to turn charging into a native part of your platform.
          </p>
        </div>

        <div className="space-y-14">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-card/50 text-foreground/60">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {feature.description}
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

export default DPUnlockSection;
