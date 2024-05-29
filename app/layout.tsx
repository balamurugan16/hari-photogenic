import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={cn("bg-background font-sans antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
