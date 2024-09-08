'use server'

import { prisma } from "@/lib/prisma"

export const getAllPayments = async()=>{
  const payments = await prisma.pagos.findMany();
  
  return payments;
}