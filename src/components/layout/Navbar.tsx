"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Nosotros",    href: "#nosotros" },
  { label: "Contacto",    href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0" aria-label="Amaru Inmuebles">
          <img src="/logo.png" alt="Amaru Inmuebles" className="h-8 w-auto brightness-0 invert" />
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contacto"
            className="text-sm font-medium text-white border border-white/30 hover:border-gold-500 hover:text-gold-500 px-5 py-2 rounded transition-colors"
          >
            Contacto
          </a>
          <a
            href="#propiedades"
            className="text-sm font-medium bg-dark-900 hover:bg-dark-800 text-white px-5 py-2 rounded transition-colors border border-white/10"
          >
            Ver propiedades
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gold-500 py-2 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block text-center text-sm font-medium text-white bg-gold-500 hover:bg-gold-600 px-5 py-3 rounded mt-4 transition-colors"
          >
            Solicitar asesoría
          </a>
        </div>
      )}
    </header>
  );
}
