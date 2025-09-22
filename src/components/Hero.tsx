"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      // Add animation classes on load
      const elements = heroRef.current.querySelectorAll(".animate-fade-in");
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("opacity-100", "translate-y-0");
          element.classList.remove("opacity-0", "translate-y-8");
        }, index * 200);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--background)] via-[#FFF5E1] to-[#FFE8D6] pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="animate-fade-in opacity-0 translate-y-8 transition-all duration-800 ease-out text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
              Cuidando do seu pet com{" "}
              <span className="text-[var(--primary)]">carinho</span> e{" "}
              <span className="text-[var(--secondary)]">dedicação</span>
            </h1>
            
            <p className="animate-fade-in opacity-0 translate-y-8 transition-all duration-800 ease-out text-lg sm:text-xl text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Na VivaPet, oferecemos serviços completos para o bem-estar do seu melhor amigo. 
              Somos referência em pet shop e cuidados especializados.
            </p>

            <div className="animate-fade-in opacity-0 translate-y-8 transition-all duration-800 ease-out flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                onClick={() => scrollToSection("services")}
                className="text-lg"
              >
                Agendar Banho & Tosa
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("products")}
                className="text-lg"
              >
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in opacity-0 translate-y-8 transition-all duration-800 ease-out mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">500+</div>
                <div className="text-sm text-[var(--foreground)]/70">Pets Atendidos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">5 anos</div>
                <div className="text-sm text-[var(--foreground)]/70">de Experiência</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">24/7</div>
                <div className="text-sm text-[var(--foreground)]/70">Suporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="animate-fade-in opacity-0 translate-y-8 transition-all duration-800 ease-out flex justify-center lg:justify-end">
            <div className="mascot relative animate-bounce">
              {/* Pet illustration placeholder - using emojis for now */}
              <div className="text-9xl sm:text-[200px] relative">
                <span className="absolute top-0 left-0 transform -rotate-12">🐕</span>
                <span className="absolute top-4 left-20 transform rotate-12">🐱</span>
                <span className="absolute top-8 left-10 text-6xl">❤️</span>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce">⭐</div>
              <div className="absolute -bottom-4 -left-4 text-2xl animate-pulse">🦴</div>
              <div className="absolute top-1/2 -right-8 text-2xl animate-bounce" style={{ animationDelay: "0.5s" }}>🎾</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}