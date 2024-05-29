import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImageGallery } from "@/components/image-gallery";
import { getAlbum } from "@/lib/actions/albums";
import Image from "next/image";

export default async function Gallery({
  params,
}: {
  params: { couple: string };
}) {
  const [album, images] = await getAlbum(params.couple);

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
  });

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 mx-auto p-4 max-w-[90vw]">
        <section className="text-center flex flex-col items-center gap-8">
          <div className="w-full flex flex-col gap-2 items-center">
            <h1 className="uppercase leading-10 tracking-big text-3xl">
              {album.name}
            </h1>
            <p className="uppercase tracking-big text-base text-slate-400">
              {/* {couple.location},{" "}
            <time dateTime={}>
              {dateFormatter.format(album.event_end_date)}
            </time> */}
            </p>
          </div>
          {/* TODO: add a divider here */}
          <Image
            alt={album.name}
            className="object-cover rounded-xl"
            src={album.thumbnail_url}
            priority
            width={1920}
            height={1080}
          />
        </section>
        <ImageGallery images={images} />
      </main>
      <Footer />
    </>
  );
}
