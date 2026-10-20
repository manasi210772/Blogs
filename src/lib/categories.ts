import { blogPosts, type BlogPost } from "../data/blogPosts";

export const CATEGORIES = [
  "All",
  "Asian",
  "Café & Coffee",
  "Mexican",
  "Italian",
  "Street Food",
  "Thali",
  "Seafood",
  "Desserts",
  "Vegetarian",
];

export const filterPosts = (category: string): BlogPost[] =>
  blogPosts.filter((post) => {
    if (category === "All") return true;
    if (category === "Café & Coffee") {
      return post.tags.some((t) => ["Café", "Cafe", "Coffee"].includes(t));
    }
    return post.tags.some((t) => t.toLowerCase().includes(category.toLowerCase()));
  });

export const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
