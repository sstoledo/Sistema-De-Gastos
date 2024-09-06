/*
  Warnings:

  - The primary key for the `pagos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `desc_pago` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_pago` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `id_pago` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `pagos` table. All the data in the column will be lost.
  - You are about to drop the column `monto_pago` on the `pagos` table. All the data in the column will be lost.
  - Added the required column `descripcion` to the `pagos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaPago` to the `pagos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montoPago` to the `pagos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pagos" DROP CONSTRAINT "pagos_pkey",
DROP COLUMN "desc_pago",
DROP COLUMN "fecha_pago",
DROP COLUMN "id_pago",
DROP COLUMN "is_active",
DROP COLUMN "monto_pago",
ADD COLUMN     "descripcion" VARCHAR(50) NOT NULL,
ADD COLUMN     "fechaPago" DATE NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "montoPago" DECIMAL(10,2) NOT NULL,
ADD CONSTRAINT "pagos_pkey" PRIMARY KEY ("id");
