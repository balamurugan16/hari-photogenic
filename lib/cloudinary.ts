import cloudinary from "cloudinary"
import type { ImageProps, CloudinaryResource } from "./types";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

let cachedResults: CloudinaryResource;

export default async function getImagesFromCloudinary() {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute() as CloudinaryResource;
    cachedResults = fetchedResults;
  }
  return cachedResults;
}

export async function getImages() {
  const results = await getImagesFromCloudinary()
  const images = results.resources.map<ImageProps>((resource, i) => {
    return {
      id: i,
      height: +resource.height,
      width: +resource.width,
      fileName: `${resource.public_id}.${resource.format}`
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
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.fileName}`,
  )
  const buffer = await response.arrayBuffer()
  const url = `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`
  return url;
}

export async function getImage(id: string) {
  const results = await getImagesFromCloudinary();

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: +result.height,
      width: +result.width,
      fileName: `${result.public_id}.${result.format}`
    });
    i++;
  }

  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(id),
  ) as ImageProps;

  currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);
  return currentPhoto;
}