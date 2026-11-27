"use client";

import React from "react";
import { Star, ArrowRight, Bed, Bath, Maximize2 } from "lucide-react";
import { FEATURED_PROPERTIES } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils";

const AGENTS = [
  {
    name: "Valentina Echeverría",
    role: "Directora comercial",
    rating: "4.9",
    reviews: 68,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&crop=face",
    desc: "Especialista en residencias de alto valor en Vitacura y Las Condes con más de 10 años de trayectoria.",
  },
  {
    name: "Carlos Undurraga",
    role: "Asesor senior",
    rating: "4.8",
    reviews: 52,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&crop=face",
    desc: "Experto en portafolios de inversión inmobiliaria y propiedades en Lo Barnechea y La Dehesa.",
  },
];

export function AgentsSectionNew() {
  const featured = FEATURED_PROPERTIES[0];

  return (
    <section id="nosotros" className="bg-white py-20 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-ink-900 tracking-tight">
            Propiedades premium cerca de usted
          </h2>
          <p className="text-sm text-ink-500 leading-relaxed">
            Nuestros asesores conectan compradores calificados con las mejores
            propiedades antes de que salgan al mercado.
          </p>
        </div>

        {/* Grid: agentes izquierda / propiedad derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Columna izquierda: Agentes ── */}
          <div className="space-y-4">
            {AGENTS.map((agent) => (
              <div
                key={agent.name}
                className="flex gap-4 p-5 bg-ink-50 hover:bg-white border border-ink-100 hover:border-ink-200 hover:shadow-card-hover rounded-lg transition-all"
              >
                {/* Avatar */}
                <div className="shrink-0">
                  <img
                    src={agent.img}
                    alt={agent.name}
                    className="w-14 h-14 rounded-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-ink-900">{agent.name}</span>
                    <span className="flex items-center gap-0.5 text-xs text-ink-500">
                      <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                      {agent.rating} · {agent.reviews} reseñas
                    </span>
                  </div>
                  <p className="text-xs text-gold-600 font-medium">{agent.role}</p>
                  <p className="text-xs text-ink-500 leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-gold-600 transition-colors mt-2"
            >
              Ver todos nuestros asesores
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Columna derecha: Propiedad destacada ── */}
          <div className="relative rounded-lg overflow-hidden shadow-card-hover group">
            <div className="aspect-[4/3] relative">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
            </div>

            {/* Información sobre la imagen */}
            <div className="absolute bottom-0 inset-x-0 p-6 space-y-3">
              <div className="inline-block bg-gold-500 text-dark-900 text-xs font-semibold px-2 py-0.5 rounded">
                En venta
              </div>
              <h3 className="text-base font-semibold text-white leading-snug">
                {featured.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-1">
                  <Bed className="w-3.5 h-3.5" /> {featured.bedrooms} dorms
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-3.5 h-3.5" /> {featured.bathrooms} baños
                </span>
                <span className="flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5" /> {featured.builtArea} m²
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xl font-bold text-white">
                  {formatPrice(featured.price, featured.currency)}
                </span>
                <a
                  href="#contacto"
                  className="text-xs font-semibold bg-gold-500 hover:bg-gold-600 text-dark-900 px-4 py-2 rounded transition-colors"
                >
                  Consultar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
