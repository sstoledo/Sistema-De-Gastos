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

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>

    </>
  );
}
