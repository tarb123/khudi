import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ResponsiveNav from "./components/nav/ResponsiveNav";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
import { Analytics } from "@vercel/analytics/next"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        {/* <About/> */}
        <ResponsiveNav/>        
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
 