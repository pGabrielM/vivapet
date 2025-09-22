"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      avatar: "👩",
      pet: "Bidu (Golden Retriever)",
      rating: 5,
      text: "A VivaPet transformou a rotina do Bidu! O banho e tosa ficaram perfeitos, e a equipe é super carinhosa. Recomendo demais!",
      service: "Banho & Tosa",
    },
    {
      id: 2,
      name: "João Santos",
      avatar: "👨",
      pet: "Mimi (Persa)",
      rating: 5,
      text: "Deixei a Mimi na hospedagem durante as férias e fiquei tranquilo. Recebo fotos e relatórios diários. Serviço excelente!",
      service: "Hospedagem",
    },
    {
      id: 3,
      name: "Ana Costa",
      avatar: "👩‍🦳",
      pet: "Rex (Vira-lata)",
      rating: 5,
      text: "O Rex estava com problemas de comportamento e a consultoria veterinária me ajudou muito. Agora ele está mais calmo e feliz!",
      service: "Consultoria",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      avatar: "👨‍🦲",
      pet: "Luna (Border Collie)",
      rating: 5,
      text: "Os passeios da Luna com a equipe VivaPet são o ponto alto do dia dela. Volta sempre feliz e cansadinha!",
      service: "Passeios",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      avatar: "👱‍♀️",
      pet: "Simba (Maine Coon)",
      rating: 5,
      text: "Produtos de qualidade excepcional! O Simba adora a ração premium e os brinquedos são super resistentes.",
      service: "Produtos",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target.querySelector(".testimonial-card");
            if (card) {
              setTimeout(() => {
                card.classList.add("opacity-100", "scale-100");
                card.classList.remove("opacity-0", "scale-95");
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
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={testimonialsRef} className="py-20 bg-gradient-to-br from-[var(--background)] to-[#FFF5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            O que nossos <span className="text-[var(--primary)]">clientes</span> dizem
          </h2>
          <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            A satisfação dos nossos clientes e seus pets é nossa maior recompensa.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="testimonial-card opacity-0 scale-95 transition-all duration-800 ease-out bg-white shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">
                {testimonials[currentTestimonial].avatar}
              </div>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              <blockquote className="text-lg text-[var(--foreground)]/80 mb-6 italic leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-[var(--foreground)] text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[var(--foreground)]/70">
                  Tutor(a) do {testimonials[currentTestimonial].pet}
                </p>
                <span className="inline-block mt-2 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                  {testimonials[currentTestimonial].service}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-[var(--muted)] transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-[var(--foreground)]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-[var(--muted)] transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-[var(--foreground)]" />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--border)]"
              }`}
            />
          ))}
        </div>

        {/* Mini testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{testimonial.avatar}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-[var(--foreground)]/70 mb-3 leading-relaxed">
                  &ldquo;{testimonial.text.substring(0, 80)}...&rdquo;
                </p>
                <h5 className="font-medium text-[var(--foreground)]">
                  {testimonial.name}
                </h5>
                <p className="text-xs text-[var(--foreground)]/60">
                  {testimonial.pet}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">4.9⭐</div>
              <div className="text-sm text-[var(--foreground)]/70">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">500+</div>
              <div className="text-sm text-[var(--foreground)]/70">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">100%</div>
              <div className="text-sm text-[var(--foreground)]/70">Recomendação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">5 anos</div>
              <div className="text-sm text-[var(--foreground)]/70">No Mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}