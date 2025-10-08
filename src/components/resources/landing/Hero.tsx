"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/commons/button";
import { Card, CardContent } from "@/components/commons/card";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Pets Atendidos" },
    { number: "50+", label: "Veterinários" },
    { number: "24/7", label: "Emergência" },
    { number: "98%", label: "Satisfação" },
  ];

  return (
    <section className="hero from-primary/5 to-secondary/5 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br via-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Cuidado Veterinário de
              <span className="text-primary block">Excelência</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
              Sua clínica veterinária de confiança. Oferecemos atendimento completo para seu pet com
              profissionais especializados e equipamentos de ponta.
            </p>
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-3 text-lg">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-2 text-2xl font-bold sm:text-3xl">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <svg
          className="text-muted-foreground h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
