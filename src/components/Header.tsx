import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ease, hoverTransition, linkHover, press } from "../lib/motion";

const MotionNavLink = motion.create(NavLink);

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  twMerge(
    clsx(
      "inline-block font-medium",
      isActive
        ? "text-text underline decoration-primary decoration-2 underline-offset-8"
        : "text-muted-foreground",
    ),
  );

const navLinkHover = {
  variants: linkHover("secondary"),
  whileHover: "hover",
  whileTap: press,
  transition: hoverTransition,
};

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
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
          <MotionNavLink to="/" end className={navLinkClass} {...navLinkHover}>
            Home
          </MotionNavLink>

          <MotionNavLink to="/blogs/food" className={navLinkClass} {...navLinkHover}>
            Blog
          </MotionNavLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
