import { getPaymentById } from "@/actions/payments/get-payment-by-id";
import Formulario from "@/components/Formulario/Formulario";

interface IParams{
  params : {
    id: string
  };
}

export default async function ModificarGastoPage({params}:IParams) {
  
  const payment = await getPaymentById(+params.id);
  console.log(payment);
  return (
    <>
      <Formulario mode="update" initialData={payment}/> 
    </>
  );
}