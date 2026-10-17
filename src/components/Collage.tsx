import { motion } from "framer-motion";
import { ease, lift } from "../lib/motion";

const media = (file: string) => `${import.meta.env.BASE_URL}Media/${file}`;

// Scrapbook snapshots: uneven sizes, tilted, thick warm borders (same as the landing page hero).
const SNAPS = [
  {
    src: media("hotel-malvan-crab-surmai.jpeg"),
    alt: "Crab curry, rice bhakri and surmai fry at Hotel Malvan",
    className: "left-0 top-0 w-[68%]",
    rotate: -3,
  },
  {
    src: media("maiz-food.jpeg"),
    alt: "A plate of Mexican food at Maiz",
    className: "right-0 top-[18%] w-[40%]",
    rotate: 4,
  },
  {
    src: media("mahabi-food-items.jpeg"),
    alt: "A spread of dishes at Mahabi",
    className: "bottom-0 left-[14%] w-[52%]",
    rotate: -1.5,
  },
];

const Collage = () => (
  <div className="relative mx-auto aspect-[5/6] w-full max-w-md md:max-w-none">
    {SNAPS.map((s, i) => (
      <motion.figure
        key={s.src}
        initial={{ opacity: 0, y: 28, rotate: s.rotate * 2 }}
        animate={{ opacity: 1, y: 0, rotate: s.rotate }}
        transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease }}
        whileHover={{ ...lift, rotate: 0 }}
        className={`absolute overflow-hidden rounded-lg border-[6px] border-card bg-card outline outline-1 outline-border ${s.className}`}
      >
        <img src={s.src} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} className="h-auto w-full" />
      </motion.figure>
    ))}
  </div>
);

export default Collage;
