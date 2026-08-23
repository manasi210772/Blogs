import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const FoodBlogs = () => {
  return (
    <div className="pt-10 pb-4">

      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto mb-10 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-text tracking-tight mb-3">
          Food Blogs
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          Delicious stories and culinary adventures.{" "}
          <br className="hidden sm:block" />
          Explore my food experiences and recipes.
        </p>
      </div>

      {/* Blog list */}
      <ul className="flex flex-col gap-4">
        {blogPosts.map((post, i) => (
          <li
            key={post.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${150 + i * 80}ms` }}
          >
            <Link
              to={post.slug}
              className="group block rounded-lg border border-border/60 p-5 hover:border-primary/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-text group-hover:text-primary leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <span className="text-primary text-sm font-medium shrink-0">
                  Read
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-muted-foreground ml-auto">
                  {formatDate(post.date)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodBlogs;