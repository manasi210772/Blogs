import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import TravelBlogs from "./pages/TravelBlogs";
import FoodBlogs from "./pages/FoodBlogs";
import CraftBlogs from "./pages/CraftBlogs";
import GiftCartBlog from "./pages/GiftCartBlog";
import PersonalBlogs from "./pages/PersonalBlogs";
import PersonalVivaBlog from "./pages/PersonalVivaBlog";
import SugarcaneBlog from "./pages/SugarcaneBlog";

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
          <Route path="/blogs/food/sugarcane" element={<SugarcaneBlog />} />
          <Route path="/blogs/craft" element={<CraftBlogs />} />
          <Route path="/blogs/craft/giftcart" element={<GiftCartBlog />} />
          <Route path="/blogs/personal" element={<PersonalBlogs />} />
          <Route path="/blogs/personal/viva" element={<PersonalVivaBlog />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
};

export default App;