import Carousel from "@/components/carousel";
import { getImage } from "@/lib/actions/images";

export default async function photo({ params }: { params: { photo: string } }) {
  const currentPhoto = await getImage(params.photo);
  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Carousel currentPhoto={currentPhoto} index={Number(params.photo)} />
    </main>
  );
}
