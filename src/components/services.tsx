'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bath, Home, Stethoscope, PawPrint } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                card.classList.remove(
                  'opacity-0',
                  'translate-y-12',
                  'scale-95'
                );
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Bath,
      title: 'Banho & Tosa',
      description:
        'Serviços completos de higiene e estética para deixar seu pet sempre lindo e cheiroso.',
      features: [
        'Banho com produtos premium',
        'Tosa higiênica e estética',
        'Corte de unhas',
        'Limpeza de ouvidos',
      ],
      price: 'A partir de R$ 45',
      emoji: '🛁',
    },
    {
      icon: Home,
      title: 'Hospedagem',
      description:
        'Cuidamos do seu pet com carinho quando você não pode estar presente.',
      features: [
        'Ambiente seguro e limpo',
        'Cuidados veterinários',
        'Brincadeiras e exercícios',
        'Relatórios diários',
      ],
      price: 'R$ 80 por dia',
      emoji: '🏠',
    },
    {
      icon: Stethoscope,
      title: 'Consultoria Veterinária',
      description:
        'Orientações básicas de saúde e bem-estar para seu animal de estimação.',
      features: [
        'Avaliação básica',
        'Orientações nutricionais',
        'Prevenção de doenças',
        'Agendamento de consultas',
      ],
      price: 'R$ 120',
      emoji: '🩺',
    },
    {
      icon: PawPrint,
      title: 'Passeios',
      description:
        'Exercícios e diversão para manter seu pet ativo e socializado.',
      features: [
        'Passeios supervisionados',
        'Exercícios adequados',
        'Socialização',
        'Relatório de atividades',
      ],
      price: 'R$ 35 por passeio',
      emoji: '🦮',
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="bg-gradient-to-br from-[var(--background)] to-[#FFF5E1] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Nossos <span className="text-[var(--primary)]">Serviços</span>
          </h2>
          <p className="text-[var(--foreground)]/80 mx-auto max-w-2xl text-lg">
            Oferecemos uma gama completa de serviços para cuidar do seu pet com
            todo o carinho e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card duration-600 group translate-y-12 scale-95 bg-white opacity-0 transition-all ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="pb-4 text-center">
                <div className="bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 mx-auto mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full transition-colors">
                  <service.icon className="h-10 w-10 text-[var(--primary)]" />
                </div>
                <div className="mb-2 text-4xl">{service.emoji}</div>
                <CardTitle className="text-xl font-bold text-[var(--foreground)]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[var(--foreground)]/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="text-[var(--foreground)]/60 mb-4 space-y-1 text-xs">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="mr-2 h-1 w-1 rounded-full bg-[var(--primary)]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4 text-lg font-bold text-[var(--primary)]">
                  {service.price}
                </div>

                <Button
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Precisa de um atendimento personalizado?
          </h3>
          <p className="text-[var(--foreground)]/80 mx-auto mb-6 max-w-2xl">
            Entre em contato conosco para discutir as necessidades específicas
            do seu pet. Oferecemos pacotes personalizados e descontos para
            serviços recorrentes.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection('contact')}>
              Falar com Especialista
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
