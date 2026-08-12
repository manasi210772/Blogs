import { NavLink } from "react-router-dom";
import { Sun, Moon, Utensils } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleDarkMode() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  }

  return (
    <header
      className={twMerge(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:max-w-3xl 2xl:max-w-4xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-primary/60 group-hover:text-primary transition-colors duration-200">
            <Utensils className="w-4 h-4" />
          </span>
          <span className="text-2xl text-primary font-semibold tracking-tight">
            Manasi Patil
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="flex items-center gap-3 text-sm font-semibold text-primary">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <span className="text-border select-none">|</span>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              twMerge(
                clsx(
                  "hover:text-secondary transition-colors duration-200",
                  isActive && "underline underline-offset-4 text-accent"
                )
              )
            }
          >
            Home
          </NavLink>

          <span className="text-border select-none">|</span>

          <NavLink
            to="/blogs/food"
            className={({ isActive }) =>
              twMerge(
                clsx(
                  "hover:text-secondary transition-colors duration-200",
                  isActive && "underline underline-offset-4 text-accent"
                )
              )
            }
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;