"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BLOG_URL, STATS, formatDate, posts, type Post } from "@/data/posts";
import { colors, fadeUp, hoverTransition, lift, press } from "@/lib/motion";
import { Reveal, SectionHeading, Stagger } from "./Reveal";

function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <m.article
      variants={fadeUp}
      whileHover={{ ...lift, borderColor: colors.accent }}
      transition={hoverTransition}
      className={`flex flex-col rounded-lg border-[1.5px] border-ink/10 bg-card p-lg ${
        large ? "md:row-span-2 md:p-xl" : ""
      }`}
    >
      <ul className="mb-md flex flex-wrap gap-sm">
        {post.tags.map((t) => (
          <li key={t} className="rounded-sm border border-ink/15 bg-canvas px-sm py-xs text-small text-walnut">
            {t}
          </li>
        ))}
      </ul>

      <h3 className={`mb-sm text-ink ${large ? "text-h2" : "text-h3"}`}>
        <a href={`${BLOG_URL}${post.path}`} className="hover:text-accent-hover">
          {post.title}
        </a>
      </h3>
      <p className="mb-lg text-body text-walnut">{post.description}</p>

      <div className="mt-auto flex items-center justify-between gap-md text-small text-walnut">
        <span>
          {formatDate(post.date)} · {post.readTime} min read
        </span>
        <m.a
          href={`${BLOG_URL}${post.path}`}
          whileHover={lift}
          whileTap={press}
          transition={hoverTransition}
          className="inline-flex items-center gap-xs font-semibold text-ink"
        >
          Read story
          <ArrowRight size={14} strokeWidth={2} aria-hidden />
        </m.a>
      </div>
    </m.article>
  );
}

export default function Stories() {
  return (
    <section id="stories" className="mx-auto max-w-6xl px-md py-xl sm:px-lg">
      <SectionHeading eyebrow="Latest stories" title="Fresh from the table" />

      <Stagger gap={0.12} className="grid gap-md md:grid-cols-[1.3fr_1fr]">
        {posts.map((p, i) => (
          <PostCard key={p.slug} post={p} large={i === 0} />
        ))}
      </Stagger>

      {/* Espresso block: the strongest contrast on the page, so the way into the blog is hard to miss. */}
      <Reveal className="mt-lg">
        <div className="flex flex-col gap-lg rounded-lg bg-ink p-lg md:flex-row md:items-center md:justify-between md:p-xl">
          <div className="text-left">
            <h3 className="mb-sm text-h2 text-canvas">Hungry for more?</h3>
            <p className="max-w-md text-body text-canvas/80">
              {STATS.stories} stories and counting, from a ₹20 sugarcane juice to a fine-dining night.
            </p>
          </div>
          <m.a
            href={`${BLOG_URL}/blogs/food`}
            whileHover={{ ...lift, backgroundColor: colors.accent }}
            whileTap={press}
            transition={hoverTransition}
            className="inline-flex shrink-0 items-center justify-center gap-sm rounded-md bg-canvas px-xl py-md text-h3 font-semibold text-ink"
          >
            Browse all stories
            <ArrowRight size={20} strokeWidth={2} aria-hidden />
          </m.a>
        </div>
      </Reveal>
    </section>
  );
}
