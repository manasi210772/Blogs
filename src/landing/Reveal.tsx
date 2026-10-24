import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import { fadeUp, inView, stagger } from "./motion";

type DivProps = ComponentProps<typeof motion.div>;

// Fades and lifts a block into place once it scrolls into view.
export function Reveal(props: DivProps) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={inView} {...props} />;
}

// Reveals its children one after another on scroll.
export function Stagger({ gap = 0.1, ...props }: DivProps & { gap?: number }) {
  return (
    <motion.div variants={stagger(gap)} initial="hidden" whileInView="visible" viewport={inView} {...props} />
  );
}
