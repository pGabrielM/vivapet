"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/commons/button";
import { Card, CardContent } from "@/components/commons/card";
import { Heart, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10+", label: "Anos de Experiência", icon: Award },
    { number: "5000+", label: "Pets Atendidos", icon: Heart },
    { number: "24/7", label: "Atendimento Emergencial", icon: Clock },
    { number: "98%", label: "Satisfação dos Clientes", icon: Shield },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Floating Paw Prints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 text-blue-200 opacity-20">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        <div
          className="animate-float absolute right-20 bottom-32 text-orange-200 opacity-20"
          style={{ animationDelay: "1s" }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Heart className="h-4 w-4" />
              <span>Cuidado com amor e profissionalismo</span>
            </div>

            <h1 className="mb-6 font-[family-name:var(--font-poppins)] text-5xl leading-tight font-bold text-slate-900 lg:text-6xl xl:text-7xl">
              Seu Pet Merece o<span className="mt-2 block text-blue-600">Melhor Cuidado</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              Clínica veterinária completa com equipe especializada, equipamentos modernos e
              atendimento 24 horas. Porque seu pet faz parte da família.
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-blue-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                <a href="#booking">Agendar Consulta</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-2 border-slate-300 px-8 py-6 text-lg font-semibold transition-all hover:border-blue-600 hover:text-blue-600"
              >
                <a href="#services">Nossos Serviços</a>
              </Button>
            </div>

            {/* Quick Features */}
            <div className="grid max-w-md grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Profissionais Certificados
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/hero/veterinario-pet.jpg"
                  alt="Veterinário cuidando de um pet"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">5000+</div>
                    <div className="text-sm text-slate-600">Pets Felizes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`relative border-0 bg-white shadow-lg transition-all duration-700 hover:shadow-xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-900">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                    {/* Animated Dot Indicator */}
                    <div className="mt-2">
                      <div
                        className="animate-glow h-2 w-2 rounded-full bg-blue-600"
                        style={{ animationDelay: `${index * 300}ms` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
