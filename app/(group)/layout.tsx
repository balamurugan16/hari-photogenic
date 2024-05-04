import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout() {
  return (
    <main className="mx-auto p-4 max-w-[1960px]">
      <Header />
      <Footer />
    </main>
  );
}
