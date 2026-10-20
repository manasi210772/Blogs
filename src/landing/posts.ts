// Mirrors the latest posts in ../data/blogPosts.ts; `path` is the in-app route.
export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: number;
  path: string;
}

export const posts: Post[] = [
  {
    slug: "malvan",
    title: "Finally, Shraavan Is Over! A Seafood Feast at Hotel Malvan",
    description:
      "After a month without non-veg, I celebrated with crab, surmai, ravas and rice bhakri at Hotel Malvan in Thane.",
    date: "2026-09-19",
    tags: ["Seafood", "Maharashtrian"],
    readTime: 4,
    path: "/blogs/food/malvan",
  },
  {
    slug: "mahabi",
    title: "Trying the Viral London Slice at Mahabi Cafe Patisserie Gelato",
    description:
      "A social-media-inspired visit to try the viral London Slice and my first macarons.",
    date: "2026-08-23",
    tags: ["Café", "Desserts"],
    readTime: 5,
    path: "/blogs/food/mahabi",
  },
  {
    slug: "chinesewok",
    title: "A Vegetarian Detour That Led Me to Chinese Wok",
    description:
      "A search for an interesting vegetarian lunch ended at Chinese Wok, followed by a refreshing Oreo Frappe.",
    date: "2026-08-22",
    tags: ["Asian", "Vegetarian"],
    readTime: 5,
    path: "/blogs/food/chinesewok",
  },
];

// Every story on the blog, used only for the headline numbers.
export const STATS = {
  stories: 11,
  places: 10,
  avgReadMinutes: Math.round((4 + 5 + 5 + 4 + 3 + 4 + 3 + 3 + 5 + 3 + 2) / 11),
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
