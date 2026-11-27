"use client";

import React, { useState } from "react";
import { CheckCircle2, KeyRound, TrendingUp, Scale, ShieldCheck, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: KeyRound,
    title: "Corretaje exclusivo",
    desc: "Comercializamos su propiedad con una red privada de compradores calificados, sin exposición masiva.",
    items: ["Compradores filtrados y verificados", "Fotografía arquitectónica profesional", "Red privada de inversores y family offices"],
  },
  {
    icon: TrendingUp,
    title: "Valorización comercial",
    desc: "Estudio técnico basado en transacciones notariales recientes del sector oriente.",
    items: ["Análisis comparativo de mercado", "Informe ejecutivo detallado", "Estimación de plusvalía futura"],
  },
  {
    icon: Scale,
    title: "Asesoría legal",
    desc: "Estudio de títulos y redacción contractual desde la oferta hasta la escritura.",
    items: ["Estudio de títulos en 48-72 horas", "Redacción de promesas y escrituras", "Coordinación con bancos y notarías"],
  },
  {
    icon: ShieldCheck,
    title: "Gestión de arriendos",
    desc: "Arriendo selectivo a ejecutivos, diplomáticos y clientes corporativos de alto perfil.",
    items: ["Verificación comercial y patrimonial", "Contratos corporativos y diplomáticos", "Administración y mantención opcional"],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-20 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-ink-900 tracking-tight">Nuestros servicios</h2>
          <p className="text-sm text-ink-500 leading-relaxed">
            Equipo de corredores senior, tasadores acreditados y abogados especializados
            en propiedades de alto valor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="p-6 bg-ink-50 hover:bg-white border border-ink-100 hover:border-ink-200 hover:shadow-card-hover rounded-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-ink-100 group-hover:bg-ink-900 transition-colors">
                    <Icon className="w-5 h-5 text-ink-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-sm font-semibold text-ink-900">{s.title}</h3>
                    <p className="text-xs text-ink-500 leading-relaxed">{s.desc}</p>
                    <ul className="space-y-1 pt-1">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-ink-500">
                          <CheckCircle2 className="w-3 h-3 text-gold-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
