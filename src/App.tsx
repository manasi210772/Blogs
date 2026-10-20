import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useNavigationType } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { fadeUp } from "./lib/motion";

import Header from "./components/Header";
import LandingNavbar from "./landing/Navbar";
import LandingFooter from "./landing/Footer";
import { ease } from "./landing/motion";

import Home from "./pages/Home";
import FoodBlogs from "./pages/FoodBlogs";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const { pathname, key } = useLocation();
  const navType = useNavigationType();

  // Remember where each history entry was scrolled to, so Back returns to the same spot in a list
  // and any new page starts at the top. "instant" overrides the smooth scrolling set on <html>.
  const positions = useRef<Record<string, number>>({});
  const currentKey = useRef(key);
  currentKey.current = key;

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const onScroll = () => {
      positions.current[currentKey.current] = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const top = navType === "POP" ? (positions.current[key] ?? 0) : 0;
    window.scrollTo({ top, behavior: "instant" });
  }, [key, navType]);

  // The landing page has its own full-width navbar; every other route uses the shared shell.
  const isLanding = pathname === "/";

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
              <Route path="/blogs" element={<Navigate to="/blogs/food" replace />} />
              <Route path="/blogs/food" element={<FoodBlogs />} />
              <Route path="/blogs/food/:slug" element={<PostPage />} />
              <Route path="*" element={<NotFound />} />
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
