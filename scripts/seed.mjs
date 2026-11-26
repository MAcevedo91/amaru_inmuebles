// Script de siembra para PostgreSQL con Prisma
// Ejecutar con: npm run db:seed o node scripts/seed.mjs

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProperties = [
  {
    title: "Residencia Vanguardista en Santa María de Manquehue",
    slug: "residencia-vanguardista-santa-maria-manquehue",
    description:
      "Arquitectura de líneas puras con hormigón visto, madera noble y amplios ventanales de doble altura. Vista despejada al valle, jardín consolidado con paisajismo sustentable, piscina temperada sin fin y cava subterránea climatizada.",
    operation: "VENTA",
    propertyType: "CASA",
    price: 48500,
    currency: "UF",
    location: "Santa María de Manquehue, Vitacura",
    commune: "Vitacura",
    bedrooms: 5,
    bathrooms: 6,
    builtArea: 580,
    totalArea: 1420,
    parkingSpots: 4,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Piscina temperada infinity",
      "Cava de vinos climatizada",
      "Seguridad privada 24/7",
      "Domótica integral Lutron",
      "Orientación Nororiente",
    ],
  },
  {
    title: "Penthouse Dúplex con Rooftop Privado en El Golf",
    slug: "penthouse-duplex-rooftop-el-golf",
    description:
      "Exclusivo penthouse ubicado en el corazón financiero y diplomático. Cuenta con terraza panorámica de 140 m² con jacuzzi hidromasaje, ascensor directo al departamento, acabados en mármol Carrara y suite principal con doble walk-in closet.",
    operation: "VENTA",
    propertyType: "PENTHOUSE",
    price: 36200,
    currency: "UF",
    location: "Barrio El Golf, Las Condes",
    commune: "Las Condes",
    bedrooms: 4,
    bathrooms: 5,
    builtArea: 390,
    totalArea: 530,
    parkingSpots: 3,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Ascensor directo al palier",
      "Rooftop privado con jacuzzi",
      "Mármol de Carrara",
      "Cocina de autor Poliform",
      "Calefacción por losa radiante",
    ],
  },
  {
    title: "Villa Contemporánea en La Dehesa Central",
    slug: "villa-contemporanea-la-dehesa-central",
    description:
      "Propiedad de diseño contemporáneo que integra naturaleza y privacidad. Espacios diáfanos con techos altos, quincho gourmet cerrado con equipamiento profesional, master suite con terraza privada y sistema solar de alta eficiencia.",
    operation: "VENTA",
    propertyType: "CASA",
    price: 31900,
    currency: "UF",
    location: "La Dehesa Central, Lo Barnechea",
    commune: "Lo Barnechea",
    bedrooms: 4,
    bathrooms: 5,
    builtArea: 440,
    totalArea: 1100,
    parkingSpots: 4,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Quincho gourmet cerrado",
      "Paneles solares fotovoltaicos",
      "Jardín consolidado con riego automático",
      "Piscina con deck de madera tratada",
      "Sala de cine / Family room",
    ],
  },
];

async function main() {
  console.log("🌱 Iniciando siembra de base de datos Amaru Inmuebles...");

  for (const prop of initialProperties) {
    const created = await prisma.property.upsert({
      where: { slug: prop.slug },
      update: prop,
      create: prop,
    });
    console.log(`✓ Propiedad registrada: ${created.title} (${created.price} ${created.currency})`);
  }

  console.log("✅ Siembra completada con éxito.");
}

main()
  .catch((e) => {
    console.error("Error durante la siembra:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
