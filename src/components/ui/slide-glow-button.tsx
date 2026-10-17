import { useMemo, type ComponentPropsWithoutRef, type ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

// Warm-palette take on the "Himawari" slide-glow button: outlined text that fills with terracotta
// (and a soft glow) sliding in from the left on hover or keyboard focus.
// Defaults suit dark surfaces; pass `outlineColor` for light ones.

type SlideGlowButtonProps<T extends ElementType> = {
  /** Label shown in the outlined and the filled layer. */
  text?: string;
  /** Render as another element or component, e.g. react-router's Link. Defaults to a button. */
  as?: T;
  className?: string;
  /** Colour of the resting outline. */
  outlineColor?: string;
  /** Colour of the text and caret that slide in on hover. */
  fillColor?: string;
  /** Colour of the soft halo around the filled text (include its alpha). */
  glowColor?: string;
  /** Outline thickness in px. */
  strokeWidth?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export const Component = <T extends ElementType = "button">({
  text = "HIMAWARI",
  as,
  className,
  outlineColor = "rgba(250, 246, 240, 0.65)",
  fillColor = "#D97736",
  glowColor = "rgba(217, 119, 54, 0.55)",
  strokeWidth = 1,
  ...props
}: SlideGlowButtonProps<T>) => {
  // Memoised so the wrapper keeps its identity between renders and the animation is not reset.
  const Root = useMemo(() => motion.create((as ?? "button") as ElementType), [as]);

  const fillVariants = useMemo(
    () => ({
      rest: { width: "0%", filter: `drop-shadow(0 0 0px ${glowColor})` },
      hover: { width: "100%", filter: `drop-shadow(0 0 12px ${glowColor})` },
    }),
    [glowColor],
  );

  return (
    <Root
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ y: 0 }}
      className={cn(
        "relative inline-block cursor-pointer whitespace-nowrap bg-transparent px-1 font-display text-xl font-bold uppercase tracking-[3px] text-transparent sm:text-3xl md:text-4xl",
        className,
      )}
      style={{ WebkitTextStroke: `${strokeWidth}px ${outlineColor}` }}
      {...props}
    >
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      <motion.span
        aria-hidden="true"
        variants={fillVariants}
        transition={{ duration: 0.5, ease }}
        className="hover-text absolute inset-0 box-border overflow-hidden border-r-[6px]"
        style={{
          color: fillColor,
          WebkitTextStroke: `${strokeWidth}px ${fillColor}`,
          borderRightColor: fillColor,
        }}
      >
        &nbsp;{text}&nbsp;
      </motion.span>
    </Root>
  );
};
