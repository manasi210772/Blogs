import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const showBlogMenu = location.pathname !== "/" && location.pathname !== "/blogs";

  function toggleDarkMode() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="relative w-full flex justify-between flex-wrap items-center mt-10">
      <div className="left-side-header flex gap-2 justify-center items-center">
        {showBlogMenu && (
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle blog navigation"
            aria-expanded={menuOpen}
            className="rounded-2xl border border-gray-700 bg-[#0f1f1f]/80 p-2 text-primary transition hover:border-[#3ddad7] hover:bg-[#11212b]"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}

        <h1 className="text-3xl self-end text-primary">
          Manasi Patil
        </h1>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full z-20 mt-3 w-full max-w-sm rounded-3xl border border-gray-800 bg-[#0f1f1f]/95 p-4 shadow-2xl">
          <div className="flex flex-col gap-3 text-sm">
            <NavLink
              to="/blogs/food"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    isActive && "underline underline-offset-4 text-accent"
                  ),
                  "block rounded-2xl px-4 py-3 hover:bg-[#11212b] transition"
                )
              }
            >
              Food Blog
            </NavLink>
            <NavLink
              to="/blogs/travel"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    isActive && "underline underline-offset-4 text-accent"
                  ),
                  "block rounded-2xl px-4 py-3 hover:bg-[#11212b] transition"
                )
              }
            >
              Travel Blog
            </NavLink>
            <NavLink
              to="/blogs/personal"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    isActive && "underline underline-offset-4 text-accent"
                  ),
                  "block rounded-2xl px-4 py-3 hover:bg-[#11212b] transition"
                )
              }
            >
              Personal Blog
            </NavLink>
            <NavLink
              to="/blogs/craft"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    isActive && "underline underline-offset-4 text-accent"
                  ),
                  "block rounded-2xl px-4 py-3 hover:bg-[#11212b] transition"
                )
              }
            >
              Craft Blog
            </NavLink>
          </div>
        </div>
      )}

      <nav className="flex justify-around gap-2 mt-1 text-m self-start text-primary font-bold">
        <svg
          className="dark:fill-white h-4 w-4 self-center hover:cursor-pointer"
          onClick={toggleDarkMode}
          viewBox="0 0 24 24"
        >
          <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" />
        </svg>

        <p>|</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            twMerge(
              clsx(
                isActive && "underline underline-offset-4 text-accent"
              ),
              "hover:text-secondary transition duration-300"
            )
          }
        >
          Home
        </NavLink>

        <p>|</p>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            twMerge(
              clsx(
                isActive && "underline underline-offset-4 text-accent"
              ),
              "hover:text-secondary transition duration-300"
            )
          }
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;