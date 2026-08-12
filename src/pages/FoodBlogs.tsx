import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
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

      {/* ── Page Header ── */}
      <div className="text-center max-w-xl mx-auto mb-10 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-3">
          <h1 className="text-4xl font-bold text-text tracking-tight">
            Food Blogs
          </h1>
          <span className="text-3xl"></span>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          Delicious stories and culinary adventures.{" "}
          <br className="hidden sm:block" />
          Explore my food experiences and recipes.
        </p>
        {/* thin decorative line */}
        <div className="mt-5 flex items-center gap-3 justify-center">
          <div className="h-px w-16 bg-border/60" />
          <span className="text-primary/40 text-sm">✦</span>
          <div className="h-px w-16 bg-border/60" />
        </div>
      </div>

      {/* ── Blog Index Container ── */}
      <div className="rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 sm:p-8 animate-fade-in-up delay-100">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-2">
          
          
        </div>
        

        {/* ── Cards ── */}
        <ul className="flex flex-col gap-4">
          {blogPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <li
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${150 + i * 80}ms` }}
              >
                <Link
                  to={post.slug}
                  className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/50 dark:bg-background/30 backdrop-blur-sm p-5 hover:border-primary/60 hover:bg-card hover:shadow-md transition-all duration-300"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300" />

                  {/* Icon bubble */}
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </span>

                  {/* Text block */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors duration-200 leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>

                      {/* Read arrow */}
                      <span className="text-primary text-sm font-medium flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform duration-200">
                        Read
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Meta row: tags + date */}
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FoodBlogs;