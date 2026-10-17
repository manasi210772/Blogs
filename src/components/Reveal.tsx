import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, inView, staggerContainer } from "../lib/motion";

type DivProps = HTMLMotionProps<"div">;

// Fades and lifts a block into place once it scrolls into view.
export const Reveal = (props: DivProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={inView}
    {...props}
  />
);

// Reveals its StaggerItem children one after another on scroll.
export const Stagger = ({
  gap = 0.08,
  delay = 0,
  ...props
}: DivProps & { gap?: number; delay?: number }) => (
  <motion.div
    variants={staggerContainer(gap, delay)}
    initial="hidden"
    whileInView="visible"
    viewport={inView}
    {...props}
  />
);

export const StaggerItem = (props: DivProps) => (
  <motion.div variants={fadeUp} {...props} />
);
