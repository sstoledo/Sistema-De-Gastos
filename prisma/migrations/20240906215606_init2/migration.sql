-- CreateTable
CREATE TABLE "pagos" (
    "id_pago" SERIAL NOT NULL,
    "desc_pago" VARCHAR(50) NOT NULL,
    "fecha_pago" DATE NOT NULL,
    "monto_pago" DECIMAL(10,2) NOT NULL,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id_pago")
);
