import type { ComponentProps, ComponentType } from "react";
import { Star } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";
import { blogPosts } from "../data/blogPosts";
import { formatDate } from "../lib/categories";
import { getTagColorClass } from "../utils/tagColors";
import { usePageMeta } from "../lib/usePageMeta";
import { Stagger, StaggerItem } from "./Reveal";
import PostNav from "./PostNav";

// <Rating value="8" /> in a post renders as a real element instead of a star-emoji heading.
const Rating = ({ value, label = "Rating" }: { value: string; label?: string }) => (
  <p
    className="my-4 flex items-center gap-2 font-semibold text-text"
    aria-label={`${label}: ${value} out of 10`}
  >
    <Star size={18} strokeWidth={1.75} className="fill-decor text-decor" aria-hidden />
    <span aria-hidden>
      {label}: {value}/10
    </span>
  </p>
);

const components = {
  Rating,
  // Photos load as they near the viewport; width/height in the MDX reserve their space.
  img: (props: ComponentProps<"img">) => <img loading="lazy" decoding="async" {...props} />,
};

const BlogContent = ({ Post, slug }: { Post: ComponentType; slug: string }) => {
  const meta = blogPosts.find((p) => p.slug === slug);
  usePageMeta({ title: meta?.title, description: meta?.description, image: meta?.cover });

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
                  className={`rounded-sm border px-2 py-0.5 text-small ${getTagColorClass()}`}
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
            <p className="text-sm text-muted-foreground">
              {formatDate(meta.date)} &middot; {meta.readTime} &middot; {meta.place}
            </p>
          </StaggerItem>
          <StaggerItem>
            <hr className="mb-2 mt-8 border-border" />
          </StaggerItem>
        </Stagger>
      )}

      <MDXProvider components={components}>
        <div className="prose">
          <Post />
        </div>
      </MDXProvider>

      <PostNav slug={slug} />
    </article>
  );
};

export default BlogContent;
