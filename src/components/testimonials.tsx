'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      avatar: '👩',
      pet: 'Bidu (Golden Retriever)',
      rating: 5,
      text: 'A VivaPet transformou a rotina do Bidu! O banho e tosa ficaram perfeitos, e a equipe é super carinhosa. Recomendo demais!',
      service: 'Banho & Tosa',
    },
    {
      id: 2,
      name: 'João Santos',
      avatar: '👨',
      pet: 'Mimi (Persa)',
      rating: 5,
      text: 'Deixei a Mimi na hospedagem durante as férias e fiquei tranquilo. Recebo fotos e relatórios diários. Serviço excelente!',
      service: 'Hospedagem',
    },
    {
      id: 3,
      name: 'Ana Costa',
      avatar: '👩‍🦳',
      pet: 'Rex (Vira-lata)',
      rating: 5,
      text: 'O Rex estava com problemas de comportamento e a consultoria veterinária me ajudou muito. Agora ele está mais calmo e feliz!',
      service: 'Consultoria',
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      avatar: '👨‍🦲',
      pet: 'Luna (Border Collie)',
      rating: 5,
      text: 'Os passeios da Luna com a equipe VivaPet são o ponto alto do dia dela. Volta sempre feliz e cansadinha!',
      service: 'Passeios',
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      avatar: '👱‍♀️',
      pet: 'Simba (Maine Coon)',
      rating: 5,
      text: 'Produtos de qualidade excepcional! O Simba adora a ração premium e os brinquedos são super resistentes.',
      service: 'Produtos',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target.querySelector('.testimonial-card');
            if (card) {
              setTimeout(() => {
                card.classList.add('opacity-100', 'scale-100');
                card.classList.remove('opacity-0', 'scale-95');
              }, 200);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'fill-current text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="bg-gradient-to-br from-[var(--background)] to-[#FFF5E1] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            O que nossos <span className="text-[var(--primary)]">clientes</span>{' '}
            dizem
          </h2>
          <p className="text-[var(--foreground)]/80 mx-auto max-w-2xl text-lg">
            A satisfação dos nossos clientes e seus pets é nossa maior
            recompensa.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mx-auto mb-12 max-w-4xl">
          <Card className="testimonial-card duration-800 scale-95 bg-white opacity-0 shadow-xl transition-all ease-out">
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-6xl">
                {testimonials[currentTestimonial].avatar}
              </div>

              <div className="mb-4 flex justify-center">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              <blockquote className="text-[var(--foreground)]/80 mb-6 text-lg italic leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-[var(--foreground)]">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[var(--foreground)]/70">
                  Tutor(a) do {testimonials[currentTestimonial].pet}
                </p>
                <span className="bg-[var(--primary)]/10 mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium text-[var(--primary)]">
                  {testimonials[currentTestimonial].service}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-[var(--muted)]"
          >
            <ChevronLeft className="h-6 w-6 text-[var(--foreground)]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-[var(--muted)]"
          >
            <ChevronRight className="h-6 w-6 text-[var(--foreground)]" />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="mb-12 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentTestimonial
                  ? 'bg-[var(--primary)]'
                  : 'bg-[var(--border)]'
              }`}
            />
          ))}
        </div>

        {/* Mini testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-3 text-3xl">{testimonial.avatar}</div>
                <div className="mb-2 flex justify-center">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-[var(--foreground)]/70 mb-3 text-sm leading-relaxed">
                  &ldquo;{testimonial.text.substring(0, 80)}...&rdquo;
                </p>
                <h5 className="font-medium text-[var(--foreground)]">
                  {testimonial.name}
                </h5>
                <p className="text-[var(--foreground)]/60 text-xs">
                  {testimonial.pet}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold text-[var(--primary)]">
                4.9⭐
              </div>
              <div className="text-[var(--foreground)]/70 text-sm">
                Avaliação Média
              </div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-[var(--primary)]">
                500+
              </div>
              <div className="text-[var(--foreground)]/70 text-sm">
                Clientes Satisfeitos
              </div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-[var(--primary)]">
                100%
              </div>
              <div className="text-[var(--foreground)]/70 text-sm">
                Recomendação
              </div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-[var(--primary)]">
                5 anos
              </div>
              <div className="text-[var(--foreground)]/70 text-sm">
                No Mercado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
