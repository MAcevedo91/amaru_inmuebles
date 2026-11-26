import React from "react";
import { BrandLogo, ArchitecturalEmblem } from "@/components/ui/BrandLogo";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#121316] text-executive-300 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera superior del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          {/* Columna Marca & Identidad */}
          <div className="lg:col-span-2 space-y-5">
            <BrandLogo variant="light" size="lg" />
            <p className="text-sm text-executive-400 font-light leading-relaxed max-w-sm">
              Firma boutique especializada en la gestión, valorización y corretaje
              estratégico de residencias de alto valor en el sector oriente de Santiago.
              Discreción, excelencia técnica y resultados probados.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amaru-300">
              <ShieldCheck className="w-4 h-4 text-amaru-400" />
              <span>Garantía de Confidencialidad & Respaldo Jurídico Integral</span>
            </div>
          </div>

          {/* Columna Sectores y Cobertura */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
              Sectores Exclusivos
            </h4>
            <ul className="space-y-2.5 text-xs text-executive-400 font-light">
              <li className="hover:text-amaru-300 transition-colors">
                • Vitacura / Lo Curro
              </li>
              <li className="hover:text-amaru-300 transition-colors">
                • Santa María de Manquehue
              </li>
              <li className="hover:text-amaru-300 transition-colors">
                • Las Condes / San Damián
              </li>
              <li className="hover:text-amaru-300 transition-colors">
                • El Golf / Isidora Goyenechea
              </li>
              <li className="hover:text-amaru-300 transition-colors">
                • Lo Barnechea / La Dehesa
              </li>
              <li className="hover:text-amaru-300 transition-colors">
                • San Carlos de Apoquindo
              </li>
            </ul>
          </div>

          {/* Columna Servicios */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs text-executive-400 font-light">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-amaru-300 transition-colors"
                >
                  Corretaje y Venta Exclusiva
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-amaru-300 transition-colors"
                >
                  Tasación & Estudio de Mercado
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-amaru-300 transition-colors"
                >
                  Gestión Legal & Estudio de Títulos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-amaru-300 transition-colors"
                >
                  Arriendos Corporativos & Diplomáticos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-amaru-300 transition-colors"
                >
                  Consignación de Propiedades
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-white">
              Oficina & Atención
            </h4>
            <div className="space-y-3 text-xs text-executive-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amaru-400 shrink-0 mt-0.5" />
                <span>
                  Av. Alonso de Córdova 3788, Of. 702
                  <br />
                  Vitacura, Santiago, Chile
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amaru-400 shrink-0" />
                <a
                  href="tel:+56987654321"
                  className="hover:text-white transition-colors"
                >
                  +56 9 8765 4321
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amaru-400 shrink-0" />
                <a
                  href="mailto:contacto@amaruinmuebles.cl"
                  className="hover:text-white transition-colors"
                >
                  contacto@amaruinmuebles.cl
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amaru-400 shrink-0" />
                <span>Lun - Vie: 09:00 - 19:00 hrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fila inferior de derechos y enlaces legales */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-executive-500 font-light gap-4">
          <div className="flex items-center gap-3">
            <ArchitecturalEmblem className="text-amaru-500/60" size={26} />
            <p>
              © {currentYear} Amaru Inmuebles. Todos los derechos reservados. Gestión
              Inmobiliaria & Corretaje de Propiedades.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-executive-400">
            <span>Privacidad y Confidencialidad</span>
            <span>•</span>
            <span>Términos del Servicio</span>
            <span>•</span>
            <a
              href="#inicio"
              className="text-amaru-400 hover:text-amaru-300 transition-colors flex items-center gap-1"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
