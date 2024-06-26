import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
