import { Link } from "react-router-dom";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import { formatDate } from "../lib/categories";

// Blog posts are newest first, so "next" is the older story and "previous" the newer one.
const NavCard = ({ label, post, wide }: { label: string; post: BlogPost; wide?: boolean }) => (
  <Link
    to={post.path}
    className={`group flex flex-col rounded-lg border-[1.5px] border-border bg-card p-5 hover:border-decor ${
      wide ? "sm:col-span-2" : ""
    }`}
  >
    <span className="mb-1 text-small font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
    <span className="font-display text-lg font-semibold leading-snug text-text group-hover:text-secondary">
      {post.title}
    </span>
    <span className="mt-2 text-small text-muted-foreground">
      {formatDate(post.date)} &middot; {post.readTime}
    </span>
  </Link>
);

// End-of-post navigation: one "Keep reading" grid with the newer/older story and up to two stories
// that share a tag. With an odd number of cards the last one spans the row, so no slot is left empty
// (the newest and oldest posts only have one neighbour).
const PostNav = ({ slug }: { slug: string }) => {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  if (i === -1) return null;

  const current = blogPosts[i];
  const cards: { label: string; post: BlogPost }[] = [];
  if (blogPosts[i - 1]) cards.push({ label: "Newer story", post: blogPosts[i - 1] });
  if (blogPosts[i + 1]) cards.push({ label: "Older story", post: blogPosts[i + 1] });

  const shown = new Set(cards.map((c) => c.post.slug).concat(slug));
  for (const p of blogPosts) {
    if (cards.length >= 4) break;
    const shared = p.tags.find((t) => current.tags.includes(t));
    if (shared && !shown.has(p.slug)) cards.push({ label: `More ${shared}`, post: p });
  }

  if (cards.length === 0) return null;

  return (
    <nav aria-label="Keep reading" className="mx-auto mt-16 max-w-2xl border-t border-border pt-8">
      <h2 className="mb-3 text-h3 text-text">Keep reading</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c, n) => (
          <NavCard
            key={c.post.slug}
            label={c.label}
            post={c.post}
            wide={cards.length % 2 === 1 && n === cards.length - 1}
          />
        ))}
      </div>
    </nav>
  );
};

export default PostNav;
