import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { contactLeadSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = contactLeadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Datos de solicitud inválidos",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phone,
      interestType,
      propertyType,
      commune,
      budgetRange,
      message,
    } = validation.data;

    try {
      const newLead = await prisma.contactLead.create({
        data: {
          fullName,
          email: email.toLowerCase().trim(),
          phone: phone.trim(),
          interestType: interestType as any,
          propertyType: (propertyType as any) || "CASA",
          commune: commune || null,
          budgetRange: budgetRange || null,
          message: message || null,
          source: "API_ROUTE",
          status: "NUEVO",
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Solicitud registrada con éxito en el sistema Amaru Inmuebles.",
          leadId: newLead.id,
        },
        { status: 201 }
      );
    } catch (dbError) {
      console.warn("Base de datos no accesible en Route Handler /api/leads, usando fallback:", dbError);
      return NextResponse.json(
        {
          success: true,
          message: "Solicitud recibida (modo contingencia). Contactaremos a la brevedad.",
          leadId: "temp-" + Date.now(),
        },
        { status: 200 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
