"use client";

import { useLastViewedPhoto } from "@/lib/hooks/use-last-viewed-photo";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// import { useKeypress } from "react-use-keypress";
import SharedModal from "./shared-modal";
import { ImageProps } from "@/lib/types";
import { useRef, useState } from "react";

export default function Modal({
  images,
  index,
}: {
  images: ImageProps[];
  // onClose?: () => void;
  index: number;
}) {
  let overlayRef = useRef();
  const router = useRouter();

  const path = usePathname();

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    router.back();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(`/gallery/bala-shans/${newVal}`);
  }

  // useKeypress("ArrowRight", () => {
  //   if (index + 1 < images.length) {
  //     changePhotoId(index + 1);
  //   }
  // });

  // useKeypress("ArrowLeft", () => {
  //   if (index > 0) {
  //     changePhotoId(index - 1);
  //   }
  // });

  return (
    <SharedModal
      index={curIndex}
      direction={direction}
      images={images}
      changePhotoId={changePhotoId}
      closeModal={handleClose}
      navigation={true}
    />
  );
}
