"use client";

import { ImageProps } from "@/lib/types";
import { Masonry } from "@/components/masonry";
import Image from "next/image";

type Props = {
  images: ImageProps[];
};

export function ImageGallery({ images }: Props) {
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
          <Image
            alt="Next.js Conf photo"
            key={id}
            className="group-hover:brightness-110 brightness-90 rounded-lg transform transition will-change-auto"
            style={{ transform: "translate3d(0, 0, 0)" }}
            // placeholder="blur"
            // blurDataURL={blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_300/${public_id}.${format}`}
            width={300}
            height={300}
          />
        );
      }}
    />
  );
}
