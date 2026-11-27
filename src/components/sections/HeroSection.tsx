"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface HeroSectionProps {
  onFilterChange?: (f: { operation?: string; type?: string; commune?: string }) => void;
}

export function HeroSection({ onFilterChange }: HeroSectionProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) onFilterChange({ commune: query || undefined });
    document.getElementById("propiedades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-[88vh] flex flex-col">
      {/* ── Fotografía full-bleed ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1800&auto=format&fit=crop"
          alt="Residencia de lujo al atardecer"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradiente izquierdo — deja la derecha limpia para ver la casa */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent" />
        {/* Gradiente inferior para el search bar */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark-900/70 to-transparent" />
      </div>

      {/* ── Contenido del hero ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-xl space-y-6">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Encuentra tu hogar{" "}
            <span className="text-white">de lujo</span>{" "}
            <span className="text-white">ideal.</span>
          </h1>

          {/* Subtítulo sobrio */}
          <p className="text-base text-white/70 leading-relaxed max-w-sm">
            Corretaje exclusivo en Vitacura, Las Condes y Lo Barnechea.
            Propiedades seleccionadas para clientes exigentes.
          </p>

          {/* CTA primario */}
          <a
            href="#propiedades"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-900 text-sm font-semibold px-6 py-3 rounded transition-colors"
          >
            Ver propiedades
            <span aria-hidden>›</span>
          </a>
        </div>
      </div>

      {/* ── Barra de búsqueda flotante ── */}
      <div className="relative z-10 bg-dark-900/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca por comuna, sector o tipo de propiedad…"
              className="flex-1 bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder-white/40 text-sm px-4 py-3 rounded border border-white/10 focus:border-gold-500/60 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-900 font-semibold text-sm px-6 py-3 rounded transition-colors shrink-0"
            >
              <Search className="w-4 h-4" />
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
