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
import ChimichurriBlog from "./pages/ChimichurriBlog";
import Chimichurri2Blog from "./pages/Chimichurri2Blog";
import PizzaExpressBlog from "./pages/PizzaExpressBlog";
import FoodPatternBackground from "./components/FoodPatternBackground";

const App = () => {
  return (
    <div className="relative min-h-screen text-text bg-background">
      <FoodPatternBackground />

      {/* Sticky header — full-width, outside constrained main */}
      <Header />

      <main className="relative z-10 w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:max-w-3xl 2xl:max-w-4xl mx-auto flex flex-col gap-6 px-2 pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/food" element={<FoodBlogs />} />
          <Route path="/blogs/food/sugarcane" element={<SugarcaneBlog />} />
          <Route path="/blogs/food/manasjatra" element={<ManasjatraBlog />} />
          <Route path="/blogs/food/ora" element={<OraBlog />} />
          <Route path="/blogs/food/maiz" element={<MaizBlog />} />
          <Route path="/blogs/food/bluetokai" element={<BluetokaiBlogs />} />
          <Route path="/blogs/food/chimichurri" element={<ChimichurriBlog />} />
          <Route path="/blogs/food/chimichurri-2" element={<Chimichurri2Blog />} />
          <Route path="/blogs/food/pizzaexpress" element={<PizzaExpressBlog />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
};

export default App;