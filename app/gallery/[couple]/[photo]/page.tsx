import Carousel from "@/components/carousel";
import { getImage, getImages } from "@/lib/actions/images";

export default async function photo({ params }: { params: { photo: string } }) {
  const images = await getImages();

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel images={images} index={Number(params.photo)} />
    </main>
  );
}
