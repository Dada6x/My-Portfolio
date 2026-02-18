import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import ClickSpark from "./ClickSpark";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur">
      <ClickSpark
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={400}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          
          {/* Logo / Name */}
          <Link
            to="/"
            className="font-bold text-black dark:text-white"
            onClick={closeMenu}
          >
            Yahiea Dada
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/lab"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              Lab
            </Link>

            <a
              href="/#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="/#about"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              About
            </a>

            <a
              href="/#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              Contact
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-black" />
              ) : (
                <Sun className="w-4 h-4 text-white" />
              )}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-black"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-black" />
              ) : (
                <Sun className="w-4 h-4 text-white" />
              )}
            </button>

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-black"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
              <Link
                to="/lab"
                onClick={closeMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Lab
              </Link>

              <a
                href="/#projects"
                onClick={closeMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Projects
              </a>

              <a
                href="/#about"
                onClick={closeMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                About
              </a>

              <a
                href="/#contact"
                onClick={closeMenu}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </ClickSpark>
    </header>
  );
}
