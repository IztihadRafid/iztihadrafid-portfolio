
import type { Metadata } from "next";
import { Raleway, Geist } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";
import { ToastProvider } from "@/components/toast-trigger";
import Particles from "@/components/Particles";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

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
      <body className={`${raleway.variable} antialiased bg-[#0e0e0e]`}>
        <div className="fixed inset-0 z-0">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <div className="relative z-10">
          <SmoothScroll>
            <ToastProvider maxToasts={3}>
              <Navbar />
              <main>{children}</main>
            </ToastProvider>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
