'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export const deletePayment = async(id:number)=>{

  await prisma.pagos.delete({
    where:{
      id
    }
  })

  revalidatePath('/')

  return  "Borrado"
};