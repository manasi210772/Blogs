import { Link } from "react-router-dom";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import { formatDate } from "../lib/categories";

// Blog posts are newest first, so "next" is the older story and "previous" the newer one.
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

// End-of-post navigation: newer/older story, then up to two stories that share a tag.
const PostNav = ({ slug }: { slug: string }) => {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  if (i === -1) return null;

  const newer = blogPosts[i - 1];
  const older = blogPosts[i + 1];
  const current = blogPosts[i];
  const shown = new Set([slug, newer?.slug, older?.slug]);
  const related = blogPosts
    .filter((p) => !shown.has(p.slug) && p.tags.some((t) => current.tags.includes(t)))
    .slice(0, 2);

  return (
    <nav aria-label="More stories" className="mx-auto mt-16 max-w-2xl border-t border-border pt-8">
      {(newer || older) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {newer ? <NavCard label="Newer story" post={newer} /> : <span />}
          {older ? <NavCard label="Older story" post={older} /> : <span />}
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-h3 text-text">More like this</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <NavCard key={p.slug} label={p.tags[0]} post={p} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default PostNav;
