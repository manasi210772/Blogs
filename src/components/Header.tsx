import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleDarkMode() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
  }

  return (
    <header
      className={twMerge(
        "sticky top-0 z-50 w-full",
        scrolled
          ? "bg-background border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:max-w-3xl 2xl:max-w-4xl mx-auto px-2 py-4 flex justify-between items-center">
        {/* Brand */}
        <NavLink to="/">
          <span className="text-2xl text-primary font-semibold tracking-tight">
            Manasi Patil
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="flex items-center gap-3 text-sm font-semibold text-primary">
          <svg
            className="dark:fill-white h-4 w-4 cursor-pointer"
            onClick={toggleDarkMode}
            viewBox="0 0 24 24"
          >
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" />
          </svg>

          <span className="text-border select-none">|</span>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              twMerge(
                clsx(
                  "hover:text-secondary",
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
                  "hover:text-secondary",
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