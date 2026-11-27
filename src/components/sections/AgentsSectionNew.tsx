"use client";

import React, { useState } from "react";
import { Star, ArrowRight, Bed, Bath, Maximize2, MapPin } from "lucide-react";
import { PropertyItem } from "@/types";
import { FEATURED_PROPERTIES } from "@/lib/mock-data";
import { formatPrice, formatArea } from "@/lib/utils";

interface AgentProfile {
  id: string;
  name: string;
  role: string;
  rating: string;
  reviews: number;
  sales: number;
  specialty: string;
  img: string;
  desc: string;
  featuredPropertyIndex: number;
}

const AGENTS: AgentProfile[] = [
  {
    id: "valentina",
    name: "Valentina Echeverría",
    role: "Directora comercial",
    rating: "4.9",
    reviews: 68,
    sales: 42,
    specialty: "Vitacura & Santa María · 25.000 – 55.000 UF",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=240&auto=format&fit=crop&crop=face",
    desc: "Especialista en residencias familiares de alto valor en Vitacura y Las Condes con 11 años de trayectoria.",
    featuredPropertyIndex: 0,
  },
  {
    id: "carlos",
    name: "Carlos Undurraga",
    role: "Socio asesor senior",
    rating: "4.8",
    reviews: 52,
    sales: 31,
    specialty: "Lo Barnechea & El Golf · 30.000 – 70.000 UF",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=240&auto=format&fit=crop&crop=face",
    desc: "Asesor patrimonial experto en casas en La Dehesa, penthouses y adquisiciones fuera de mercado.",
    featuredPropertyIndex: 1,
  },
  {
    id: "sofia",
    name: "Sofía Ibáñez",
    role: "Asesora de portafolio y arriendos",
    rating: "4.9",
    reviews: 39,
    sales: 24,
    specialty: "Parque Bicentenario & El Golf · Arriendos corporativos",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop&crop=face",
    desc: "Gestión selectiva de arriendos diplomáticos y ejecutivos, con evaluación financiera integral.",
    featuredPropertyIndex: 5,
  },
];

function StarRating({ rating }: { rating: string }) {
  const r = parseFloat(rating);
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.round(r)
              ? "fill-gold-500 text-gold-500"
              : "fill-ink-200 text-ink-300"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

interface AgentsSectionNewProps {
  properties?: PropertyItem[];
  onSelectProperty?: (p: PropertyItem) => void;
  onSelectAgent?: (agentName: string) => void;
}

export function AgentsSectionNew({
  properties,
  onSelectProperty,
  onSelectAgent,
}: AgentsSectionNewProps) {
  const pool = properties && properties.length > 0 ? properties : FEATURED_PROPERTIES;
  const [activeAgentIdx, setActiveAgentIdx] = useState(0);

  const activeAgent = AGENTS[activeAgentIdx];
  const recommendedProperty =
    pool[activeAgent.featuredPropertyIndex % pool.length] ?? pool[0];

  const handleConsultFeatured = () => {
    if (onSelectAgent) onSelectAgent(activeAgent.name);
    if (onSelectProperty) onSelectProperty(recommendedProperty);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nosotros" className="bg-ink-50 py-20 lg:py-24 border-b border-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera centrada fiel a la referencia */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
            Asesores especializados y propiedades recomendadas
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            Seleccione un corredor de nuestro equipo para conocer su especialidad y la
            propiedad que recomienda actualmente.
          </p>
        </div>

        {/* Grid asimétrico: Asesores a la izquierda / Propiedad arquitectónica a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Columna izquierda: tarjetas de asesores (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {AGENTS.map((agent, idx) => {
                const isSelected = idx === activeAgentIdx;
                return (
                  <button
                    key={agent.id}
                    type="button"
                    onClick={() => setActiveAgentIdx(idx)}
                    className={`w-full text-left flex gap-4 p-5 rounded-2xl transition-[border-color,box-shadow,background-color] duration-200 ease-architecture ${
                      isSelected
                        ? "bg-white border-2 border-dark-900 shadow-card-hover"
                        : "bg-white/85 border border-ink-200 hover:bg-white hover:border-ink-300 shadow-card"
                    }`}
                  >
                    <div className="shrink-0">
                      <img
                        src={agent.img}
                        alt={agent.name}
                        className="w-16 h-16 rounded-full object-cover object-top border border-ink-200 bg-ink-100"
                      />
                    </div>

                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <h3 className="text-base font-semibold text-ink-900 leading-snug">
                            {agent.name}
                          </h3>
                          <p className="text-xs font-medium text-gold-700 mt-0.5">
                            {agent.role}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-medium bg-ink-100 text-ink-800 px-2.5 py-1 rounded-md tabular-nums">
                          {agent.sales} cierres
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-ink-600 tabular-nums">
                        <StarRating rating={agent.rating} />
                        <span className="font-medium text-ink-800">{agent.rating}</span>
                        <span>({agent.reviews} reseñas)</span>
                      </div>

                      <p className="text-xs font-medium text-ink-700">{agent.specialty}</p>
                      <p className="text-sm text-ink-600 leading-relaxed">{agent.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleConsultFeatured}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-gold-700 transition-colors"
              >
                Solicitar reunión con {activeAgent.name}
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Columna derecha: tarjeta fotográfica destacada (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[440px] rounded-2xl overflow-hidden bg-dark-900 shadow-card-lg border border-ink-200">
              <img
                src={recommendedProperty.imageUrl}
                alt={recommendedProperty.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Scrim oscuro sólido inferior para legibilidad perfecta */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,11,18,0.12) 0%, rgba(8,11,18,0.35) 45%, rgba(8,11,18,0.95) 84%, rgba(8,11,18,0.98) 100%)",
                }}
              />

              {/* Tag superior derecho con el asesor activo */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 flex-wrap">
                <span className="bg-dark-900/90 text-white border border-white/20 text-xs font-medium px-3 py-1.5 rounded-full">
                  Recomendación de {activeAgent.name}
                </span>
                <span className="bg-gold-500 text-dark-950 text-xs font-semibold px-3 py-1 rounded-full">
                  {recommendedProperty.operation === "VENTA" ? "En venta" : "En arriendo"}
                </span>
              </div>

              {/* Contenido inferior legible sobre scrim oscuro */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" strokeWidth={1.5} />
                    <span>{recommendedProperty.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {recommendedProperty.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-100 tabular-nums">
                  <span className="inline-flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
                    {recommendedProperty.bedrooms} dorms
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
                    {recommendedProperty.bathrooms} baños
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
                    {formatArea(recommendedProperty.builtArea)} útiles
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/20">
                  <div>
                    <p className="text-xs text-slate-300">Valor comercial</p>
                    <p className="text-xl sm:text-2xl font-semibold text-gold-300 tabular-nums whitespace-nowrap">
                      {formatPrice(recommendedProperty.price, recommendedProperty.currency)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleConsultFeatured}
                    className="btn-gold py-2.5 px-5"
                  >
                    Consultar propiedad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
