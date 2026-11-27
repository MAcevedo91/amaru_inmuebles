// Script de siembra para PostgreSQL / Supabase con Prisma
// Ejecutar con: npm run db:seed (o DATABASE_URL="..." DIRECT_URL="..." npm run db:seed)

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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Quincho gourmet cerrado",
      "Paneles solares fotovoltaicos",
      "Jardín consolidado con riego automático",
      "Piscina con deck de madera tratada",
      "Sala de cine / Family room",
    ],
  },
  {
    title: "Departamento Luxury Garden House en San Damián",
    slug: "garden-house-san-damian-las-condes",
    description:
      "Planta baja con jardín privado de 280 m² y piscina propia en exclusivo condominio de sólo 8 unidades. Diseñado para ofrecer la comodidad y espacio de una casa con la seguridad y practicidad de un departamento de máxima categoría.",
    operation: "VENTA",
    propertyType: "DEPARTAMENTO",
    price: 42000,
    currency: "UF",
    location: "San Damián, Las Condes",
    commune: "Las Condes",
    bedrooms: 4,
    bathrooms: 4,
    builtArea: 360,
    totalArea: 640,
    parkingSpots: 3,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Jardín privado de uso exclusivo",
      "Piscina propia en terraza",
      "Bodega de gran capacidad",
      "Conserjería 24 hrs y CCTV de última generación",
    ],
  },
  {
    title: "Residencia Estilo Mediterráneo en San Carlos de Apoquindo",
    slug: "residencia-mediterranea-san-carlos-apoquindo",
    description:
      "Emplazada en sector privilegiado con vista despejada a la cordillera. Finas terminaciones en madera nativa y piedra, amplios recibos separados, cocina con isla central Miele y suite de invitados independiente.",
    operation: "VENTA",
    propertyType: "CASA",
    price: 29500,
    currency: "UF",
    location: "San Carlos de Apoquindo, Las Condes",
    commune: "Las Condes",
    bedrooms: 5,
    bathrooms: 5,
    builtArea: 420,
    totalArea: 950,
    parkingSpots: 3,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Vista panorámica a la cordillera",
      "Suite de invitados independiente",
      "Cocina equipada Miele",
      "Calefacción zonificada de bajo consumo",
    ],
  },
  {
    title: "Departamento Elegance sobre Parque Bicentenario",
    slug: "departamento-elegance-parque-bicentenario",
    description:
      "Frente al parque más emblemático de Vitacura. Vista verde perpetua, iluminación natural excepcional, terraza perimetral cerrada con cristales plegables y conectividad inmejorable con los mejores restaurantes y galerías.",
    operation: "ARRIENDO",
    propertyType: "DEPARTAMENTO",
    price: 135,
    currency: "UF/mes",
    location: "Parque Bicentenario, Vitacura",
    commune: "Vitacura",
    bedrooms: 3,
    bathrooms: 4,
    builtArea: 250,
    totalArea: 290,
    parkingSpots: 2,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Vista frontal al Parque Bicentenario",
      "Cristales plegables en terraza",
      "Gimnasio y piscina temperada en edificio",
      "Acceso directo a ciclovías y áreas verdes",
    ],
  },
  {
    title: "Oficina Corporativa Full Floor en Barrio El Golf",
    slug: "oficina-corporativa-barrio-el-golf",
    description:
      "Planta libre corporativa habilitada con estándares Clase A en torre emblemática de Apoquindo. Recepción privada, cuatro salas de directorio acústicas, kitchenette equipado y vista despejada a la cordillera.",
    operation: "VENTA",
    propertyType: "OFICINA",
    price: 24800,
    currency: "UF",
    location: "Av. Apoquindo, Barrio El Golf",
    commune: "Las Condes",
    bedrooms: 4,
    bathrooms: 4,
    builtArea: 310,
    totalArea: 310,
    parkingSpots: 6,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    ],
    features: [
      "Planta libre con climatización VRV independiente",
      "6 estacionamientos y 2 bodegas incluidas",
      "Certificación LEED Gold y control de acceso biométrico",
      "Habilitación ejecutiva lista para operar",
    ],
  },
];

async function main() {
  console.log("Iniciando siembra de base de datos Amaru Inmuebles...");

  for (const prop of initialProperties) {
    const created = await prisma.property.upsert({
      where: { slug: prop.slug },
      update: prop,
      create: prop,
    });
    console.log(`✓ Propiedad registrada: ${created.title} (${created.price} ${created.currency})`);
  }

  console.log("Siembra completada con éxito.");
}

main()
  .catch((e) => {
    console.error("Error durante la siembra:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
