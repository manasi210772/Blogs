import { Coffee, CupSoda, IceCreamCone, UtensilsCrossed, Wine, type LucideIcon } from "lucide-react";
import type { BlogPost } from "../data/blogPosts";
import { places } from "../data/places";

// The first tag that has its own icon wins; everything else gets crossed cutlery.
const TAG_ICONS: [string, LucideIcon][] = [
  ["Bar", Wine],
  ["Drinks", CupSoda],
  ["Desserts", IceCreamCone],
  ["Coffee", Coffee],
  ["Café", Coffee],
];

const iconFor = (tags: string[]) =>
  TAG_ICONS.find(([tag]) => tags.includes(tag))?.[1] ?? UtensilsCrossed;

/** Cover for posts without a photo: the place's name and area in the site's own colours. */
const CoverPlaceholder = ({ post }: { post: BlogPost }) => {
  const Icon = iconFor(post.tags);
  const area = places[post.place]?.area;

  return (
    <div
      role="img"
      aria-label={`${post.place}${area ? `, ${area}` : ""} (no photo)`}
      className="relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-decor/25 via-card to-primary/15 px-6 text-center"
    >
      {/* Large faded icon in the corner as texture. */}
      <Icon
        aria-hidden
        size={160}
        strokeWidth={1}
        className="pointer-events-none absolute -bottom-8 -right-8 text-decor/15"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-decor/40 bg-background/70 text-primary">
        <Icon aria-hidden size={24} strokeWidth={1.5} />
      </span>
      <span className="font-display text-2xl font-semibold leading-tight text-text">{post.place}</span>
      {area && <span className="text-small text-muted-foreground">{area}</span>}
      <span className="mt-1 text-xs italic text-muted-foreground">No photos this time</span>
    </div>
  );
};

export default CoverPlaceholder;
