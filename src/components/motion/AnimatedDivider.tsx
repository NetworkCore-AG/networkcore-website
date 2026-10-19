import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  /** Tailwind width class applied once revealed, e.g. "w-16". */
  className?: string;
  /** Alignment of the growth origin. */
  align?: "center" | "left";
}

/**
 * A hairline rule that grows from zero width when scrolled into view.
 */
const AnimatedDivider = ({ className, align = "center" }: AnimatedDividerProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={cn(
        "h-px bg-foreground/20 animated-divider",
        align === "center" ? "mx-auto origin-center" : "origin-left",
        inView && "is-visible",
        className
      )}
    />
  );
};

export default AnimatedDivider;
