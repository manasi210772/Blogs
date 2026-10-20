import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "./posts";
import { ease, inView } from "./motion";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./Reveal";

// Add real reader quotes here; the block below only renders when this has entries.
const TESTIMONIALS: { quote: string; name: string }[] = [];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, inView);
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (reduce) return setValue(to);
    const controls = animate(0, to, {
      duration: 1.2,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [seen, reduce, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix && <span className="ml-xs text-h3">{suffix}</span>}
    </span>
  );
}

const NUMBERS = [
  { to: STATS.stories, label: "stories written" },
  { to: STATS.places, label: "places reviewed" },
  { to: STATS.avgReadMinutes, suffix: "min", label: "average read" },
];

export default function SocialProof() {
  return (
    <section id="numbers" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <SectionHeading eyebrow="At a glance" title="Eating, writing, repeat" />

      <div className="grid gap-lg md:grid-cols-[1fr_1.2fr] md:items-center">
        <Stagger gap={0.12} className="grid grid-cols-3 gap-md rounded-[12px] bg-card p-lg md:p-xl">
          {NUMBERS.map((n) => (
            <StaggerItem key={n.label}>
              <p className="whitespace-nowrap font-display text-h1 font-bold text-accent md:text-display">
                <CountUp to={n.to} suffix={n.suffix} />
              </p>
              <p className="text-small text-walnut">{n.label}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <figure className="border-l-[3px] border-primary pl-lg">
            <blockquote className="font-display text-h3 text-ink md:text-h2">
              I keep mental notes of unforgettable meals, cozy café nooks and desserts that deserve a
              standing ovation.
            </blockquote>
            <figcaption className="mt-md text-small text-walnut">Manasi Patil, on why she writes</figcaption>
          </figure>
        </Reveal>
      </div>

      {TESTIMONIALS.length > 0 && (
        <Stagger gap={0.1} className="mt-xl grid gap-md md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg">
                <blockquote className="mb-md text-body text-ink">“{t.quote}”</blockquote>
                <figcaption className="text-small text-walnut">{t.name}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </section>
  );
}
