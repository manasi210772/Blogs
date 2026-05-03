# Blogs

A modern, responsive blog application built with React, TypeScript, and Vite. This platform showcases various categories of blogs including travel, food, craft, and personal stories.

## Features

- **Multiple Blog Categories**: Explore diverse content across Travel, Food, Craft, and Personal blogs
- **MDX Support**: Write blog posts in Markdown with JSX components using MDX
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Fast Performance**: Optimized with Vite for lightning-fast development and production builds
- **Type-Safe**: Full TypeScript support for robust development
- **Component Library**: Pre-built UI components using Radix UI and custom components
- **Code Highlighting**: Syntax highlighting for code blocks with Rehype Prism Plus

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/             # UI component library
├── pages/              # Page components for different routes
├── blogs/              # MDX blog content
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## Blog Categories

- **Travel Blogs**: Travel experiences and adventures
- **Food Blogs**: Culinary stories including Sugarcane blog
- **Craft Blogs**: DIY and craft projects including Gift Cart blog
- **Personal Blogs**: Personal experiences and stories including Viva blog

## Tech Stack

- **React 18.3**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **MDX**: Markdown with JSX support
- **Radix UI**: Headless UI components
- **Lucide React**: Icon library
- **ESLint**: Code quality and formatting

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Blogs
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- **`npm run dev`** - Start the development server with HMR
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run deploy`** - Deploy to GitHub Pages
- **`npm run predeploy`** - Automatically runs build before deploy

## Available Routes

- `/` - Home page
- `/blogs` - All blogs overview
- `/blogs/travel` - Travel blogs
- `/blogs/food` - Food blogs
- `/blogs/food/sugarcane` - Sugarcane blog post
- `/blogs/craft` - Craft blogs
- `/blogs/craft/giftcart` - Gift Cart blog post
- `/blogs/personal` - Personal blogs
- `/blogs/personal/viva` - Viva blog post

## Development

To start developing:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

## Building for Production

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Adding New Blog Posts

1. Create a new `.mdx` file in the `src/blogs/` directory
2. Add frontmatter with blog metadata
3. Create corresponding page component in `src/pages/`
4. Add route in `src/App.tsx`