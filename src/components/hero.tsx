'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Add animation classes on load
      const elements = heroRef.current.querySelectorAll('.animate-fade-in');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-8');
        }, index * 200);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--background)] via-[#FFF5E1] to-[#FFE8D6] pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="animate-fade-in duration-800 mb-6 translate-y-8 text-4xl font-bold text-[var(--foreground)] opacity-0 transition-all ease-out sm:text-5xl lg:text-6xl">
              Cuidando do seu pet com{' '}
              <span className="text-[var(--primary)]">carinho</span> e{' '}
              <span className="text-[var(--secondary)]">dedicação</span>
            </h1>

            <p className="animate-fade-in duration-800 text-[var(--foreground)]/80 mx-auto mb-8 max-w-2xl translate-y-8 text-lg opacity-0 transition-all ease-out sm:text-xl lg:mx-0">
              Na VivaPet, oferecemos serviços completos para o bem-estar do seu
              melhor amigo. Somos referência em pet shop e cuidados
              especializados.
            </p>

            <div className="animate-fade-in duration-800 flex translate-y-8 flex-col justify-center gap-4 opacity-0 transition-all ease-out sm:flex-row lg:justify-start">
              <Button
                size="xl"
                onClick={() => scrollToSection('services')}
                className="text-lg"
              >
                Agendar Banho & Tosa
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection('products')}
                className="text-lg"
              >
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in duration-800 mt-12 grid translate-y-8 grid-cols-3 gap-6 text-center opacity-0 transition-all ease-out">
              <div>
                <div className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
                  500+
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  Pets Atendidos
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
                  5 anos
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  de Experiência
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)] sm:text-3xl">
                  24/7
                </div>
                <div className="text-[var(--foreground)]/70 text-sm">
                  Suporte
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="animate-fade-in duration-800 flex translate-y-8 justify-center opacity-0 transition-all ease-out lg:justify-end">
            <div className="mascot relative animate-bounce">
              {/* Pet illustration placeholder - using emojis for now */}
              <div className="relative text-9xl sm:text-[200px]">
                <span className="absolute left-0 top-0 -rotate-12 transform">
                  🐕
                </span>
                <span className="absolute left-20 top-4 rotate-12 transform">
                  🐱
                </span>
                <span className="absolute left-10 top-8 text-6xl">❤️</span>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-4 -top-4 animate-bounce text-3xl">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 animate-pulse text-2xl">
                🦴
              </div>
              <div
                className="absolute -right-8 top-1/2 animate-bounce text-2xl"
                style={{ animationDelay: '0.5s' }}
              >
                🎾
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
