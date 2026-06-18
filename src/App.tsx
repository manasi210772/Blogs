import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FoodBlogs from "./pages/FoodBlogs";
import SugarcaneBlog from "./pages/SugarcaneBlog";
import ManasjatraBlog from "./pages/Manasjatra";
import OraBlog from "./pages/OraBlog";
import MaizBlog from "./pages/MaizBlog";
import BluetokaiBlogs from "./pages/BluetokaiBlogs";

const App = () => {
  return (
    <div className="text-text bg-background flex justify-center items-center">
      <main className="min-h-screen w-10/12 md:w-3/5 md:m-10 lg:m-0 xl:w-2/5 flex justify-center items-start flex-col gap-5 text-justify">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/food" element={<FoodBlogs />} />
          <Route path="/blogs/food/sugarcane" element={<SugarcaneBlog />} />
          <Route path="/blogs/food/manasjatra" element={<ManasjatraBlog />} />
          <Route path="/blogs/food/ora" element={<OraBlog />} />
          <Route path="/blogs/food/maiz" element={<MaizBlog />} />
          <Route path="/blogs/food/bluetokai" element={<BluetokaiBlogs />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
};

export default App;