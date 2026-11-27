"use client";

import React, { useState } from "react";
import { PropertyItem } from "@/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureCardsSection } from "@/components/sections/FeatureCardsSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { FeaturedPropertiesSection } from "@/components/sections/FeaturedPropertiesSection";
import { AgentsSectionNew } from "@/components/sections/AgentsSectionNew";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface LandingPageClientProps {
  initialProperties: PropertyItem[];
}

export function LandingPageClient({ initialProperties }: LandingPageClientProps) {
  const [properties, setProperties] = useState<PropertyItem[]>(initialProperties);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  const handleFilter = (f: { operation?: string; type?: string; commune?: string }) => {
    let filtered = [...initialProperties];
    if (f.operation) filtered = filtered.filter((p) => p.operation === f.operation);
    if (f.type) filtered = filtered.filter((p) => p.propertyType === f.type);
    if (f.commune) filtered = filtered.filter((p) => p.commune.toLowerCase().includes(f.commune!.toLowerCase()));
    setProperties(filtered);
  };

  return (
    <>
      {/* 1. Hero — fotografía full-bleed + buscador */}
      <HeroSection onFilterChange={handleFilter} />

      {/* 2. Cuatro criterios de búsqueda */}
      <FeatureCardsSection />

      {/* 3. Banner oscuro con foto de propiedad premium */}
      <CtaBannerSection />

      {/* 4. Agentes + propiedad destacada */}
      <AgentsSectionNew />

      {/* 5. Catálogo filtrable */}
      <FeaturedPropertiesSection
        properties={properties}
        onSelectProperty={setSelectedProperty}
      />

      {/* 6. Servicios */}
      <ServicesSection />

      {/* 7. Formulario de contacto */}
      <ContactSection selectedProperty={selectedProperty} />
    </>
  );
}
