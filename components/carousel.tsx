// "use client";

// import { useParams, useRouter } from "next/navigation";
// // import { useKeypress } from "react-use-keypress";
// import { variants } from "@/lib/animations";
// import downloadPhoto from "@/lib/download-photo";
// import { ImageProps } from "@/lib/types";
// import { getDimensions, isLandscape, range } from "@/lib/utils";
// import {
//   ArrowDownTrayIcon,
//   ArrowTopRightOnSquareIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import { AnimatePresence, MotionConfig, motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import { useKeypress } from "@/lib/hooks/use-keypress";

// type Props = {
//   images: ImageProps[];
// };

// export default function Carousel({ images }: Props) {
//   const router = useRouter();
//   const { couple, photoId } = useParams<{ couple: string; photoId: string }>();
//   const index = Number(photoId);

//   const [direction, setDirection] = useState(0);
//   const [curIndex, setCurIndex] = useState(index);
//   const [loaded, setLoaded] = useState(false);
//   let currentImage = images[curIndex];

//   function changePhotoId(newVal: number) {
//     setDirection(newVal > index ? 1 : -1);
//     setCurIndex(newVal);
//     router.push(`/gallery/${couple}/${newVal}`);
//   }

//   useKeypress("ArrowRight", () => {
//     if (index + 1 < images.length) {
//       changePhotoId(index + 1);
//     }
//   });

//   useKeypress("ArrowLeft", () => {
//     if (index > 0) {
//       changePhotoId(index - 1);
//     }
//   });

//   /*
//   actions
//   1. keypress (arrow keys)
//   2. swipe
//   3. mouse next and prev
//   */

//   return (
//     <div className="w-full h-full flex items-center justify-center">
//       {/* Main image */}
//       <div
//         className={`relative flex items-center justify-center overflow-hidden ${
//           isLandscape(currentImage) ? "w-full h-60 md:h-full" : "h-full w-96"
//         }`}
//       >
//         <Image
//           src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.fileName}`}
//           fill
//           className="object-cover"
//           alt={`${couple}-${photoId}`}
//           priority
//           onLoad={() => setLoaded(true)}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageProps } from "@/lib/types";
import { isLandscape } from "@/lib/utils";
import Image from "next/image";

type Props = {
  images: ImageProps[];
};

export function ImageCarousel({ images }: Props) {
  const { couple, photoId } = useParams<{ couple: string; photoId: string }>();

  return (
    <Carousel className="h-[90dvh] w-[70dvw]">
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
              alt={`${couple}-${photoId}`}
              priority={index === 0}
              // onLoad={() => setLoaded(true)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
