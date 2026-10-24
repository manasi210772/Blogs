import { STATS } from "./posts";
import { Reveal } from "./Reveal";

// One short personal note instead of the old Why read / At a glance / FAQ sections.
export default function WhyIWrite() {
  return (
    <section className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <Reveal className="max-w-2xl border-l-[3px] border-decor pl-lg">
        <h2 className="mb-md text-h2 text-ink">Why I write</h2>
        <div className="space-y-md text-body text-walnut">
          <p>
            A good meal deserves more than "it was nice". I like going back over what I ordered, what
            surprised me, what I'd skip and what I'd go back for: crab juice all over my plate at Hotel
            Malvan, the macarons I'd only ever seen on MasterChef, a ₹20 sugarcane juice on a hot
            evening at Thane station.
          </p>
          <p>
            I click the photos myself, right at the table (when I remember to before eating!).{" "}
            {STATS.stories} stories from {STATS.places} places so far, and counting.
          </p>
          <p>
            Know a place I should try? Tell me at{" "}
            <a href="mailto:manasi210772@gmail.com" className="font-semibold text-ink underline hover:text-accent">
              manasi210772@gmail.com
            </a>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
