"use server";

import getResults from "../cached-images";
import cloudinary from "../cloudinary";
import { ImageProps } from "../types";
// import imagemin from "imagemin"
// import imageminJpegTran from "imagemin-jpegtran"

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

  const blurImages = await Promise.all(images.map(getBase64ImageUrl))

  for (let i = 0; i < images.length; i++) {
    images[i].blurDataUrl = blurImages[i]
  }

  return images;
}

export async function getBase64ImageUrl(image: ImageProps): Promise<string> {
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`,
  )
  const buffer = await response.arrayBuffer()
  // const minified = await imagemin.buffer(Buffer.from(buffer), {
  //   plugins: [imageminJpegTran()]
  // })

  const url = `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`
  return url;
}

export async function getImage(id: string) {
  const results = await getResults();

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(id),
  ) as ImageProps;
  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);
  return currentPhoto;
}