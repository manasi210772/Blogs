// Checks every post in src/blogs/ for the formatting mistakes we have fixed before, so they can't
// come back. Runs before every build (and so before every deploy); `npm run check:posts` runs it alone.
// Each problem is printed with its file and line, and the build stops until it is fixed. Warnings
// (things that are sometimes intentional) are printed but don't stop the build.
//
//   node scripts/check-posts.mjs [file.mdx ...]   (no files: check all posts)

import { readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = join(root, "src/blogs");

// One spelling per word across all posts.
const SPELLINGS = [
  [/\bchocolaty\b/i, "chocolatey"],
  [/\bshr[a]?van\b|\bshrawan\b|\bsharavan\b/i, "Shraavan"],
];

// Emoji and pictographs; the rating star comes from <Rating />, never from text.
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2B55}\u{FE0F}]/u;

// Sections where the list of dishes belongs.
const ORDER_SECTION = /^(What (We|I) Ordered|What I Bought|What the Thali Included)$/i;

// The same number of minutes, people, rupees... stated twice usually means a repeated point
// (the "15-20 minute wait" in Back to Chimichurri). Sometimes it's on purpose, so it only warns.
const FACT =
  /₹\s?\d[\d,]*|\b\d+(?:\.\d+)?(?:\s?[–-]\s?\d+)?\s*(?:minutes?|mins?|hours?|hrs?|pieces?|people|persons?|km)\b/gi;
const factKey = (s) => s.toLowerCase().replace(/\s/g, "").replace(/-/g, "–").replace(/s$/, "");

const normalise = (s) => s.toLowerCase().replace(/\*|_|<[^>]+>/g, "").replace(/\s+/g, " ").trim();

function checkPost(file, text) {
  const problems = [];
  const warnings = [];
  const report = (line, msg) => problems.push(`${basename(file)}:${line}  ${msg}`);
  const warn = (line, msg) => warnings.push(`${basename(file)}:${line}  ${msg}`);
  const lines = text.split(/\r?\n/);

  // Skip the frontmatter block, but still check its title/description for emoji and spelling.
  let start = 0;
  if (lines[0]?.trim() === "---") start = lines.indexOf("---", 1) + 1;

  let section = "";
  let inJsx = 0; // depth of multi-line JSX blocks (<div>, <figure>, ...)
  const sentences = new Map();
  const facts = new Map();

  lines.forEach((raw, i) => {
    const n = i + 1;
    const line = raw.trimEnd();
    const body = i >= start;

    if (EMOJI.test(line)) report(n, "remove the emoji (ratings use <Rating value=\"8\" />)");
    for (const [re, word] of SPELLINGS) {
      const m = line.match(re);
      if (m && m[0] !== word) report(n, `spell "${m[0]}" as "${word}"`);
    }
    if (!body) return;

    // Track multi-line JSX so the lines inside images and figures aren't read as prose.
    const opens = (line.match(/<(div|figure|p)\b[^>]*>/g) || []).length;
    const closes = (line.match(/<\/(div|figure|p)>/g) || []).length;
    const jsxBefore = inJsx;
    inJsx = Math.max(0, inJsx + opens - closes);

    // Headings: "## <u>Title</u>" or "### <u>Title</u>", nothing else.
    if (/^#/.test(line)) {
      if (/^# /.test(line)) report(n, "use ## or ### for headings (the page already has the title)");
      else if (!/^#{2,3} <u>[^<*]+<\/u>$/.test(line))
        report(n, 'write headings as "## <u>Title</u>" (no bold, emoji or other markup)');
      section = line.replace(/^#+\s*/, "").replace(/<\/?u>/g, "").trim();
    }

    // A "we ordered:" list belongs under its own "What We Ordered" heading, not in the intro.
    if (/\b(ordered|bought)\b[^.]*:\s*$/i.test(line) && !ORDER_SECTION.test(section))
      report(n, 'move this list of dishes under a "## <u>What We Ordered</u>" heading');

    // <Rating /> glued to a bullet, or followed by indented text, breaks the list around it (the Ora
    // bug: the next dish ended up as a point of the previous one). A blank line before it is fine.
    if (/^\s*<Rating\b/.test(line)) {
      if (/^\s/.test(raw)) report(n, "<Rating /> must start at the beginning of the line");
      const prev = lines[i - 1] ?? "";
      const next = lines[i + 1] ?? "";
      if (/^\s*([-*]|\d+\.)\s/.test(prev) || /^\s{2,}\S/.test(next))
        report(n, "<Rating /> is mixed into a list; give the dish its own heading and put the rating after its text");
    }

    // Indented bullets/text outside JSX turn into nested lists that attach to the wrong item.
    if (!jsxBefore && !inJsx && /^\s{2,}([-*]|\d+\.)\s/.test(raw))
      report(n, "nested (indented) list: write it as a normal list under its own heading");

    // Every photo needs alt text and its size, so the page doesn't jump while it loads.
    if (/<img\b/.test(line)) {
      const tag = lines.slice(i, i + 12).join(" ").match(/<img\b[\s\S]*?\/>/)?.[0] ?? "";
      for (const attr of ["alt=", "width=", "height="])
        if (!tag.includes(attr)) report(n, `<img> is missing ${attr.slice(0, -1)}`);
    }

    // The same sentence twice in one post (the repeated "15-20 minute wait").
    if (!inJsx && !jsxBefore && !/^\s*[<#|]/.test(line)) {
      for (const s of line.split(/(?<=[.!?])\s+/)) {
        const key = normalise(s);
        if (key.split(" ").length < 8) continue;
        if (sentences.has(key)) report(n, `this sentence repeats line ${sentences.get(key)}: "${s.trim().slice(0, 60)}..."`);
        else sentences.set(key, n);
      }
      for (const m of line.matchAll(FACT)) {
        const key = factKey(m[0]);
        if (facts.has(key)) warn(n, `"${m[0]}" is also on line ${facts.get(key)}; check the point isn't repeated`);
        else facts.set(key, n);
      }
    }

  });

  return { problems, warnings };
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(blogDir).filter((f) => f.endsWith(".mdx")).map((f) => join(blogDir, f));

// Every post needs an entry in blogPosts.ts (or it never shows up), every place a pin in places.ts,
// and every photo a post or cover points at has to exist in public/.
function checkSiteData() {
  const problems = [];
  const read = (p) => readFileSync(join(root, p), "utf8");
  const posts = read("src/data/blogPosts.ts");
  const places = read("src/data/places.ts");
  const key = (s) => s.toLowerCase().replace(/[-\s_]/g, "");

  const slugs = [...posts.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => key(m[1]));
  for (const f of readdirSync(blogDir).filter((f) => f.endsWith(".mdx")))
    if (!slugs.includes(key(f.replace(/\.mdx$/, ""))))
      problems.push(`blogPosts.ts  no entry for ${f} (add one with a matching slug)`);

  for (const [, place] of posts.matchAll(/place:\s*"([^"]+)"/g))
    if (!places.includes(`"${place}":`) && !new RegExp(`^\\s*${place}:`, "m").test(places))
      problems.push(`places.ts  "${place}" has no map location (add its lat/lng from Google Maps)`);

  const media = new Set(readdirSync(join(root, "public/Media")));
  const used = [
    ...[...posts.matchAll(/cover:\s*"Media\/([^"]+)"/g)].map((m) => ["blogPosts.ts", m[1]]),
    ...readdirSync(blogDir)
      .filter((f) => f.endsWith(".mdx"))
      .flatMap((f) => [...read(`src/blogs/${f}`).matchAll(/Media\/([^`"')\s]+)/g)].map((m) => [f, m[1]])),
  ];
  for (const [where, file] of used)
    if (!media.has(file)) problems.push(`${where}  photo public/Media/${file} doesn't exist (check the name)`);

  return problems;
}

const results = files.map((f) => checkPost(f, readFileSync(f, "utf8")));
const problems = results.flatMap((r) => r.problems).concat(process.argv.slice(2).length ? [] : checkSiteData());
const warnings = results.flatMap((r) => r.warnings);

if (warnings.length) {
  console.warn(`check-posts: ${warnings.length} warning(s), worth a second look:
`);
  for (const w of warnings) console.warn("  " + w);
  console.warn("");
}

if (problems.length) {
  console.error(`check-posts: ${problems.length} problem(s) to fix before building:\n`);
  for (const p of problems) console.error("  " + p);
  console.error("");
  process.exit(1);
}
console.log(`check-posts: ${files.length} posts OK`);
