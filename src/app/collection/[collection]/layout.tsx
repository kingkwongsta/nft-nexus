import "./../../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../../../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <main className={inter.className}>{children}</main>
      </Providers>
    </html>
  );
}
