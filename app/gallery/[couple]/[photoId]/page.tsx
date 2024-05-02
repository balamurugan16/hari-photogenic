import Carousel from "@/components/carousel";
import { getImages } from "@/lib/actions/images";

export default async function photo() {
  const images = await getImages();

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel images={images} />
    </main>
  );
}
