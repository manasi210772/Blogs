import { lazy, Suspense, useMemo, type ComponentType } from "react";
import { useParams } from "react-router-dom";
import BlogContent from "../components/BlogContent";
import { getPost } from "../data/blogPosts";
import NotFound from "./NotFound";

// One chunk per post, loaded only when that post is opened. File names don't always match slugs
// (Chimichurri2.mdx vs "chimichurri-2"), so both sides are compared with punctuation and case removed.
const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const loaders = Object.fromEntries(
  Object.entries(import.meta.glob<{ default: ComponentType }>("../blogs/*.mdx")).map(
    ([path, load]) => [normalise(path.split("/").pop()!.replace(/\.mdx$/, "")), load],
  ),
);

const PostPage = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const load = loaders[normalise(slug)];
  const Post = useMemo(() => (load ? lazy(load) : null), [load]);

  if (!post || !Post) return <NotFound />;

  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <BlogContent Post={Post} slug={slug} />
    </Suspense>
  );
};

export default PostPage;
