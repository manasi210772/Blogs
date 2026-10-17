"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Cake, Coffee, Soup, Utensils } from "lucide-react";
import { BLOG_URL } from "@/data/posts";
import { colors, ease, fadeUp, hoverTransition, lift, press, stagger } from "@/lib/motion";

// The headline and lead photo are the LCP candidates: they animate position only, so they paint on
// first render instead of waiting for hydration to fade them in from opacity 0.
const rise = {
  hidden: { y: 16 },
  visible: { y: 0, transition: { duration: 0.55, ease } },
};

const TOPICS = [
  { Icon: Utensils, label: "Street food" },
  { Icon: Coffee, label: "Cafés" },
  { Icon: Soup, label: "Thalis" },
  { Icon: Cake, label: "Desserts" },
];

// Scrapbook snapshots: uneven sizes, tilted, thick warm borders (SKILL.md anti-grid guidance).
const SNAPS = [
  {
    src: "/Media/hotel-malvan-crab-surmai.jpeg",
    alt: "Crab curry, rice bhakri and surmai fry at Hotel Malvan",
    w: 1280,
    h: 804,
    className: "left-0 top-0 w-[68%]",
    rotate: -3,
    priority: true,
  },
  {
    src: "/Media/maiz-food.jpeg",
    alt: "A plate of Mexican food at Maiz",
    w: 960,
    h: 1280,
    className: "right-0 top-[18%] w-[40%]",
    rotate: 4,
  },
  {
    src: "/Media/mahabi-food-items.jpeg",
    alt: "A spread of dishes at Mahabi",
    w: 1280,
    h: 960,
    className: "bottom-0 left-[14%] w-[52%]",
    rotate: -1.5,
  },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl overflow-x-clip px-md pb-xl pt-lg sm:px-lg md:pt-xl">
      <div className="grid items-center gap-xl md:grid-cols-[1.1fr_0.9fr] md:gap-lg">
        <m.div variants={stagger(0.12)} initial="hidden" animate="visible" className="text-left">
          <m.p
            variants={fadeUp}
            className="mb-md text-small font-semibold uppercase tracking-wider text-walnut"
          >
            A food &amp; culture journal
          </m.p>

          <m.h1
            variants={rise}
            className="mb-md text-h1 text-ink md:text-display"
          >
            Food &amp; I go way back.
          </m.h1>

          <m.p variants={fadeUp} className="mb-lg max-w-md text-body text-walnut">
            Honest reviews and stories for people who chase unforgettable meals, café corners and
            hidden culinary gems. One bite at a time.
          </m.p>

          <m.div variants={fadeUp} className="mb-lg flex flex-wrap items-center gap-md">
            <m.a
              href="#stories"
              whileHover={{ ...lift, backgroundColor: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-flex items-center gap-sm rounded-md bg-accent px-lg py-md font-semibold text-canvas"
            >
              <Utensils size={18} strokeWidth={1.75} aria-hidden />
              Start reading
            </m.a>
            <m.a
              href={`${BLOG_URL}/blogs/food`}
              whileHover={{ ...lift, borderColor: colors.accent, color: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-flex items-center rounded-md border-[1.5px] border-walnut px-lg py-md font-semibold text-ink"
            >
              Browse all stories
            </m.a>
          </m.div>

          <m.ul variants={fadeUp} className="flex flex-wrap gap-x-lg gap-y-sm text-small text-walnut">
            {TOPICS.map(({ Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-xs">
                <Icon size={14} strokeWidth={1.75} aria-hidden />
                {label}
              </li>
            ))}
          </m.ul>
        </m.div>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-md md:max-w-none">
          {SNAPS.map((s, i) => (
            <m.figure
              key={s.src}
              initial={{ opacity: i === 0 ? 1 : 0, y: 28, rotate: s.rotate * 2 }}
              animate={{ opacity: 1, y: 0, rotate: s.rotate }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              whileHover={{ ...lift, rotate: 0 }}
              className={`absolute overflow-hidden rounded-lg border-[6px] border-card bg-card outline outline-1 outline-ink/15 ${s.className}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                priority={s.priority}
                sizes="(min-width: 768px) 36vw, 70vw"
                className="h-auto w-full"
              />
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
