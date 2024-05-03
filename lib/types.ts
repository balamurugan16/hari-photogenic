export type ImageProps = {
  id: number;
  height: number;
  width: number;
  fileName: string;
  blurDataUrl?: string;
}

export type CloudinaryResource = {
  resources: Record<string, string>[]
};
