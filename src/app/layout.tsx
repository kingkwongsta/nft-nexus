"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./../redux/provider";
import Navbar from "./../app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "NFT Nexus",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
