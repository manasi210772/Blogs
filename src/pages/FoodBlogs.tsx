import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { getTagColorClass } from "../utils/tagColors";

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const CATEGORIES = ["All", "Asian", "Café & Coffee", "Mexican", "Italian", "Street Food", "Thali"];

const FoodBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Café & Coffee") {
      return post.tags.some((t) => ["Café", "Cafe", "Coffee"].includes(t));
    }
    return post.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));
  });

  return (
    <div className="pt-8 pb-8 text-left">

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8 border-b border-border/40 pb-6">
        <h1 className="text-4xl font-bold text-text tracking-tight mb-2">
          Food Blogs &amp; Reviews
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Delicious stories, honest reviews, and culinary adventures.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors border ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-text border-border/60 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-muted-foreground font-medium">
          {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}
        </span>
      </div>

      {/* Post Grid/List */}
      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-border/60 bg-card/40 p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold border ${getTagColorClass(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">{post.readTime}</span>
            </div>

            <Link to={post.slug} className="group block mb-2">
              <h2 className="text-xl font-bold text-text group-hover:text-primary leading-snug">
                {post.title}
              </h2>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {post.description}
            </p>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/30">
              <span>Published on {formatDate(post.date)}</span>
              <Link
                to={post.slug}
                className="text-primary font-semibold hover:underline"
              >
                Read Story &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FoodBlogs;