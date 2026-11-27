import React from "react";

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex items-center">
      {/* Fotografía arquitectónica nocturna — el momento rico de esta sección */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=85&w=1800&auto=format&fit=crop"
          alt="Penthouse de lujo al atardecer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark-900/75" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-lg space-y-5">
          <p className="text-xs font-semibold text-gold-500 uppercase tracking-widest">
            Portafolio exclusivo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Propiedades premium seleccionadas para usted
          </h2>
          <p className="text-sm text-white/65 leading-relaxed">
            Nuestro equipo selecciona cada propiedad con criterios estrictos de
            arquitectura, plusvalía y ubicación. Acceda a un portafolio que no se
            publica en el mercado abierto.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-dark-900 font-semibold text-sm px-6 py-3 rounded transition-colors"
          >
            Contactar ›
          </a>
        </div>
      </div>
    </section>
  );
}
