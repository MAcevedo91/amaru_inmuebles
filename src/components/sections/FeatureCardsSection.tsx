import React from "react";
import { MapPin, Home, Banknote, User } from "lucide-react";

const CARDS = [
  {
    icon: MapPin,
    title: "Ubicación",
    desc: "Vitacura, Las Condes, Lo Barnechea y La Dehesa. El sector oriente con mayor plusvalía.",
    active: true,
  },
  {
    icon: Home,
    title: "Tipo de propiedad",
    desc: "Casas, penthouses, departamentos de lujo y terrenos en sectores exclusivos.",
    active: false,
  },
  {
    icon: Banknote,
    title: "Presupuesto",
    desc: "Propiedades desde 15.000 UF hasta portafolios de más de 50.000 UF.",
    active: false,
  },
  {
    icon: User,
    title: "Asesor dedicado",
    desc: "Un ejecutivo senior asignado a su operación de principio a fin.",
    active: false,
  },
];

export function FeatureCardsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-ink-900 tracking-tight">
            Encuentra tu hogar ideal
          </h2>
          <p className="text-sm text-ink-500 leading-relaxed">
            Combinamos criterios de búsqueda precisos con una cartera de propiedades
            cuidadosamente seleccionadas para usted.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-6 rounded-lg border transition-shadow ${
                  card.active
                    ? "border-ink-900 shadow-card-hover bg-white"
                    : "border-ink-100 shadow-card bg-ink-50 hover:shadow-card-hover hover:bg-white"
                }`}
              >
                <div className="mb-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-ink-100">
                    <Icon className="w-4 h-4 text-ink-700" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-ink-900 mb-1">{card.title}</h3>
                <p className="text-xs text-ink-500 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
