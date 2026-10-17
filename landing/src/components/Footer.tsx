"use client";

import { m } from "framer-motion";
import { Mail } from "lucide-react";
import { BLOG_URL } from "@/data/posts";
import { colors, fadeUp, hoverTransition, inView, lift, press } from "@/lib/motion";

const LINKS = [
  { href: "https://www.pinterest.com/manasi210772/", label: "Pinterest", Icon: null },
  { href: "https://github.com/manasi210772", label: "GitHub", Icon: null },
  { href: "https://www.linkedin.com/in/manasi-patil-596034326/", label: "LinkedIn", Icon: null },
  { href: "mailto:manasi210772@gmail.com", label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <m.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      className="border-t border-ink/10 bg-card"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-lg px-md py-xl sm:px-lg md:flex-row md:items-end md:justify-between">
        <div className="text-left">
          <p className="font-display text-h3 text-ink">Manasi Patil</p>
          <p className="mb-md text-body italic text-walnut">One bite at a time.</p>
          <p className="text-small text-walnut">© {new Date().getFullYear()} Manasi Patil. All rights reserved.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-lg gap-y-sm">
            <li>
              <m.a
                href={`${BLOG_URL}/blogs/food`}
                whileHover={{ ...lift, color: colors.accentHover }}
                whileTap={press}
                transition={hoverTransition}
                className="inline-block font-semibold text-ink"
              >
                All stories
              </m.a>
            </li>
            {LINKS.map(({ href, label, Icon }) => (
              <li key={label}>
                <m.a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ ...lift, color: colors.accentHover }}
                  whileTap={press}
                  transition={hoverTransition}
                  className="inline-flex items-center gap-xs text-walnut"
                >
                  {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden />}
                  {label}
                </m.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </m.footer>
  );
}
