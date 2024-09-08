'use server'

import { prisma } from "@/lib/prisma"

export const getAllPayments = async()=>{
  const payments = await prisma.pagos.findMany();
  const paymentsConverted = payments.map((payment)=> {
    return {
      descripcion: payment.descripcion,
      monto: payment.montoPago,
      fechaPago: payment.fechaPago.toLocaleDateString(),
    }
  })
  return paymentsConverted;
}