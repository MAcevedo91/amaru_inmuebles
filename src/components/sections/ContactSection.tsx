"use client";

import React, { useState, useTransition } from "react";
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
  Building,
  Sparkles,
} from "lucide-react";
import { PropertyItem } from "@/types";

interface ContactSectionProps {
  selectedProperty?: PropertyItem | null;
}

export function ContactSection({ selectedProperty }: ContactSectionProps) {
  const [isPending, startTransition] = useTransition();
  const [interestType, setInterestType] = useState<string>(
    selectedProperty ? "CONSULTA_GENERAL" : "VENDER"
  );
  const [propertyType, setPropertyType] = useState<string>(
    selectedProperty ? selectedProperty.propertyType : "CASA"
  );

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    commune: selectedProperty ? selectedProperty.commune : "Vitacura",
    budgetRange: selectedProperty
      ? `${selectedProperty.price} ${selectedProperty.currency}`
      : "20.000 - 35.000 UF",
    message: selectedProperty
      ? `Deseo solicitar información detallada y coordinar una visita para la propiedad: "${selectedProperty.title}".`
      : "",
  });

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // Validación rápida del lado del cliente
  const validateClient = () => {
    const errors: Record<string, string> = {};
    if (!formValues.fullName.trim() || formValues.fullName.trim().length < 3) {
      errors.fullName = "Por favor ingrese su nombre y apellido.";
    }
    if (
      !formValues.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
    ) {
      errors.email = "Ingrese un correo electrónico válido.";
    }
    if (!formValues.phone.trim() || formValues.phone.trim().length < 8) {
      errors.phone = "Ingrese un número telefónico de contacto válido.";
    }
    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validateClient()) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.set("interestType", interestType);
    formData.set("propertyType", propertyType);

    startTransition(async () => {
      const res = await submitContactLead(null, formData);
      if (res.success) {
        setSubmitResult({
          success: true,
          message: res.message,
        });
        // Reset form values on success
        setFormValues({
          fullName: "",
          email: "",
          phone: "",
          commune: "Vitacura",
          budgetRange: "20.000 - 35.000 UF",
          message: "",
        });
        setClientErrors({});
      } else {
        setSubmitResult({
          success: false,
          message:
            res.message ||
            "Ocurrió un error al enviar. Por favor verifique sus datos.",
        });
        if (res.errors) {
          const flatErrors: Record<string, string> = {};
          Object.entries(res.errors).forEach(([key, val]) => {
            flatErrors[key] = val[0];
          });
          setClientErrors(flatErrors);
        }
      }
    });
  };

  return (
    <section id="contacto" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amaru-100 border border-amaru-300 text-amaru-800 text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amaru-600" />
            <span>Atención Privada & Confidencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-executive-900 tracking-tight">
            Inicie una conversación con nuestros{" "}
            <span className="font-normal text-amaru-700">asesores senior</span>
          </h2>
          <p className="text-sm sm:text-base text-executive-600 font-light leading-relaxed">
            Ya sea para tasar su propiedad, consignar una venta exclusiva o buscar su
            próxima residencia, le garantizamos total reserva y acompañamiento de primer nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Formulario Principal (7 columnas) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm shadow-luxury border border-black/5">
            {/* Tabs de Tipo de Interés */}
            <div className="mb-8">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-executive-700 block mb-3">
                ¿En qué podemos colaborar con usted?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setInterestType("VENDER")}
                  className={`py-2.5 px-3 text-xs font-medium rounded transition-all text-center ${
                    interestType === "VENDER"
                      ? "bg-executive-900 text-white shadow-sm"
                      : "bg-executive-50 text-executive-700 hover:bg-amaru-50"
                  }`}
                >
                  Vender mi Propiedad
                </button>
                <button
                  type="button"
                  onClick={() => setInterestType("TASACION")}
                  className={`py-2.5 px-3 text-xs font-medium rounded transition-all text-center ${
                    interestType === "TASACION"
                      ? "bg-executive-900 text-white shadow-sm"
                      : "bg-executive-50 text-executive-700 hover:bg-amaru-50"
                  }`}
                >
                  Tasar / Valorizar
                </button>
                <button
                  type="button"
                  onClick={() => setInterestType("COMPRAR")}
                  className={`py-2.5 px-3 text-xs font-medium rounded transition-all text-center ${
                    interestType === "COMPRAR"
                      ? "bg-executive-900 text-white shadow-sm"
                      : "bg-executive-50 text-executive-700 hover:bg-amaru-50"
                  }`}
                >
                  Comprar / Invertir
                </button>
              </div>
            </div>

            {selectedProperty && (
              <div className="mb-6 p-3 bg-amaru-50 border border-amaru-300 rounded text-xs text-amaru-900 flex items-center justify-between">
                <span>
                  Consultando por: <strong>{selectedProperty.title}</strong>
                </span>
                <span className="font-semibold text-amaru-700">
                  {selectedProperty.price} {selectedProperty.currency}
                </span>
              </div>
            )}

            {/* Mensajes de feedback */}
            {submitResult && (
              <div
                className={`mb-6 p-4 rounded text-xs flex items-start gap-3 ${
                  submitResult.success
                    ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                    : "bg-rose-50 text-rose-900 border border-rose-200"
                }`}
              >
                {submitResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-medium">
                    {submitResult.success ? "Solicitud Enviada" : "Atención"}
                  </p>
                  <p className="font-light">{submitResult.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre y Correo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Nombre Completo <span className="text-amaru-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={(e) =>
                      setFormValues({ ...formValues, fullName: e.target.value })
                    }
                    placeholder="Ej. Francisca Valdés"
                    className={`w-full text-xs py-3 px-3.5 bg-executive-50 border rounded focus:outline-none focus:bg-white transition-colors ${
                      clientErrors.fullName
                        ? "border-rose-400 bg-rose-50/20"
                        : "border-black/10 focus:border-amaru-500"
                    }`}
                    required
                  />
                  {clientErrors.fullName && (
                    <p className="text-[10px] text-rose-600 mt-1">
                      {clientErrors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Correo Electrónico <span className="text-amaru-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    placeholder="fvaldes@empresa.cl"
                    className={`w-full text-xs py-3 px-3.5 bg-executive-50 border rounded focus:outline-none focus:bg-white transition-colors ${
                      clientErrors.email
                        ? "border-rose-400 bg-rose-50/20"
                        : "border-black/10 focus:border-amaru-500"
                    }`}
                    required
                  />
                  {clientErrors.email && (
                    <p className="text-[10px] text-rose-600 mt-1">
                      {clientErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Teléfono y Tipo de Propiedad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Teléfono / WhatsApp <span className="text-amaru-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
                    placeholder="+56 9 9123 4567"
                    className={`w-full text-xs py-3 px-3.5 bg-executive-50 border rounded focus:outline-none focus:bg-white transition-colors ${
                      clientErrors.phone
                        ? "border-rose-400 bg-rose-50/20"
                        : "border-black/10 focus:border-amaru-500"
                    }`}
                    required
                  />
                  {clientErrors.phone && (
                    <p className="text-[10px] text-rose-600 mt-1">
                      {clientErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Tipo de Inmueble
                  </label>
                  <select
                    name="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                  >
                    <option value="CASA">Casa / Residencia</option>
                    <option value="PENTHOUSE">Penthouse Dúplex</option>
                    <option value="DEPARTAMENTO">Departamento</option>
                    <option value="TERRENO">Terreno / Parcela</option>
                    <option value="OFICINA">Oficina Corporativa</option>
                    <option value="OTRO">Otro tipo de activo</option>
                  </select>
                </div>
              </div>

              {/* Comuna y Rango de Valor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Comuna o Sector
                  </label>
                  <input
                    type="text"
                    name="commune"
                    value={formValues.commune}
                    onChange={(e) =>
                      setFormValues({ ...formValues, commune: e.target.value })
                    }
                    placeholder="Ej. Santa María de Manquehue, Vitacura"
                    className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                    Rango Estimado o Presupuesto
                  </label>
                  <input
                    type="text"
                    name="budgetRange"
                    value={formValues.budgetRange}
                    onChange={(e) =>
                      setFormValues({ ...formValues, budgetRange: e.target.value })
                    }
                    placeholder="Ej. 25.000 - 45.000 UF"
                    className="w-full text-xs py-3 px-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Mensaje o Comentarios */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-executive-700 font-medium mb-1">
                  Detalles o Requerimientos Particulares
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                  placeholder="Describa brevemente las características de su propiedad o los requerimientos de la propiedad que busca adquirir..."
                  className="w-full text-xs p-3.5 bg-executive-50 border border-black/10 rounded focus:outline-none focus:border-amaru-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Declaración de Confidencialidad */}
              <div className="flex items-start gap-2.5 pt-2 text-[11px] text-executive-500 font-light">
                <ShieldCheck className="w-4 h-4 text-amaru-600 shrink-0 mt-0.5" />
                <p>
                  Sus datos serán tratados con estricta confidencialidad por el equipo
                  directivo de Amaru Inmuebles, resguardados bajo política de privacidad y
                  nunca compartidos con terceros sin su consentimiento explícito.
                </p>
              </div>

              {/* Botón de Envío */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 bg-amaru-600 hover:bg-amaru-700 disabled:opacity-70 text-white text-xs uppercase tracking-[0.16em] font-medium py-4 px-6 rounded transition-all duration-200 shadow hover:shadow-md"
                >
                  {isPending ? (
                    <span>Registrando solicitud confidencial...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud Confidencial</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Información Ejecutiva de Contacto y Oficina (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta de Oficina Central */}
            <div className="bg-executive-900 text-white p-8 rounded-sm shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-amaru-400 font-semibold block">
                  CASA MATRIZ
                </span>
                <h3 className="text-xl font-light">Oficina Alonso de Córdova</h3>
                <p className="text-xs text-executive-400 font-light">
                  Ubicada en el distrito corporativo y de diseño más exclusivo de Santiago.
                </p>
              </div>

              <div className="space-y-4 text-xs font-light text-executive-300 border-y border-white/10 py-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amaru-400 shrink-0 mt-0.5" />
                  <span>
                    Av. Alonso de Córdova 3788, Oficina 702
                    <br />
                    Vitacura, Santiago, Chile
                    <br />
                    <span className="text-[11px] text-amaru-400">
                      * Estacionamiento privado de clientes disponible
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amaru-400 shrink-0" />
                  <a
                    href="tel:+56987654321"
                    className="hover:text-white transition-colors"
                  >
                    +56 9 8765 4321
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amaru-400 shrink-0" />
                  <a
                    href="mailto:contacto@amaruinmuebles.cl"
                    className="hover:text-white transition-colors"
                  >
                    contacto@amaruinmuebles.cl
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amaru-400 shrink-0" />
                  <span>Lunes a Viernes: 09:00 - 19:00 hrs</span>
                </div>
              </div>

              {/* Botón WhatsApp directo */}
              <div>
                <a
                  href="https://wa.me/56987654321?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20con%20un%20asesor%20senior%20de%20Amaru%20Inmuebles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs uppercase tracking-wider font-medium py-3 px-4 rounded transition-colors"
                >
                  <span>Chat Directo por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Compromiso de Atención */}
            <div className="bg-white p-6 rounded-sm border border-black/5 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-executive-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amaru-600" />
                <span>Compromiso de Respuesta Amaru</span>
              </h4>
              <p className="text-xs text-executive-600 font-light leading-relaxed">
                Todas las solicitudes recibidas son asignadas inmediatamente a un
                director de área. Nos comprometemos a contactarlo en un plazo máximo de
                2 horas hábiles para coordinar una reunión presencial o telemática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
