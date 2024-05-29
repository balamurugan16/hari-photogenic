import { ImageProps } from "../types";

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

