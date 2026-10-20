import { motion } from "framer-motion";
import { Camera, Salad, Utensils } from "lucide-react";
import { colors, fadeUp, hoverTransition, lift } from "./motion";
import { SectionHeading, Stagger } from "./Reveal";

const CRAVINGS = ["Street food", "Cafés", "Thalis", "Fine dining", "Desserts"];

const cardHover = {
  whileHover: { ...lift, borderColor: colors.accent },
  transition: hoverTransition,
};

export default function Features() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <SectionHeading eyebrow="Why read" title="Stories, not star ratings">
        Every post is written the way I would tell it across the table.
      </SectionHeading>

      <Stagger gap={0.12} className="grid gap-md md:grid-cols-5">
        <motion.article
          variants={fadeUp}
          {...cardHover}
          className="rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg md:col-span-3 md:row-span-2 md:p-xl"
        >
          <h3 className="mb-md inline-flex items-center gap-sm text-h3 text-ink">
            <Utensils size={22} strokeWidth={1.75} aria-hidden />
            A conversation over the table
          </h3>
          <p className="mb-lg max-w-md text-body text-walnut">
            What we ordered, what surprised me, what I would skip and what I would go back for.
            Honest, personal and never a copy-pasted menu.
          </p>
          <ul className="flex flex-wrap gap-sm">
            {CRAVINGS.map((c) => (
              <li
                key={c}
                className="rounded-[6px] border border-ink/15 bg-canvas px-sm py-xs text-small text-walnut"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          variants={fadeUp}
          {...cardHover}
          className="rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg md:col-span-2"
        >
          <h3 className="mb-sm inline-flex items-center gap-sm text-h3 text-ink">
            <Camera size={22} strokeWidth={1.75} aria-hidden />
            Shot at the table
          </h3>
          <p className="text-body text-walnut">
            Photos are taken where the food was eaten, so you see the plate as it actually arrived.
          </p>
        </motion.article>

        <motion.article
          variants={fadeUp}
          {...cardHover}
          className="rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg md:col-span-2"
        >
          <h3 className="mb-sm inline-flex items-center gap-sm text-h3 text-ink">
            <Salad size={22} strokeWidth={1.75} aria-hidden />
            Every kind of craving
          </h3>
          <p className="text-body text-walnut">
            From a ₹20 glass of sugarcane juice to a night at a fine-dining bar.
          </p>
        </motion.article>
      </Stagger>
    </section>
  );
}
