import { ImageGallery } from "@/components/image-gallery";
import { getImages } from "@/lib/cloudinary";
import Image from "next/image";

const couple = {
  name: "Photoshoot of Ram and Shalini",
  location: "Puducherry",
  eventDate: new Date(),
  thumbnailUrl:
    "https://res.cloudinary.com/dyo0sulm6/image/upload/v1714559111/images/g31ltwmhlenqujn106ke.jpg",
};

export default async function Home() {
  const images = await getImages();

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
  });

  return (
    <main className="flex flex-col gap-8 mx-auto p-4 max-w-[90vw]">
      <section className="text-center flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-2 items-center">
          <h1 className="uppercase leading-10 tracking-big text-3xl">
            {couple.name}
          </h1>
          <p className="uppercase tracking-big text-base text-slate-400">
            {couple.location},{" "}
            <time dateTime={couple.eventDate.toString()}>
              {dateFormatter.format(couple.eventDate)}
            </time>
          </p>
        </div>
        {/* TODO: add a divider here */}
        <Image
          alt={couple.name}
          className="object-cover rounded-xl"
          src={couple.thumbnailUrl}
          priority
          width={1920}
          height={1080}
        />
      </section>
      <ImageGallery images={images} />
    </main>
  );
}
