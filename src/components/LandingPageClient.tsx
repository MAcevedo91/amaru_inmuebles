"use client";

import React, { useState } from "react";
import { PropertyItem } from "@/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedPropertiesSection } from "@/components/sections/FeaturedPropertiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface LandingPageClientProps {
  initialProperties: PropertyItem[];
}

export function LandingPageClient({
  initialProperties,
}: LandingPageClientProps) {
  const [properties, setProperties] = useState<PropertyItem[]>(initialProperties);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(
    null
  );

  const handleHeroFilter = (filters: {
    operation?: string;
    type?: string;
    commune?: string;
  }) => {
    let filtered = [...initialProperties];
    if (filters.operation) {
      filtered = filtered.filter((p) => p.operation === filters.operation);
    }
    if (filters.type) {
      filtered = filtered.filter((p) => p.propertyType === filters.type);
    }
    if (filters.commune) {
      filtered = filtered.filter((p) =>
        p.commune.toLowerCase().includes(filters.commune!.toLowerCase())
      );
    }
    setProperties(filtered);
  };

  const handleSelectProperty = (property: PropertyItem) => {
    setSelectedProperty(property);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onFilterChange={handleHeroFilter} />
      <FeaturedPropertiesSection
        properties={properties}
        onSelectProperty={handleSelectProperty}
      />
      <ServicesSection />
      <AboutSection />
      <ContactSection selectedProperty={selectedProperty} />
    </div>
  );
}
