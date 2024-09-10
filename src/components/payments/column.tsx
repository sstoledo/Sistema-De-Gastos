"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import Swal from "sweetalert2"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deletePayment } from "@/actions/payments/delete-payment"
import Link from "next/link"

export type Payment = {
  id: number;
  descripcion: string;
  monto: number;
  fechaPago: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "descripcion",
    header: "DESCRIPCION",
  },
  {
    accessorKey: "monto",
    header: "MONTO",
  },
  {
    accessorKey: "fechaPago",
    header: "FECHA",
  },
  {
    header: "ACCIONES",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/modificar-gasto/${payment.id}`}>Editar</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                Swal.fire({
                  title: "¿Estas seguro de esta acción?",
                  text: "Estos cambios ya no podrán revertirse",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Si, deseo eliminar"
                }).then(async (result) => {
                  if (result.isConfirmed) {

                    await deletePayment(payment.id);

                    Swal.fire({
                      title: "Borrado",
                      text: "El gasto a sido borrado",
                      icon: "success"
                    });
                  }
                });
              }}
            >Eliminar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
