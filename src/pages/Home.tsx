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

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Café & Coffee") {
      return post.tags.some((t) => ["Café", "Cafe", "Coffee"].includes(t));
    }
    return post.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));
  });

  return (
    <div className="flex flex-col pt-6 pb-6 text-left">

      {/* ── Substack-Style Header Banner ── */}
      <section className="text-center mb-10 pb-6 border-b border-border/40">
        <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight tracking-tight mb-3">
          Food &amp; I <span className="text-primary">Go Way Back</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-4">
          A food &amp; culture journal by Manasi Patil for those who chase unforgettable meals, café vibes, and hidden culinary gems.
        </p>
        <div className="text-xs text-primary font-medium tracking-wide uppercase">
          By Manasi Patil &middot; Culinary Explorer &amp; Food Writer
        </div>
      </section>

      {/* ── Featured Story Card ── */}
      {featuredPost && (
        <section className="mb-12">
          <div className="rounded-lg border-2 border-primary/30 bg-card/60 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                Featured Story
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {featuredPost.readTime}
              </span>
            </div>
            
            <Link to={featuredPost.path} className="group block">
              <h2 className="text-2xl sm:text-3xl font-bold text-text group-hover:text-primary leading-tight mb-3">
                {featuredPost.title}
              </h2>
            </Link>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              {featuredPost.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold border ${getTagColorClass(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{formatDate(featuredPost.date)}</span>
                <Link
                  to={featuredPost.path}
                  className="text-primary font-semibold hover:underline"
                >
                  Read Story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Author Bio ("Pull Up a Chair") ── */}
      <section className="mb-12 rounded-lg border border-border/60 bg-muted/30 p-6">
        <h2 className="text-xl font-bold text-text mb-2">Pull Up a Chair</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          While some people keep travel journals, I keep mental notes of unforgettable meals, cozy café nooks, and desserts that deserve a standing ovation. Whether exploring local spots or trying a new cuisine, every review comes from genuine foodie excitement.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Fueled by MasterChef Australia, inspired by Nick DiGiovanni, and driven by an endless curiosity for good food, I am always chasing my next great bite. Grab a snack and join me as I take life one bite at a time.
        </p>
      </section>

      {/* ── Category Filters & Story Feed ── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-text">Explore Stories</h2>
          <span className="text-xs text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6 pb-2">
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

        {/* Article Feed */}
        <div className="flex flex-col divide-y divide-border/40">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="py-5 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${getTagColorClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>

              <Link to={post.path} className="group block mb-1.5">
                <h3 className="text-lg font-bold text-text group-hover:text-primary leading-snug">
                  {post.title}
                </h3>
              </Link>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <Link to={post.path} className="text-primary font-medium hover:underline">
                  Read article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;