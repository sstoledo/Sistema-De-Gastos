'use client';

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { DatePickerDemo } from "../DatePicker/DatePicker";
import { Button } from "../ui/button";

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

  return (
    <div>
      <Form {...form}>
        <form className="space-y-8">
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
                <FormLabel className="flex flex-col">Descripcion de pago</FormLabel>
                <FormControl>
                  <Input placeholder="Descripcion" {...field} />
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
                <FormLabel className="flex flex-col">Monto de pago</FormLabel>
                <FormControl>
                  <Input placeholder="Monto" {...field} />
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
              <FormItem>
                <FormLabel className="flex flex-col">Fecha de pago</FormLabel>
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