"use client";

import React, { useState } from "react";
import { MapPin, Home, Banknote, UserCheck } from "lucide-react";

const CRITERIA = [
  {
    id: "ubicacion",
    icon: MapPin,
    title: "Ubicación estratégica",
    summary:
      "Propiedades en sectores consolidados de Vitacura, El Golf, Santa María de Manquehue y La Dehesa.",
    actionLabel: "Ver sectores disponibles",
    href: "#propiedades",
  },
  {
    id: "tipo",
    icon: Home,
    title: "Tipo de inmueble",
    summary:
      "Casas arquitectónicas, departamentos con jardín privado, penthouses dúplex y oficinas ejecutivas.",
    actionLabel: "Explorar categorías",
    href: "#propiedades",
  },
  {
    id: "presupuesto",
    icon: Banknote,
    title: "Inversión y tasación",
    summary:
      "Oportunidades desde 25.000 UF y valorizaciones respaldadas por transacciones notariales recientes.",
    actionLabel: "Solicitar valorización",
    href: "#contacto",
  },
  {
    id: "asesor",
    icon: UserCheck,
    title: "Asesor dedicado",
    summary:
      "Un corredor senior acompaña el proceso de principio a fin, desde la búsqueda privada hasta la escritura.",
    actionLabel: "Conocer al equipo",
    href: "#nosotros",
  },
];

export function FeatureCardsSection() {
  const [selectedId, setSelectedId] = useState<string>("ubicacion");

  return (
    <section className="bg-ink-50 py-20 lg:py-24 border-b border-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título centrado limpio fiel a la referencia */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
            Criterios claros para encontrar su próxima propiedad
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            Cuatro pilares con los que filtramos y evaluamos cada activo inmobiliario
            antes de presentárselo.
          </p>
        </div>

        {/* 4 tarjetas interactivas en cuadrícula uniforme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CRITERIA.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`text-left rounded-2xl p-6 flex flex-col items-center text-center transition-[border-color,box-shadow,background-color] duration-200 ease-architecture ${
                  isSelected
                    ? "bg-white border-2 border-dark-900 shadow-card-hover"
                    : "bg-white/80 border border-ink-200 hover:bg-white hover:border-ink-300 shadow-card"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-150 ${
                    isSelected
                      ? "bg-dark-900 text-gold-400"
                      : "bg-ink-100 text-ink-700"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-semibold text-ink-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-600 leading-relaxed flex-1">
                  {item.summary}
                </p>

                <span
                  className={`mt-4 text-xs font-medium ${
                    isSelected ? "text-gold-700" : "text-ink-500"
                  }`}
                >
                  {isSelected ? "Criterio activo" : "Seleccionar criterio"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
