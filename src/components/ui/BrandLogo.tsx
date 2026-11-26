import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "dark",
  size = "md",
  showTagline = true,
  className,
}: BrandLogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-9",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <Link
      href="#inicio"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90",
        className
      )}
      aria-label="Amaru Inmuebles - Inicio"
    >
      <div className="relative flex items-center justify-center">
        {/* Usamos la imagen original de la marca fiel a 6.1.PNG */}
        <div
          className={cn(
            "relative overflow-hidden transition-transform duration-300 group-hover:scale-105",
            sizeClasses[size]
          )}
        >
          <img
            src="/logo.png"
            alt="Amaru Inmuebles"
            className={cn(
              "h-full w-auto object-contain",
              isLight && "brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
            )}
          />
        </div>
      </div>
    </Link>
  );
}

// Emblema arquitectónico SVG fiel al isotipo de 6.1.PNG para detalles visuales y acentos
export function ArchitecturalEmblem({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Techo principal con ventana */}
      <path
        d="M20 100 L80 40 L140 100 L115 100 L80 65 L45 100 Z"
        fill="currentColor"
      />
      {/* 4 paneles de la ventana cuadrada */}
      <rect x="73" y="75" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="81" y="75" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="73" y="83" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="81" y="83" width="6" height="6" rx="1" fill="currentColor" />

      {/* Segundo techo inclinado paralelo a la derecha */}
      <path
        d="M100 40 L130 40 L165 95 L145 95 L115 50 L100 50 Z"
        fill="currentColor"
      />

      {/* Tercer techo inclinado paralelo a la derecha */}
      <path
        d="M135 40 L165 40 L200 95 L180 95 L150 50 L135 50 Z"
        fill="currentColor"
      />
    </svg>
  );
}
