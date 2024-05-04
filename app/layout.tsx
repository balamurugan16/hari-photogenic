import type { Metadata } from "next";
import "./globals.css";

import {
  Montserrat as FontSans,
  Old_Standard_TT as FontSerif,
} from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hari Photogenic",
  description: "Wedding Photography by Hari Photogenic",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontItalic = FontSerif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased",
          fontSans.variable,
          fontItalic.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
