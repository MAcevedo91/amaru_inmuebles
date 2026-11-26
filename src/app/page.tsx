import prisma from "@/lib/prisma";
import { FEATURED_PROPERTIES } from "@/lib/mock-data";
import { LandingPageClient } from "@/components/LandingPageClient";
import { PropertyItem } from "@/types";

export const revalidate = 60; // Regenerar periódicamente cada minuto si hay datos nuevos en Postgres

async function getProperties(): Promise<PropertyItem[]> {
  try {
    const dbProperties = await prisma.property.findMany({
      where: { featured: true },
      orderBy: { price: "desc" },
    });

    if (dbProperties && dbProperties.length > 0) {
      return dbProperties.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        description: p.description,
        operation: p.operation as "VENTA" | "ARRIENDO",
        propertyType: p.propertyType as any,
        price: p.price,
        currency: p.currency,
        location: p.location,
        commune: p.commune,
        bedrooms: p.bedrooms,
        bathrooms: p.bathrooms,
        builtArea: p.builtArea,
        totalArea: p.totalArea,
        parkingSpots: p.parkingSpots,
        featured: p.featured,
        imageUrl: p.imageUrl,
        gallery: p.gallery,
        features: p.features,
      }));
    }
  } catch (error) {
    // Si la base de datos PostgreSQL aún no está inicializada o disponible localmente,
    // se asegura la continuidad visual sin interrupciones mediante el catálogo inicial curado.
    console.warn(
      "Aviso: Operando con catálogo inicial de propiedades (Postgres offline o en inicialización)."
    );
  }

  return FEATURED_PROPERTIES;
}

export default async function HomePage() {
  const properties = await getProperties();

  return <LandingPageClient initialProperties={properties} />;
}
