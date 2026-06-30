import type { Metadata } from "next";
import { Raleway, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Md. Iztihad Rafid's Portfolio",
  description: "Generaed by NEXTJS for skills, projects and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${raleway.variable}  antialiased bg-[#111827]`}>
        <Navbar></Navbar>
        <main className=" bg-black-1">
          {children}
        </main>
      </body>
    </html>
  );
}
