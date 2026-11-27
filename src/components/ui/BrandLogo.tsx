import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Isotipo vectorial fiel a 6.1.PNG (triple cubierta arquitectónica con ventana de 4 paneles)
 * combinado con wordmark tipográfico de alta legibilidad en cualquier resolución.
 */
export function ArchitecturalEmblem({
  className,
  width = 48,
  height = 28,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Primera cubierta principal */}
      <path d="M4 58L38 14L72 58H58L38 32L18 58H4Z" fill="currentColor" />
      {/* Ventana de cuatro paños */}
      <rect x="33" y="42" width="4.2" height="4.2" fill="currentColor" />
      <rect x="38.8" y="42" width="4.2" height="4.2" fill="currentColor" />
      <rect x="33" y="47.8" width="4.2" height="4.2" fill="currentColor" />
      <rect x="38.8" y="47.8" width="4.2" height="4.2" fill="currentColor" />
      {/* Segunda cubierta paralela */}
      <path d="M51 22L60 14L94 58H80L51 22Z" fill="currentColor" />
      {/* Tercera cubierta paralela */}
      <path d="M73 22L82 14L116 58H102L73 22Z" fill="currentColor" />
    </svg>
  );
}

export function BrandLogo({
  variant = "light",
  showTagline = true,
  className,
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="#inicio"
      className={cn(
        "inline-flex items-center gap-3 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-md",
        className
      )}
      aria-label="Amaru Inmuebles - Inicio"
    >
      <ArchitecturalEmblem
        width={46}
        height={27}
        className={isLight ? "text-gold-400 shrink-0" : "text-gold-600 shrink-0"}
      />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-semibold tracking-[0.04em]",
            isLight ? "text-white" : "text-ink-900"
          )}
        >
          AMARU INMUEBLES
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] font-medium tracking-[0.14em] mt-1",
              isLight ? "text-slate-300" : "text-ink-500"
            )}
          >
            Gestión Inmobiliaria
          </span>
        )}
      </div>
    </Link>
  );
}
