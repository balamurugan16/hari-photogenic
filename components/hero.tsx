import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const highlightImages = [
  {
    src: "/highlight-images/highlight_1.jpg",
    alt: "wedding photo 1",
  },
  {
    src: "/highlight-images/highlight_2.jpg",
    alt: "wedding photo 2",
  },
  {
    src: "/highlight-images/highlight_3.jpg",
    alt: "wedding photo 1",
  },
  {
    src: "/highlight-images/highlight_4.jpg",
    alt: "wedding photo 4",
  },
  {
    src: "/highlight-images/highlight_5.jpg",
    alt: "wedding photo 5",
  },
];

export function Hero() {
  return (
    <div className="w-full mx-auto ">
      <div className="relative group">
        <Carousel className="w-full">
          <CarouselContent>
            {highlightImages.map((image, id) => (
              <CarouselItem key={id}>
                <Image
                  alt={image.alt}
                  className="w-full rounded-lg h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
                  height={800}
                  src={image.src}
                  style={{
                    aspectRatio: "1200/800",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10  ">
            <ChevronLeftIcon className="h-8 w-8" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <ChevronRightIcon className="h-8 w-8" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
