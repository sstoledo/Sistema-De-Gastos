import { getAllPayments } from "@/actions/payments/get-payments";
import Formulario from "@/components/Formulario/Formulario";
import { columns } from "@/components/payments/column";
import { DataTable } from "@/components/payments/data-table";


export default async function Home() {

  const data = await getAllPayments();

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
