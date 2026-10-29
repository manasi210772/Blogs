import { Link } from "react-router-dom";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import { formatDate } from "../lib/categories";

const NavCard = ({ label, post }: { label: string; post: BlogPost }) => (
  <Link
    to={post.path}
    className="group flex flex-col rounded-lg border-[1.5px] border-border bg-card p-5 hover:border-decor"
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

// End-of-post navigation: one "Keep reading" grid with the stories published just before and just
// after this one, then stories that share a tag, up to four cards. Cards fill from the left and keep
// the same width, so the first and last posts (one neighbour each) never leave a gap on the left.
const PostNav = ({ slug }: { slug: string }) => {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  if (i === -1) return null;

  const current = blogPosts[i];
  const cards: { label: string; post: BlogPost }[] = [];
  // blogPosts is newest first: i + 1 was published before this post, i - 1 after it.
  if (blogPosts[i + 1]) cards.push({ label: "← Previous story", post: blogPosts[i + 1] });
  if (blogPosts[i - 1]) cards.push({ label: "Next story →", post: blogPosts[i - 1] });

  const shown = new Set(cards.map((c) => c.post.slug).concat(slug));
  for (const p of blogPosts) {
    if (cards.length >= 4) break;
    const shared = p.tags.find((t) => current.tags.includes(t));
    if (shared && !shown.has(p.slug)) cards.push({ label: `More ${shared} like this`, post: p });
  }

  if (cards.length === 0) return null;

  return (
    <nav aria-label="Keep reading" className="mx-auto mt-16 max-w-2xl border-t border-border pt-8">
      <h2 className="mb-3 text-h3 text-text">Keep reading</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <NavCard key={c.post.slug} label={c.label} post={c.post} />
        ))}
      </div>
    </nav>
  );
};

export default PostNav;
