import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const NotFound = () => {
  usePageMeta({ title: "Page not found" });

  return (
    <div className="pb-8 pt-8 text-left md:pt-12">
      <p className="mb-4 text-small font-semibold uppercase tracking-wider text-walnut">404</p>
      <h1 className="mb-3 text-h1 text-ink">This page isn&apos;t on the menu</h1>
      <p className="mb-lg max-w-md text-body text-walnut">
        The link may be mistyped or the story may have moved. Every story is on the blog page.
      </p>
      <Link
        to="/blogs/food"
        className="inline-block rounded-[8px] bg-primary px-lg py-md font-semibold text-canvas hover:bg-secondary"
      >
        Browse all stories
      </Link>
    </div>
  );
};

export default NotFound;
