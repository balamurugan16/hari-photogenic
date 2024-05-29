import { Footer } from "@/components/footer";
import { GalleryHighlights } from "@/components/gallery-highlights";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstagramSection } from "@/components/instagram-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1960px]">
      <Header />
      <Hero />
      <GalleryHighlights />
      <figure className="w-full max-w-3xl mx-auto border-t border-gray-600 border-b p-20 text-center ">
        <blockquote className="font-serifi italic text-2xl mb-4">
          <span>“</span>Evidence of a life replete with love is, in my mind, the
          greatest gift a photographer can give to the world. <span>”</span>
        </blockquote>
        <figcaption className="uppercase font-bold"> — DAN WINTERS</figcaption>
      </figure>
      <InstagramSection />
      <Footer />
    </main>
  );
}
