'use client';

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Customers", href: "/customers" },
  { label: "Updates", href: "/updates" },
  { label: "Help", href: "/help" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') === 'dark';
    setIsDark(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-[#0B0B14]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="w-6 h-6 rounded-lg iridescent inline-block" />
          <span>
            made by <span className="font-semibold text-gray-800 dark:text-gray-200">Pathway</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors px-2 py-1"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
           <Link
              href="/signup"
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get for free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}