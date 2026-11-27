import React from "react";
import { Check, ChevronRight } from "lucide-react";

const EXCLUSIVE_HIGHLIGHTS = [
  "Acceso reservado a propiedades fuera de portales públicos",
  "Estudio previo de títulos y tasación comercial comparativa",
  "Coordinación privada de visitas con compradores calificados",
];

export function CtaBannerSection() {
  return (
    <section className="bg-ink-50 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-dark-950 shadow-card-lg border border-dark-700">
          {/* Fotografía arquitectónica nocturna de terraza */}
          <div className="absolute inset-0 bg-dark-900">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=85&w=1800&auto=format&fit=crop"
              alt="Terraza iluminada de residencia de lujo al anochecer"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradiente horizontal fuerte para garantizar lectura perfecta a la izquierda */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(95deg, rgba(8,11,18,0.96) 0%, rgba(13,18,29,0.90) 48%, rgba(13,18,29,0.42) 82%, rgba(13,18,29,0.20) 100%)",
              }}
            />
          </div>

          {/* Contenido editorial */}
          <div className="relative z-10 px-8 py-14 sm:px-12 lg:px-16 lg:py-20 max-w-2xl space-y-6">
            <p className="text-sm font-medium text-gold-300">
              Cartera reservada
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.15]">
              Propiedades seleccionadas que no se publican en el mercado abierto
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Evaluamos arquitectura, orientación, entorno normativo y proyección de
              plusvalía para resguardar tanto la privacidad del propietario como la
              certeza de compra.
            </p>

            <ul className="space-y-2.5 pt-1">
              {EXCLUSIVE_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-100">
                  <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#contacto" className="btn-gold">
                Contactar un asesor
                <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a
                href="#propiedades"
                className="text-sm font-medium text-slate-200 hover:text-gold-300 transition-colors"
              >
                Revisar catálogo disponible
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
