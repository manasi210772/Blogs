import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { fadeUp } from "./lib/motion";

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
import ChineseWokBlog from "./pages/ChineseWokBlog";
import MahabiBlog from "./pages/MahabiBlog";
import MalvanBlog from "./pages/MalvanBlog";

const App = () => {
  const { pathname } = useLocation();

  // Each route starts at the top, like a fresh page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col bg-background text-text">
        {/* Sticky header: full-width, outside the constrained main */}
        <Header />

        <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 pb-12 sm:px-6">
          <motion.div key={pathname} variants={fadeUp} initial="hidden" animate="visible">
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
              <Route path="/blogs/food/chinesewok" element={<ChineseWokBlog />} />
              <Route path="/blogs/food/mahabi" element={<MahabiBlog />} />
              <Route path="/blogs/food/malvan" element={<MalvanBlog />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </main>

        {/* Full-bleed footer band */}
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
