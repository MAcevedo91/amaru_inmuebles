"use client";

import React, { useState } from "react";
import { Check, KeyRound, TrendingUp, Scale, ShieldCheck, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: KeyRound,
    title: "Corretaje exclusivo y venta",
    shortDesc: "Comercialización discreta con compradores previamente calificados.",
    desc: "Comercializamos su propiedad mediante una red privada de compradores e inversionistas previamente calificados, cuidando su privacidad y valor.",
    items: [
      "Calificación financiera previa de cada interesado",
      "Producción fotográfica y dossier arquitectónico editorial",
      "Difusión controlada hacia family offices y compradores directos",
      "Acuerdos de confidencialidad cuando el caso lo requiere",
    ],
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Valorización comercial y tasación",
    shortDesc: "Rango de precio basado en transacciones notariales reales del sector.",
    desc: "Determinamos el rango óptimo de salida al mercado usando transacciones efectivas inscritas en el Conservador de Bienes Raíces.",
    items: [
      "Comparativa de cierres reales recientes del sector",
      "Evaluación constructiva, de orientación y potencial normativo",
      "Informe técnico ejecutivo para decisiones patrimoniales",
      "Respaldo en particiones, herencias y reestructuraciones",
    ],
  },
  {
    num: "03",
    icon: Scale,
    title: "Asesoría legal y cierre seguro",
    shortDesc: "Estudio de títulos y redacción contractual hasta la inscripción final.",
    desc: "Abogados especialistas en derecho inmobiliario acompañan cada etapa contractual desde la primera oferta hasta la inscripción final.",
    items: [
      "Estudio completo de títulos en 48 a 72 horas hábiles",
      "Redacción de ofertas, promesas e instrucciones notariales",
      "Coordinación directa con bancos, tasadores y notarías",
      "Revisión tributaria y de antecedentes municipales",
    ],
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Gestión patrimonial de arriendos",
    shortDesc: "Arriendo selectivo corporativo y diplomático con administración integral.",
    desc: "Selección rigurosa de arrendatarios corporativos, diplomáticos y ejecutivos, con administración continua y resguardo contractual.",
    items: [
      "Evaluación comercial, patrimonial y de antecedentes",
      "Contratos corporativos adaptados a estándares internacionales",
      "Actas digitales detalladas de entrega y restitución",
      "Seguimiento periódico y mantención preventiva opcional",
    ],
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const CurrentIcon = current.icon;

  return (
    <section id="servicios" className="bg-ink-50 py-20 lg:py-24 border-b border-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera */}
        <div className="max-w-2xl mb-12 space-y-2">
          <p className="text-sm font-medium text-gold-700">Áreas de práctica</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
            Asesoría inmobiliaria integral
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            Corredores senior, tasadores acreditados y abogados especialistas trabajando
            en una sola mesa técnica.
          </p>
        </div>

        {/* Selector interactivo izquierda + panel detallado derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-[background-color,border-color,box-shadow] duration-200 ease-architecture ${
                    isActive
                      ? "bg-dark-900 border-dark-900 shadow-card-lg"
                      : "bg-white border-ink-200 hover:border-ink-300 shadow-card"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tabular-nums pt-2 w-6 shrink-0 ${
                      isActive ? "text-gold-400" : "text-ink-500"
                    }`}
                  >
                    {s.num}
                  </span>

                  <div
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-dark-700 text-gold-400" : "bg-ink-100 text-ink-800"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-base font-semibold leading-snug ${
                        isActive ? "text-white" : "text-ink-900"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 leading-relaxed ${
                        isActive ? "text-slate-200" : "text-ink-600"
                      }`}
                    >
                      {s.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detalle derecho (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-ink-200 rounded-2xl p-8 sm:p-10 shadow-card space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="w-12 h-12 rounded-xl bg-dark-900 text-gold-400 flex items-center justify-center">
                <CurrentIcon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-ink-600 bg-ink-100 px-3 py-1 rounded-full tabular-nums">
                Servicio {current.num} de 04
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-ink-900">{current.title}</h3>
              <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
                {current.desc}
              </p>
            </div>

            <ul className="space-y-3 pt-2 border-t border-ink-200/80">
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-ink-800 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a href="#contacto" className="btn-gold">
                Solicitar este servicio
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
