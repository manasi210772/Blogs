import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ease, hoverTransition, press } from "../lib/motion";
import { colors, lift } from "../landing/motion";

const MotionLink = motion.create(Link);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      {/* Backdrop fades in once the page scrolls; uses theme classes. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 border-b border-border bg-background/95"
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease }}
      />
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          aria-label="Manasi Patil, home"
          className="font-display text-2xl font-bold text-text sm:text-3xl"
        >
          Manasi Patil
        </Link>

        {/* Nav */}
        {/* Same link and button styles as the landing page navbar. */}
        <nav aria-label="Primary" className="flex items-center gap-lg">
          <MotionLink
            to="/"
            whileHover={{ ...lift, color: colors.accentHover }}
            whileTap={press}
            transition={hoverTransition}
            className="inline-block text-body font-medium text-walnut"
          >
            Home
          </MotionLink>
          <MotionLink
            to="/blogs/food"
            whileHover={{ ...lift, backgroundColor: colors.accentHover }}
            whileTap={press}
            transition={hoverTransition}
            className="inline-block rounded-[8px] bg-primary px-md py-sm text-body font-semibold text-canvas"
          >
            Blog
          </MotionLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
