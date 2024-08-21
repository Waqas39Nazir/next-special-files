"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("LAYOUT FILE - ENTRY POINT");

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header name="Waqas - Saad" age="12" />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
