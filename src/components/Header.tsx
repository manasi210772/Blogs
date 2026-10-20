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

  function toggleDarkMode() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      {/* Backdrop fades in once the page scrolls; uses theme classes so dark mode just works. */}
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

          <motion.button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            whileHover={{ rotate: 20 }}
            whileTap={{ rotate: 180 }}
            transition={{ duration: 0.3, ease }}
            className="rounded-md p-1 text-text"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
              <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" />
            </svg>
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
