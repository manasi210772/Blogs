import { Link } from "react-router-dom";
import {
  UtensilsCrossed,
  Coffee,
  Star,
  Flame,
  ArrowRight,
  ChefHat,
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const latestPosts = blogPosts.slice(0, 3);

/* ─── small reusable divider ─── */
const ForkDivider = () => (
  <div className="flex items-center gap-4 w-full my-2 animate-fade-in delay-300">
    <div className="flex-1 h-px bg-border/60" />
    <UtensilsCrossed className="w-4 h-4 text-primary/50 shrink-0" />
    <div className="flex-1 h-px bg-border/60" />
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col gap-12 pt-4 pb-2 text-left">

      {/* ══════════ HERO ══════════ */}
      <section className="flex flex-col items-center text-center gap-6 pt-8 pb-4">
        {/* Floating monogram */}
        <div className="animate-fade-in animate-float">
          <img
            src={`${import.meta.env.BASE_URL}Main-Logo.png`}
            alt="Manasi Patil monogram"
            className="w-20 h-20 object-contain opacity-80 dark:invert"
          />
        </div>

        {/* Headline */}
        <div className="space-y-3 animate-fade-in-up delay-100">
          <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight tracking-tight">
            Food &amp; I{" "}
            <span className="text-primary">Go Way Back</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Mental notes on unforgettable meals, hidden café gems, and desserts
            that deserve a standing ovation.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-up delay-200">
          <Link
            to="/blogs/food"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-md hover:bg-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore My Food Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ForkDivider />

      {/* ══════════ ABOUT CARDS ══════════ */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="animate-fade-in-up delay-300 group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
              <UtensilsCrossed className="w-4 h-4" />
            </span>
            <h2 className="text-lg font-semibold text-text">
              What You'll Find Here
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            My thoughts on restaurant ambience, café vibes, the dishes I
            ordered, honest ratings, and the occasional food photo that survived
            long enough before I attacked the plate. From cheesy appetizers to
            desserts that make me forget all my responsibilities — every review
            comes from genuine foodie excitement.
          </p>
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-200">
            <Star className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="animate-fade-in-up delay-400 group relative rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
              <Flame className="w-4 h-4" />
            </span>
            <h2 className="text-lg font-semibold text-text">
              What Fuels Me
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Countless episodes of MasterChef Australia, inspired by Nick
            DiGiovanni, and driven by an endless curiosity for good food. I'm
            always looking for something new to taste. So pull up a chair, grab
            a snack, and join me as I spill the beans and take life one bite at
            a time.
          </p>
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-200">
            <Coffee className="w-12 h-12 text-primary" />
          </div>
        </div>
      </section>

      <ForkDivider />

      {/* ══════════ LATEST POSTS ══════════ */}
      <section className="animate-fade-in-up delay-500">
        <div className="flex items-center gap-3 mb-6">
          <ChefHat className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-text">Latest Posts</h2>
        </div>

        <div className="flex flex-col gap-3">
          {latestPosts.map((post, i) => {
            const Icon = post.icon;
            return (
              <Link
                key={post.slug}
                to={post.path}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm px-5 py-4 hover:border-primary/60 hover:bg-card/80 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
                {/* Icon bubble */}
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="w-4 h-4" />
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors duration-200 leading-snug line-clamp-1">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {post.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-4 h-4 text-primary/50 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            );
          })}
        </div>

        <div className="mt-5 text-center">
          <Link
            to="/blogs/food"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors duration-200 font-medium"
          >
            View all posts
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;