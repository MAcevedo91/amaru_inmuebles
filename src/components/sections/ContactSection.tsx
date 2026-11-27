"use client";

import React, { useState, useTransition, useEffect } from "react";
import { submitContactLead } from "@/app/actions/contact";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { PropertyItem } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ContactSectionProps {
  selectedProperty?: PropertyItem | null;
  selectedAgent?: string | null;
}

const INTEREST_TABS = [
  { key: "VENDER", label: "Vender" },
  { key: "TASACION", label: "Tasar" },
  { key: "COMPRAR", label: "Comprar" },
  { key: "ARRENDAR", label: "Arrendar" },
];

export function ContactSection({
  selectedProperty,
  selectedAgent,
}: ContactSectionProps) {
  const [isPending, startTransition] = useTransition();
  const [interestType, setInterestType] = useState("VENDER");
  const [propertyType, setPropertyType] = useState<string>(
    selectedProperty?.propertyType ?? "CASA"
  );
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    commune: selectedProperty?.commune ?? "",
    budgetRange: selectedProperty
      ? formatPrice(selectedProperty.price, selectedProperty.currency)
      : "",
    message: selectedProperty
      ? `Consulta por propiedad: ${selectedProperty.title}`
      : "",
  });
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(
    null
  );

  // Sincroniza el formulario cuando el usuario elige una propiedad o un asesor arriba
  useEffect(() => {
    if (!selectedProperty && !selectedAgent) return;

    if (selectedProperty) {
      setInterestType(selectedProperty.operation === "ARRIENDO" ? "ARRENDAR" : "COMPRAR");
      setPropertyType(selectedProperty.propertyType);
    }

    setFields((prev) => ({
      ...prev,
      commune: selectedProperty?.commune || prev.commune,
      budgetRange: selectedProperty
        ? formatPrice(selectedProperty.price, selectedProperty.currency)
        : prev.budgetRange,
      message: selectedProperty
        ? `${
            selectedAgent ? `Atención solicitada con ${selectedAgent}. ` : ""
          }Consulta por: ${selectedProperty.title} (${selectedProperty.location}).`
        : selectedAgent
        ? `Quisiera coordinar una asesoría directa con ${selectedAgent}.`
        : prev.message,
    }));
  }, [selectedProperty, selectedAgent]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.fullName.trim() || fields.fullName.trim().length < 3) {
      e.fullName = "Ingrese su nombre completo (mínimo 3 caracteres).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Ingrese un correo electrónico válido.";
    }
    if (!/^[+0-9\s-]{8,20}$/.test(fields.phone.trim())) {
      e.phone = "Ingrese un teléfono válido (ej. +56 9 9123 4567).";
    }
    setClientErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);
    if (!validate()) return;

    const fd = new FormData(e.currentTarget);
    fd.set("interestType", interestType);
    fd.set("propertyType", propertyType);

    startTransition(async () => {
      const res = await submitContactLead(null, fd);
      setResult({ success: res.success, message: res.message });
      if (res.success) {
        setFields({
          fullName: "",
          email: "",
          phone: "",
          commune: "",
          budgetRange: "",
          message: "",
        });
        setClientErrors({});
      } else if (res.errors) {
        const flat: Record<string, string> = {};
        Object.entries(res.errors).forEach(([k, v]) => {
          flat[k] = v[0];
        });
        setClientErrors(flat);
      }
    });
  };

  const inputCls = (key: string) =>
    `w-full text-sm text-ink-900 placeholder:text-ink-400 py-2.5 px-3.5 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      clientErrors[key]
        ? "border-red-500 focus:ring-red-200"
        : "border-ink-300 focus:border-dark-900 focus:ring-gold-400/50"
    }`;

  return (
    <section id="contacto" className="bg-ink-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-sm font-medium text-gold-700">Atención confidencial</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
            Hable con un asesor inmobiliario
          </h2>
          <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
            Coordinamos visitas privadas y evaluaciones comerciales con respuesta dentro
            de 2 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulario claro sobre tarjeta blanca (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-ink-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
            <div>
              <p className="text-xs font-semibold text-ink-800 mb-2.5">
                ¿En qué podemos ayudarle?
              </p>
              <div className="inline-flex bg-ink-100 p-1 rounded-xl gap-1 flex-wrap border border-ink-200">
                {INTEREST_TABS.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setInterestType(t.key)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                      interestType === t.key
                        ? "bg-dark-900 text-white"
                        : "text-ink-800 hover:bg-white/70"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedProperty && (
              <div className="bg-gold-50 border border-gold-300 rounded-xl p-3.5 text-xs sm:text-sm text-ink-900">
                Propiedad seleccionada: <strong>{selectedProperty.title}</strong>{" "}
                <span className="text-gold-700 font-semibold tabular-nums">
                  ({formatPrice(selectedProperty.price, selectedProperty.currency)})
                </span>
              </div>
            )}

            {result && (
              <div
                className={`flex items-start gap-3 p-4 rounded-xl text-sm border ${
                  result.success
                    ? "bg-emerald-50 text-emerald-950 border-emerald-300"
                    : "bg-red-50 text-red-950 border-red-300"
                }`}
              >
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                )}
                <p className="text-sm leading-relaxed">{result.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-fullName"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Nombre completo <span className="text-gold-700">*</span>
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    name="fullName"
                    value={fields.fullName}
                    onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
                    placeholder="Francisca Valdés"
                    className={inputCls("fullName")}
                    required
                  />
                  {clientErrors.fullName && (
                    <p className="text-xs text-red-700 mt-1">{clientErrors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Correo electrónico <span className="text-gold-700">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    placeholder="fvaldes@empresa.cl"
                    className={inputCls("email")}
                    required
                  />
                  {clientErrors.email && (
                    <p className="text-xs text-red-700 mt-1">{clientErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Teléfono <span className="text-gold-700">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                    placeholder="+56 9 9123 4567"
                    className={inputCls("phone")}
                    required
                  />
                  {clientErrors.phone && (
                    <p className="text-xs text-red-700 mt-1">{clientErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-propertyType"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Tipo de inmueble
                  </label>
                  <select
                    id="contact-propertyType"
                    name="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className={inputCls("propertyType")}
                  >
                    <option value="CASA">Casa / Residencia</option>
                    <option value="PENTHOUSE">Penthouse</option>
                    <option value="DEPARTAMENTO">Departamento</option>
                    <option value="TERRENO">Terreno</option>
                    <option value="OFICINA">Oficina</option>
                    <option value="OTRO">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-commune"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Comuna o sector
                  </label>
                  <input
                    id="contact-commune"
                    type="text"
                    name="commune"
                    value={fields.commune}
                    onChange={(e) => setFields({ ...fields, commune: e.target.value })}
                    placeholder="Vitacura, Las Condes, La Dehesa"
                    className={inputCls("commune")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-semibold text-ink-800 mb-1.5"
                  >
                    Presupuesto o valor estimado
                  </label>
                  <input
                    id="contact-budget"
                    type="text"
                    name="budgetRange"
                    value={fields.budgetRange}
                    onChange={(e) =>
                      setFields({ ...fields, budgetRange: e.target.value })
                    }
                    placeholder="25.000 – 45.000 UF"
                    className={inputCls("budgetRange")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-ink-800 mb-1.5"
                >
                  Mensaje o requerimientos
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  placeholder="Indíquenos el sector, características o disponibilidad de visita"
                  className={`${inputCls("message")} resize-none`}
                />
              </div>

              <div className="flex items-start gap-2.5 text-xs text-ink-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  Sus datos se manejan bajo estricta reserva comercial y nunca se
                  comparten con terceros.
                </span>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="btn-gold w-full rounded-xl py-3.5 disabled:opacity-60"
              >
                {isPending ? (
                  "Enviando solicitud..."
                ) : (
                  <>
                    <span>Enviar solicitud</span>
                    <Send className="w-4 h-4" strokeWidth={1.75} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Tarjeta de oficina oscura legible (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-dark-900 text-white p-7 sm:p-8 rounded-2xl border border-dark-700 shadow-card-lg space-y-6">
              <div>
                <p className="text-sm font-medium text-gold-400">Oficina central</p>
                <h3 className="text-xl font-semibold text-white mt-1">
                  Alonso de Córdova, Vitacura
                </h3>
              </div>

              <div className="space-y-3.5 text-sm text-slate-200 border-y border-white/15 py-5 tabular-nums">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>
                    Av. Alonso de Córdova 3788, Of. 702
                    <br />
                    Vitacura, Santiago de Chile
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                  <a href="tel:+56987654321" className="text-white hover:text-gold-300 transition-colors">
                    +56 9 8765 4321
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                  <a
                    href="mailto:contacto@amaruinmuebles.cl"
                    className="text-white hover:text-gold-300 transition-colors break-all"
                  >
                    contacto@amaruinmuebles.cl
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                  <span>Lunes a viernes: 09:00 – 19:00 hrs</span>
                </div>
              </div>

              <a
                href="https://wa.me/56987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="bg-white border border-ink-200 rounded-2xl p-6 shadow-card space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" strokeWidth={1.75} />
                <span className="text-sm font-semibold text-ink-900">
                  Respuesta en 2 horas hábiles
                </span>
              </div>
              <p className="text-sm text-ink-600 leading-relaxed">
                Cada consulta se asigna directamente a un asesor de la zona solicitada
                para coordinar visita presencial o videollamada privada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
