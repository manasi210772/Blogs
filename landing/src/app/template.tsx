"use client";

import { m } from "framer-motion";
import { ease } from "@/lib/motion";

// template.tsx re-mounts on every navigation, giving each route a slide-in transition.
// Position only: an opacity fade would hide the server-rendered page until JS loads and hurt LCP.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      {children}
    </m.div>
  );
}
