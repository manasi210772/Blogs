import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Blogs from "./routes/Blogs";
import Blog from "./components/Blog";
import NotFound from "./routes/NotFound";

// Get blognames and create routes dynamically
const blogs = import.meta.glob("/src/blogs/*.mdx");

const blogFilenames = Object.keys(blogs).map((name) =>
  // This will break your app changing the path
  // is breaking urls for the blogs, I spent a whole day only to realize
  // instead of /rajnikam/blogs/<blog_name>
  // it was /rajnikam/blogs/gs/<blog_name> that was breaking the site
  name.slice(name.lastIndexOf("blogs/") + 6, name.lastIndexOf(".")),
);
const blogRoutes = blogFilenames.map((fileName) => ({
  path: `/blogs/${fileName}`,
  element: <Blog key={fileName} blogName={fileName} />,
}));

const staticRoutes = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
];

const routes = blogRoutes.concat(staticRoutes);
const router = createBrowserRouter(routes, { basename: "/rajnikam" });
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
