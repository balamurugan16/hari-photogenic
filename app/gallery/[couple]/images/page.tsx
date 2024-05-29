import { ImageCarousel as Carousel } from "@/components/carousel";
import { getAlbum } from "@/lib/actions/albums";

export default async function photo({
  params,
}: {
  params: { couple: string };
}) {
  const [_, images] = await getAlbum(params.couple);

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Carousel images={images} />
    </main>
  );
}
