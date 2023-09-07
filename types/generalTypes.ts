import { IStrapiImage } from './strapiImage';

export interface IButtonLink {
  label: string;
  url: string;
}

export interface IInput {
  label: string;
  placeholder: string;
}

export interface IImageLink {
  image: IStrapiImage;
  url: string;
}

export interface ITitleAndDescription {
  title: string;
  description: string;
}

export interface IHeader {
  logo: IImageLink;
  nav_items: IButtonLink[];
}

export interface IContactInfo {
  title: string;
  email: IButtonLink;
  phone: IButtonLink;
  website: IButtonLink;
}

export interface IHour {
  title: string;
  week_days: string;
  time: string;
}

export interface IFooter {
  title: string;
  description: string;
  contact_info: IContactInfo;
  hours: IHour[];
  logo: IImageLink;
  social_media_links: IImageLink[];
  copy_rights: string;
}

export interface ILayout {
  header: IHeader;
  footer: IFooter;
}

export interface ISeo {
  title: string;
  description: string;
}
