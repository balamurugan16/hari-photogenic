import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full mx-auto ">
      <div className="relative group">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="Wedding Photo 1"
                className="w-full rounded-lg h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
                height={800}
                src="https://picsum.photos/800/1200"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Wedding Photo 2"
                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
                height={800}
                src="https://picsum.photos/800/1200"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Wedding Photo 3"
                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
                height={800}
                src="https://picsum.photos/800/1200"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Wedding Photo 4"
                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover object-center"
                height={800}
                src="https://picsum.photos/800/1200"
                style={{
                  aspectRatio: "1200/800",
                  objectFit: "cover",
                }}
                width={1200}
              />
            </CarouselItem>
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
