import { useNavigate } from "react-router-dom";
import { blogInfo } from "../routes/Blogs";
import { BlogTitle } from "./BlogTitle";

const Blogcard: React.FC<blogInfo> = ({ title, slug, date }) => {
  const navigate = useNavigate();
  const displayBlog = () => {
    navigate("/blogs/" + slug);
  };
  return (
    <div
      onClick={displayBlog}
      className="flex flex-col md:flex-row gap-3 md:gap-10 flex-wrap md:flex-nowrap mt-3 pr-0 pb-3 border-b-2 border-gray-400 dark:border-gray-600 cursor-pointer hover:transition hover:duration-300 hover:ease-in-out hover:opacity-80"
    >
      <span className="text-lg text-accent shrink-0">{date.toString()}</span>
      <BlogTitle title={title} />
      {/* 
      <div className="md:mt-1 md:text-gray-600 md:dark:text-gray-400">
        {excerpt}
      </div>
      <div className="hidden md:flex md:gap-2 md:shrink tags md:mt-3">
        {tags.map((tag) => (
          <span
            key={slug + tag}
            className="md:p-1 md:px-2 md:text-text md:opacity-70 md:rounded md:font-mono md:bg-secondary md:text-sm"
          >
            {"#" + tag}
          </span>
        ))}
      </div>
  */}
    </div>
  );
};

export default Blogcard;
