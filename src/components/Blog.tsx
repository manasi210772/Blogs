import Header from "./Header";
import Footer from "../components/Footer";
import "../blogs/blogs.css";
import { useEffect, useState } from "react";
interface blogInputs {
  blogName: string;
}

// now the import statement here is a dynamic import
// It returns a promise which needs to be handled in an async function
async function getBlogContent(blogName: string) {
  let file: any;
  try {
    file = await import(`../blogs/${blogName}.mdx`);
    return file.default;
  } catch (err) {
    return new Error("Couldn't import file");
  }
}

const Blog: React.FC<blogInputs> = ({ blogName }) => {
  const [blogContent, setblogContent] = useState("");
  useEffect(() => {
    getBlogContent(blogName).then((blogData) => setblogContent(blogData));
  }, []);

  useEffect(() => {
    if (blogContent != "") {
      const blogDiv = document.querySelector(".blog") as HTMLDivElement | null;
      let anchors = blogDiv?.querySelectorAll("a") as
        | NodeListOf<HTMLAnchorElement>
        | undefined;
      anchors?.forEach((anchorTag) => {
        anchorTag.setAttribute("target", "_blank");
        anchorTag.setAttribute("rel", "noopener noreferrer");
      });
    }
  }, [blogContent]);

  return (
    <div className="w-screen text-white flex flex-col justify-center bg-background items-center">
      <div className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5">
        <Header activeTab={null} />
        <div className="blog w-full text-justify mb-5">{blogContent}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
