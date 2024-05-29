import Link from "next/link";
import Image from "next/image";
import { getHighlightAlbums } from "@/lib/actions/albums";
import { getEventDuration } from "@/lib/utils";

export async function GalleryHighlights() {
  const albums = await getHighlightAlbums();
  return (
    <section className="p-4 my-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold">Gallery</h1>
        <Link href="/gallery" className="underline text-sm">
          View more
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                {getEventDuration(album.event_start_date, album.event_end_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
