/* eslint-disable max-len */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Coffee Cafe",
  description: "Coffee Cafe - Coffee Shop in Istanbul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={cn("font-sans antialiased container mx-auto", inter.className)}
    >
      <Head>
        <title>Coffee Cafe</title>
      </Head>
      <body className="relative">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-[-10] blur-[3px]"
        />
        <Header />
        <div className="container mx-auto h-screen relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
