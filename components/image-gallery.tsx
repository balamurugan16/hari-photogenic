"use client";

import { ImageProps } from "@/lib/types";
import { Masonry } from "@/components/masonry";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLastViewedPhoto } from "@/lib/hooks/use-last-viewed-photo";
import { useEffect, useRef } from "react";

type Props = {
  images: ImageProps[];
};

export function ImageGallery({ images }: Props) {
  const path = usePathname();
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && lastViewedPhotoRef.current) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [lastViewedPhoto, setLastViewedPhoto]);

  return (
    <Masonry
      items={images}
      config={{
        columns: [1, 2, 3, 4],
        gap: 8,
        media: [400, 640, 1024, 1280],
      }}
      render={({ id, public_id, format, blurDataUrl, height, width }) => {
        return (
          <Link
            href={`/gallery/${path.split("/").at(-1)}/${id}`}
            key={id}
            ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
            shallow
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt="Next.js Conf photo"
              className="group-hover:brightness-110 brightness-90 rounded-lg transform transition will-change-auto"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_300/${public_id}.${format}`}
              width={width}
              height={height}
            />
          </Link>
        );
      }}
    />
  );
}
