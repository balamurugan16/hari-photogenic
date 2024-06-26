import cloudinary from "cloudinary"
import type { ImageProps, CloudinaryResource } from "./types";
import { env } from "./env";

cloudinary.v2.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
})

let cachedResults: CloudinaryResource;

async function getImagesFromCloudinary(folder: string) {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:albums/${folder}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute() as CloudinaryResource;
    cachedResults = fetchedResults;
  }
  return cachedResults;
}

export async function getImages(folder: string) {
  const results = await getImagesFromCloudinary(folder)
  const images = results.resources.map<ImageProps>((resource, i) => {
    return {
      id: i + 1,
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

// export async function getImage(id: string) {
//   const results = await getImagesFromCloudinary();

//   let reducedResults: ImageProps[] = [];
//   let i = 0;
//   for (let result of results.resources) {
//     reducedResults.push({
//       id: i,
//       height: +result.height,
//       width: +result.width,
//       fileName: `${result.public_id}.${result.format}`
//     });
//     i++;
//   }

//   const currentPhoto = reducedResults.find(
//     (img) => img.id === Number(id),
//   ) as ImageProps;

//   currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);
//   return currentPhoto;
// }