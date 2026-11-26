# Amaru Inmuebles — Gestión Inmobiliaria & Corretaje de Alto Estándar

Landing page corporativa y de captación de leads inmobiliarios de alto valor para la firma de corretaje **Amaru Inmuebles**.

Construida con un diseño minimalista, sobrio y ejecutivo que sigue estrictamente la identidad visual de la marca (paleta bronce/dorado noble `#9B764B`, tipografía limpia, blancos y cremas cálidos, y generoso espacio negativo), optimizada para captar clientes compradores, vendedores e inversionistas patrimoniales en el sector oriente de Santiago (Vitacura, Las Condes, Lo Barnechea, La Dehesa).

---

## 🛠️ Stack Tecnológico

- **Frontend**: [Next.js 14 (App Router)](https://nextjs.org/) con React 18 y TypeScript.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) configurado con la paleta corporativa y sombras sutiles de lujo.
- **Backend & Mutaciones**:
  - **Server Actions**: Mutación y procesamiento seguro del formulario de contacto y captación (`src/app/actions/contact.ts`).
  - **Route Handlers**: Endpoints REST para consumo externo o integraciones (`/api/leads` y `/api/properties`).
- **Base de Datos & ORM**: PostgreSQL con [Prisma ORM](https://www.prisma.io/).
- **Validación de Datos**: [Zod](https://zod.dev/) tanto en cliente como en servidor para validación estricta de formularios y tipos seguros.
- **Iconografía**: [Lucide React](https://lucide.dev/).

---

## 🏛️ Estructura del Proyecto

```text
amaru-inmuebles/
├── 6.1.PNG                        # Logotipo original de referencia de Amaru Inmuebles
├── public/
│   └── logo.png                   # Activo de marca servido por Next.js
├── prisma/
│   ├── schema.prisma              # Modelo de datos para ContactLead y Property
│   └── migrations/
│       └── 20261126000000_init/
│           └── migration.sql      # DDL inicial en PostgreSQL
├── scripts/
│   └── seed.mjs                   # Script para poblar propiedades iniciales en la BD
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── contact.ts         # Server Action para registro de leads
│   │   ├── api/
│   │   │   ├── leads/route.ts     # Endpoint POST HTTP para leads
│   │   │   └── properties/route.ts# Endpoint GET HTTP para catálogo de propiedades
│   │   ├── globals.css            # Estilos globales y tokens visuales
│   │   ├── layout.tsx             # Root Layout con metadatos y SEO
│   │   └── page.tsx               # Página principal (Server Component con SSR)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Barra superior ejecutiva y navegación responsive
│   │   │   └── Footer.tsx         # Pie de página corporativo con datos de contacto
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx    # Hero con buscador y propuesta de valor
│   │   │   ├── FeaturedPropertiesSection.tsx # Grilla y modal de propiedades destacadas
│   │   │   ├── ServicesSection.tsx# Los 4 servicios core de corretaje
│   │   │   ├── AboutSection.tsx   # Filosofía, métricas (+12 años) y testimonios
│   │   │   └── ContactSection.tsx # Formulario con validación en cliente y servidor
│   │   ├── ui/
│   │   │   └── BrandLogo.tsx      # Componente del logotipo y emblema arquitectónico
│   │   └── LandingPageClient.tsx  # Orquestador interactivo del cliente
│   ├── lib/
│   │   ├── mock-data.ts           # Catálogo inicial de propiedades y contenidos
│   │   ├── prisma.ts              # Cliente Singleton de Prisma
│   │   ├── utils.ts               # Formateadores (UF, m²) y utilidades de clases
│   │   └── validations.ts         # Esquemas Zod para formulario de contacto
│   └── types/
│       └── index.ts               # Definiciones TypeScript de modelos y estados
├── .env.example                   # Variables de entorno documentadas
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Puesta en Marcha Local

### 1. Prerrequisitos
- Node.js 18+ (o Node.js 20/22/24).
- Servidor PostgreSQL activo (local o servicio en la nube como Neon, Supabase o AWS RDS).

### 2. Instalación de dependencias
```bash
npm install
```

### 3. Configuración de Variables de Entorno
Copia el archivo de ejemplo y ajusta la cadena de conexión de tu base de datos:
```bash
cp .env.example .env
```

Edita `.env` con la URL de tu instancia PostgreSQL:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/amaru_inmuebles?schema=public"
```

### 4. Generación y Migración de Base de Datos (Prisma)
Genera el cliente Prisma y aplica la migración inicial:
```bash
# Generar cliente tipado
npm run prisma:generate

# Aplicar migraciones en PostgreSQL
npm run prisma:migrate
```

*(Opcional)* Si deseas poblar la base de datos con las propiedades de muestra del portafolio:
```bash
npm run db:seed
```

### 5. Ejecución del Servidor de Desarrollo
```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000).

---

## 💎 Características Principales

1. **Diseño Fiel a la Identidad**: Inspirado en el isotipo arquitectónico y tipografía de **Amaru Inmuebles**, aplicando el tono bronce `#9B764B`, negros carbón suaves y fondos crema `#FDFBF7`.
2. **Formulario de Captación Segmentado**: Permite seleccionar entre "Vender mi Propiedad", "Tasar / Valorizar" o "Comprar / Invertir", con validación en tiempo real en el cliente y validación blindada en el servidor (Zod).
3. **Persistencia Transaccional**: Los prospectos se almacenan de manera segura en la tabla `contact_leads` de PostgreSQL a través de una Server Action (`submitContactLead`).
4. **Filtro Rápido y Fichas de Propiedades**: Permite explorar por tipología (Casas, Penthouses, Departamentos) y modalidad (Venta / Arriendo), con modal de ficha técnica y enlace directo para coordinar visitas.
5. **Resiliencia Operativa**: Si la base de datos local aún no ha sido conectada o está en proceso de migración, la aplicación opera sin caídas gracias a su fallback controlado de catálogo curado.
