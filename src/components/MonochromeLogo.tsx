import { cn } from "@/lib/utils";

interface MonochromeLogoProps {
  src: string;
  alt: string;
  tone?: "white" | "black";
  className?: string;
}

// Renders a true monochrome logo using CSS masking with transparent background
// Uses currentColor as fill so we can control tone via semantic text colors
const MonochromeLogo = ({ src, alt, tone = "white", className }: MonochromeLogoProps) => {
  const colorClass = tone === "white" ? "text-background" : "text-foreground";

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("inline-block align-middle", colorClass, className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundColor: "currentColor",
      }}
    />
  );
};

export default MonochromeLogo;
