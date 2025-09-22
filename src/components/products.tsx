'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export default function Products() {
  const productsRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-x-0');
                card.classList.remove('opacity-0', 'translate-x-24');
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
      name: 'Ração Premium Sabor Frango',
      price: 89.9,
      image: '🍖',
      category: 'Alimentação',
      description: 'Ração super premium rica em proteínas para cães adultos',
    },
    {
      id: 2,
      name: 'Brinquedo Interativo Puzzle',
      price: 45.5,
      image: '🧩',
      category: 'Brinquedos',
      description: 'Estimula a inteligência e reduz a ansiedade do seu pet',
    },
    {
      id: 3,
      name: 'Coleira Antipulgas Elegante',
      price: 32.9,
      image: '📿',
      category: 'Acessórios',
      description: 'Proteção contra pulgas e carrapatos por até 8 meses',
    },
    {
      id: 4,
      name: 'Cama Ortopédica Confort',
      price: 156.8,
      image: '🛏️',
      category: 'Conforto',
      description: 'Cama com espuma viscoelástica para maior conforto',
    },
    {
      id: 5,
      name: 'Kit Higiene Dental',
      price: 28.7,
      image: '🦷',
      category: 'Higiene',
      description: 'Escova e pasta dental específica para pets',
    },
    {
      id: 6,
      name: 'Transportadora Segura',
      price: 124.0,
      image: '🎒',
      category: 'Transporte',
      description: 'Ideal para viagens e consultas veterinárias',
    },
    {
      id: 7,
      name: 'Petisco Natural Orgânico',
      price: 19.9,
      image: '🦴',
      category: 'Petiscos',
      description: 'Petiscos 100% naturais sem conservantes',
    },
    {
      id: 8,
      name: 'Fonte de Água Automática',
      price: 78.5,
      image: '⛲',
      category: 'Alimentação',
      description: 'Mantém a água sempre fresca e filtrada',
    },
  ];

  const handleAddToWishlist = (productName: string) => {
    // Simulate adding to wishlist
    alert(`${productName} adicionado à sua lista de desejos!`);
  };

  return (
    <section id="products" ref={productsRef} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Produtos que seu pet vai{' '}
            <span className="text-[var(--primary)]">amar</span>
          </h2>
          <p className="text-[var(--foreground)]/80 mx-auto max-w-2xl text-lg">
            Selecionamos os melhores produtos de marcas reconhecidas para
            garantir qualidade e segurança.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="product-card duration-600 group w-80 flex-shrink-0 translate-x-24 snap-start opacity-0 transition-all ease-out hover:shadow-lg"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
                    {product.image}
                  </div>
                  <span className="bg-[var(--primary)]/10 rounded-full px-2 py-1 text-xs font-medium text-[var(--primary)]">
                    {product.category}
                  </span>
                  <CardTitle className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--foreground)]/70 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-[var(--foreground)]/50 text-xs line-through">
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
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map(
              (_, idx) => (
                <div
                  key={idx}
                  className="h-2 w-2 cursor-pointer rounded-full bg-[var(--border)] transition-colors hover:bg-[var(--primary)]"
                />
              )
            )}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {['Alimentação', 'Brinquedos', 'Acessórios', 'Higiene'].map(
            (category) => (
              <div
                key={category}
                className="bg-[var(--muted)]/30 hover:bg-[var(--primary)]/10 cursor-pointer rounded-lg p-4 text-center transition-colors"
              >
                <div className="mb-2 text-2xl">
                  {category === 'Alimentação' && '🍖'}
                  {category === 'Brinquedos' && '🎾'}
                  {category === 'Acessórios' && '📿'}
                  {category === 'Higiene' && '🧼'}
                </div>
                <h3 className="font-medium text-[var(--foreground)]">
                  {category}
                </h3>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="from-[var(--primary)]/10 to-[var(--secondary)]/10 mt-16 rounded-2xl bg-gradient-to-r p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Não encontrou o que procura?
          </h3>
          <p className="text-[var(--foreground)]/80 mb-6">
            Entre em contato conosco! Temos uma linha completa de produtos e
            podemos conseguir itens especiais.
          </p>
          <Button size="lg">Ver Catálogo Completo</Button>
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
