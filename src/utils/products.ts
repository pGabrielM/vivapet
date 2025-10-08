export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ração Premium para Cães",
    description: "Ração completa e balanceada para cães adultos de todas as raças",
    price: 89.9,
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop",
    category: "Alimentação",
    tags: ["Premium", "Cães"],
  },
  {
    id: 2,
    name: "Shampoo Medicinal",
    description: "Shampoo terapêutico para tratamento de pele e pelagem",
    price: 45.5,
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=300&fit=crop",
    category: "Higiene",
    tags: ["Medicinal", "Pele"],
  },
  {
    id: 3,
    name: "Antipulgas e Carrapatos",
    description: "Tratamento preventivo eficaz contra parasitas externos",
    price: 67.8,
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop",
    category: "Saúde",
    tags: ["Parasitas", "Preventivo"],
  },
  {
    id: 4,
    name: "Cama Confortável",
    description: "Cama ortopédica para cães de médio porte",
    price: 129.9,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
    category: "Conforto",
    tags: ["Ortopédica", "Conforto"],
  },
  {
    id: 5,
    name: "Brinquedo Interativo",
    description: "Brinquedo inteligente para estimular a mente do seu pet",
    price: 34.9,
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=400&h=300&fit=crop",
    category: "Brinquedos",
    tags: ["Interativo", "Inteligente"],
  },
  {
    id: 6,
    name: "Suplemento Nutricional",
    description: "Complexo vitamínico para saúde geral e vitalidade",
    price: 78.5,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    category: "Suplementos",
    tags: ["Vitaminas", "Vitalidade"],
  },
];
