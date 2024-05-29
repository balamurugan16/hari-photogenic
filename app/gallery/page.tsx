import { getAllAlbums } from "@/lib/actions/albums";
import Image from "next/image";
import Link from "next/link";
import { getEventDuration } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default async function Home() {
  const albums = await getAllAlbums();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1960px]">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6 py-4">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Link
                className="absolute inset-0 z-10"
                href={`/gallery/${album.folder_name}`}
              >
                <span className="sr-only">View Album</span>
              </Link>
              <Image
                alt={album.name}
                className="aspect-[3/2] w-full object-cover transition-all duration-300 group-hover:scale-105"
                height={400}
                src={album.thumbnail_url}
                width={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{album.name}</h3>
                <p className="text-sm">
                  {getEventDuration(
                    album.event_start_date,
                    album.event_end_date
                  )}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
