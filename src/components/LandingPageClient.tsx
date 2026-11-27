"use client";

import React, { useState } from "react";
import { PropertyItem } from "@/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureCardsSection } from "@/components/sections/FeatureCardsSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { AgentsSectionNew } from "@/components/sections/AgentsSectionNew";
import { FeaturedPropertiesSection } from "@/components/sections/FeaturedPropertiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface LandingPageClientProps {
  initialProperties: PropertyItem[];
}

export function LandingPageClient({ initialProperties }: LandingPageClientProps) {
  const [filteredProperties, setFilteredProperties] =
    useState<PropertyItem[]>(initialProperties);
  const [hasActiveSearch, setHasActiveSearch] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const handleHeroFilter = (f: {
    operation?: string;
    type?: string;
    commune?: string;
  }) => {
    let result = [...initialProperties];
    const hasFilter = Boolean(f.operation || f.type || f.commune);

    if (f.operation) {
      result = result.filter((p) => p.operation === f.operation);
    }
    if (f.type) {
      result = result.filter((p) => p.propertyType === f.type);
    }
    if (f.commune) {
      const q = f.commune.toLowerCase();
      result = result.filter(
        (p) =>
          p.commune.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
      );
    }

    setFilteredProperties(result);
    setHasActiveSearch(hasFilter);
  };

  const handleResetSearch = () => {
    setFilteredProperties(initialProperties);
    setHasActiveSearch(false);
  };

  return (
    <>
      <HeroSection onFilterChange={handleHeroFilter} />

      <FeatureCardsSection />

      <CtaBannerSection />

      <AgentsSectionNew
        properties={initialProperties}
        onSelectProperty={setSelectedProperty}
        onSelectAgent={setSelectedAgent}
      />

      <FeaturedPropertiesSection
        properties={filteredProperties}
        hasActiveSearch={hasActiveSearch}
        onResetSearch={handleResetSearch}
        onSelectProperty={setSelectedProperty}
      />

      <ServicesSection />

      <AboutSection />

      <ContactSection
        selectedProperty={selectedProperty}
        selectedAgent={selectedAgent}
      />
    </>
  );
}
