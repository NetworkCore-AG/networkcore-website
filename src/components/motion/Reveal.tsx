import { ElementType, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Direction the content travels from. */
  from?: "bottom" | "left" | "right" | "none";
}

/**
 * Fades and slides its children into view on scroll.
 * Respects prefers-reduced-motion via the .reveal utility in index.css.
 */
const Reveal = ({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  from = "bottom",
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const fromClass =
    from === "left" ? "reveal-left" : from === "right" ? "reveal-right" : from === "none" ? "reveal-fade" : "reveal-up";

  return (
    <Tag
      ref={ref}
      className={cn("reveal", fromClass, inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
