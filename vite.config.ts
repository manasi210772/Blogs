import { defineConfig } from "vite";
import path from "path";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import rehypePrism from "rehype-prism-plus";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      rehypePlugins: [rehypePrism],
    }),
  ],
  base: "/rajnikam/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
