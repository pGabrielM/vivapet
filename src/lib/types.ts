export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
}

export interface Service {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}