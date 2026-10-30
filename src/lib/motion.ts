import type { Transition, Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

// Trigger slightly before an element is fully in view; reveal once.
export const inView = { once: true, margin: "0px 0px -60px 0px" } as const;

// SKILL.md: hover lifts 2px and returns on press, no shadows or scaling.
export const hoverTransition: Transition = { duration: 0.2, ease };
export const lift = { y: -2 };
export const press = { y: 0 };

// Colour tokens are bare HSL triplets in CSS variables (see index.css). Framer cannot
// tween `var()` strings, so resolve to a comma-form hsla() at animation time.
const hsl = (token: string, alpha = 1) => {
  const [h, s, l] = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${token}`)
    .trim()
    .split(/\s+/);
  return `hsla(${h}, ${s}, ${l}, ${alpha})`;
};

// Parent opts into hover with whileHover="hover"; children with these variants follow it.
// Un-hovering returns to the CSS baseline, so only the hover state needs defining.
export const titleHover: Variants = {
  hover: () => ({ color: hsl("primary"), transition: hoverTransition }),
};

export const cardHover = (alpha: number): Variants => ({
  hover: () => ({ y: -2, borderColor: hsl("primary", alpha), transition: hoverTransition }),
});
