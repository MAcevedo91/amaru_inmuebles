import { PropertyItem, ServiceItem, MetricItem } from "@/types";

export const FEATURED_PROPERTIES: PropertyItem[] = [
  {
    id: "prop-1",
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
    id: "prop-2",
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
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
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
    id: "prop-3",
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
    id: "prop-4",
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
    id: "prop-5",
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
    id: "prop-6",
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
];

export const SERVICES: ServiceItem[] = [
  {
    id: "captacion-venta",
    title: "Corretaje Exclusivo & Venta",
    subtitle: "Comercialización discreta para propiedades de alta gama",
    description:
      "Estrategia de posicionamiento segmentado dirigida a compradores calificados. Gestionamos la venta de su patrimonio inmobiliario resguardando la privacidad y garantizando la máxima rentabilidad de mercado.",
    iconName: "KeyRound",
    highlights: [
      "Filtro riguroso y calificación previa de prospectos compradores",
      "Producción audiovisual arquitectónica de estándar editorial",
      "Red privada de inversores y family offices nacionales e internacionales",
      "Acuerdos de confidencialidad y máxima discreción",
    ],
  },
  {
    id: "tasacion-valorizacion",
    title: "Valorización Comercial & Tasación",
    subtitle: "Análisis técnico de mercado con respaldo metodológico",
    description:
      "Determinamos el valor óptimo real de su inmueble mediante estudios comparativos de mercado, análisis de absorción y tendencias macroeconómicas del segmento premium.",
    iconName: "TrendingUp",
    highlights: [
      "Metodología basada en transacciones efectivas recientes",
      "Análisis de plusvalía y potencial urbanístico",
      "Informe ejecutivo detallado para toma de decisiones patrimoniales",
      "Tasaciones para herencias, particiones y reorganización societaria",
    ],
  },
  {
    id: "asesoria-legal",
    title: "Asesoría Legal & Cierre Seguro",
    subtitle: "Acompañamiento contractual de principio a fin",
    description:
      "Equipo de abogados especializados en derecho inmobiliario para el estudio exhaustivo de títulos, redacción de promesas, contratos de compraventa y gestión notarial transparente.",
    iconName: "Scale",
    highlights: [
      "Estudio de títulos y antecedentes legales en 48-72 horas",
      "Redacción blindada de ofertas, promesas e instrucciones notariales",
      "Coordinación ágil con bancos, tasadores y conservadores",
      "Asesoría en tributación de ganancias de capital",
    ],
  },
  {
    id: "gestion-arriendos",
    title: "Gestión Patrimonial de Arriendos",
    subtitle: "Rentabilidad continua para su portafolio inmobiliario",
    description:
      "Arrendamiento selectivo para ejecutivos corporativos, diplomáticos y clientes de alto perfil, con verificación financiera exhaustiva y administración proactiva.",
    iconName: "ShieldCheck",
    highlights: [
      "Verificación comercial, patrimonial y penal de arrendatarios",
      "Contratos adaptados a estándares corporativos y diplomáticos",
      "Inventarios digitales detallados de entrada y salida",
      "Servicio opcional de administración y mantención preventiva",
    ],
  },
];

export const METRICS: MetricItem[] = [
  {
    value: "+12",
    label: "Años de experiencia",
    description: "Trayectoria sólida en el mercado inmobiliario del sector oriente.",
  },
  {
    value: "96%",
    label: "Efectividad de cierre",
    description: "Operaciones concretadas dentro del plazo y rango de precio acordado.",
  },
  {
    value: "45 Días",
    label: "Tiempo promedio de colocación",
    description: "Comercialización ágil gracias a nuestra cartera calificada de compradores.",
  },
  {
    value: "+$85M",
    label: "USD en activos gestionados",
    description: "Portafolio consolidado de residencias y proyectos de alto valor.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "La discreción y profesionalismo de Amaru Inmuebles marcaron la diferencia al vender nuestra casa en Vitacura. Cada visita fue calificada con anticipación y el cierre legal se completó sin contratiempos.",
    author: "Matías Echeverría",
    role: "Empresario & Inversionista",
    city: "Vitacura, Santiago",
  },
  {
    quote:
      "Buscábamos un penthouse con requerimientos muy específicos de luz, seguridad y privacidad. Amaru nos presentó opciones antes de que salieran al mercado abierto. Servicio 100% boutique y de confianza absoluta.",
    author: "Isabel Silva de la Fuente",
    role: "Coleccionista de Arte",
    city: "Las Condes, Santiago",
  },
  {
    quote:
      "Excelente rigor técnico en la tasación de nuestra propiedad en La Dehesa. Su equipo no solo asesoró en la venta sino en toda la estructuración tributaria y notarial. Totalmente recomendados.",
    author: "Carlos Undurraga V.",
    role: "Director de Empresas",
    city: "Lo Barnechea, Santiago",
  },
];
