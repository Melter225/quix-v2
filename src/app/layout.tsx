import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NextAuthProvider from "./component/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

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
      <body className={poppins.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
