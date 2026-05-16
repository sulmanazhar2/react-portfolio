import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logotext } from "../../content_option";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={close}
          className="text-xl font-heading font-bold tracking-tight no-underline text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          {logotext}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium rounded-md no-underline transition-colors ${
                pathname === item.to
                  ? "text-[var(--color-accent)] bg-blue-50"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/resume"
            className={`ml-2 px-4 py-2 text-sm font-medium rounded-md no-underline transition-colors ${
              pathname === "/resume"
                ? "bg-[var(--color-accent-light)] text-white"
                : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]"
            }`}
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-[var(--color-text)] hover:bg-gray-100 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className={`block px-3 py-2 text-sm font-medium rounded-md no-underline ${
                pathname === item.to
                  ? "text-[var(--color-accent)] bg-blue-50"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/resume"
            onClick={close}
            className="block px-3 py-2 text-sm font-medium text-[var(--color-accent)] no-underline hover:bg-blue-50 rounded-md"
          >
            Resume &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
