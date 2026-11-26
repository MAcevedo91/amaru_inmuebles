import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { FEATURED_PROPERTIES } from "@/lib/mock-data";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const operation = searchParams.get("operation");
    const propertyType = searchParams.get("type");
    const commune = searchParams.get("commune");

    try {
      const where: any = {};
      if (operation) where.operation = operation;
      if (propertyType) where.propertyType = propertyType;
      if (commune) where.commune = { contains: commune, mode: "insensitive" };

      const dbProperties = await prisma.property.findMany({
        where,
        orderBy: { price: "desc" },
      });

      if (dbProperties && dbProperties.length > 0) {
        return NextResponse.json({
          success: true,
          source: "database",
          data: dbProperties,
        });
      }
    } catch (dbErr) {
      console.warn("Prisma no pudo consultar la BD, usando datos de propiedades destacados:", dbErr);
    }

    // Filtrado en memoria de datos de catálogo
    let filtered = [...FEATURED_PROPERTIES];
    if (operation) {
      filtered = filtered.filter((p) => p.operation === operation);
    }
    if (propertyType) {
      filtered = filtered.filter((p) => p.propertyType === propertyType);
    }
    if (commune) {
      filtered = filtered.filter((p) =>
        p.commune.toLowerCase().includes(commune.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      source: "catalog",
      data: filtered,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Error al obtener catálogo de propiedades",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
