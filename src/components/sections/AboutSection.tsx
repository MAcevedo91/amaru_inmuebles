import React from "react";
import { METRICS, TESTIMONIALS } from "@/lib/mock-data";
import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-ink-50 py-20 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

        {/* Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-200 rounded-lg overflow-hidden">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-white px-8 py-10 text-center space-y-1">
              <div className="text-3xl font-bold text-ink-900">{m.value}</div>
              <div className="text-xs font-semibold text-ink-700">{m.label}</div>
              <p className="text-[11px] text-ink-400 leading-relaxed hidden sm:block">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-ink-900 text-center tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="bg-white p-6 rounded-lg border border-ink-100 hover:shadow-card-hover transition-shadow space-y-4 flex flex-col">
                <Quote className="w-5 h-5 text-gold-400" />
                <p className="text-sm text-ink-600 leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="pt-2 border-t border-ink-100">
                  <p className="text-sm font-semibold text-ink-900">{t.author}</p>
                  <p className="text-xs text-gold-600">{t.role}</p>
                  <p className="text-xs text-ink-400">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
