import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

const SECTORS = [
  "Vitacura",
  "Las Condes",
  "Lo Barnechea / La Dehesa",
  "San Carlos de Apoquindo",
  "El Golf",
];

const SERVICES_LINKS = [
  "Corretaje exclusivo y venta",
  "Valorización comercial y tasación",
  "Asesoría legal y cierre seguro",
  "Gestión patrimonial de arriendos",
];

export function Footer() {
  return (
    <footer className="bg-dark-950 text-slate-200 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Marca nítida */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <BrandLogo variant="light" showTagline={true} />
            <p className="text-sm text-slate-300 leading-relaxed">
              Firma boutique de corretaje y gestión patrimonial inmobiliaria en el
              sector oriente de Santiago. Discreción, rigor técnico y resultados
              comprobables.
            </p>
          </div>

          {/* Sectores */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Sectores clave</h4>
            <ul className="space-y-2.5">
              {SECTORS.map((s) => (
                <li key={s}>
                  <a
                    href="#propiedades"
                    className="text-sm text-slate-300 hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{s}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Servicios</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm text-slate-300 hover:text-gold-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{s}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Contacto directo</h4>
            <div className="space-y-3 text-sm text-slate-200 tabular-nums">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  Alonso de Córdova 3788, Of. 702
                  <br />
                  Vitacura, Santiago
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+56987654321"
                  className="text-white hover:text-gold-300 transition-colors"
                >
                  +56 9 8765 4321
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:contacto@amaruinmuebles.cl"
                  className="text-white hover:text-gold-300 transition-colors break-all"
                >
                  contacto@amaruinmuebles.cl
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                <span>Lun – Vie: 09:00 – 19:00 hrs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <p>© 2026 Amaru Inmuebles SpA. Todos los derechos reservados.</p>
          <a href="#inicio" className="text-slate-200 hover:text-gold-300 transition-colors">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
