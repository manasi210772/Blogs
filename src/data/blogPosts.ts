export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  path: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "chimichurri-2",
    title: "Back to Chimichurri – A Second Asian Food Adventure",
    description:
      "A second visit to Chimichurri featuring crab stick soup, Thai curry, satay, and fried rice.",
    date: "2026-08-09",
    tags: ["Asian", "Restaurant"],
    path: "/blogs/food/chimichurri-2",
  },
  {
    slug: "pizzaexpress",
    title: "A Pizza Night That Didn't Go According to Plan",
    description:
      "What started as an Oven Story Pizza craving ended with a late-night PizzaExpress feast and a few pleasant surprises.",
    date: "2026-08-04",
    tags: ["Italian", "Pizza"],
    path: "/blogs/food/pizzaexpress",
  },
  {
    slug: "chimichurri",
    title: "My First Dimsum & Ramen Experience at Chimichurri – The Asian Kitchen",
    description:
      "A memorable first-time tasting of dimsum, ramen, and tofu at Chimichurri – The Asian Kitchen.",
    date: "2026-07-10",
    tags: ["Asian", "First Time"],
    path: "/blogs/food/chimichurri",
  },
  {
    slug: "bluetokai",
    title: "My First Visit to Blue Tokai: Coffee, Conversations & a Korean Bun",
    description:
      "A first-time experience at Blue Tokai Coffee Roasters, featuring a comforting hot mocha and a flavorful Jalapeno & Cheese Korean Bun.",
    date: "2026-06-12",
    tags: ["Cafe", "Coffee"],
    path: "/blogs/food/bluetokai",
  },
  {
    slug: "maiz",
    title: "A Taste of Nostalgia: My Maiz Mexican Food Experience",
    description:
      "A comforting Mexican meal from Maiz that brought back memories of my first Chipotle experience eight years ago.",
    date: "2026-06-17",
    tags: ["Mexican", "Comfort Food"],
    path: "/blogs/food/maiz",
  },
  {
    slug: "ora",
    title: "Ora Kitchen & Bar: A Night of Flavors, Chaos & Mixed Impressions",
    description:
      "A detailed dining experience at Ora Kitchen & Bar, from long waits to flavorful dishes and a few unexpected surprises.",
    date: "2026-05-01",
    tags: ["Bar", "Fine Dining"],
    path: "/blogs/food/ora",
  },
  {
    slug: "manasjatra",
    title: "Mini Mutton Thali at Manas Jatra: Filling, Flavorful & A Bit Overwhelming",
    description:
      "A hearty mini mutton thali experience at Manas Jatra in Satara. Packed with flavors, but a little too filling to enjoy it all.",
    date: "2026-04-28",
    tags: ["Indian", "Thali"],
    path: "/blogs/food/manasjatra",
  },
  {
    slug: "sugarcane",
    title: "That Rs.20 Sugarcane Juice That Saved a Summer Evening",
    description:
      "A simple glass of sugarcane juice at Thane station that turned a hot, exhausting evening into something refreshing and memorable.",
    date: "2026-04-21",
    tags: ["Street Food", "Drinks"],
    path: "/blogs/food/sugarcane",
  },
];

export const latestPosts = blogPosts.slice(0, 3);
