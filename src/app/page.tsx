import { getAllPayments } from "@/actions/payments/get-payments";
import { columns } from "@/components/payments/column";
import { DataTable } from "@/components/payments/data-table";
import Link from "next/link";


export default async function Home() {

  const payments = await getAllPayments();

  const paymentsConverted = payments.map((payment)=> {
    return {
      id: payment.id,
      descripcion: payment.descripcion,
      monto: payment.montoPago,
      fechaPago: payment.fechaPago.toISOString().split("T")[0],
    }
  })

  return (
    <>
      {/*FORMULARIO*/}

      <div className="grid grid-cols-1 gap-4">
        <div className="w-full flex justify-end">
          <Link href="crear-gasto" className="bg-violet-800 text-white py-1 px-5 rounded-md">Crear gasto</Link>
        </div>
        <div>
          <DataTable columns={columns} data={paymentsConverted} />

          <div className="w-full flex justify-end mt-10">
            <p className="font-bold text-xl">Total:
              <span className="ml-2 font-normal">s/. 3400</span>
            </p>
          </div>
        </div>
      </div>


    </>
  );
}
