"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "hero" },
    { label: "Serviços", href: "services" },
    { label: "Produtos", href: "products" },
    { label: "Contato", href: "contact" },
  ];

  const services = [
    "Banho & Tosa",
    "Hospedagem",
    "Consultoria Veterinária",
    "Passeios",
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div
              className="flex items-center cursor-pointer mb-4"
              onClick={() => handleNavClick("hero")}
            >
              <div className="text-2xl font-bold">
                Viva<span className="text-[var(--secondary)]">Pet</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Cuidando do seu pet com carinho e dedicação há mais de 5 anos. 
              Somos sua referência em serviços e produtos para animais de estimação.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[var(--secondary)] hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[var(--secondary)] hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[var(--secondary)] hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/80 hover:text-[var(--secondary)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="text-white/80 hover:text-[var(--secondary)] transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/60 mb-1">Telefone</p>
                <p className="text-white">(11) 9999-8888</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">E-mail</p>
                <p className="text-white">contato@vivapet.com.br</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">Endereço</p>
                <p className="text-white">Rua dos Pets, 123<br />São Paulo - SP</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">Horário</p>
                <p className="text-white">Seg à Sex: 8h às 18h<br />Sáb: 8h às 16h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <h3 className="font-semibold text-lg mb-2">Fique por dentro das novidades!</h3>
            <p className="text-white/80 text-sm mb-4">
              Receba dicas de cuidados, promoções e novidades em primeira mão.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-lg text-[var(--foreground)] text-sm"
              />
              <Button variant="secondary" size="sm">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} VivaPet – Projeto Fictício para Portfólio.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Pet emojis decoration */}
        <div className="text-center mt-6 opacity-50">
          <span className="text-2xl mr-4">🐕</span>
          <span className="text-2xl mr-4">❤️</span>
          <span className="text-2xl mr-4">🐱</span>
          <span className="text-2xl mr-4">🐾</span>
          <span className="text-2xl">🎾</span>
        </div>
      </div>
    </footer>
  );
}