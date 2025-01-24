import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/_componets/Navbar";
import Footer from "@/app/_componets/Footer";



export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App For Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className=" relative overflow-hidden ">
          
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
