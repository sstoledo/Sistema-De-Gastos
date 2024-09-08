'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { DatePickerDemo } from "../DatePicker/DatePicker";
import { Button } from "../ui/button";
import { createPayments, updatePayments } from "@/actions/payments/create-update-payments";
import Swal from "sweetalert2";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";

interface FormData {
  id?: number; // Añadimos id opcional para actualización
  descripcion: string;
  fechaPago: Date;
  montoPago: number;
}

interface FormularioProps {
  initialData?: FormData; // Datos iniciales para actualización
  mode: 'create' | 'update';
}

export default function Formulario({ initialData, mode }: FormularioProps) {

  const adjustedInitialData = initialData
    ? {
      ...initialData,
      fechaPago: new Date(new Date(initialData.fechaPago).getTime() + new Date().getTimezoneOffset() * 60000)
    }
    : undefined;
  const form = useForm<FormData>({ 
    defaultValues: adjustedInitialData || {
      descripcion: '',
      fechaPago: new Date(),
      montoPago: 0
    }
  });

  const router = useRouter();

  async function onSubmit(values: FormData) {
    const newData = {
      ...values,
      montoPago: +values.montoPago,
    };

    if (mode === 'create') {
      await createPayments(newData);
    } else {
      await updatePayments(+initialData?.id!, newData);
    }

    Swal.fire({
      title: "Mensaje",
      text: mode === 'create' ? "Gasto agregado correctamente" : "Gasto actualizado correctamente",
      icon: "success"
    });

    if (mode === 'create') {
      form.reset();
    }
    setTimeout(() => {
      router.push('/');
    }, 1200);
  }

  return (
    <>
      <div className="border border-gray-200 p-5 w-[500px] mx-auto">
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="descripcion"
              rules={{
                required: "Descripción es requerida",
                maxLength: { value: 50, message: "Maximo 50 caracteres" },
                minLength: { value: 3, message: "Minimo 3 caracteres" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col font-semibold">Descripción de pago</FormLabel>
                  <FormControl>
                    <Input placeholder="Descripción" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="montoPago"
              rules={{
                required: "Monto es requerido",
                min: {
                  value: 1,
                  message: "Imposible que el monto sea 0 o menor a 0",
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-col font-semibold">Monto de pago</FormLabel>
                  <FormControl>
                    <Input placeholder="Monto" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaPago"
              rules={{
                required: "Fecha de pago es requerida",
              }}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="flex flex-col font-semibold">Fecha de pago:</FormLabel>
                  <FormControl>
                    <div className="flex justify-center">
                      <DatePickerDemo
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit">Guardar</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}