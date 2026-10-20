import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { BlogPost } from "../data/blogPosts";
import { getTagColorClass } from "../utils/tagColors";
import { formatDate } from "../lib/categories";
import { cardHover, fadeUp, hoverTransition, inView, lift, press, titleHover } from "../lib/motion";

const MotionLink = motion.create(Link);

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
    className="flex flex-col rounded-lg border-[1.5px] border-border bg-card p-6"
  >
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <ul className="flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className={`rounded-sm border px-2 py-0.5 text-xs font-medium ${getTagColorClass()}`}
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="text-xs font-medium text-muted-foreground">{post.readTime}</span>
    </div>

    <Link to={post.path} className="mb-2 block">
      <motion.h3
        variants={titleHover}
        transition={hoverTransition}
        className="text-xl font-semibold leading-snug text-text"
      >
        {post.title}
      </motion.h3>
    </Link>

    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.description}</p>

    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3 text-xs text-muted-foreground">
      <span>{formatDate(post.date)}</span>
      <MotionLink
        to={post.path}
        className="inline-block font-semibold text-text"
        whileHover={lift}
        whileTap={press}
        transition={hoverTransition}
      >
        Read story &rarr;
      </MotionLink>
    </div>
  </motion.article>
);

export default PostCard;
