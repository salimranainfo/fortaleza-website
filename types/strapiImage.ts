export interface IStrapiImageSize {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
}

export interface IStrapiImage {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  formats: {
    small: IStrapiImageSize;
    medium?: IStrapiImageSize;
    large?: IStrapiImageSize;
    thumbnail: IStrapiImageSize;
  };
  hash: string;
  height: number;
  id: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
}
