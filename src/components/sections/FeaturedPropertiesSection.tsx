"use client";

import React, { useState } from "react";
import { PropertyItem } from "@/types";
import { formatPrice, formatArea } from "@/lib/utils";
import { Bed, Bath, Maximize2, Car, MapPin, ArrowRight, Check, Eye, SlidersHorizontal } from "lucide-react";

interface FeaturedPropertiesProps {
  properties: PropertyItem[];
  onSelectProperty?: (p: PropertyItem) => void;
}

export function FeaturedPropertiesSection({ properties, onSelectProperty }: FeaturedPropertiesProps) {
  const [filter, setFilter] = useState("TODAS");
  const [modal, setModal] = useState<PropertyItem | null>(null);

  const FILTERS = [
    { key: "TODAS",         label: "Todas" },
    { key: "CASAS",         label: "Casas" },
    { key: "PENTHOUSES",    label: "Penthouses" },
    { key: "DEPARTAMENTOS", label: "Departamentos" },
    { key: "VENTA",         label: "En venta" },
    { key: "ARRIENDO",      label: "En arriendo" },
  ];

  const filtered = properties.filter((p) => {
    if (filter === "TODAS")         return true;
    if (filter === "CASAS")         return p.propertyType === "CASA";
    if (filter === "PENTHOUSES")    return p.propertyType === "PENTHOUSE";
    if (filter === "DEPARTAMENTOS") return p.propertyType === "DEPARTAMENTO";
    if (filter === "VENTA")         return p.operation === "VENTA";
    if (filter === "ARRIENDO")      return p.operation === "ARRIENDO";
    return true;
  });

  const goToContact = (p: PropertyItem) => {
    onSelectProperty?.(p);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    setModal(null);
  };

  return (
    <section id="propiedades" className="bg-ink-50 py-20 border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-ink-900 tracking-tight">
              Propiedades en gestión exclusiva
            </h2>
            <p className="text-sm text-ink-500">
              Residencias seleccionadas por arquitectura, ubicación y plusvalía.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 text-sm font-medium text-ink-900 hover:text-gold-600 flex items-center gap-1 transition-colors"
          >
            Consultar off-market <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          <SlidersHorizontal className="w-4 h-4 text-ink-400 shrink-0" />
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
                filter === f.key
                  ? "bg-ink-900 text-white"
                  : "bg-white text-ink-600 border border-ink-200 hover:border-ink-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-lg overflow-hidden border border-ink-100 hover:shadow-card-hover transition-shadow flex flex-col"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="bg-dark-900 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {p.operation === "VENTA" ? "En venta" : "En arriendo"}
                  </span>
                </div>
              </div>

              {/* Cuerpo */}
              <div className="p-5 flex flex-col flex-1 gap-4">
                {/* Precio + tipo */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xl font-bold text-ink-900">
                      {formatPrice(p.price, p.currency)}
                    </p>
                    <p className="text-xs text-ink-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {p.commune}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded">
                    {p.propertyType}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-sm font-semibold text-ink-900 leading-snug line-clamp-2">
                  {p.title}
                </h3>

                {/* Especificaciones */}
                <div className="flex items-center gap-4 text-xs text-ink-500 py-3 border-y border-ink-100">
                  <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {p.bedrooms}</span>
                  <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.bathrooms}</span>
                  <span className="flex items-center gap-1"><Maximize2 className="w-3.5 h-3.5" /> {p.builtArea} m²</span>
                  <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" /> {p.parkingSpots}</span>
                </div>

                {/* Features */}
                <ul className="space-y-1 flex-1">
                  {p.features.slice(0, 2).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-ink-500">
                      <Check className="w-3 h-3 text-gold-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                {/* Acciones */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => setModal(p)}
                    className="flex items-center justify-center gap-1 text-xs font-medium text-ink-700 bg-ink-50 hover:bg-ink-100 border border-ink-200 py-2 rounded transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> Ver ficha
                  </button>
                  <button
                    onClick={() => goToContact(p)}
                    className="flex items-center justify-center gap-1 text-xs font-semibold text-dark-900 bg-gold-500 hover:bg-gold-600 py-2 rounded transition-colors"
                  >
                    Consultar <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal ficha */}
        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/70 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img src={modal.imageUrl} alt={modal.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-dark-900/70 text-white text-sm hover:bg-dark-900 transition-colors"
                  aria-label="Cerrar"
                >✕</button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-gold-600">{modal.operation} · {modal.propertyType}</span>
                  <h3 className="text-lg font-bold text-ink-900 mt-1">{modal.title}</h3>
                  <p className="text-xs text-ink-500 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{modal.location}</p>
                </div>
                <div className="bg-ink-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-ink-500 block">Precio</span>
                    <span className="text-2xl font-bold text-ink-900">{formatPrice(modal.price, modal.currency)}</span>
                  </div>
                  <div className="text-right text-xs text-ink-500">
                    <div>Útiles: {formatArea(modal.builtArea)}</div>
                    <div>Totales: {formatArea(modal.totalArea)}</div>
                  </div>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">{modal.description}</p>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-ink-600">
                  {modal.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold-500 shrink-0" />{f}</li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-2">
                  <button onClick={() => setModal(null)} className="flex-1 text-xs font-medium text-ink-600 py-2.5 border border-ink-200 rounded hover:bg-ink-50 transition-colors">Cerrar</button>
                  <button onClick={() => goToContact(modal)} className="flex-1 text-xs font-semibold text-dark-900 bg-gold-500 hover:bg-gold-600 py-2.5 rounded transition-colors">Coordinar visita</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
