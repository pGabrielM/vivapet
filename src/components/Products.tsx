"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export default function Products() {
  const productsRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".product-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-x-0");
                card.classList.remove("opacity-0", "translate-x-24");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: "Ração Premium Sabor Frango",
      price: 89.90,
      image: "🍖",
      category: "Alimentação",
      description: "Ração super premium rica em proteínas para cães adultos",
    },
    {
      id: 2,
      name: "Brinquedo Interativo Puzzle",
      price: 45.50,
      image: "🧩",
      category: "Brinquedos",
      description: "Estimula a inteligência e reduz a ansiedade do seu pet",
    },
    {
      id: 3,
      name: "Coleira Antipulgas Elegante",
      price: 32.90,
      image: "📿",
      category: "Acessórios",
      description: "Proteção contra pulgas e carrapatos por até 8 meses",
    },
    {
      id: 4,
      name: "Cama Ortopédica Confort",
      price: 156.80,
      image: "🛏️",
      category: "Conforto",
      description: "Cama com espuma viscoelástica para maior conforto",
    },
    {
      id: 5,
      name: "Kit Higiene Dental",
      price: 28.70,
      image: "🦷",
      category: "Higiene",
      description: "Escova e pasta dental específica para pets",
    },
    {
      id: 6,
      name: "Transportadora Segura",
      price: 124.00,
      image: "🎒",
      category: "Transporte",
      description: "Ideal para viagens e consultas veterinárias",
    },
    {
      id: 7,
      name: "Petisco Natural Orgânico",
      price: 19.90,
      image: "🦴",
      category: "Petiscos",
      description: "Petiscos 100% naturais sem conservantes",
    },
    {
      id: 8,
      name: "Fonte de Água Automática",
      price: 78.50,
      image: "⛲",
      category: "Alimentação",
      description: "Mantém a água sempre fresca e filtrada",
    },
  ];

  const handleAddToWishlist = (productName: string) => {
    // Simulate adding to wishlist
    alert(`${productName} adicionado à sua lista de desejos!`);
  };

  return (
    <section id="products" ref={productsRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Produtos que seu pet vai <span className="text-[var(--primary)]">amar</span>
          </h2>
          <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            Selecionamos os melhores produtos de marcas reconhecidas para garantir qualidade e segurança.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="product-card opacity-0 translate-x-24 transition-all duration-600 ease-out flex-shrink-0 w-80 snap-start hover:shadow-lg group"
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <span className="text-xs font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <CardTitle className="text-lg font-semibold text-[var(--foreground)] mt-2">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--foreground)]/70 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs text-[var(--foreground)]/50 line-through">
                      {formatPrice(product.price * 1.2)}
                    </span>
                  </div>

                  <Button 
                    className="w-full"
                    onClick={() => handleAddToWishlist(product.name)}
                  >
                    Adicionar à Lista
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, idx) => (
              <div 
                key={idx}
                className="w-2 h-2 rounded-full bg-[var(--border)] hover:bg-[var(--primary)] transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Alimentação', 'Brinquedos', 'Acessórios', 'Higiene'].map((category) => (
            <div 
              key={category}
              className="text-center p-4 rounded-lg bg-[var(--muted)]/30 hover:bg-[var(--primary)]/10 transition-colors cursor-pointer"
            >
              <div className="text-2xl mb-2">
                {category === 'Alimentação' && '🍖'}
                {category === 'Brinquedos' && '🎾'}
                {category === 'Acessórios' && '📿'}
                {category === 'Higiene' && '🧼'}
              </div>
              <h3 className="font-medium text-[var(--foreground)]">{category}</h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-[var(--foreground)]/80 mb-6">
            Entre em contato conosco! Temos uma linha completa de produtos e podemos conseguir itens especiais.
          </p>
          <Button size="lg">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}