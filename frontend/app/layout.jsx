import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ShoppingContextProvider } from "@/store/shopping-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BreizhSport",
  description: "Boutique en ligne d'équipements de sport.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppingContextProvider children={children} />
      </body>
    </html>
  );
}
