"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  descripcion:string;
  monto: number;
  fechaPago:string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "descripcion",
    header: "Descripción",
  },
  {
    accessorKey: "monto",
    header: "Monto",
  },
  {
    accessorKey: "fechaPago",
    header: "Fecha",
  },
]
