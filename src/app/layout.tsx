import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import { cn } from "@/lib/utils";
import Head from "next/head";

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
    <html lang="tr">
      <Head>
        <title>Coffee Cafe</title>
      </Head>
      <body
        className={cn(
          "font-sans antialiased container mx-auto",
          inter.className
        )}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
