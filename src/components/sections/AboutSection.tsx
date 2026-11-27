import React from "react";
import { METRICS, TESTIMONIALS } from "@/lib/mock-data";

export function AboutSection() {
  return (
    <section id="trayectoria" className="bg-white py-20 lg:py-24 border-b border-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="text-sm font-medium text-gold-700">Respaldo comprobable</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
            Resultados y confianza en el sector oriente
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            Más de una década asesorando a familias, ejecutivos e inversionistas en la
            compra y venta de residencias de alto valor.
          </p>
        </div>

        {/* Franja de métricas oscura con alto contraste */}
        <div className="bg-dark-900 rounded-2xl overflow-hidden shadow-card-lg border border-dark-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {METRICS.map((m, idx) => (
              <div key={m.label} className="p-8 space-y-2">
                <p
                  className={`text-3xl sm:text-4xl font-semibold tabular-nums ${
                    idx === 0 ? "text-gold-400" : "text-white"
                  }`}
                >
                  {m.value}
                </p>
                <p className="text-sm font-semibold text-white">{m.label}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios sobrios con alto contraste */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-ink-900">
              Experiencias de nuestros clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="bg-ink-50 border border-ink-200 rounded-2xl p-7 flex flex-col justify-between gap-6"
              >
                <p className="text-sm sm:text-base text-ink-800 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="pt-4 border-t border-ink-200 space-y-0.5">
                  <p className="text-sm font-semibold text-ink-900">{t.author}</p>
                  <p className="text-xs font-medium text-gold-700">{t.role}</p>
                  <p className="text-xs text-ink-600">{t.city}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
