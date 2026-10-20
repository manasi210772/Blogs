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

// One scrolling row on phones (no multi-row wrap); wraps normally from sm up.
const CategoryPills = ({ selected, onSelect, layoutId }: Props) => (
  <Stagger
    gap={0.05}
    className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
  >
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
          className={`relative min-h-11 shrink-0 snap-start whitespace-nowrap rounded-md border px-4 py-2 text-sm font-semibold ${
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
