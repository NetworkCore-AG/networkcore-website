import { Button } from "@/components/ui/button";

const DPCtaSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
          Make EV Charging Your Next Embedded Revenue Layer
        </h2>
        <p className="text-lg text-muted-foreground mb-4 font-light">
          If you already have drivers, the charging transaction is already happening — the only question is whether it happens inside your platform.
        </p>
        <p className="text-lg text-muted-foreground mb-12 font-light">
          NetworkCore turns that activity into a recurring revenue stream for your platform.
        </p>

        <Button
          variant="ghost"
          size="compact"
          onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-foreground/60 text-foreground hover:bg-foreground/10 hover:border-foreground font-medium px-6"
        >
          Become a Partner
        </Button>
      </div>
    </section>
  );
};

export default DPCtaSection;
