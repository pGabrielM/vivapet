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
    image: "/images/products/racao-premium.jpg",
    category: "Alimentação",
    tags: ["Premium", "Cães"],
  },
  {
    id: 2,
    name: "Shampoo Medicinal",
    description: "Shampoo terapêutico para tratamento de pele e pelagem",
    price: 45.5,
    image: "/images/products/antipulgas.jpg",
    category: "Higiene",
    tags: ["Medicinal", "Pele"],
  },
  {
    id: 3,
    name: "Antipulgas e Carrapatos",
    description: "Tratamento preventivo eficaz contra parasitas externos",
    price: 67.8,
    image: "/images/products/brinquedos.jpg",
    category: "Saúde",
    tags: ["Parasitas", "Preventivo"],
  },
  {
    id: 4,
    name: "Cama Confortável",
    description: "Cama ortopédica para cães de médio porte",
    price: 129.9,
    image: "/images/products/kit-higiene.jpg",
    category: "Conforto",
    tags: ["Ortopédica", "Conforto"],
  },
  {
    id: 5,
    name: "Brinquedo Interativo",
    description: "Brinquedo inteligente para estimular a mente do seu pet",
    price: 34.9,
    image: "/images/products/coleiras.jpg",
    category: "Brinquedos",
    tags: ["Interativo", "Inteligente"],
  },
  {
    id: 6,
    name: "Suplemento Nutricional",
    description: "Complexo vitamínico para saúde geral e vitalidade",
    price: 78.5,
    image: "/images/products/cama-conforto.jpg",
    category: "Suplementos",
    tags: ["Vitaminas", "Vitalidade"],
  },
];
