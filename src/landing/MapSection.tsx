import { lazy, Suspense } from "react";
import { NON_VEG_COLOR, VEG_COLOR } from "../data/places";
import { Reveal } from "./Reveal";

// Leaflet is only needed here, so it loads after the rest of the home page.
const FoodMap = lazy(() => import("./FoodMap"));

const Triangle = ({ color }: { color: string }) => (
  <svg width="16" height="14" viewBox="0 0 26 24" aria-hidden>
    <path d="M13 2 24 22H2Z" fill={color} />
  </svg>
);

export default function MapSection() {
  return (
    <section className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <Reveal>
        <h2 className="mb-sm text-h2 text-ink">Where I've eaten</h2>
        <p className="mb-lg max-w-2xl text-body text-walnut">
          Tap a triangle to read about that place. Use + and − (or click the map and scroll) to zoom;
          Manas Jatra is in Satara, so zoom out to find it.
        </p>
      </Reveal>

      {/* isolate keeps Leaflet's high z-index layers under the sticky navbar. */}
      <div className="isolate overflow-hidden rounded-[12px] border-[1.5px] border-ink/10 bg-card">
        <Suspense fallback={<div className="h-[420px] w-full" />}>
          <FoodMap />
        </Suspense>
      </div>

      <ul className="mt-md flex flex-wrap gap-x-lg gap-y-sm text-small text-walnut">
        <li className="inline-flex items-center gap-xs">
          <Triangle color={VEG_COLOR} /> Pure veg
        </li>
        <li className="inline-flex items-center gap-xs">
          <Triangle color={NON_VEG_COLOR} /> Non-veg
        </li>
      </ul>
    </section>
  );
}
