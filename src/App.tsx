import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import TravelBlogs from "./pages/TravelBlogs";
import FoodBlogs from "./pages/FoodBlogs";

const App = () => {
  return (
    <div className="text-text bg-background flex justify-center items-center">
      <main className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5 text-justify">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/travel" element={<TravelBlogs />} />
          <Route path="/blogs/food" element={<FoodBlogs />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
};

export default App;