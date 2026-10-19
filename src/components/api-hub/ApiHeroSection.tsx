import { Button } from "@/components/ui/button";

const ApiHeroSection = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 tracking-tight">
          NetworkCore API
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light mb-12">
          One integration. Charging access, payments, settlement, and compliance — handled end to end.
        </p>
        <Button
          variant="ghost"
          size="compact"
          onClick={() => window.open('https://docs.networkcore.org/', '_blank', 'noopener,noreferrer')}
          className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
        >
          View API Documentation
        </Button>
      </div>
    </section>
  );
};

export default ApiHeroSection;
