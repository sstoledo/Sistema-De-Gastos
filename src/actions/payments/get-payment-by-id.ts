'use server'

import { prisma } from "@/lib/prisma"

export const getPaymentById = async(id:number)=>{
  const payment = await prisma.pagos.findUnique({
    where:{
      id
    }
  });

  if(!payment) throw new Error(`Payment not found`);

  return{
    id: payment.id,
    descripcion: payment.descripcion,
    montoPago: payment.montoPago,
    fechaPago: payment.fechaPago,    
  }
}