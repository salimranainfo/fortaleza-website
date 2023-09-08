import { IInput, ISeo } from './generalTypes';
import { IStrapiImage } from './strapiImage';

export interface IHero {
  title: string;
  image: IStrapiImage;
}

export interface IContactInfo {
  title: string;
  subtitle: string;
}

export interface IContactForm {
  title: string;
  subtitle: string;
  name: IInput;
  email: IInput;
  message: IInput;
  submit_button: string;
}

export interface IContactPage {
  hero: IHero;
  contact_info: IContactInfo;
  contact_form: IContactForm;
  image: IStrapiImage;
  gallery: IStrapiImage[];
  seo: ISeo;
}
