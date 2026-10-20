import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { colors, ease, hoverTransition, lift, press } from "./motion";

const MotionLink = motion.create(Link);

const LINKS = [
  { href: "#why", label: "Why read" },
  { href: "#stories", label: "Stories" },
  { href: "#numbers", label: "At a glance" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Keyboard support for the mobile menu: Escape closes it and hands focus back to the toggle;
  // opening moves focus to the first link.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
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

        <ul className="hidden items-center gap-lg md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <motion.a
                href={l.href}
                whileHover={{ ...lift, color: colors.accentHover }}
                whileTap={press}
                transition={hoverTransition}
                className="inline-block text-body font-medium text-walnut"
              >
                {l.label}
              </motion.a>
            </li>
          ))}
          <li>
            <MotionLink
              to="/blogs/food"
              whileHover={{ ...lift, backgroundColor: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-block rounded-[8px] bg-primary px-md py-sm text-body font-semibold text-canvas"
            >
              All stories
            </MotionLink>
          </li>
        </ul>

        <motion.button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          whileTap={press}
          className="rounded-[8px] p-sm text-ink md:hidden"
        >
          {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t border-ink/10 bg-canvas md:hidden"
          >
            <ul className="flex flex-col gap-sm px-md py-md sm:px-lg">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-sm font-display text-h3 text-ink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-sm">
                <Link
                  to="/blogs/food"
                  onClick={() => setOpen(false)}
                  className="block rounded-[8px] bg-primary px-md py-md text-center font-semibold text-canvas"
                >
                  All stories
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
