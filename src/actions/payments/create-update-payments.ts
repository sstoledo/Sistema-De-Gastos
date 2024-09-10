"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Data {
  descripcion: string;
  fechaPago: Date;
  montoPago: number;
}

export const createPayments = async (data: Data) => {
  const payment = await prisma.pagos.create({
    data: {
      ...data,
    },
  });

  revalidatePath("/");

  return payment;
};

export const updatePayments = async (id: number, data: Data) => {
  const payment = await prisma.pagos.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });

  revalidatePath("/");
  return payment;
};
