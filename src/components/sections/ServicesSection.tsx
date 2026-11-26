"use client";

import React from "react";
import { SERVICES } from "@/lib/mock-data";
import {
  KeyRound,
  TrendingUp,
  Scale,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="w-6 h-6 text-amaru-600" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amaru-600" />,
  Scale: <Scale className="w-6 h-6 text-amaru-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amaru-600" />,
};

export function ServicesSection() {
  const scrollToContact = (serviceTitle: string) => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amaru-100 border border-amaru-300 text-amaru-800 text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amaru-600" />
            <span>Servicios de Gestión Patrimonial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-executive-900 tracking-tight">
            Soluciones inmobiliarias con estándar{" "}
            <span className="font-normal text-amaru-700">corporativo y boutique</span>
          </h2>
          <p className="text-sm sm:text-base text-executive-600 font-light leading-relaxed">
            Un equipo multidisciplinario de corredores senior, tasadores acreditados y
            abogados inmobiliarios dedicados a resguardar y maximizar el valor de sus activos.
          </p>
        </div>

        {/* Grilla de 4 servicios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-8 sm:p-10 rounded-sm border border-black/5 hover:border-amaru-300 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Ícono y número */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amaru-50 border border-amaru-200/60 rounded-sm group-hover:bg-amaru-600 group-hover:text-white transition-colors">
                    {iconMap[service.iconName] || (
                      <KeyRound className="w-6 h-6 text-amaru-600" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium text-amaru-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Títulos y descripción */}
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-executive-900 group-hover:text-amaru-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-amaru-600 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-executive-600 font-light leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>

                {/* Lista de beneficios técnicos */}
                <div className="pt-4 border-t border-black/5 space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-executive-800 block">
                    Alcance del servicio:
                  </span>
                  {service.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-executive-600 font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amaru-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de solicitud */}
              <div className="pt-8 mt-6 border-t border-black/5">
                <button
                  type="button"
                  onClick={() => scrollToContact(service.title)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-amaru-700 hover:text-amaru-800 group-hover:translate-x-1 transition-all"
                >
                  <span>Solicitar asesoría en {service.title.split("&")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de llamada a tasación profesional */}
        <div className="mt-14 p-8 sm:p-10 bg-executive-900 text-white rounded-sm border border-amaru-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-amaru-400 font-semibold">
              ¿Desea conocer el valor comercial real de su propiedad?
            </span>
            <h3 className="text-2xl font-light">
              Solicite un informe de valorización comercial confidencial
            </h3>
            <p className="text-xs sm:text-sm text-executive-400 font-light">
              Analizamos transacciones notariales recientes, demanda activa y
              condiciones urbanísticas para entregarle una estimación precisa sin compromiso.
            </p>
          </div>

          <a
            href="#contacto"
            className="shrink-0 bg-amaru-600 hover:bg-amaru-700 text-white text-xs uppercase tracking-[0.16em] font-medium px-8 py-4 rounded transition-all shadow hover:shadow-md"
          >
            Agendar Tasación Comercial
          </a>
        </div>
      </div>
    </section>
  );
}
