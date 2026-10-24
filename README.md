# Blogs

A personal food blog built with React, TypeScript and Vite: a place for restaurant visits, café finds and the occasional food adventure.

Live site: https://manasi210772.github.io/Blogs/

## Features

- **Landing page**: hero photo grid, why-read, latest stories, numbers and FAQ, all driven by the post data.
- **Food blog** (`/blogs/food`): story cards with cover photos, category filters and a Back/Home header.
- **MDX posts**: each post is a Markdown file in `src/blogs/` with a few JSX helpers (`<Rating value="8" />`). Posts are lazy-loaded one at a time.
- **Light theme only**: warm terracotta and cream palette (Fraunces + DM Sans). There is no dark mode.
- **Link previews and SEO**: every page gets its own title, description and Open Graph tags (set in the app and written into static HTML at build time), plus `sitemap.xml`, `feed.xml` and `robots.txt`.
- **Accessible by default**: WCAG AA button contrast, visible focus outlines, keyboard-friendly menus, reduced-motion support.

## Blog content

12 posts under **Food Blogs** (`/blogs/food`), newest first (sorted by date in code).

## Adding a post

1. Add the photos to `public/Media/`. Resize them to about 1600px on the long side first; phone originals are several MB and carry GPS location data in their EXIF.
2. Create `src/blogs/<name>.mdx` with `title`, `date` and `description` frontmatter. Use `- ` for lists and `<Rating value="8" />` for ratings. Give each `<img>` its `width` and `height`.
3. Add an entry to `src/data/blogPosts.ts` (`slug`, `place`, `tags`, `readTime`, optional `cover`). The slug must match the file name once dashes, spaces and case are ignored (`chimichurri-2` matches `Chimichurri2.mdx`).
4. The landing page, story list, sitemap and RSS feed pick the post up automatically.

## Tech stack

- **React 18** and **TypeScript**
- **Vite 7**: build tool and dev server
- **Tailwind CSS 3**: styling (tokens in `tailwind.config.js` and `src/index.css`)
- **React Router 6**: client-side routing
- **MDX** (`@mdx-js/rollup`, `@mdx-js/react`): posts
- **Framer Motion**: animation
- **Lucide React**: icons
- **ESLint**: linting

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build to `dist/`, then run `scripts/postbuild.mjs` (per-page HTML, sitemap, RSS) |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch (GitHub Pages) |
| `npm run lint` | Run ESLint on `src/` |

## Project layout

- `src/pages/`: Home, food blog index, post page (`/blogs/food/:slug`), 404
- `src/landing/`: landing page sections, navbar and footer
- `src/components/`: header, post card, category pills, post navigation
- `src/blogs/`: MDX posts
- `src/data/blogPosts.ts`: post metadata, the single source of truth
- `landing/`: a separate Next.js 14 version of the landing page, kept for reference; it is not part of the deployed site
