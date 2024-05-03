import { ImageCarousel as Carousel } from "@/components/carousel";
import { getImages } from "@/lib/actions/images";

export default async function photo() {
  const images = await getImages();

  return (
    <main className="h-screen w-screen p-4 flex items-center justify-center">
      <Carousel images={images} />
    </main>
  );
}
