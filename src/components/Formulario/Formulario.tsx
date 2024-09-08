'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { DatePickerDemo } from "../DatePicker/DatePicker";
import { Button } from "../ui/button";
import { createPayments } from "@/actions/payments/create-update-payments";
import Swal from "sweetalert2";

interface CreateFormData {
  descripcion: string;
  fechaPago: Date;
  montoPago: number;
}


export default function Formulario() {

  const form = useForm<CreateFormData>({
    defaultValues: {
      descripcion: '',
      fechaPago: new Date(),
      montoPago: 0
    }
  })

  async function onSubmit(values:CreateFormData) {

    //TODO:Data conversion
    const newData = {
      ...values,
      montoPago: +values.montoPago
    }

    await createPayments(newData);
    Swal.fire({
      title: "Mensaje",
      text: "Gasto agregado correctamente",
      icon: "success"
    });

  }
  return (
    <div className="border border-gray-200 p-5">
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
                  <Input placeholder="Monto" {...field} type="number"/>
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
            <Button type="submit">Crear pago</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}