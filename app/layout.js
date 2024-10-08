import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./Applayout.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BetaHub",
  description: "World's first AI Startup Incubator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
