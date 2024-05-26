import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstagramSection } from "@/components/instagram-section";

export default function Home() {
  return (
    <main className="mx-auto p-4 max-w-[1960px]">
      <Header />
      <Hero />
      <InstagramSection />
      {/* <Footer /> */}
    </main>
  );
}
