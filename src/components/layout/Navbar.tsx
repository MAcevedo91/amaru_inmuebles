"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Servicios", href: "#servicios" },
  { label: "Asesores", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ease-architecture ${
        scrolled
          ? "bg-dark-950/95 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-dark-900/95 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-6">
          {/* Logo nítido vectorial + wordmark */}
          <BrandLogo variant="light" showTagline={true} />

          {/* Enlaces centrados con contraste garantizado */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-gold-400"
                      : "text-slate-100 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Dos acciones a la derecha tal como en la referencia */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="#contacto"
              className="btn-outline-light text-sm py-2 px-5"
            >
              Contacto
            </a>
            <a
              href="#propiedades"
              className="btn-gold text-sm py-2 px-5"
            >
              Ver propiedades
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable con contraste alto */}
      {open && (
        <div className="lg:hidden bg-dark-950 border-t border-white/10 px-6 pb-6 pt-3">
          <nav className="flex flex-col" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setOpen(false);
                }}
                className="py-3 text-sm font-medium text-slate-100 hover:text-gold-400 border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-outline-light w-full justify-center"
            >
              Contacto directo
            </a>
            <a
              href="#propiedades"
              onClick={() => setOpen(false)}
              className="btn-gold w-full justify-center"
            >
              Ver propiedades
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
