import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  base: '/Blogs/',

  // Matches the "@/*" path in tsconfig and the aliases in components.json.
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
    }),
  ],
})