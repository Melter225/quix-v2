import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextAuthProvider from "./component/NextAuthProvider";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Quix",
  description: "A robust educational app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><NextAuthProvider>{children}</NextAuthProvider></body>
    </html>
  );
}