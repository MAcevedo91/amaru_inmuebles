import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "UF") {
  if (currency === "UF") {
    return `${price.toLocaleString("es-CL")} UF`;
  }
  if (currency === "USD") {
    return `USD $${price.toLocaleString("es-CL")}`;
  }
  return `$${price.toLocaleString("es-CL")} ${currency}`;
}

export function formatArea(m2: number) {
  return `${m2.toLocaleString("es-CL")} m²`;
}
