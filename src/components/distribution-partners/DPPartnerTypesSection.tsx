import { Car, Truck, Wallet, ParkingCircle, Plane, Shield, Building2, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const partnerCategories = [
  {
    icon: <Car className="w-5 h-5" />,
    title: "Automotive Platforms / OEMs",
    description: "OEM apps, leasing platforms, subscriptions, dealerships, used EV marketplaces",
    href: "/distribution-partners/ev-charging-for-oems",
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Mobility & Fleet Platforms",
    description: "Ride-hailing, delivery, taxi platforms, car-share, fleet software, car rentals",
    href: "/distribution-partners/public-ev-charging-for-fleets",
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: "Financial Platforms",
    description: "Wallets, neobanks, card issuers, expense platforms, fuel card apps, loyalty apps",
    href: "/distribution-partners/ev-charging-for-financial-platforms",
  },
  {
    icon: <ParkingCircle className="w-5 h-5" />,
    title: "Parking & Road Platforms",
    description: "Parking apps, tolling apps, mobility payment platforms",
    href: "/distribution-partners/ev-charging-for-parking-and-road-platforms",
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Travel, Hospitality & Destination Platforms",
    description: "hotels, retail destinations, airports, holiday parks, travel apps",
    href: "/distribution-partners/ev-charging-for-travel-and-hospitality",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Insurance & Driver Services Platforms",
    description: "insurers, roadside assistance, warranty and breakdown providers, driver membership clubs",
    href: "/distribution-partners/ev-charging-for-insurance-and-driver-services",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Corporate & Benefits Platforms",
    description: "mobility benefits, salary sacrifice, commuter benefits, business travel, employee programs",
    href: "/distribution-partners/ev-charging-for-employee-benefits",
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Public Sector Mobility Platforms",
    description: "smart mobility interfaces, city-level transport platforms, campus mobility ecosystems",
    href: "/distribution-partners/ev-charging-for-public-sector-mobility",
  },
];

const DPPartnerTypesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            Who are Distribution Partners?
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-light mb-2">
            Distribution Partners are platforms closest to the driver.
          </p>
          <p className="text-lg text-foreground leading-relaxed font-light">
            You already own the user journey — NetworkCore extends it into EV charging, turning it into a native service and a new revenue stream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partnerCategories.map((category, index) => {
            const inner = (
              <>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-foreground mb-1 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>
              </>
            );
            const className = "flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-card/50 hover:border-foreground/20 transition-colors";
            return (category as any).href ? (
              <Link key={index} to={(category as any).href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={index} className={className + " cursor-default"}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DPPartnerTypesSection;
