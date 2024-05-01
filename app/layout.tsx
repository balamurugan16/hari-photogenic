import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hari Photogenic",
  description: "Wedding Photography by Hari Photogenic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
