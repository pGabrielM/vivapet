export interface Product {
  id: number;
  nameKey?: string;
  name?: string;
  descriptionKey?: string;
  description?: string;
  price: number;
  image: string;
  categoryKey?: string;
  category?: string;
  tags: string[];
}

export interface Doctor {
  id: number;
  nameKey?: string;
  name?: string;
  specialtyKey?: string;
  specialty?: string;
  image: string;
  experienceKey?: string;
  experience?: string;
}

export interface Service {
  id: number;
  titleKey?: string;
  title?: string;
  descKey?: string;
  desc?: string;
  icon: string;
  image: string;
}

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}
