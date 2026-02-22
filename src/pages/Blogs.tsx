import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-10 text-center">
      <h2 className="text-3xl font-bold text-primary">
        What would you like to explore?
      </h2>

      <div className="flex gap-10 mt-6">
        <Link
          to="/blogs/travel"
          className="px-10 py-6 bg-secondary text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
        >
          ✈ Travel Blogs
        </Link>

        <Link
          to="/blogs/food"
          className="px-10 py-6 bg-secondary text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
        >
          🍽 Food Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;