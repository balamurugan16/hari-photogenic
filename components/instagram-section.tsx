import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const instagramImages = [
  {
    src: "/instagram-images/1.jpg",
    href: "https://www.instagram.com/p/C3R71yQBPSr/",
  },
  {
    src: "/instagram-images/2.jpg",
    href: "https://www.instagram.com/p/C39jdcShIVC/",
  },
  {
    src: "/instagram-images/3.jpg",
    href: "https://www.instagram.com/p/C4ayljBBTjb",
  },
  {
    src: "/instagram-images/4.jpg",
    href: "https://www.instagram.com/p/C7Wsi8qS-Hh/",
  },
];

export function InstagramSection() {
  return (
    <section className="w-full my-10">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-8">
        <div className="flex flex-col items-center gap-6">
          <span className="flex justify-center items-center gap-2">
            <Instagram className="w-6 h-6" />
            <Link
              className="text-lg"
              target="_blank"
              href="https://www.instagram.com/hari_photogenic/"
            >
              @hari_photogenic
            </Link>
          </span>
          <h2 className="font-light tracking-big text-lg md:text-2xl  uppercase">
            Follow me on Instagram
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {instagramImages.map((img) => (
            <Link target="_blank" href={img.href} key={img.href}>
              <Image
                alt="Instagram Photo"
                className="aspect-square w-full overflow-hidden rounded-lg object-cover"
                height="200"
                width="200"
                src={img.src}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
