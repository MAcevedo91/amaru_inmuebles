"use client";

import React, { useState, useTransition } from "react";
import { submitContactLead } from "@/app/actions/contact";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { PropertyItem } from "@/types";

interface ContactSectionProps {
  selectedProperty?: PropertyItem | null;
}

export function ContactSection({ selectedProperty }: ContactSectionProps) {
  const [isPending, startTransition] = useTransition();
  const [interestType, setInterestType] = useState("VENDER");
  const [propertyType, setPropertyType] = useState<string>(selectedProperty?.propertyType ?? "CASA");
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    commune: selectedProperty?.commune ?? "",
    budgetRange: selectedProperty ? `${selectedProperty.price} ${selectedProperty.currency}` : "",
    message: selectedProperty ? `Consulta por: "${selectedProperty.title}"` : "",
  });
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.fullName.trim() || fields.fullName.trim().length < 3) e.fullName = "Ingrese su nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Correo electrónico inválido.";
    if (fields.phone.trim().length < 8) e.phone = "Ingrese un teléfono válido.";
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
        setFields({ fullName: "", email: "", phone: "", commune: "", budgetRange: "", message: "" });
        setClientErrors({});
      } else if (res.errors) {
        const flat: Record<string, string> = {};
        Object.entries(res.errors).forEach(([k, v]) => { flat[k] = v[0]; });
        setClientErrors(flat);
      }
    });
  };

  const inputCls = (key: string) =>
    `w-full text-sm py-2.5 px-3.5 bg-white border rounded focus:outline-none focus:ring-1 transition-colors ${
      clientErrors[key]
        ? "border-red-300 focus:ring-red-300"
        : "border-ink-200 focus:border-gold-500 focus:ring-gold-500/30"
    }`;

  const INTEREST_TABS = [
    { key: "VENDER",   label: "Vender" },
    { key: "TASACION", label: "Tasar" },
    { key: "COMPRAR",  label: "Comprar" },
    { key: "ARRENDAR", label: "Arrendar" },
  ];

  return (
    <section id="contacto" className="bg-white py-20 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-ink-900 tracking-tight">Hable con un asesor</h2>
          <p className="text-sm text-ink-500 leading-relaxed">
            Respuesta garantizada en menos de 2 horas hábiles. Toda la información
            se maneja con estricta confidencialidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Formulario ── */}
          <div className="lg:col-span-7 bg-ink-50 border border-ink-100 rounded-lg p-7 space-y-6">

            {/* Tabs de interés */}
            <div>
              <p className="text-xs font-semibold text-ink-700 mb-2">¿En qué podemos ayudarle?</p>
              <div className="inline-flex bg-ink-100 p-1 rounded gap-1 flex-wrap">
                {INTEREST_TABS.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setInterestType(t.key)}
                    className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                      interestType === t.key
                        ? "bg-ink-900 text-white shadow-sm"
                        : "text-ink-600 hover:text-ink-900"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Propiedad seleccionada */}
            {selectedProperty && (
              <div className="bg-gold-50 border border-gold-200 rounded p-3 text-xs text-ink-900">
                Consulta sobre: <strong>{selectedProperty.title}</strong>
                {" — "}<span className="text-gold-700 font-semibold">{selectedProperty.price} {selectedProperty.currency}</span>
              </div>
            )}

            {/* Feedback */}
            {result && (
              <div className={`flex items-start gap-3 p-4 rounded text-sm ${
                result.success ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                               : "bg-red-50 text-red-900 border border-red-200"
              }`}>
                {result.success
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  : <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />}
                <p className="text-xs leading-relaxed">{result.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">Nombre completo <span className="text-gold-600">*</span></label>
                  <input type="text" name="fullName" value={fields.fullName} onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
                    placeholder="Francisca Valdés" className={inputCls("fullName")} required />
                  {clientErrors.fullName && <p className="text-[11px] text-red-500 mt-1">{clientErrors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">Correo electrónico <span className="text-gold-600">*</span></label>
                  <input type="email" name="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    placeholder="fvaldes@empresa.cl" className={inputCls("email")} required />
                  {clientErrors.email && <p className="text-[11px] text-red-500 mt-1">{clientErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">Teléfono <span className="text-gold-600">*</span></label>
                  <input type="tel" name="phone" value={fields.phone} onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                    placeholder="+56 9 9123 4567" className={inputCls("phone")} required />
                  {clientErrors.phone && <p className="text-[11px] text-red-500 mt-1">{clientErrors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">Tipo de inmueble</label>
                  <select name="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value as any)}
                    className={inputCls("propertyType")}>
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
                  <label className="block text-xs font-medium text-ink-700 mb-1">Comuna o sector</label>
                  <input type="text" name="commune" value={fields.commune} onChange={(e) => setFields({ ...fields, commune: e.target.value })}
                    placeholder="Vitacura, Las Condes…" className={inputCls("commune")} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-700 mb-1">Presupuesto estimado</label>
                  <input type="text" name="budgetRange" value={fields.budgetRange} onChange={(e) => setFields({ ...fields, budgetRange: e.target.value })}
                    placeholder="25.000 – 40.000 UF" className={inputCls("budgetRange")} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink-700 mb-1">Mensaje o requerimientos</label>
                <textarea name="message" rows={4} value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  placeholder="Describa brevemente lo que necesita…"
                  className={`${inputCls("message")} resize-none`} />
              </div>

              <div className="flex items-start gap-2 text-[11px] text-ink-400">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                Sus datos son tratados con estricta confidencialidad y nunca compartidos con terceros.
              </div>

              <button type="submit" disabled={isPending}
                className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-dark-900 text-sm font-semibold py-3 rounded transition-colors">
                {isPending ? "Enviando…" : <><span>Enviar solicitud</span><Send className="w-4 h-4" /></>}
              </button>
            </form>
          </div>

          {/* ── Info de oficina ── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-dark-900 text-white p-7 rounded-lg space-y-6">
              <div>
                <p className="text-xs font-semibold text-gold-500 mb-1">Oficina central</p>
                <h3 className="text-lg font-semibold">Alonso de Córdova, Vitacura</h3>
              </div>
              <div className="space-y-3 text-sm text-white/70 border-y border-white/10 py-5">
                <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" /><span>Av. Alonso de Córdova 3788, Of. 702<br/>Vitacura, Santiago</span></div>
                <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold-500 shrink-0" /><a href="tel:+56987654321" className="hover:text-white transition-colors">+56 9 8765 4321</a></div>
                <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold-500 shrink-0" /><a href="mailto:contacto@amaruinmuebles.cl" className="hover:text-white transition-colors">contacto@amaruinmuebles.cl</a></div>
                <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold-500 shrink-0" /><span>Lun – Vie: 09:00 – 19:00</span></div>
              </div>
              <a href="https://wa.me/56987654321" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium py-3 rounded transition-colors">
                Contactar por WhatsApp
              </a>
            </div>

            <div className="bg-ink-50 border border-ink-100 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span className="text-xs font-semibold text-ink-900">Respuesta en 2 horas hábiles</span>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed">
                Cada solicitud es asignada a un director de área que lo contactará
                para coordinar una reunión presencial o videoconferencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
