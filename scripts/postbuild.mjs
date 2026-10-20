// Runs after `vite build` (npm runs it automatically as "postbuild").
// GitHub Pages can only serve files, and the app is a single-page app, so link previews
// (WhatsApp, LinkedIn, X) and search engines would otherwise only ever see an empty page titled
// "Manasi Patil". This copies dist/index.html to one file per route with that route's own title,
// description and Open Graph tags, and writes sitemap.xml and feed.xml. The app still boots from
// the same bundle and takes over in the browser.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

// Load the TypeScript data files directly so the site and this script share one source of truth.
const load = async (rel) => {
  const { code } = await transform(readFileSync(join(root, rel), "utf8"), { loader: "ts", format: "esm" });
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
};
const { blogPosts } = await load("src/data/blogPosts.ts");
const site = await load("src/lib/site.ts");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const template = readFileSync(join(dist, "index.html"), "utf8");

function page({ path, title, description, image, type = "website" }) {
  const url = `${site.SITE_URL}${path}`;
  const img = `${site.SITE_URL}/${image ?? site.SITE_IMAGE}`;
  const head = `
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="${type}" />
  <meta property="og:site_name" content="${esc(site.SITE_NAME)}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${img}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="alternate" type="application/rss+xml" title="${esc(site.SITE_NAME)}" href="${site.SITE_URL}/feed.xml" />
`;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace("</head>", `${head}</head>`)
    .replace(
      '<div id="root"></div>',
      `<div id="root"><noscript><h1>${esc(title)}</h1><p>${esc(description)}</p></noscript></div>`,
    );
  const file = join(dist, path.replace(/^\/Blogs/, "").replace(/\/$/, ""), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

page({ path: "/", title: site.SITE_TITLE, description: site.SITE_DESCRIPTION });
page({
  path: "/blogs/food/",
  title: `Food blogs & reviews | ${site.SITE_NAME}`,
  description: "Delicious stories, honest reviews and culinary adventures from restaurants, cafés and street food stalls.",
});
for (const p of blogPosts) {
  page({
    path: `/blogs/food/${p.slug}/`,
    title: `${p.title} | ${site.SITE_NAME}`,
    description: p.description,
    image: p.cover,
    type: "article",
  });
}

const urls = [
  { loc: `${site.SITE_URL}/`, lastmod: blogPosts[0].date },
  { loc: `${site.SITE_URL}/blogs/food/`, lastmod: blogPosts[0].date },
  ...blogPosts.map((p) => ({ loc: `${site.SITE_URL}/blogs/food/${p.slug}/`, lastmod: p.date })),
];
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`,
);

writeFileSync(
  join(dist, "feed.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${esc(site.SITE_NAME)}</title>
  <link>${site.SITE_URL}/</link>
  <description>${esc(site.SITE_DESCRIPTION)}</description>
${blogPosts
  .map(
    (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${site.SITE_URL}/blogs/food/${p.slug}/</link>
    <guid>${site.SITE_URL}/blogs/food/${p.slug}/</guid>
    <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    <description>${esc(p.description)}</description>
  </item>`,
  )
  .join("\n")}
</channel></rss>
`,
);

console.log(`postbuild: ${blogPosts.length + 2} pages, sitemap.xml, feed.xml`);
