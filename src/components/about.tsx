'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, ShoppingBag, Award } from 'lucide-react';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.card-animate');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                card.classList.remove(
                  'opacity-0',
                  'translate-y-12',
                  'scale-95'
                );
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais capacitados e apaixonados por animais, com anos de experiência no cuidado de pets.',
    },
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description:
        'Cada pet é único e merece cuidados especiais. Oferecemos atendimento individualizado para cada necessidade.',
    },
    {
      icon: ShoppingBag,
      title: 'Produtos de Qualidade',
      description:
        'Selecionamos apenas os melhores produtos e marcas reconhecidas para garantir o bem-estar do seu pet.',
    },
    {
      icon: Award,
      title: 'Excelência Comprovada',
      description:
        'Reconhecimento dos nossos clientes através de avaliações positivas e recomendações.',
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Sobre a <span className="text-[var(--primary)]">VivaPet</span>
          </h2>
          <p className="text-[var(--foreground)]/80 mx-auto max-w-3xl text-lg">
            Há mais de 5 anos cuidando do seu melhor amigo com carinho,
            dedicação e profissionalismo. Nossa missão é proporcionar qualidade
            de vida e bem-estar para todos os pets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-animate group translate-y-12 scale-95 text-center opacity-0 transition-all duration-700 ease-out hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <feature.icon className="h-8 w-8 text-[var(--primary)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
              Nossa História
            </h3>
            <p className="text-[var(--foreground)]/80 mb-4 leading-relaxed">
              A VivaPet nasceu do amor incondicional por animais e da vontade de
              oferecer o melhor cuidado para os pets da nossa comunidade.
              Começamos como um pequeno pet shop de bairro e hoje somos
              referência em serviços especializados.
            </p>
            <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
              Nossa equipe é formada por veterinários, tosadores e cuidadores
              experientes que tratam cada pet como se fosse da família.
              Acreditamos que o bem-estar animal é fundamental para a felicidade
              de toda a família.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  100%
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  Satisfação
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  5⭐
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  Avaliação
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  Certificada
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  CRMV-SP
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-center text-8xl opacity-50">🏥🐾</div>
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              💝
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
