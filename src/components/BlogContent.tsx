import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import { blogPosts } from "../data/blogPosts";
import { formatDate } from "../lib/categories";
import { getTagColorClass } from "../utils/tagColors";
import { fadeUp, inView } from "../lib/motion";
import { Stagger, StaggerItem } from "./Reveal";

// Headings, quotes and figures fade up as they scroll into view. Paragraphs and lists render
// immediately so the text can be read before JavaScript finishes loading.
const reveal = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "visible",
  viewport: inView,
} as const;

const components = {
  h1: (props: object) => <motion.h1 {...reveal} {...props} />,
  h2: (props: object) => <motion.h2 {...reveal} {...props} />,
  h3: (props: object) => <motion.h3 {...reveal} {...props} />,
  blockquote: (props: object) => <motion.blockquote {...reveal} {...props} />,
  figure: (props: object) => <motion.figure {...reveal} {...props} />,
};

const BlogContent = ({ Post, slug }: { Post: ComponentType; slug: string }) => {
  const meta = blogPosts.find((p) => p.slug === slug);

  return (
    <article className="pt-8 md:pt-12">
      {meta && (
        <Stagger
          gap={0.1}
          animate="visible"
          whileInView={undefined}
          className="mx-auto mb-4 max-w-2xl text-left"
        >
          <StaggerItem>
            <ul className="mb-4 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <li
                  key={tag}
                  className={`rounded-sm border px-2 py-0.5 text-xs font-medium ${getTagColorClass()}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mb-3 text-[2.369rem] font-bold leading-[1.2]">{meta.title}</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="border-b border-border pb-6 text-sm text-muted-foreground">
              {formatDate(meta.date)} &middot; {meta.readTime}
            </p>
          </StaggerItem>
        </Stagger>
      )}

      <MDXProvider components={components}>
        <div className="prose">
          <Post />
        </div>
      </MDXProvider>

    </article>
  );
};

export default BlogContent;
