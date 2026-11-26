"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Propiedades", href: "#propiedades" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Barra superior ejecutiva */}
      <div className="bg-[#18191D] text-executive-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amaru-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amaru-400" />
              Corretaje & Gestión Inmobiliaria de Alto Estándar
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amaru-400" />
              Alonso de Córdova, Vitacura, Santiago
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:contacto@amaruinmuebles.cl"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amaru-400" />
              contacto@amaruinmuebles.cl
            </a>
            <span className="text-white/20">|</span>
            <a
              href="tel:+56987654321"
              className="flex items-center gap-1.5 font-medium text-white hover:text-amaru-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amaru-400" />
              +56 9 8765 4321
            </a>
          </div>
        </div>
      </div>

      {/* Barra principal de navegación */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-black/5"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logotipo */}
          <BrandLogo size="md" />

          {/* Enlaces de escritorio */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-executive-700 hover:text-amaru-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amaru-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botones de acción CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/56987654321?text=Hola,%20deseo%20solicitar%20asesor%C3%ADa%20inmobiliaria%20con%20Amaru%20Inmuebles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-executive-700 hover:text-amaru-600 border border-black/10 hover:border-amaru-500/40 rounded transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp
            </a>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-amaru-600 hover:bg-amaru-700 text-white text-xs uppercase tracking-[0.14em] font-medium px-5 py-2.5 rounded transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Vender / Tasar</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Botón hamburguesa móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-executive-800 hover:text-amaru-600 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil deslizante */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-black/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-executive-800 hover:text-amaru-600 py-2 border-b border-black/5"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://wa.me/56987654321?text=Hola,%20deseo%20solicitar%20asesor%C3%ADa%20inmobiliaria%20con%20Amaru%20Inmuebles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 rounded border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </a>

              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-widest font-medium text-white bg-amaru-600 hover:bg-amaru-700 rounded shadow"
              >
                <span>Solicitar Asesoría o Tasación</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
