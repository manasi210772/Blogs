import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatDate, posts, type Post } from "./posts";
import { colors, fadeUp, hoverTransition, lift, press } from "./motion";
import { Reveal, Stagger } from "./Reveal";

const MotionLink = motion.create(Link);

function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ ...lift, borderColor: colors.accent }}
      transition={hoverTransition}
      className={`flex flex-col rounded-[12px] border-[1.5px] border-ink/10 bg-card p-lg ${
        large ? "md:row-span-2 md:p-xl" : ""
      }`}
    >
      <ul className="mb-md flex flex-wrap gap-sm">
        {post.tags.map((t) => (
          <li key={t} className="rounded-[6px] border border-ink/15 bg-canvas px-sm py-xs text-small text-walnut">
            {t}
          </li>
        ))}
      </ul>

      <h3 className={`mb-sm text-ink ${large ? "text-h2" : "text-h3"}`}>
        <Link to={post.path} className="hover:text-accent">
          {post.title}
        </Link>
      </h3>
      <p className="mb-lg text-body text-walnut">{post.description}</p>

      <div className="mt-auto flex items-center justify-between gap-md text-small text-walnut">
        <span>
          {formatDate(post.date)} · {post.readTime} min read
        </span>
        <MotionLink
          to={post.path}
          whileHover={lift}
          whileTap={press}
          transition={hoverTransition}
          className="inline-flex items-center gap-xs font-semibold text-ink"
        >
          Read story
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </MotionLink>
      </div>
    </motion.article>
  );
}

export default function Stories() {
  return (
    <section id="stories" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <Reveal>
        <h2 className="mb-lg text-h2 text-ink">Latest stories</h2>
      </Reveal>

      <Stagger gap={0.12} className="grid gap-md md:grid-cols-[1.3fr_1fr]">
        {posts.map((p, i) => (
          <PostCard key={p.slug} post={p} large={i === 0} />
        ))}
      </Stagger>
    </section>
  );
}
