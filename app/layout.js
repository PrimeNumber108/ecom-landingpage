import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/navbar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The20",
  description: "E-commerce manage tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
