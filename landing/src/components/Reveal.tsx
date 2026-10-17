"use client";

import type { ComponentProps, ReactNode } from "react";
import { m } from "framer-motion";
import { fadeUp, inView, stagger } from "@/lib/motion";

type DivProps = ComponentProps<typeof m.div>;

// Fades and lifts a block into place once it scrolls into view.
export function Reveal(props: DivProps) {
  return <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={inView} {...props} />;
}

// Reveals its StaggerItem children one after another on scroll.
export function Stagger({ gap = 0.1, ...props }: DivProps & { gap?: number }) {
  return (
    <m.div variants={stagger(gap)} initial="hidden" whileInView="visible" viewport={inView} {...props} />
  );
}

export function StaggerItem(props: DivProps) {
  return <m.div variants={fadeUp} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Stagger gap={0.1} className="mb-xl max-w-xl text-left">
      <StaggerItem>
        <p className="mb-sm text-small font-semibold uppercase tracking-wider text-walnut">
          {eyebrow}
        </p>
      </StaggerItem>
      <StaggerItem>
        <h2 className="mb-md text-h2 text-ink md:text-h1">{title}</h2>
      </StaggerItem>
      {children && (
        <StaggerItem>
          <p className="text-body text-walnut">{children}</p>
        </StaggerItem>
      )}
    </Stagger>
  );
}
