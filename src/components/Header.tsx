import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const Header = () => {
  function toggleDarkMode() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="w-full flex justify-between flex-wrap items-center mt-10">
      <div className="left-side-header flex gap-2 justify-center items-center">
        <h1 className="text-3xl self-end text-primary">
          Manasi Patil
        </h1>
      </div>

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