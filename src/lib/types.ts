export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
}

export interface Service {
  id: number;
  title: string;
  desc: string;
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
