"use client";

import React, { useState } from "react";
import { PropertyItem } from "@/types";
import { formatPrice, formatArea } from "@/lib/utils";
import {
  Bed,
  Bath,
  Maximize2,
  Car,
  MapPin,
  ArrowRight,
  SlidersHorizontal,
  Eye,
  Check,
} from "lucide-react";

interface FeaturedPropertiesProps {
  properties: PropertyItem[];
  onSelectProperty?: (prop: PropertyItem) => void;
}

export function FeaturedPropertiesSection({
  properties,
  onSelectProperty,
}: FeaturedPropertiesProps) {
  const [activeFilter, setActiveFilter] = useState<string>("TODAS");
  const [modalProperty, setModalProperty] = useState<PropertyItem | null>(null);

  const filteredProperties = properties.filter((item) => {
    if (activeFilter === "TODAS") return true;
    if (activeFilter === "CASAS") return item.propertyType === "CASA";
    if (activeFilter === "DEPARTAMENTOS")
      return item.propertyType === "DEPARTAMENTO";
    if (activeFilter === "PENTHOUSES")
      return item.propertyType === "PENTHOUSE";
    if (activeFilter === "VENTA") return item.operation === "VENTA";
    if (activeFilter === "ARRIENDO") return item.operation === "ARRIENDO";
    return true;
  });

  const filterButtons = [
    { label: "Todas las propiedades", key: "TODAS" },
    { label: "Casas", key: "CASAS" },
    { label: "Penthouses", key: "PENTHOUSES" },
    { label: "Departamentos", key: "DEPARTAMENTOS" },
    { label: "En Venta", key: "VENTA" },
    { label: "En Arriendo", key: "ARRIENDO" },
  ];

  const handleInquire = (property: PropertyItem) => {
    if (onSelectProperty) {
      onSelectProperty(property);
    }
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setModalProperty(null);
  };

  return (
    <section id="propiedades" className="py-24 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-amaru-700 block">
              CATÁLOGO SELECTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-executive-900 tracking-tight">
              Propiedades destacadas en{" "}
              <span className="font-normal text-amaru-700">gestión exclusiva</span>
            </h2>
            <p className="text-sm sm:text-base text-executive-600 font-light leading-relaxed">
              Residencias cuidadosamente evaluadas bajo estrictos parámetros de
              arquitectura, ubicación estratégica y plusvalía patrimonial.
            </p>
          </div>

          {/* Botón secundario */}
          <div className="mt-6 md:mt-0">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-amaru-700 hover:text-amaru-800 transition-colors"
            >
              <span>Consultar por propiedades privadas (Off-Market)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-black/5">
          <SlidersHorizontal className="w-4 h-4 text-amaru-600 mr-2 shrink-0 hidden sm:block" />
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                activeFilter === btn.key
                  ? "bg-executive-900 text-white shadow-sm"
                  : "bg-executive-50 text-executive-600 hover:bg-amaru-50 hover:text-executive-900"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grilla de Propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="group bg-[#FCFAF7] rounded-sm overflow-hidden border border-black/5 hover:border-amaru-400/40 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Imagen y Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-executive-100">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-white/95 text-executive-900 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded shadow-sm">
                      {property.operation === "VENTA" ? "En Venta" : "En Arriendo"}
                    </span>
                    <span className="bg-amaru-600 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded shadow-sm">
                      Exclusividad Amaru
                    </span>
                  </div>

                  {/* Ubicación y Comuna sobre la foto */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-amaru-300 shrink-0" />
                      <span className="font-light truncate">
                        {property.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 space-y-4">
                  {/* Precio */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-executive-500 font-medium block">
                        Valor
                      </span>
                      <p className="text-2xl font-light tracking-tight text-executive-900">
                        {formatPrice(property.price, property.currency)}
                      </p>
                    </div>
                    <span className="text-xs text-amaru-700 bg-amaru-50 border border-amaru-200 px-2 py-0.5 rounded font-medium">
                      {property.propertyType}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-base font-normal text-executive-900 group-hover:text-amaru-700 transition-colors line-clamp-2">
                    {property.title}
                  </h3>

                  {/* Especificaciones Técnicas */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-black/5 text-executive-600 text-xs">
                    <div className="flex flex-col items-center justify-center p-1.5 bg-white rounded-sm text-center">
                      <Bed className="w-3.5 h-3.5 text-amaru-600 mb-1" />
                      <span className="font-medium text-executive-900">
                        {property.bedrooms}
                      </span>
                      <span className="text-[10px] text-executive-500">Dorms</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1.5 bg-white rounded-sm text-center">
                      <Bath className="w-3.5 h-3.5 text-amaru-600 mb-1" />
                      <span className="font-medium text-executive-900">
                        {property.bathrooms}
                      </span>
                      <span className="text-[10px] text-executive-500">Baños</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1.5 bg-white rounded-sm text-center">
                      <Maximize2 className="w-3.5 h-3.5 text-amaru-600 mb-1" />
                      <span className="font-medium text-executive-900">
                        {property.builtArea}
                      </span>
                      <span className="text-[10px] text-executive-500">m² Útiles</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-1.5 bg-white rounded-sm text-center">
                      <Car className="w-3.5 h-3.5 text-amaru-600 mb-1" />
                      <span className="font-medium text-executive-900">
                        {property.parkingSpots}
                      </span>
                      <span className="text-[10px] text-executive-500">Estac.</span>
                    </div>
                  </div>

                  {/* Destacados / Características */}
                  <div className="space-y-1.5 pt-1">
                    {property.features.slice(0, 2).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-executive-500 font-light"
                      >
                        <Check className="w-3 h-3 text-amaru-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botones de acción al pie de la tarjeta */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setModalProperty(property)}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-executive-700 bg-white hover:bg-executive-50 border border-black/10 py-2.5 rounded transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-amaru-600" />
                  <span>Ver Ficha</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(property)}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-white bg-amaru-600 hover:bg-amaru-700 py-2.5 rounded transition-colors"
                >
                  <span>Consultar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal de Detalle Rápido de Propiedad */}
        {modalProperty && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-amaru-200 relative">
              <button
                onClick={() => setModalProperty(null)}
                className="absolute top-4 right-4 p-2 text-executive-400 hover:text-executive-900 focus:outline-none"
                aria-label="Cerrar ficha"
              >
                ✕
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amaru-600 font-semibold">
                  <span>{modalProperty.operation}</span>
                  <span>•</span>
                  <span>{modalProperty.propertyType}</span>
                </div>
                <h3 className="text-2xl font-light text-executive-900">
                  {modalProperty.title}
                </h3>
                <p className="text-xs text-executive-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amaru-600" />
                  {modalProperty.location}
                </p>
              </div>

              <div className="aspect-[16/9] w-full rounded-sm overflow-hidden">
                <img
                  src={modalProperty.imageUrl}
                  alt={modalProperty.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-amaru-50/60 rounded-sm border border-amaru-200/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-executive-500 uppercase tracking-wider block">
                    Precio solicitado
                  </span>
                  <span className="text-2xl font-light text-executive-900">
                    {formatPrice(modalProperty.price, modalProperty.currency)}
                  </span>
                </div>
                <div className="text-right text-xs text-executive-600">
                  <div>Útiles: {formatArea(modalProperty.builtArea)}</div>
                  <div>Totales: {formatArea(modalProperty.totalArea)}</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-executive-800">
                  Descripción Arquitectónica
                </h4>
                <p className="text-sm text-executive-600 font-light leading-relaxed">
                  {modalProperty.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-executive-800">
                  Equipamiento & Amenidades
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-executive-600">
                  {modalProperty.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amaru-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalProperty(null)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-executive-600 hover:text-executive-900"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => handleInquire(modalProperty)}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-white bg-amaru-600 hover:bg-amaru-700 rounded shadow"
                >
                  Coordinar Visita Privada
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
