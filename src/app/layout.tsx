import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "Amaru Inmuebles | Gestión Inmobiliaria & Corretaje de Alto Estándar",
  description:
    "Firma boutique especializada en la comercialización, valorización y corretaje estratégico de propiedades de alto valor en Vitacura, Las Condes y Lo Barnechea. Máxima confidencialidad y rigor técnico.",
  keywords: [
    "Amaru Inmuebles",
    "corretaje de propiedades",
    "propiedades de lujo santiago",
    "casas vitacura",
    "penthouses las condes",
    "la dehesa",
    "tasacion inmobiliaria",
    "gestion inmobiliaria chile",
  ],
  authors: [{ name: "Amaru Inmuebles" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Amaru Inmuebles | Corretaje de Alto Estándar",
    description:
      "Gestión patrimonial y corretaje exclusivo en el sector oriente de Santiago.",
    url: "https://amaruinmuebles.cl",
    siteName: "Amaru Inmuebles",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Amaru Inmuebles Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-[#FDFBF7] text-executive-900 font-sans antialiased selection:bg-amaru-500 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
