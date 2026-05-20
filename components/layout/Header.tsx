"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Collection", href: "/collection" },
  { label: "Our Story", href: "/our-story" },
  { label: "Sustainability", href: "/sustainability" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-shell-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-8 h-16 md:h-20">
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="font-heading text-xl md:text-2xl font-light tracking-tight text-shell-ink"
        >
          Sea Shells
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-[13px] font-medium uppercase tracking-[0.15em] text-shell-olive transition-colors duration-300 hover:text-shell-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" as="a" href="/first-drop">
            Join the First Drop
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <span
            className={`absolute h-px w-5 bg-shell-ink transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-shell-ink transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-shell-ink transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-shell-white z-40 flex flex-col transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-3xl font-light text-shell-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className={`pt-4 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms",
            }}
          >
            <Button
              variant="primary"
              size="lg"
              as="a"
              href="/first-drop"
              onClick={() => setMenuOpen(false)}
            >
              Join the First Drop
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
