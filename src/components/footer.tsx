'use client';

import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Facebook, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Serviços', href: 'services' },
    { label: 'Produtos', href: 'products' },
    { label: 'Contato', href: 'contact' },
  ];

  const services = [
    'Banho & Tosa',
    'Hospedagem',
    'Consultoria Veterinária',
    'Passeios',
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div
              className="mb-4 flex cursor-pointer items-center"
              onClick={() => handleNavClick('hero')}
            >
              <div className="text-2xl font-bold">
                Viva<span className="text-[var(--secondary)]">Pet</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Cuidando do seu pet com carinho e dedicação há mais de 5 anos.
              Somos sua referência em serviços e produtos para animais de
              estimação.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-[var(--secondary)]"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-[var(--secondary)]"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 hover:text-[var(--secondary)]"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navegação</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/80 transition-colors hover:text-[var(--secondary)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-sm text-white/80 transition-colors hover:text-[var(--secondary)]"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="mb-1 text-white/60">Telefone</p>
                <p className="text-white">(11) 9999-8888</p>
              </div>
              <div>
                <p className="mb-1 text-white/60">E-mail</p>
                <p className="text-white">contato@vivapet.com.br</p>
              </div>
              <div>
                <p className="mb-1 text-white/60">Endereço</p>
                <p className="text-white">
                  Rua dos Pets, 123
                  <br />
                  São Paulo - SP
                </p>
              </div>
              <div>
                <p className="mb-1 text-white/60">Horário</p>
                <p className="text-white">
                  Seg à Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 16h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">
              Fique por dentro das novidades!
            </h3>
            <p className="mb-4 text-sm text-white/80">
              Receba dicas de cuidados, promoções e novidades em primeira mão.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 rounded-lg px-4 py-2 text-sm text-[var(--foreground)]"
              />
              <Button variant="secondary" size="sm">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-white/60 md:mb-0">
              © {currentYear} VivaPet – Projeto Fictício para Portfólio.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 transition-colors hover:text-white">
                Política de Privacidade
              </button>
              <button className="text-white/60 transition-colors hover:text-white">
                Termos de Uso
              </button>
              <button className="text-white/60 transition-colors hover:text-white">
                FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Pet emojis decoration */}
        <div className="mt-6 text-center opacity-50">
          <span className="mr-4 text-2xl">🐕</span>
          <span className="mr-4 text-2xl">❤️</span>
          <span className="mr-4 text-2xl">🐱</span>
          <span className="mr-4 text-2xl">🐾</span>
          <span className="text-2xl">🎾</span>
        </div>
      </div>
    </footer>
  );
}
