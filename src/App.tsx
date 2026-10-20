import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { fadeUp } from "./lib/motion";

import Header from "./components/Header";
import LandingNavbar from "./landing/Navbar";
import LandingFooter from "./landing/Footer";
import { ease } from "./landing/motion";

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

  // The landing page has its own full-width navbar and footer; blog routes keep the shared shell.
  const isLanding = !pathname.startsWith("/blogs");

  if (isLanding) {
    return (
      <MotionConfig reducedMotion="user">
        <div className="relative flex min-h-screen flex-col bg-background text-text">
          <LandingNavbar />
          <motion.main
            className="flex-1"
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Home />
          </motion.main>
          <LandingFooter />
        </div>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-screen flex-col bg-background text-text">
        {/* Sticky header: full-width, outside the constrained main */}
        <Header />

        <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 pb-12 sm:px-6">
          <motion.div key={pathname} variants={fadeUp} initial="hidden" animate="visible">
            <Routes>
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
              <Route path="*" element={<Navigate to="/blogs/food" replace />} />
            </Routes>
          </motion.div>
        </main>

        {/* Same footer as the landing page */}
        <LandingFooter />
      </div>
    </MotionConfig>
  );
};

export default App;
