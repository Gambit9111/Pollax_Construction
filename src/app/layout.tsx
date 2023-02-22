import "./globals.css";

import "@total-typescript/ts-reset";

import { Alexandria } from "@next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const alexandria = Alexandria({
  subsets: ["latin"],
  variable: "--font-alexandria",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alexandria.variable} bg-my-white text-my-black`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="relative flex h-full flex-col justify-between font-alexandria">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
