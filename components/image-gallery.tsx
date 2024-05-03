"use client";

import { ImageProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLastViewedPhoto } from "@/lib/hooks/use-last-viewed-photo";
import { useEffect, useRef } from "react";
import { getImageOrientation } from "@/lib/utils";

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
    <div className="grid grid-cols-3 gap-4 grid-flow-dense md:grid-cols-auto-fit md:auto-rows-[250px]">
      {images.map(({ id, fileName, blurDataUrl, height, width }) => {
        const imageOrientation = getImageOrientation({ height, width });
        const href = `/gallery/${path.split("/").at(-1)}/images?photoId=${id}`;
        const imageSrc = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${fileName}`;

        return (
          <Link
            href={href}
            key={id}
            ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
            shallow
            className={` after:contents group relative mb-5 w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight ${
              imageOrientation === "landscape" ? "col-span-2" : "row-span-2"
            }`}
          >
            <Image
              alt={`${fileName}`}
              className="max-w-full h-full aspect-auto align-middle inline-block object-cover group-hover:brightness-110 brightness-90 rounded-lg transform transition will-change-auto"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={imageSrc}
              width={imageOrientation === "portrait" ? 4000 : 2500}
              height={imageOrientation === "portrait" ? 2500 : 4000}
            />
          </Link>
        );
      })}
    </div>
  );
}
