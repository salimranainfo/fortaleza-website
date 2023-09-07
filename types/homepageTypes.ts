import { IImageLink, ISeo } from './generalTypes';
import { IStrapiImage } from './strapiImage';

export interface IHero {
  title: string;
  description: string;
  image: IStrapiImage;
}

export interface IAboutUs {
  title: string;
  subtitle: string;
  description: string;
  image: IStrapiImage;
}

export interface IService {
  name: string;
  category: string;
  description: string;
  image: IStrapiImage;
}

export interface IClients {
  title: string;
  subtitle: string;
  client_list: IImageLink[];
}

export interface IHomepage {
  hero: IHero;
  about_us: IAboutUs;
  services: IService[];
  clients: IClients;
  gallery: IStrapiImage[];
  seo: ISeo;
}
