-- CreateEnum
CREATE TYPE "InterestType" AS ENUM ('VENDER', 'COMPRAR', 'ARRENDAR', 'TASACION', 'CONSULTA_GENERAL');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('CASA', 'DEPARTAMENTO', 'PENTHOUSE', 'TERRENO', 'OFICINA', 'OTRO');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('VENTA', 'ARRIENDO');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NUEVO', 'CONTACTADO', 'EN_EVALUACION', 'CONCRETADO', 'DESCARTADO');

-- CreateTable
CREATE TABLE "contact_leads" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "interestType" "InterestType" NOT NULL DEFAULT 'VENDER',
    "propertyType" "PropertyType" DEFAULT 'CASA',
    "commune" TEXT,
    "budgetRange" TEXT,
    "message" TEXT,
    "status" "LeadStatus" NOT NULL DEFAULT 'NUEVO',
    "source" TEXT NOT NULL DEFAULT 'LANDING_PAGE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "operation" "OperationType" NOT NULL DEFAULT 'VENTA',
    "propertyType" "PropertyType" NOT NULL DEFAULT 'CASA',
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'UF',
    "location" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "builtArea" DOUBLE PRECISION NOT NULL,
    "totalArea" DOUBLE PRECISION NOT NULL,
    "parkingSpots" INTEGER NOT NULL DEFAULT 2,
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "imageUrl" TEXT NOT NULL,
    "gallery" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "features" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contact_leads_email_idx" ON "contact_leads"("email");

-- CreateIndex
CREATE INDEX "contact_leads_interestType_idx" ON "contact_leads"("interestType");

-- CreateIndex
CREATE INDEX "contact_leads_createdAt_idx" ON "contact_leads"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "properties_slug_key" ON "properties"("slug");

-- CreateIndex
CREATE INDEX "properties_operation_idx" ON "properties"("operation");

-- CreateIndex
CREATE INDEX "properties_featured_idx" ON "properties"("featured");

-- CreateIndex
CREATE INDEX "properties_commune_idx" ON "properties"("commune");

