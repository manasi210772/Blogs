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

// Left: tall Blue Tokai collage. Right: three landscape photos stacked. The column widths are set so
// both sides end at the same height and no photo is cropped (portrait 899x1599; landscapes 1280x804,
// 1280x960, 1280x960).
const TALL = {
  src: media("blue-tokai-collage.jpeg"),
  alt: "Blue Tokai Coffee Roasters: the café, a cup of coffee, garlic bread and the view from the door",
  w: 899,
  h: 1599,
};

const STACK = [
  {
    src: media("mutton.jpeg"),
    alt: "A mutton thali with rotis, sides and salad",
    w: 1280,
    h: 960,
  },
  {
    src: media("mahabi-food-items.jpeg"),
    alt: "A spread of dishes at Mahabi",
    w: 1280,
    h: 960,
  },
  {
    src: media("hotel-malvan-crab-surmai.jpeg"),
    alt: "Crab curry, rice bhakri and surmai fry at Hotel Malvan",
    w: 1280,
    h: 804,
  },
];

const PHOTO = "overflow-hidden rounded-[12px] border-[1.5px] border-ink/10 bg-card";


export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl overflow-x-clip px-md pb-lg pt-lg sm:px-lg md:pt-lg">
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

        <div className="mx-auto grid w-full max-w-md grid-cols-[1.28fr_1fr] gap-md md:max-w-none">
          <motion.figure
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            whileHover={lift}
            className={PHOTO}
          >
            <img
              src={TALL.src}
              alt={TALL.alt}
              width={TALL.w}
              height={TALL.h}
              className="h-full w-full object-cover"
            />
          </motion.figure>

          <div className="flex flex-col gap-md">
            {STACK.map((s, i) => (
              <motion.figure
                key={s.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 * (i + 1), ease }}
                whileHover={lift}
                className={PHOTO}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
