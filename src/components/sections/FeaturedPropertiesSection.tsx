"use client";

import React, { useState } from "react";
import {
  Bed,
  Bath,
  Maximize2,
  Car,
  MapPin,
  X,
  Phone,
  Check,
  RotateCcw,
} from "lucide-react";
import type { PropertyItem } from "@/types";
import { FEATURED_PROPERTIES } from "@/lib/mock-data";
import { formatPrice, formatArea } from "@/lib/utils";

type TypeFilter = "TODOS" | "CASA" | "DEPARTAMENTO" | "PENTHOUSE" | "OFICINA" | "TERRENO";
type OpFilter = "TODAS" | "VENTA" | "ARRIENDO";

const TYPE_FILTERS: { label: string; value: TypeFilter }[] = [
  { label: "Todos los tipos", value: "TODOS" },
  { label: "Casas", value: "CASA" },
  { label: "Departamentos", value: "DEPARTAMENTO" },
  { label: "Penthouses", value: "PENTHOUSE" },
  { label: "Oficinas", value: "OFICINA" },
];

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  CASA: "Casa residencial",
  DEPARTAMENTO: "Departamento",
  PENTHOUSE: "Penthouse",
  TERRENO: "Terreno",
  OFICINA: "Oficina",
  OTRO: "Propiedad",
};

function PropertyCard({
  property,
  onOpenModal,
  onConsult,
  highlighted = false,
}: {
  property: PropertyItem;
  onOpenModal: (p: PropertyItem) => void;
  onConsult: (p: PropertyItem) => void;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`surface-card overflow-hidden flex flex-col ${
        highlighted ? "lg:col-span-2 md:flex-row" : ""
      }`}
    >
      {/* Imagen con contenedor oscuro de respaldo */}
      <div
        onClick={() => onOpenModal(property)}
        className={`relative bg-dark-900 overflow-hidden cursor-pointer ${
          highlighted ? "md:w-[52%] min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover object-center transition-opacity duration-200 hover:opacity-95"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,11,18,0.45) 0%, rgba(8,11,18,0) 38%, rgba(8,11,18,0.88) 85%, rgba(8,11,18,0.94) 100%)",
          }}
        />

        {/* Badges top con contraste garantizado */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="bg-dark-900 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/15">
            {property.operation === "VENTA" ? "Venta" : "Arriendo"}
          </span>
          {highlighted && (
            <span className="bg-gold-500 text-dark-950 text-xs font-semibold px-3 py-1 rounded-full">
              Selección principal
            </span>
          )}
        </div>

        {/* Metraje rápido en esquina inferior izquierda */}
        <div className="absolute bottom-3 left-3.5 text-xs font-medium text-white tabular-nums">
          {formatArea(property.builtArea)} construidos · {formatArea(property.totalArea)} totales
        </div>
      </div>

      {/* Cuerpo legible con contraste alto */}
      <div className={`flex flex-col flex-1 p-6 gap-4 ${highlighted ? "justify-between" : ""}`}>
        <div className="space-y-2">
          <p className="text-xs font-medium text-gold-700">
            {PROPERTY_TYPE_LABELS[property.propertyType] ?? property.propertyType}
          </p>

          <h3
            onClick={() => onOpenModal(property)}
            className="text-lg font-semibold text-ink-900 leading-snug cursor-pointer hover:text-gold-700 transition-colors"
          >
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-600">
            <MapPin className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
            <span>{property.location}</span>
          </div>

          {highlighted && (
            <p className="text-sm text-ink-600 leading-relaxed pt-1 line-clamp-3">
              {property.description}
            </p>
          )}
        </div>

        {/* Especificaciones tabulares */}
        <div className="grid grid-cols-3 gap-3 py-3 border-y border-ink-200/80 text-xs text-ink-700 tabular-nums">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
            <span>
              {property.bedrooms}{" "}
              {property.propertyType === "OFICINA" ? "privados" : "dorms"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
            <span>{property.bathrooms} baños</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
            <span>{property.parkingSpots} estac.</span>
          </div>
        </div>

        {/* Precio y acciones */}
        <div className="flex items-center justify-between gap-3 flex-wrap mt-auto">
          <div>
            <p className="text-xs text-ink-500">Valor</p>
            <p className="text-xl font-semibold text-ink-900 tabular-nums">
              {formatPrice(property.price, property.currency)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenModal(property)}
              className="px-4 py-2 text-xs font-medium text-ink-800 bg-ink-100 hover:bg-ink-200 rounded-lg transition-colors"
            >
              Ver ficha
            </button>
            <button
              type="button"
              onClick={() => onConsult(property)}
              className="btn-gold py-2 px-4 text-xs"
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function PropertyModal({
  property,
  onClose,
  onConsult,
}: {
  property: PropertyItem;
  onClose: () => void;
  onConsult: (p: PropertyItem) => void;
}) {
  const images =
    property.gallery && property.gallery.length > 0
      ? property.gallery
      : [property.imageUrl];
  const [photoIdx, setPhotoIdx] = useState(0);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={property.title}
    >
      <div
        className="relative bg-white rounded-2xl shadow-card-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-ink-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Foto principal */}
        <div className="relative aspect-video bg-dark-900 overflow-hidden">
          <img
            src={images[photoIdx] ?? property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,11,18,0.2) 0%, rgba(8,11,18,0) 50%, rgba(8,11,18,0.88) 100%)",
            }}
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-dark-950/85 text-white hover:bg-dark-900 border border-white/20 transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="inline-block bg-gold-500 text-dark-950 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {property.operation === "VENTA" ? "En venta" : "En arriendo"}
              </span>
              <p className="text-2xl sm:text-3xl font-semibold text-white tabular-nums">
                {formatPrice(property.price, property.currency)}
              </p>
            </div>
            {images.length > 1 && (
              <div className="flex items-center gap-2">
                {images.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setPhotoIdx(idx)}
                    className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-opacity ${
                      idx === photoIdx
                        ? "border-gold-400 opacity-100"
                        : "border-white/40 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contenido técnico */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs font-medium text-gold-700">
              {PROPERTY_TYPE_LABELS[property.propertyType] ?? property.propertyType}
            </p>
            <h2 className="text-2xl font-semibold text-ink-900 mt-1">{property.title}</h2>
            <div className="flex items-center gap-1.5 text-sm text-ink-600 mt-2">
              <MapPin className="w-4 h-4 text-ink-500 shrink-0" strokeWidth={1.5} />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-ink-200 tabular-nums">
            <div>
              <p className="text-xs text-ink-500">
                {property.propertyType === "OFICINA" ? "Privados / salas" : "Dormitorios"}
              </p>
              <p className="text-base font-semibold text-ink-900 mt-0.5">{property.bedrooms}</p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Baños</p>
              <p className="text-base font-semibold text-ink-900 mt-0.5">{property.bathrooms}</p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Superficie útil</p>
              <p className="text-base font-semibold text-ink-900 mt-0.5">
                {formatArea(property.builtArea)}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Superficie total</p>
              <p className="text-base font-semibold text-ink-900 mt-0.5">
                {formatArea(property.totalArea)}
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
            {property.description}
          </p>

          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-ink-900">
                Especificaciones destacadas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-ink-700">
                    <Check className="w-4 h-4 text-gold-600 shrink-0" strokeWidth={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onConsult(property);
                onClose();
              }}
              className="btn-gold flex-1"
            >
              Coordinar visita privada
            </button>
            <a
              href="tel:+56987654321"
              className="btn-dark"
              aria-label="Llamar por teléfono"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              <span>Llamar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeaturedPropertiesSectionProps {
  properties?: PropertyItem[];
  onSelectProperty?: (p: PropertyItem) => void;
  hasActiveSearch?: boolean;
  onResetSearch?: () => void;
}

export function FeaturedPropertiesSection({
  properties,
  onSelectProperty,
  hasActiveSearch = false,
  onResetSearch,
}: FeaturedPropertiesSectionProps) {
  const source: PropertyItem[] =
    properties && properties.length > 0 ? properties : FEATURED_PROPERTIES;
  const listToFilter = hasActiveSearch ? properties ?? [] : source;

  const [typeFilter, setTypeFilter] = useState<TypeFilter>("TODOS");
  const [opFilter, setOpFilter] = useState<OpFilter>("TODAS");
  const [modalProperty, setModalProperty] = useState<PropertyItem | null>(null);

  const filtered = listToFilter.filter((p) => {
    const matchType = typeFilter === "TODOS" || p.propertyType === typeFilter;
    const matchOp = opFilter === "TODAS" || p.operation === opFilter;
    return matchType && matchOp;
  });

  const handleConsult = (p: PropertyItem) => {
    if (onSelectProperty) onSelectProperty(p);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="propiedades" className="bg-white py-20 lg:py-24 border-b border-ink-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm font-medium text-gold-700">Portafolio curado</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 leading-tight">
              Propiedades destacadas
            </h2>
            <p className="text-sm sm:text-base text-ink-600 leading-relaxed">
              Activos residenciales seleccionados en las principales zonas del sector
              oriente de Santiago.
            </p>
          </div>

          <p className="text-sm font-medium text-ink-600 tabular-nums shrink-0">
            {filtered.length}{" "}
            {filtered.length === 1 ? "propiedad disponible" : "propiedades disponibles"}
          </p>
        </div>

        {/* Barra de filtros */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-ink-200">
          {/* Tipo */}
          <div className="flex items-center gap-2 flex-wrap">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setTypeFilter(f.value)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
                  typeFilter === f.value
                    ? "bg-dark-900 text-white border-dark-900"
                    : "bg-ink-50 text-ink-800 border-ink-200 hover:bg-ink-100 hover:border-ink-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Operación + Limpiar búsqueda */}
          <div className="flex items-center gap-2 flex-wrap">
            {(
              [
                { label: "Todas", value: "TODAS" as const },
                { label: "Venta", value: "VENTA" as const },
                { label: "Arriendo", value: "ARRIENDO" as const },
              ] as const
            ).map((op) => (
              <button
                key={op.value}
                type="button"
                onClick={() => setOpFilter(op.value)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-colors ${
                  opFilter === op.value
                    ? "bg-gold-500 text-dark-950 border-gold-500 font-semibold"
                    : "bg-white text-ink-700 border-ink-200 hover:border-ink-300"
                }`}
              >
                {op.label}
              </button>
            ))}

            {(hasActiveSearch || typeFilter !== "TODOS" || opFilter !== "TODAS") && (
              <button
                type="button"
                onClick={() => {
                  setTypeFilter("TODOS");
                  setOpFilter("TODAS");
                  if (onResetSearch) onResetSearch();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-700 hover:text-ink-900 px-3 py-1.5 rounded-lg bg-ink-100 hover:bg-ink-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                Restablecer
              </button>
            )}
          </div>
        </div>

        {/* Grilla equilibrada: propiedad destacada arriba + 6 tarjetas debajo (cero espacios huérfanos) */}
        {filtered.length === 0 ? (
          <div className="bg-ink-50 border border-ink-200 rounded-2xl p-12 text-center space-y-4">
            <p className="text-base font-medium text-ink-900">
              No encontramos propiedades con esos criterios exactos.
            </p>
            <p className="text-sm text-ink-600 max-w-md mx-auto">
              Parte de nuestro inventario se comercializa de forma privada. Puede
              restablecer los filtros o indicarnos lo que busca en el formulario.
            </p>
            <button
              type="button"
              onClick={() => {
                setTypeFilter("TODOS");
                setOpFilter("TODAS");
                if (onResetSearch) onResetSearch();
              }}
              className="btn-dark"
            >
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.length >= 4 && (
              <PropertyCard
                property={filtered[0]}
                onOpenModal={setModalProperty}
                onConsult={handleConsult}
                highlighted={true}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(filtered.length >= 4 ? filtered.slice(1) : filtered).map((p) => (
                <PropertyCard
                  key={p.id}
                  property={p}
                  onOpenModal={setModalProperty}
                  onConsult={handleConsult}
                  highlighted={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal detallado */}
      {modalProperty && (
        <PropertyModal
          property={modalProperty}
          onClose={() => setModalProperty(null)}
          onConsult={handleConsult}
        />
      )}
    </section>
  );
}
