/*
  Warnings:

  - You are about to alter the column `montoPago` on the `pagos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "pagos" ALTER COLUMN "montoPago" SET DATA TYPE DOUBLE PRECISION;
