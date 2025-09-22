"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, Home, Stethoscope, PawPrint } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0", "scale-100");
                card.classList.remove("opacity-0", "translate-y-12", "scale-95");
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
      title: "Banho & Tosa",
      description: "Serviços completos de higiene e estética para deixar seu pet sempre lindo e cheiroso.",
      features: ["Banho com produtos premium", "Tosa higiênica e estética", "Corte de unhas", "Limpeza de ouvidos"],
      price: "A partir de R$ 45",
      emoji: "🛁",
    },
    {
      icon: Home,
      title: "Hospedagem",
      description: "Cuidamos do seu pet com carinho quando você não pode estar presente.",
      features: ["Ambiente seguro e limpo", "Cuidados veterinários", "Brincadeiras e exercícios", "Relatórios diários"],
      price: "R$ 80 por dia",
      emoji: "🏠",
    },
    {
      icon: Stethoscope,
      title: "Consultoria Veterinária",
      description: "Orientações básicas de saúde e bem-estar para seu animal de estimação.",
      features: ["Avaliação básica", "Orientações nutricionais", "Prevenção de doenças", "Agendamento de consultas"],
      price: "R$ 120",
      emoji: "🩺",
    },
    {
      icon: PawPrint,
      title: "Passeios",
      description: "Exercícios e diversão para manter seu pet ativo e socializado.",
      features: ["Passeios supervisionados", "Exercícios adequados", "Socialização", "Relatório de atividades"],
      price: "R$ 35 por passeio",
      emoji: "🦮",
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-br from-[var(--background)] to-[#FFF5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Nossos <span className="text-[var(--primary)]">Serviços</span>
          </h2>
          <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu pet com todo o carinho e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card opacity-0 translate-y-12 scale-95 transition-all duration-600 ease-out group hover:shadow-xl hover:-translate-y-2 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--primary)]/10 rounded-full mb-4 mx-auto group-hover:bg-[var(--primary)]/20 transition-colors">
                  <service.icon className="h-10 w-10 text-[var(--primary)]" />
                </div>
                <div className="text-4xl mb-2">{service.emoji}</div>
                <CardTitle className="text-xl font-bold text-[var(--foreground)]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[var(--foreground)]/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="text-xs text-[var(--foreground)]/60 mb-4 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1 h-1 bg-[var(--primary)] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-lg font-bold text-[var(--primary)] mb-4">
                  {service.price}
                </div>

                <Button 
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Precisa de um atendimento personalizado?
          </h3>
          <p className="text-[var(--foreground)]/80 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para discutir as necessidades específicas do seu pet. 
            Oferecemos pacotes personalizados e descontos para serviços recorrentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Falar com Especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}