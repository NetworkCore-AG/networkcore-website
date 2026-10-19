import { Button } from "@/components/ui/button";

const ApiCtaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
          Start Moving Money on Every Charging Session
        </h2>
        <Button
          variant="ghost"
          size="compact"
          onClick={() => window.location.href = '/#contact'}
          className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
        >
          Become a Partner
        </Button>
      </div>
    </section>
  );
};

export default ApiCtaSection;
