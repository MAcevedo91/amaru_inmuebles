export type PropertyType =
  | "CASA"
  | "DEPARTAMENTO"
  | "PENTHOUSE"
  | "TERRENO"
  | "OFICINA"
  | "OTRO";

export type OperationType = "VENTA" | "ARRIENDO";

export type InterestType =
  | "VENDER"
  | "COMPRAR"
  | "ARRENDAR"
  | "TASACION"
  | "CONSULTA_GENERAL";

export interface PropertyItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  operation: OperationType;
  propertyType: PropertyType;
  price: number;
  currency: string;
  location: string;
  commune: string;
  bedrooms: number;
  bathrooms: number;
  builtArea: number; // m² útiles
  totalArea: number; // m² totales / terreno
  parkingSpots: number;
  featured: boolean;
  imageUrl: string;
  gallery: string[];
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}
