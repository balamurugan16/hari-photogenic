import { getAllAlbums } from "@/lib/actions/albums";
import Image from "next/image";
import Link from "next/link";

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getEventDuration(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const shortDateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
  });
  const longDateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (isSameDay(startDate, endDate)) {
    return `${longDateFormatter.format(startDate)}`;
  }

  return `${shortDateFormatter.format(startDate)} - ${longDateFormatter.format(
    endDate
  )}`;
}

export default async function Home() {
  const albums = await getAllAlbums();

  return (
    <main className="mx-auto p-4 max-w-[1960px]">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-12">
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
      </section>
    </main>
  );
}
