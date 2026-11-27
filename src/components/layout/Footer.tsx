import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white border-t border-white/5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Marca */}
          <div className="space-y-4 lg:col-span-2">
            <img src="/logo.png" alt="Amaru Inmuebles" className="h-10 w-auto brightness-0 invert opacity-90" />
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Firma boutique de corretaje y gestión patrimonial inmobiliaria en el
              sector oriente de Santiago. Discreción, rigor técnico y resultados probados.
            </p>
          </div>

          {/* Sectores */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Sectores</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["Vitacura", "Las Condes", "Lo Barnechea / La Dehesa", "San Carlos de Apoquindo", "El Golf"].map((s) => (
                <li key={s} className="hover:text-gold-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-2.5 text-sm text-white/50">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /><span>Alonso de Córdova 3788, Of. 702, Vitacura</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-500 shrink-0" /><a href="tel:+56987654321" className="hover:text-white transition-colors">+56 9 8765 4321</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold-500 shrink-0" /><a href="mailto:contacto@amaruinmuebles.cl" className="hover:text-white transition-colors text-xs">contacto@amaruinmuebles.cl</a></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold-500 shrink-0" /><span>Lun – Vie: 09:00 – 19:00</span></div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 Amaru Inmuebles. Todos los derechos reservados.</p>
          <a href="#inicio" className="text-white/40 hover:text-gold-400 transition-colors">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
