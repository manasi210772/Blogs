import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cake, Coffee, Soup, Utensils } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { getTagColorClass } from "../utils/tagColors";
import { filterPosts, formatDate } from "../lib/categories";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import CategoryPills from "../components/CategoryPills";
import Collage from "../components/Collage";
import PostCard from "../components/PostCard";
import {
  cardHover,
  hoverTransition,
  lift,
  press,
  titleHover,
} from "../lib/motion";

const MotionLink = motion.create(Link);

const TOPICS = [
  { Icon: Utensils, label: "Street food" },
  { Icon: Coffee, label: "Cafés" },
  { Icon: Soup, label: "Thalis" },
  { Icon: Cake, label: "Desserts" },
];

const primaryButton =
  "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground";
const outlineButton =
  "inline-flex items-center rounded-md border-[1.5px] border-muted-foreground px-6 py-3 font-semibold text-text";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const filteredPosts = filterPosts(selectedCategory);

  return (
    <div className="flex flex-col pb-6 pt-8 text-left md:pt-12">
      {/* ── Hero (above the fold: animates on load) ── */}
      <section className="mb-16 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
        <Stagger gap={0.12} animate="visible" whileInView={undefined}>
          <StaggerItem>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              A food &amp; culture journal
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mb-4 text-[2.369rem] font-bold leading-[1.2] md:text-[3.157rem] md:leading-[1.15]">
              Food &amp; I go way back.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mb-6 max-w-md text-muted-foreground">
              Honest reviews and stories for people who chase unforgettable meals, café corners and
              hidden culinary gems. One bite at a time.
            </p>
          </StaggerItem>
          <StaggerItem className="mb-6 flex flex-wrap items-center gap-4">
            <MotionLink
              to="/blogs/food"
              className={primaryButton}
              whileHover={lift}
              whileTap={press}
              transition={hoverTransition}
            >
              <Utensils size={18} strokeWidth={1.75} aria-hidden />
              Browse all stories
            </MotionLink>
            <motion.a
              href="#stories"
              className={outlineButton}
              whileHover={lift}
              whileTap={press}
              transition={hoverTransition}
            >
              Latest stories
            </motion.a>
          </StaggerItem>
          <StaggerItem>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              {TOPICS.map(({ Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-1">
                  <Icon size={14} strokeWidth={1.75} aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>

        <Collage />
      </section>

      {/* ── Featured Story ── */}
      {featuredPost && (
        <Reveal className="mb-16">
          <motion.div
            className="rounded-lg border-[1.5px] border-border bg-card p-6 md:p-10"
            variants={cardHover(0.6)}
            transition={hoverTransition}
            whileHover="hover"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured story
              </span>
              <span className="text-xs font-medium text-muted-foreground">{featuredPost.readTime}</span>
            </div>

            <Link to={featuredPost.path} className="block">
              <motion.h2
                variants={titleHover}
                transition={hoverTransition}
                className="mb-3 text-2xl font-semibold leading-tight text-text md:text-[1.777rem]"
              >
                {featuredPost.title}
              </motion.h2>
            </Link>

            <p className="mb-5 max-w-2xl text-muted-foreground">{featuredPost.description}</p>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap items-center gap-2">
                {featuredPost.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-sm border px-2 py-0.5 text-xs font-medium ${getTagColorClass(tag)}`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{formatDate(featuredPost.date)}</span>
                <MotionLink
                  to={featuredPost.path}
                  className="inline-block font-semibold text-text"
                  whileHover={lift}
                  whileTap={press}
                  transition={hoverTransition}
                >
                  Read story &rarr;
                </MotionLink>
              </div>
            </div>
          </motion.div>
        </Reveal>
      )}

      {/* ── Author bio ("Pull Up a Chair") ── */}
      <Stagger gap={0.12} className="mb-16 rounded-lg border border-border bg-primary/10 p-6 md:p-10">
        <StaggerItem>
          <h2 className="mb-3 text-[1.777rem] font-semibold leading-tight">Pull Up a Chair</h2>
        </StaggerItem>
        <StaggerItem>
          <p className="mb-3 max-w-2xl text-muted-foreground">
            While some people keep travel journals, I keep mental notes of unforgettable meals, cozy café nooks, and desserts that deserve a standing ovation. Whether exploring local spots or trying a new cuisine, every review comes from genuine foodie excitement.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-2xl text-muted-foreground">
            Fueled by MasterChef Australia, inspired by Nick DiGiovanni, and driven by an endless curiosity for good food, I am always chasing my next great bite. Grab a snack and join me as I take life one bite at a time.
          </p>
        </StaggerItem>
      </Stagger>

      {/* ── Category filters & story feed ── */}
      <section id="stories">
        <Reveal className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-[1.777rem] font-semibold leading-tight">Explore stories</h2>
          <span className="text-xs text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          </span>
        </Reveal>

        <div className="mb-6">
          <CategoryPills
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            layoutId="home-category-pill"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Home;
