import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogcard from "../components/Blogcard";
import Blogsearch from "../components/Blogsearch";
import { useEffect, useState } from "react";
const modules = import.meta.glob("/src/blogs/*.mdx");

export interface blogInfo {
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  tags: string[];
}

async function getBlogFrontmatter(): Promise<[blogInfo[], string[]]> {
  // Check out import.meta.glob docs on vite
  // Check out frontmatter guide on mdx
  let allTags: string[] = [];
  const blogList: blogInfo[] = await Promise.all(
    Object.keys(modules).map(async (fileName) => {
      const file: any = await modules[fileName]();
      allTags.push(...file.tags);
      return {
        title: file.title,
        slug: file.slug,
        date: file.date,
        excerpt: file.excerpt,
        tags: file.tags,
      };
    }),
  );
  const uniqueTags: Set<string> = new Set(allTags);
  allTags = [...uniqueTags];
  return [blogList, allTags];
}

/**
 * This function is used to get the blogs, that have matching tags according to user's filter
 * IMP: assumption: blog.tags and selectedTags are in alphabetical order
 * It counts up the amount of matching tags and puts them in a map
 * The map has matchCount(key):blogName(value)
 * - Blogs with no matches are not shown
 * - TODO: Blogs with the highest number of matches are at top
 */
function getBlogsByTags(blogs: blogInfo[], selectedTags: string[]) {
  let tagMatchesMap: Map<number, blogInfo[]> = new Map();
  blogs.map((blog) => {
    let blogTagCounter: number = 0;
    let selectedTagCounter: number = 0;
    let matches: number = 0;
    while (
      blogTagCounter < blog.tags.length &&
      selectedTagCounter < selectedTags.length
    ) {
      if (blog.tags[blogTagCounter] == selectedTags[selectedTagCounter]) {
        blogTagCounter += 1;
        selectedTagCounter += 1;
        matches += 1;
      } else if (blog.tags[blogTagCounter] > selectedTags[selectedTagCounter]) {
        selectedTagCounter += 1;
      } else {
        blogTagCounter += 1;
      }
    }
    if (matches) {
      let previousBlogs: blogInfo[] | undefined = tagMatchesMap.get(matches);
      if (previousBlogs == undefined) {
        previousBlogs = [];
      }
      tagMatchesMap.set(matches, [...previousBlogs, blog]);
    }
  });
  const keys = Array.from(tagMatchesMap.keys());
  // sorting in descending order
  // to dipslay more matches first and lower number of matches below
  keys.sort((a, b) => b - a);
  console.log(keys);
  let displayBlogList: blogInfo[] = [];
  for (let key of keys) {
    if (key != 0) {
      displayBlogList = [
        ...displayBlogList,
        ...(tagMatchesMap.get(key) as blogInfo[]),
      ];
    }
  }
  return displayBlogList;
}
const Blogs: React.FC = () => {
  const [displayBlogs, setdisplayBlogs] = useState<blogInfo[]>([]);
  const [blogs, setblogs] = useState<blogInfo[]>([]);
  const [allTags, setallTags] = useState<string[]>([]);
  const [selectedTags, setselectedTags] = useState<string[]>([]);

  useEffect(() => {
    getBlogFrontmatter().then(([blogList, allTags]) => {
      setblogs(blogList);
      setdisplayBlogs(blogList);
      setallTags(allTags);
    });
  }, []);

  useEffect(() => {
    if (selectedTags.length) {
      const filteredBlogs = getBlogsByTags(blogs, selectedTags);
      setdisplayBlogs(filteredBlogs);
    } else {
      setdisplayBlogs(blogs);
    }
  }, [selectedTags]);

  return (
    <div className="text-text flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab="blog" />
        <Blogsearch
          className="m-0"
          allTags={allTags}
          setallTags={setallTags}
          selectedTags={selectedTags}
          setselectedTags={setselectedTags}
        />
        <div className="flex flex-col gap-5 w-full">
          {displayBlogs.map((blog: blogInfo) => (
            <Blogcard
              key={blog.slug}
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
              slug={blog.slug}
              tags={blog.tags}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
