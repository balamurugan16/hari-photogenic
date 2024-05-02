import { ImageProps } from "../types";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function createSafeArray(data: number | number[]) {
  return Array.isArray(data) ? data : [data];
}

export const range = (start: number, end: number) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += 1) {
    output.push(i);
  }
  return output;
};

export function getImageOrientation(
  image: Pick<ImageProps, "width" | "height">
): "landscape" | "portrait" {
  return image.width > image.height ? "landscape" : "portrait";
}

export function isLandscape(
  image: Pick<ImageProps, "width" | "height">
): boolean {
  return image.width > image.height;
}

export function getDimensions(
  image: Pick<ImageProps, "width" | "height">
): Pick<ImageProps, "width" | "height"> {
  if (isLandscape(image)) {
    return {
      width: 1920,
      height: 1080
    }
  }
  return {
    height: 1920,
    width: 1080
  }
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}