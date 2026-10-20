import type { Transition, Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const colors = {
  ink: "#2C1E11",
  accent: "#D97736",
  accentHover: "#893E10",
  canvas: "#FAF6F0",
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export const inView = { once: true, margin: "0px 0px -60px 0px" } as const;

// SKILL.md: hover lifts 2px, no shadows or scaling.
export const hoverTransition: Transition = { duration: 0.2, ease };
export const lift = { y: -2 };
export const press = { y: 0 };
