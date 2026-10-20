import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cake, Coffee, Soup, Utensils } from "lucide-react";
import { colors, ease, fadeUp, hoverTransition, lift, press, stagger } from "./motion";

const MotionLink = motion.create(Link);

const media = (file: string) => `${import.meta.env.BASE_URL}Media/${file}`;

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
    src: media("hotel-malvan-crab-surmai.jpeg"),
    alt: "Crab curry, rice bhakri and surmai fry at Hotel Malvan",
    w: 1280,
    h: 804,
    className: "left-0 top-0 w-[68%]",
    rotate: -3,
    priority: true,
  },
  {
    src: media("maiz-food.jpeg"),
    alt: "A plate of Mexican food at Maiz",
    w: 960,
    h: 1280,
    className: "right-0 top-[18%] w-[40%]",
    rotate: 4,
  },
  {
    src: media("mahabi-food-items.jpeg"),
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
        <motion.div variants={stagger(0.12)} initial="hidden" animate="visible" className="text-left">
          <motion.p
            variants={fadeUp}
            className="mb-md text-small font-semibold uppercase tracking-wider text-walnut"
          >
            A food &amp; culture journal
          </motion.p>

          <motion.h1
            variants={rise}
            className="mb-md text-h1 text-ink md:text-display"
          >
            Food &amp; I go way back.
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-lg max-w-md text-body text-walnut">
            Honest reviews and stories for people who chase unforgettable meals, café corners and
            hidden culinary gems. One bite at a time.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-lg flex flex-wrap items-center gap-md">
            <motion.a
              href="#stories"
              whileHover={{ ...lift, backgroundColor: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-flex items-center gap-sm rounded-[8px] bg-primary px-lg py-md font-semibold text-canvas"
            >
              <Utensils size={18} strokeWidth={1.75} aria-hidden />
              Start reading
            </motion.a>
            <MotionLink
              to="/blogs/food"
              whileHover={{ ...lift, borderColor: colors.accent, color: colors.accentHover }}
              whileTap={press}
              transition={hoverTransition}
              className="inline-flex items-center rounded-[8px] border-[1.5px] border-walnut px-lg py-md font-semibold text-ink"
            >
              Browse all stories
            </MotionLink>
          </motion.div>

          <motion.ul variants={fadeUp} className="flex flex-wrap gap-x-lg gap-y-sm text-small text-walnut">
            {TOPICS.map(({ Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-xs">
                <Icon size={14} strokeWidth={1.75} aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative mx-auto aspect-[5/6] w-full max-w-md md:max-w-none">
          {SNAPS.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: i === 0 ? 1 : 0, y: 28, rotate: s.rotate * 2 }}
              animate={{ opacity: 1, y: 0, rotate: s.rotate }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              whileHover={{ ...lift, rotate: 0 }}
              className={`absolute overflow-hidden rounded-[12px] border-[6px] border-card bg-card outline outline-1 outline-ink/15 ${s.className}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                width={s.w}
                height={s.h}
                loading={s.priority ? "eager" : "lazy"}
                className="h-auto w-full"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
