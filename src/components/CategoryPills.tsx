import { motion } from "framer-motion";
import { CATEGORIES } from "../lib/categories";
import { ease, fadeUp, lift, press } from "../lib/motion";
import { Stagger } from "./Reveal";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
  // Unique per page so the sliding highlight never jumps between pages mid-transition.
  layoutId: string;
}

const CategoryPills = ({ selected, onSelect, layoutId }: Props) => (
  <Stagger gap={0.05} className="flex flex-wrap gap-2">
    {CATEGORIES.map((cat) => {
      const active = selected === cat;
      return (
        <motion.button
          key={cat}
          type="button"
          variants={fadeUp}
          onClick={() => onSelect(cat)}
          whileHover={lift}
          whileTap={press}
          className={`relative rounded-md border px-3 py-1.5 text-xs font-semibold ${
            active
              ? "border-primary text-primary-foreground"
              : "border-border bg-card text-text"
          }`}
        >
          {active && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 rounded-md bg-primary"
              transition={{ duration: 0.3, ease }}
            />
          )}
          <span className="relative">{cat}</span>
        </motion.button>
      );
    })}
  </Stagger>
);

export default CategoryPills;
