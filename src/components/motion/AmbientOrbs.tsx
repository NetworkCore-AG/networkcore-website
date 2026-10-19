import { cn } from "@/lib/utils";

interface AmbientOrbsProps {
  className?: string;
}

/**
 * Very soft, slowly drifting blurred gradient orbs used as a living background
 * texture behind light content sections. Purely decorative.
 */
const AmbientOrbs = ({ className }: AmbientOrbsProps) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
    <div className="orb orb-a absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full bg-electric-green/10 blur-3xl" />
    <div className="orb orb-b absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-electric-blue/10 blur-3xl" />
    <div className="orb orb-c absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-muted-foreground/10 blur-3xl" />
  </div>
);

export default AmbientOrbs;
