import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Maximum pixel offset toward the cursor. */
  strength?: number;
}

/**
 * Wraps a button or link and nudges it gently toward the cursor on hover.
 * Disabled for touch devices and when reduced motion is preferred.
 */
const MagneticButton = ({ children, className, strength = 8 }: MagneticButtonProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const enabled = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dx = Math.max(-1, Math.min(1, x / (rect.width / 2))) * strength;
    const dy = Math.max(-1, Math.min(1, y / (rect.height / 2))) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block magnetic", className)}
    >
      {children}
    </span>
  );
};

export default MagneticButton;
