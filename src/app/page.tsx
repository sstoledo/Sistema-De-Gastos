import { columns, Payment } from "@/components/payments/column";
import { DataTable } from "@/components/payments/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      monto: 100,
      descripcion: "Comida",
      fechaPago: "2022-10-2"
    },
    // ...
  ]
}

export default async function Home() {

  const data = await getData()

  return (
    <>
        {/*FORMULARIO*/}
        <DataTable columns={columns} data={data} />

        <div className="w-full flex justify-end mt-10">
          <p className="font-bold text-xl">Total:
            <span className="ml-2 font-normal">s/. 3400</span>
          </p>
        </div>

    </>
  );
}
