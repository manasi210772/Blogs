import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ease, fadeUp, hoverTransition } from "./motion";
import { SectionHeading, Stagger } from "./Reveal";

const QUESTIONS = [
  {
    q: "What is this blog about?",
    a: "Food, mostly eaten outside: street food, cafés, thalis, desserts and the occasional fine-dining night. Every post is a personal account of one visit.",
  },
  {
    q: "Who writes it?",
    a: "I do. I am Manasi Patil, fueled by MasterChef Australia, inspired by Nick DiGiovanni and endlessly curious about good food.",
  },
  {
    q: "Can I suggest a place for you to try?",
    a: "Please do. Email me at manasi210772@gmail.com with the name and the dish you think I should order.",
  },
  {
    q: "How do I find a place or cuisine I like?",
    a: "Use the filters on the blog page: Asian, Café & Coffee, Mexican, Italian, Street Food, Seafood and more. Every story also shows its tags and the place it is about.",
  },
];

function Item({ q, a, open, onToggle, id }: { q: string; a: string; open: boolean; onToggle: () => void; id: string }) {
  return (
    <motion.div variants={fadeUp} className="border-b border-ink/15">
      <h3>
        <motion.button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          whileHover={{ x: 2 }}
          transition={hoverTransition}
          className="flex w-full items-center justify-between gap-md py-md text-left font-display text-h3 text-ink"
        >
          {q}
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25, ease }} className="shrink-0 text-accent">
            <Plus size={22} strokeWidth={1.75} aria-hidden />
          </motion.span>
        </motion.button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-md text-body text-walnut">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <div className="grid gap-lg md:grid-cols-[1fr_1.6fr] md:gap-xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Stagger gap={0.08} className="border-t border-ink/15">
          {QUESTIONS.map((item, i) => (
            <Item
              key={item.q}
              id={`faq-${i}`}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
