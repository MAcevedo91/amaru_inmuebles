import { z } from "zod";

export const InterestTypeEnum = z.enum([
  "VENDER",
  "COMPRAR",
  "ARRENDAR",
  "TASACION",
  "CONSULTA_GENERAL",
]);

export const PropertyTypeEnum = z.enum([
  "CASA",
  "DEPARTAMENTO",
  "PENTHOUSE",
  "TERRENO",
  "OFICINA",
  "OTRO",
]);

export const contactLeadSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "El nombre completo debe tener al menos 3 caracteres." })
    .max(100, { message: "El nombre no puede exceder 100 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor ingrese un correo electrónico válido." }),
  phone: z
    .string()
    .min(8, { message: "Ingrese un número de teléfono de contacto válido." })
    .regex(/^[+0-9\s-]{8,20}$/, {
      message: "Formato telefónico no válido (ej: +56 9 1234 5678).",
    }),
  interestType: InterestTypeEnum.default("VENDER"),
  propertyType: PropertyTypeEnum.optional().default("CASA"),
  commune: z
    .string()
    .max(80, { message: "La comuna no puede exceder 80 caracteres." })
    .optional()
    .or(z.literal("")),
  budgetRange: z
    .string()
    .max(80, { message: "El presupuesto no puede exceder 80 caracteres." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .max(1000, { message: "El mensaje no puede superar los 1000 caracteres." })
    .optional()
    .or(z.literal("")),
});

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;

export type ActionResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
};
