"use client";

import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onFilterChange?: (f: { operation?: string; type?: string; commune?: string }) => void;
}

const QUICK_STATS = [
  { value: "+12", label: "Años de trayectoria" },
  { value: "96%", label: "Efectividad de cierre" },
  { value: "+$85M", label: "USD gestionados" },
];

export function HeroSection({ onFilterChange }: HeroSectionProps) {
  const [operation, setOperation] = useState<"" | "VENTA" | "ARRIENDO">("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({
        operation: operation || undefined,
        commune: query.trim() || undefined,
      });
    }
    document.getElementById("propiedades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative bg-dark-950 pt-[72px] overflow-hidden"
    >
      {/* Escena arquitectónica full-bleed */}
      <div className="relative min-h-[600px] lg:min-h-[680px] flex flex-col justify-between">
        {/* Fotografía de arquitectura moderna iluminada */}
        <div className="absolute inset-0 bg-dark-900">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=85&w=2000&auto=format&fit=crop"
            alt="Residencia contemporánea de arquitectura iluminada en Santiago Oriente"
            className="w-full h-full object-cover object-center"
          />
          {/* Capas de scrim para legibilidad garantizada sobre cualquier zona de la foto */}
          <div className="absolute inset-0 hero-scrim" />
          <div className="absolute inset-0 hero-bottom-scrim" />
        </div>

        {/* Bloque principal alineado a la izquierda en zona calmada */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pt-14 pb-10 lg:pt-20">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-medium text-gold-300">
              Corretaje residencial en Santiago Oriente
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-semibold text-white leading-[1.06] tracking-[-0.025em]">
              Encuentra tu hogar de alto estándar
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-md font-normal">
              Propiedades seleccionadas en Vitacura, Las Condes y Lo Barnechea,
              con asesoría técnica y confidencial de principio a fin.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#propiedades" className="btn-gold">
                Explorar portafolio
                <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#contacto" className="btn-outline-light">
                Solicitar tasación
              </a>
            </div>

            {/* Cifras de respaldo limpias y tabulares */}
            <div className="pt-4 grid grid-cols-3 gap-6 max-w-md border-t border-white/20">
              {QUICK_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-semibold text-white tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-100 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buscador pill blanco centrado en la base del hero (fiel a la referencia) */}
        <div className="relative z-20 max-w-3xl mx-auto w-full px-6 pb-10 pt-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl sm:rounded-full p-2 shadow-card-lg border border-ink-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          >
            {/* Selector compacto de operación */}
            <div className="flex items-center bg-ink-100 rounded-xl sm:rounded-full p-1 shrink-0">
              {[
                { label: "Todas", value: "" as const },
                { label: "Comprar", value: "VENTA" as const },
                { label: "Arrendar", value: "ARRIENDO" as const },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setOperation(opt.value)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg sm:rounded-full transition-colors duration-150 ${
                    operation === opt.value
                      ? "bg-dark-900 text-white"
                      : "text-ink-700 hover:text-ink-900"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Input con texto oscuro legible */}
            <div className="flex-1 flex items-center gap-2.5 px-3 py-1.5 min-w-0">
              <Search className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
              <label htmlFor="hero-search-input" className="sr-only">
                Buscar por comuna o sector
              </label>
              <input
                id="hero-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Comuna o sector (ej. Vitacura)"
                className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none"
              />
            </div>

            {/* Botón buscar ámbar */}
            <button
              type="submit"
              className="btn-gold py-2.5 px-6 sm:rounded-full shrink-0"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
