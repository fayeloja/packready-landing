"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">📦</span>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ color: "var(--color-brand)" }}
          >
            PackReady
          </span>
          <span className="text-xs text-gray-400 font-medium hidden sm:block">
            Supplies Ltd
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#products" className="hover:text-green-700 transition-colors">Products</a>
          <a href="#why-us" className="hover:text-green-700 transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-green-700 transition-colors">Order Now</a>
        </nav>

        {/* CTA Button */}
        
          <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-brand)" }}
        >
          Get a Quote
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Order Now</a>
          
            <a href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-white text-center py-2 rounded-lg font-semibold"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}