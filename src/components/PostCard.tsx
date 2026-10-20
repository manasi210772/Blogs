import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import type { BlogPost } from "../data/blogPosts";
import { getTagColorClass } from "../utils/tagColors";
import { formatDate } from "../lib/categories";
import { cardHover, fadeUp, hoverTransition, inView, titleHover } from "../lib/motion";

const PostCard = ({ post }: { post: BlogPost }) => (
  <motion.article
    layout
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
    viewport={inView}
    variants={{
      hidden: fadeUp.hidden,
      visible: fadeUp.visible,
      hover: cardHover(0.5).hover,
    }}
    className="relative flex flex-col overflow-hidden rounded-lg border-[1.5px] border-border bg-card"
  >
    {/* Cover photo; posts without one get a tinted block so every card has the same shape. */}
    {post.cover ? (
      <img
        src={`${import.meta.env.BASE_URL}${post.cover}`}
        alt={post.coverAlt ?? ""}
        width={800}
        height={500}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full object-cover"
      />
    ) : (
      <div
        aria-hidden
        className="flex aspect-[16/10] w-full items-center justify-center bg-decor/10 text-decor"
      >
        <Utensils size={36} strokeWidth={1.5} />
      </div>
    )}

    <div className="flex flex-1 flex-col p-6">
      <ul className="mb-3 flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-sm border px-2 py-0.5 text-small ${getTagColorClass()}`}
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* The title link is stretched over the whole card (after:inset-0), so the card is one target. */}
      <h3 className="mb-2">
        <Link to={post.path} className="after:absolute after:inset-0 after:content-['']">
          <motion.span
            variants={titleHover}
            transition={hoverTransition}
            className="block text-[1.375rem] font-semibold leading-snug text-text"
          >
            {post.title}
          </motion.span>
        </Link>
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.description}</p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3 text-small text-muted-foreground">
        <span>
          {formatDate(post.date)} &middot; {post.readTime}
        </span>
        <span aria-hidden className="font-semibold text-text">
          Read story &rarr;
        </span>
      </div>
    </div>
  </motion.article>
);

export default PostCard;
