import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { filterPosts } from "../lib/categories";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import CategoryPills from "../components/CategoryPills";
import PostCard from "../components/PostCard";

const FoodBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = filterPosts(selectedCategory);

  return (
    <div className="pb-8 pt-8 text-left md:pt-12">
      {/* Header (above the fold: animates on load) */}
      <Stagger gap={0.12} animate="visible" whileInView={undefined} className="mb-10 max-w-xl">
        <StaggerItem>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            The journal
          </p>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mb-3 text-[2.369rem] font-bold leading-[1.2]">Food blogs &amp; reviews</h1>
        </StaggerItem>
        <StaggerItem>
          <p className="text-muted-foreground">
            Delicious stories, honest reviews, and culinary adventures.
          </p>
        </StaggerItem>
      </Stagger>

      {/* Category pills */}
      <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <CategoryPills
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          layoutId="foodblogs-category-pill"
        />
        <span className="text-xs font-medium text-muted-foreground">
          {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}
        </span>
      </Reveal>

      {/* Post grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FoodBlogs;
