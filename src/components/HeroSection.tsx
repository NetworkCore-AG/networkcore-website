import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaAction?: () => void;
  variant?: "default" | "dark" | "neutral" | "transparent";
  highlightText?: string;
  quote?: {
    text: string;
    author: string;
  };
  children?: React.ReactNode;
  compact?: boolean;
  backgroundImage?: string;
}

const HeroSection = ({
  id,
  title,
  subtitle,
  ctaText,
  ctaAction,
  variant = "default",
  highlightText,
  quote,
  children,
  compact = false,
  backgroundImage,
}: HeroSectionProps) => {
  const backgroundClasses = {
    default: "bg-background",
    dark: "bg-section-dark",
    neutral: "bg-section-neutral",
    transparent: "bg-transparent",
  };

  const renderTitle = () => {
    const titleClass = backgroundImage 
      ? "text-3xl md:text-4xl font-light text-white mb-6 tracking-tight" 
      : "text-3xl md:text-4xl font-light text-foreground mb-8 tracking-tight";
    
    if (!highlightText) {
      return <h1 className={titleClass}>{title}</h1>;
    }

    const parts = title.split(highlightText);
    if (parts.length === 2) {
      return (
        <h1 className={titleClass}>
          {parts[0]}
          <span className="gradient-text">{highlightText}</span>
          {parts[1]}
        </h1>
      );
    }

    // Fallback if highlightText is not found in title
    return <h1 className={titleClass}>{title}</h1>;
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTA = ctaAction || scrollToContact;

  return (
    <section
      id={id}
      className={`${compact ? 'py-16' : backgroundImage ? 'min-h-screen' : 'py-20 md:py-28'} ${backgroundImage ? 'relative' : `flex items-center justify-center ${backgroundClasses[variant]}`} transition-colors duration-300`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      <div className={`${backgroundImage ? 'absolute inset-0 flex flex-col items-center justify-start' : 'w-full'}`}>
        <div className={backgroundImage ? 'pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 text-center text-white' : 'text-center'}>
          {renderTitle()}
          {children}
          {!backgroundImage && (
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              {subtitle}
            </p>
          )}

          {/* Quote section */}
          {quote && (
            <div className="mb-10 p-8 bg-card rounded-lg border border-border shadow-medium max-w-3xl mx-auto">
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-4">
                "{quote.text}"
              </blockquote>
              <cite className="text-base font-semibold text-foreground">
                — {quote.author}
              </cite>
            </div>
          )}

          {/* CTA Button */}
          {ctaText && !backgroundImage && (
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={handleCTA}
                className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background font-medium tracking-wide"
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
        
        {/* Button positioned below the car for background image */}
        {ctaText && backgroundImage && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <Button
              variant="outline"
              size="xl"
              onClick={handleCTA}
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;