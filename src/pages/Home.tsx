import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const latestPosts = blogPosts.slice(0, 3);

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Home = () => {
  return (
    <div className="flex flex-col pt-8 pb-2">

      {/* Hero */}
      <section className="text-center mb-14 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight tracking-tight mb-4">
          Food & I{" "}
          <span className="text-primary">Go Way Back</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-6">
          Mental notes on unforgettable meals, hidden cafe gems, and desserts
          that deserve a standing ovation.
        </p>
        <Link
          to="/blogs/food"
          className="text-primary font-semibold text-sm hover:text-accent"
        >
          Explore my food blogs
        </Link>
      </section>

      <hr className="border-border/40 mb-14" />

      {/* About */}
      <section className="mb-14 animate-fade-in-up delay-200">
        <h2 className="text-xl font-semibold text-text mb-3">What You'll Find Here</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          My thoughts on restaurant ambience, cafe vibes, the dishes I
          ordered, honest ratings, and the occasional food photo that survived
          long enough before I attacked the plate. From cheesy appetizers to
          desserts that make me forget all my responsibilities, every review
          comes from genuine foodie excitement.
        </p>

        <h2 className="text-xl font-semibold text-text mb-3">What Fuels Me</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Countless episodes of MasterChef Australia, inspired by Nick
          DiGiovanni, and driven by an endless curiosity for good food. I'm
          always looking for something new to taste. So pull up a chair, grab
          a snack, and join me as I spill the beans and take life one bite at
          a time.
        </p>
      </section>

      <hr className="border-border/40 mb-14" />

      {/* Latest Posts */}
      <section className="animate-fade-in-up delay-400">
        <h2 className="text-lg font-semibold text-text mb-5">Latest Posts</h2>

        <div className="flex flex-col divide-y divide-border/40">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={post.path}
              className="group block py-4 first:pt-0 last:pb-0"
            >
              <p className="text-sm font-semibold text-text group-hover:text-primary leading-snug">
                {post.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                {post.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
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
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/blogs/food"
            className="text-sm text-primary font-medium hover:text-accent"
          >
            View all posts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;