import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { colors, ease, hoverTransition, lift, press } from "./motion";

const MotionLink = motion.create(Link);

export default function Navbar() {
  const { scrollY } = useScroll();

  // Backdrop and hairline fade in over the first 80px of scroll. They live on one layer whose
  // opacity is animated, so the bar follows the theme colours in both light and dark mode.
  const backdrop = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="sticky top-0 z-50"
    >
      <motion.div
        aria-hidden
        style={{ opacity: backdrop }}
        className="absolute inset-0 -z-10 border-b border-ink/[0.12] bg-canvas/[0.96]"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-md py-md sm:px-lg"
      >
        <a
          href="#top"
          aria-label="Manasi Patil, back to top"
          className="font-display text-2xl font-bold text-ink sm:text-3xl"
        >
          Manasi Patil
        </a>

        <MotionLink
          to="/blogs/food"
          whileHover={{ ...lift, color: colors.accentHover }}
          whileTap={press}
          transition={hoverTransition}
          className="inline-block text-body font-semibold text-ink"
        >
          Stories
        </MotionLink>
      </nav>
    </motion.header>
  );
}
