"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageProps } from "@/lib/types";
import { isLandscape } from "@/lib/utils";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  images: ImageProps[];
};

export function ImageCarousel({ images }: Props) {
  const { couple } = useParams<{ couple: string }>();
  const searchParams = useSearchParams();
  const photoId = searchParams.get("photoId") ?? "1";
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(+photoId, true);
  }, [api]);

  return (
    <Carousel setApi={setApi} className="h-[90dvh] w-[70dvw]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="grid place-items-center w-full h-full"
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${image.fileName}`}
              // fill
              width={image.width}
              height={image.height}
              className={`object-cover ${
                isLandscape(image) ? "w-full h-60 md:h-full" : "h-[90dvh] w-96"
              }`}
              alt={`${couple}-${image.id}`}
              priority={index === +photoId}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
