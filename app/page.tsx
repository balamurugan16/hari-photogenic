import { ImageGallery } from "@/components/image-gallery";
import { getImages } from "@/lib/actions/images";

export default async function Home() {
  const images = await getImages();

  return (
    <main className="mx-auto p-4 max-w-[1960px]">
      <ImageGallery images={images} />
    </main>
  );
}
