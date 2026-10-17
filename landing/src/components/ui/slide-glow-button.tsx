"use client";

import { useMemo } from "react";
import { m, type HTMLMotionProps } from "framer-motion";
import { ease } from "@/lib/motion";

// Anchor-only version of the blog's src/components/ui/slide-glow-button.tsx. It uses the
// lightweight `m` components and no class-merging helper (tailwind-merge alone adds ~7 kB), so the
// caller supplies size, casing and tracking through `className`.

type SlideGlowButtonProps = {
  text?: string;
  outlineColor?: string;
  fillColor?: string;
  glowColor?: string;
  strokeWidth?: number;
} & HTMLMotionProps<"a">;

export const Component = ({
  text = "HIMAWARI",
  className,
  outlineColor = "rgba(250, 246, 240, 0.65)",
  fillColor = "#D97736",
  glowColor = "rgba(217, 119, 54, 0.55)",
  strokeWidth = 1,
  ...props
}: SlideGlowButtonProps) => {
  const fillVariants = useMemo(
    () => ({
      rest: { width: "0%", filter: `drop-shadow(0 0 0px ${glowColor})` },
      hover: { width: "100%", filter: `drop-shadow(0 0 12px ${glowColor})` },
    }),
    [glowColor],
  );

  return (
    <m.a
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ y: 0 }}
      className={`relative inline-block cursor-pointer whitespace-nowrap bg-transparent px-1 font-display font-bold text-transparent ${className ?? ""}`}
      style={{ WebkitTextStroke: `${strokeWidth}px ${outlineColor}` }}
      {...props}
    >
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      <m.span
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
      </m.span>
    </m.a>
  );
};
