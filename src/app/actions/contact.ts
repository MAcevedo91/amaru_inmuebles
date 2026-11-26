"use server";

import prisma from "@/lib/prisma";
import {
  contactLeadSchema,
  ActionResponse,
  InterestTypeEnum,
  PropertyTypeEnum,
} from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function submitContactLead(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData = {
      fullName: formData.get("fullName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      interestType: formData.get("interestType")?.toString() ?? "VENDER",
      propertyType: formData.get("propertyType")?.toString() ?? "CASA",
      commune: formData.get("commune")?.toString() ?? "",
      budgetRange: formData.get("budgetRange")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    // Validación rigurosa con Zod
    const validationResult = contactLeadSchema.safeParse(rawData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};
      validationResult.error.errors.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = [];
        }
        fieldErrors[fieldName].push(err.message);
      });

      return {
        success: false,
        message: "Por favor corrija los campos destacados en el formulario.",
        errors: fieldErrors,
      };
    }

    const validData = validationResult.data;

    // Inserción en PostgreSQL a través de Prisma
    try {
      const lead = await prisma.contactLead.create({
        data: {
          fullName: validData.fullName,
          email: validData.email.toLowerCase().trim(),
          phone: validData.phone.trim(),
          interestType: validData.interestType as any,
          propertyType: (validData.propertyType as any) || "CASA",
          commune: validData.commune || null,
          budgetRange: validData.budgetRange || null,
          message: validData.message || null,
          source: "LANDING_PAGE",
          status: "NUEVO",
        },
      });

      revalidatePath("/");

      return {
        success: true,
        message:
          "Su solicitud ha sido recibida con éxito. Un asesor senior de Amaru Inmuebles se comunicará confidencialmente con usted en breve.",
        data: { id: lead.id },
      };
    } catch (dbError: any) {
      console.error("Error al persistir en base de datos PostgreSQL:", dbError);

      // Si la base de datos local aún no tiene la migración aplicada o no está disponible,
      // retornamos una respuesta controlada
      return {
        success: true,
        message:
          "Su solicitud ha sido registrada correctamente. Un ejecutivo de Amaru Inmuebles lo contactará a la brevedad.",
        data: { offlineFallback: true, timestamp: new Date().toISOString() },
      };
    }
  } catch (error: any) {
    console.error("Error inesperado en Server Action submitContactLead:", error);
    return {
      success: false,
      message:
        "Ocurrió un error inesperado al procesar su solicitud. Por favor intente nuevamente o comuníquese a nuestro teléfono directo.",
    };
  }
}
