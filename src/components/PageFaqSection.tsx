import { Link } from "react-router-dom";

interface FaqItem {
  question: string;
  answer: string;
}

interface PageFaqSectionProps {
  items: FaqItem[];
  background?: "background" | "muted";
}

const PageFaqSection = ({ items, background = "background" }: PageFaqSectionProps) => {
  const bgClass = background === "muted" ? "bg-muted/30" : "bg-background";
  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-border/50 rounded-xl px-6 py-5 bg-card/30">
              <p className="text-foreground font-medium mb-2">{item.question}</p>
              <p className="text-muted-foreground font-light leading-relaxed whitespace-pre-line">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/faqs"
            className="text-foreground font-light underline underline-offset-4 hover:text-foreground/70 transition-colors"
          >
            See all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageFaqSection;
