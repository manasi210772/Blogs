"use client";

import { useState } from "react";
import { AnimatePresence, m, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BLOG_URL } from "@/data/posts";
import { colors, ease, hoverTransition, lift, press } from "@/lib/motion";

const LINKS = [
  { href: "#why", label: "Why read" },
  { href: "#stories", label: "Stories" },
  { href: "#numbers", label: "Numbers" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Backdrop and hairline fade in over the first 80px of scroll.
  const bg = useTransform(scrollY, [0, 80], ["rgba(250,246,240,0)", "rgba(250,246,240,0.96)"]);
  const line = useTransform(scrollY, [0, 80], ["rgba(44,30,17,0)", "rgba(44,30,17,0.12)"]);

  return (
    <m.header
      style={{ backgroundColor: bg, borderBottomColor: line }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="sticky top-0 z-50 border-b"
    >
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
              <m.a
                href={l.href}
                whileHover={{ ...lift, color: colors.accentHover }}
                whileTap={press}
                transition={hoverTransition}
                className="inline-block text-body font-medium text-walnut"
              >
                {l.label}
              </m.a>
            </li>
          ))}
          <li>
            <m.a
              href={`${BLOG_URL}/blogs/food`}
              whileHover={{ ...lift, backgroundColor: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-block rounded-md bg-accent px-md py-sm text-body font-semibold text-canvas"
            >
              All stories
            </m.a>
          </li>
        </ul>

        <m.button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileTap={press}
          className="rounded-md p-sm text-ink md:hidden"
        >
          {open ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </m.button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t border-ink/10 bg-canvas md:hidden"
          >
            <ul className="flex flex-col gap-sm px-md py-md sm:px-lg">
              {LINKS.map((l, i) => (
                <m.li
                  key={l.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-sm font-display text-h3 text-ink"
                  >
                    {l.label}
                  </a>
                </m.li>
              ))}
              <li className="pt-sm">
                <a
                  href={`${BLOG_URL}/blogs/food`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-accent px-md py-md text-center font-semibold text-canvas"
                >
                  All stories
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
