export type ImageProps = {
  id: number;
  height: number;
  width: number;
  fileName: string;
  blurDataUrl?: string;
}

export type SharedModalProps = {
  index: number;
  images: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}