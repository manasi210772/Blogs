import { blogPosts, latestPosts } from "../data/blogPosts";
import { formatDate } from "../lib/categories";

export { formatDate };

const minutes = (readTime: string) => parseInt(readTime, 10);

// Everything on the landing page comes from src/data/blogPosts.ts so it never drifts.
export const posts = latestPosts.map((p) => ({ ...p, readTime: minutes(p.readTime) }));
export type Post = (typeof posts)[number];

export const STATS = {
  stories: blogPosts.length,
  places: new Set(blogPosts.map((p) => p.place)).size,
  avgReadMinutes: Math.round(
    blogPosts.reduce((sum, p) => sum + minutes(p.readTime), 0) / blogPosts.length,
  ),
};
