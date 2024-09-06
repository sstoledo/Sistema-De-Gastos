import Formulario from "@/components/Formulario/Formulario";
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Formulario />
        </div>
        <div>
          <DataTable columns={columns} data={data} />

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
