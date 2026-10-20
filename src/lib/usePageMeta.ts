import { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME, SITE_TITLE, SITE_URL } from "./site";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

interface PageMeta {
  title?: string;
  description?: string;
  /** Path under public/, e.g. "Media/x.jpeg". */
  image?: string;
}

// Keeps the tab title and the description/Open Graph tags in step with the current route.
// (scripts/postbuild.mjs writes the same tags into the static HTML so link previews work too.)
export function usePageMeta({ title, description, image }: PageMeta = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
    const desc = description ?? SITE_DESCRIPTION;
    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:image", `${SITE_URL}/${image ?? SITE_IMAGE}`);
    setMeta("name", "twitter:card", "summary_large_image");
  }, [title, description, image]);
}
