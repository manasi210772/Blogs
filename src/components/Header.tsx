import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ease, hoverTransition, press } from "../lib/motion";
import { colors, lift } from "../landing/motion";

const MotionLink = motion.create(Link);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Individual posts live under /blogs/food/<slug>; the index (/blogs/food) has no Back link.
  const isPost = /^\/blogs\/food\/.+/.test(pathname);

  // BrowserRouter records the position in history.state.idx; idx 0 means this is the first page
  // of the visit (e.g. a shared link), where going back would leave the site.
  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate("/blogs/food");
  };

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
          {isPost && (
            <motion.button
              type="button"
              onClick={goBack}
              whileHover={{ ...lift, color: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-block text-body font-medium text-walnut"
            >
              Back
            </motion.button>
          )}
          <MotionLink
            to="/"
            whileHover={{ ...lift, backgroundColor: colors.accentHover }}
            whileTap={press}
            transition={hoverTransition}
            className="inline-block rounded-[8px] bg-primary px-md py-sm text-body font-semibold text-canvas"
          >
            Home
          </MotionLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
