"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  Search,
  CheckCircle2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { ArchitecturalEmblem } from "@/components/ui/BrandLogo";

interface HeroSectionProps {
  onFilterChange?: (filters: {
    operation?: string;
    type?: string;
    commune?: string;
  }) => void;
}

export function HeroSection({ onFilterChange }: HeroSectionProps) {
  const [operation, setOperation] = useState("VENTA");
  const [propertyType, setPropertyType] = useState("");
  const [commune, setCommune] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({
        operation,
        type: propertyType || undefined,
        commune: commune || undefined,
      });
    }
    const propElement = document.getElementById("propiedades");
    if (propElement) {
      propElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FDFBF7] overflow-hidden"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amaru-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amaru-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna de Contenido Principal */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tag superior ejecutivo */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amaru-100/80 border border-amaru-300/50 text-amaru-800 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-amaru-600 animate-pulse" />
              <span>GESTIÓN INMOBILIARIA DE ALTO ESTÁNDAR</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-executive-900 leading-[1.12]">
              Propiedades extraordinarias con la{" "}
              <span className="font-normal text-amaru-700 italic">
                máxima discreción
              </span>{" "}
              y rigor técnico.
            </h1>

            {/* Bajada descriptiva */}
            <p className="text-base sm:text-lg text-executive-600 font-light leading-relaxed max-w-2xl">
              Firma boutique especializada en la intermediación, valorización y
              comercialización estratégica de residencias premium en Vitacura,
              Las Condes y Lo Barnechea. Gestionamos su patrimonio con absoluta
              reserva y profesionalismo.
            </p>

            {/* Botones de acción directa */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 bg-amaru-600 hover:bg-amaru-700 text-white text-xs uppercase tracking-[0.16em] font-medium px-8 py-4 rounded transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Quiero Vender mi Propiedad</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#propiedades"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amaru-50 text-executive-800 text-xs uppercase tracking-[0.16em] font-medium px-8 py-4 rounded border border-black/10 hover:border-amaru-400/60 transition-all duration-200"
              >
                <span>Explorar Propiedades</span>
              </a>
            </div>

            {/* Sellos de confianza */}
            <div className="pt-6 border-t border-black/5 grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amaru-700 font-medium text-xs">
                  <ShieldCheck className="w-4 h-4 text-amaru-600" />
                  <span>Confidencialidad</span>
                </div>
                <p className="text-[11px] text-executive-500 font-light">
                  Acuerdos NDA y privacidad patrimonial garantizada.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amaru-700 font-medium text-xs">
                  <TrendingUp className="w-4 h-4 text-amaru-600" />
                  <span>Tasación Real</span>
                </div>
                <p className="text-[11px] text-executive-500 font-light">
                  Estudio fundado en cierres efectivos recientes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-amaru-700 font-medium text-xs">
                  <Award className="w-4 h-4 text-amaru-600" />
                  <span>Asesoría Legal</span>
                </div>
                <p className="text-[11px] text-executive-500 font-light">
                  Estudio de títulos y redacción contractual blindada.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Visual & Fotografía Arquitectónica */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Marco con sombra de lujo */}
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-black/10 bg-white">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    alt="Residencia exclusiva Amaru Inmuebles"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Tarjeta flotante en la imagen */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-sm border border-black/5 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-amaru-600 font-semibold block">
                          PORTAFOLIO EXCLUSIVO
                        </span>
                        <h4 className="text-sm font-medium text-executive-900 mt-0.5">
                          Santa María de Manquehue, Vitacura
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-executive-500 block">
                          Valoración
                        </span>
                        <span className="text-sm font-semibold text-amaru-800">
                          48.500 UF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acento geométrico arquitectónico */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-amaru-400/30 rounded-sm pointer-events-none -z-0" />
              <div className="absolute -top-4 -left-4 bg-amaru-100 text-amaru-800 px-4 py-2 text-[11px] font-medium tracking-wider uppercase border border-amaru-300 shadow-sm z-20">
                Amaru Selection
              </div>
            </div>
          </div>
        </div>

        {/* Buscador y Filtro Ejecutivo Integrado */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-sm shadow-luxury border border-black/5">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center justify-between pb-5 border-b border-black/5 mb-6">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-amaru-600" />
                <span className="text-xs uppercase tracking-[0.16em] font-semibold text-executive-800">
                  Buscador de Propiedades Exclusivas
                </span>
              </div>

              {/* Selector Venta / Arriendo */}
              <div className="inline-flex p-1 bg-executive-100 rounded">
                <button
                  type="button"
                  onClick={() => setOperation("VENTA")}
                  className={`px-4 py-1.5 text-xs font-medium rounded transition-all ${
                    operation === "VENTA"
                      ? "bg-white text-executive-900 shadow-sm"
                      : "text-executive-600 hover:text-executive-900"
                  }`}
                >
                  En Venta
                </button>
                <button
                  type="button"
                  onClick={() => setOperation("ARRIENDO")}
                  className={`px-4 py-1.5 text-xs font-medium rounded transition-all ${
                    operation === "ARRIENDO"
                      ? "bg-white text-executive-900 shadow-sm"
                      : "text-executive-600 hover:text-executive-900"
                  }`}
                >
                  En Arriendo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-executive-500 font-medium mb-1.5">
                  Tipo de Propiedad
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                >
                  <option value="">Todas las tipologías</option>
                  <option value="CASA">Casas & Residencias</option>
                  <option value="PENTHOUSE">Penthouses</option>
                  <option value="DEPARTAMENTO">Departamentos Luxury</option>
                  <option value="TERRENO">Terrenos Exclusivos</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-executive-500 font-medium mb-1.5">
                  Comuna / Sector
                </label>
                <select
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                >
                  <option value="">Todo el Sector Oriente</option>
                  <option value="Vitacura">Vitacura</option>
                  <option value="Las Condes">Las Condes</option>
                  <option value="Lo Barnechea">Lo Barnechea / La Dehesa</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-executive-500 font-medium mb-1.5">
                  Rango de Precio
                </label>
                <select className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors">
                  <option value="">Cualquier valor</option>
                  <option value="15000">15.000 - 25.000 UF</option>
                  <option value="25000">25.000 - 40.000 UF</option>
                  <option value="40000">Más de 40.000 UF</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-executive-900 hover:bg-amaru-600 text-white text-xs uppercase tracking-[0.14em] font-medium py-3 px-6 rounded transition-colors duration-200"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Filtrar Portafolio</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
