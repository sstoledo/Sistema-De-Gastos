import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google"
import "./globals.css";

const generalFont = Montserrat_Alternates({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proyecto Sistema básico de gastos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalFont.className} antialiased `}
      >
        <header className="w-full bg-violet-900 py-10">
          <h1 className="text-center capitalize text-3xl text-white">Aministrador básico de gastos</h1>
        </header>

        <main className="container mx-auto py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
