import { Check } from "lucide-react";

const DPWhyNowSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
            Why This Matters Now
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-light">
            The EV charging transaction is already happening — across your users and markets. The shift is not adoption. It is ownership.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-foreground leading-relaxed font-light text-center mb-6">
            This category is still open — but not for long. The platforms moving early are already turning charging into:
          </p>
          <div className="space-y-3">
            {["a native service", "a retention driver", "a recurring revenue layer"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partners Move Early */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
              Why Partners Move Early
            </h2>
            <p className="text-lg text-foreground leading-relaxed font-light">
              Early partners don't just add charging — they secure the position.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              "one anchor partner per country",
              "preferential economics reserved for early partners",
              "first platforms become the default charging interface",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPWhyNowSection;
