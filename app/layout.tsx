import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import {  Jost } from "next/font/google";



const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "Our Wedding Celebration",
  description: "Join us on our special day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={`${cormorant.variable} ${jost.variable} min-h-[95vh] h-screen w-full snap-start flex flex-col items-center justify-center p-1 sm:px-6 relative overflow-x-hidden scroll-smooth scroll-pt-16`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
