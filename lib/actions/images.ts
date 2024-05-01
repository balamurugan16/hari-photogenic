"use server";

import cloudinary from "../cloudinary";
import { ImageProps } from "../types";

export async function getImages() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(50)
    .execute() as {
      resources: Record<string, string>[]
    };

  const images = results.resources.map<ImageProps>((resource, i) => {
    return {
      id: i,
      height: +resource.height,
      width: +resource.width,
      public_id: resource.public_id,
      format: resource.format
    } satisfies ImageProps
  })

  //TODO: blur data placeholders should be generated

  return images;
}