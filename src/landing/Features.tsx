import { motion } from "framer-motion";
import { Camera, Salad, Utensils } from "lucide-react";
import { fadeUp } from "./motion";
import { SectionHeading, Stagger } from "./Reveal";

const CRAVINGS = ["Street food", "Cafés", "Thalis", "Fine dining", "Desserts"];

const POINTS = [
  {
    Icon: Utensils,
    title: "A conversation over the table",
    text: "What we ordered, what surprised me, what I would skip and what I would go back for. Honest, personal and never a copy-pasted menu.",
    tags: CRAVINGS,
  },
  {
    Icon: Camera,
    title: "Shot at the table",
    text: "Photos are taken where the food was eaten, so you see the plate as it actually arrived.",
  },
  {
    Icon: Salad,
    title: "Every kind of craving",
    text: "From a ₹20 glass of sugarcane juice to a night at a fine-dining bar.",
  },
];

type Point = (typeof POINTS)[number];

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="mt-lg flex flex-wrap gap-sm">
    {tags.map((c) => (
      <li
        key={c}
        className="rounded-[6px] border border-ink/15 bg-canvas px-sm py-xs text-small text-walnut"
      >
        {c}
      </li>
    ))}
  </ul>
);

// Option 1: three open columns on the plain background, split by thin lines. No cards.
function Columns() {
  return (
    <Stagger
      gap={0.12}
      className="grid divide-y divide-ink/15 border-y border-ink/15 md:grid-cols-3 md:divide-x md:divide-y-0"
    >
      {POINTS.map(({ Icon, title, text, tags }: Point) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="py-lg md:px-lg md:py-xl md:first:pl-0 md:last:pr-0"
        >
          <Icon size={28} strokeWidth={1.5} className="mb-md text-decor" aria-hidden />
          <h3 className="mb-sm text-h3 text-ink">{title}</h3>
          <p className="max-w-md text-body text-walnut">{text}</p>
          {tags && <Tags tags={tags} />}
        </motion.div>
      ))}
    </Stagger>
  );
}

// Option 4: full-width rows with a hairline between them, laid out like the FAQ below.
function Rows() {
  return (
    <Stagger gap={0.12} className="border-t border-ink/15">
      {POINTS.map(({ Icon, title, text, tags }: Point) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="grid gap-md border-b border-ink/15 py-lg md:grid-cols-[1fr_1.6fr] md:gap-xl"
        >
          <h3 className="inline-flex items-center gap-sm text-h3 text-ink">
            <Icon size={24} strokeWidth={1.5} className="shrink-0 text-decor" aria-hidden />
            {title}
          </h3>
          <div>
            <p className="max-w-2xl text-body text-walnut">{text}</p>
            {tags && <Tags tags={tags} />}
          </div>
        </motion.div>
      ))}
    </Stagger>
  );
}

// The original boxed layout, kept for comparison.
function Boxes() {
  return (
    <Stagger gap={0.12} className="grid gap-md md:grid-cols-5">
      {POINTS.map(({ Icon, title, text, tags }: Point, i) => (
        <motion.article
          key={title}
          variants={fadeUp}
          className={`rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg ${
            i === 0 ? "md:col-span-3 md:row-span-2 md:p-xl" : "md:col-span-2"
          }`}
        >
          <h3 className="mb-sm inline-flex items-center gap-sm text-h3 text-ink">
            <Icon size={22} strokeWidth={1.75} aria-hidden />
            {title}
          </h3>
          <p className="max-w-md text-body text-walnut">{text}</p>
          {tags && <Tags tags={tags} />}
        </motion.article>
      ))}
    </Stagger>
  );
}

// Temporary comparison switch: /Blogs/?why=columns (default), ?why=rows or ?why=boxes.
function layout() {
  const v = new URLSearchParams(window.location.search).get("why");
  return v === "rows" ? Rows : v === "boxes" ? Boxes : Columns;
}

export default function Features() {
  const Layout = layout();

  return (
    <section id="why" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <SectionHeading eyebrow="Why read" title="Stories, not star ratings">
        Every post is written the way I would tell it across the table.
      </SectionHeading>

      <Layout />
    </section>
  );
}
