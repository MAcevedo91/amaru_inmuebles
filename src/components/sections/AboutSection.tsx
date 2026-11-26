import React from "react";
import { METRICS, TESTIMONIALS } from "@/lib/mock-data";
import { ArchitecturalEmblem } from "@/components/ui/BrandLogo";
import {
  ShieldCheck,
  Award,
  Users2,
  CheckCircle2,
  Quote,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Bloque Superior: Identidad & Filosofía */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amaru-100/80 border border-amaru-300 text-amaru-800 text-xs font-medium tracking-widest uppercase">
              <ArchitecturalEmblem className="text-amaru-600" size={16} />
              <span>Nuestra Trayectoria</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light text-executive-900 tracking-tight leading-tight">
              Una firma inmobiliaria concebida para{" "}
              <span className="font-normal text-amaru-700">clientes exigentes</span>
            </h2>

            <p className="text-sm sm:text-base text-executive-600 font-light leading-relaxed">
              En <strong className="font-medium text-executive-900">Amaru Inmuebles</strong>{" "}
              entendemos que las transacciones inmobiliarias de alto valor no son
              meramente comerciales: representan decisiones patrimoniales que
              involucran legado familiar, inversiones estratégicas y un profundo deseo de
              bienestar.
            </p>

            <p className="text-sm text-executive-600 font-light leading-relaxed">
              Nuestro modelo opera como una banca privada de propiedades: no
              masificamos inventario. Seleccionamos un número acotado de residencias para
              dedicar toda nuestra red de contactos, rigurosidad jurídica y
              posicionamiento editorial a cada una de ellas.
            </p>

            {/* Pilares estratégicos */}
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amaru-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-executive-900">
                    Confidencialidad Absoluta
                  </h4>
                  <p className="text-xs text-executive-500 font-light">
                    Manejo estricto de identidad, visitas filtradas y opción de venta off-market.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amaru-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-executive-900">
                    Rigor Técnico & Legal
                  </h4>
                  <p className="text-xs text-executive-500 font-light">
                    Estudios de títulos exhaustivos y tasaciones sustentadas en datos de mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users2 className="w-5 h-5 text-amaru-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-executive-900">
                    Red Privada de Inversionistas
                  </h4>
                  <p className="text-xs text-executive-500 font-light">
                    Acceso directo a family offices, ejecutivos multinacionales y compradores activos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grilla visual con fotos arquitectónicas */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
                  alt="Arquitectura moderna y espacios interiores de lujo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[#FCFAF7] border border-amaru-200/50 rounded-sm">
                <p className="text-xs font-serif italic text-amaru-800">
                  "El valor de una propiedad no radica solo en sus metros cuadrados, sino
                  en la armonía de su arquitectura y la tranquilidad de su entorno."
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 bg-executive-900 text-white rounded-sm">
                <span className="text-[10px] uppercase tracking-widest text-amaru-400 font-semibold block mb-1">
                  SECTOR ORIENTE
                </span>
                <h4 className="text-base font-light mb-2">Presencia Consolidada</h4>
                <p className="text-xs text-executive-300 font-light leading-relaxed">
                  Vitacura • Las Condes • Lo Barnechea • Santa María de Manquehue • San Damián • La Dehesa.
                </p>
              </div>

              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                  alt="Residencia exclusiva Amaru Inmuebles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Métricas e Indicadores de Rendimiento */}
        <div className="p-8 sm:p-12 bg-[#FAF7F2] rounded-sm border border-amaru-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-black/5">
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`text-center space-y-2 ${idx > 0 ? "pt-6 md:pt-0 md:px-6" : ""}`}
              >
                <div className="text-3xl sm:text-4xl font-light text-amaru-700 font-serif">
                  {metric.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-medium text-executive-900">
                  {metric.label}
                </div>
                <p className="text-[11px] text-executive-500 font-light leading-normal">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios de Clientes Exclusivos */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amaru-700 block">
              EXPERIENCIAS
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-executive-900">
              La confianza de nuestros clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-black/5 shadow-sm hover:border-amaru-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-6 h-6 text-amaru-400 opacity-60" />
                  <p className="text-xs sm:text-sm text-executive-600 font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <p className="text-xs font-semibold text-executive-900">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-amaru-700 font-medium">{t.role}</p>
                  <p className="text-[10px] text-executive-400">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
