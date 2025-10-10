import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/commons/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/vivapet-logo.svg"
                    alt="VivaPet Logo"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold">
                    Viva<span className="text-blue-400">Pet</span>
                  </h3>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-slate-400">
                Cuidado veterinário completo com amor e profissionalismo. Seu pet merece o melhor!
              </p>
              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <a
                    href="https://facebook.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  <a
                    href="https://instagram.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-400"
                >
                  <a
                    href="https://twitter.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#services", label: "Nossos Serviços" },
                  { href: "#products", label: "Produtos" },
                  { href: "#booking", label: "Agendamento" },
                  { href: "#contact", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 transition-all group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>
                    Av. Principal, 1234
                    <br />
                    Centro, São Paulo - SP
                    <br />
                    CEP: 01234-567
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a href="tel:+5511999999999" className="transition-colors hover:text-blue-400">
                    (11) 9999-9999
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    href="mailto:contato@vivapet.com"
                    className="transition-colors hover:text-blue-400"
                  >
                    contato@vivapet.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                Horário de Funcionamento
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">Segunda - Sexta</div>
                    <div>8h - 20h</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">Sábado</div>
                    <div>8h - 18h</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">Domingo</div>
                    <div>9h - 14h</div>
                  </div>
                </li>
                <li className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
                  <div className="text-sm font-semibold text-emerald-400">⚡ Emergências 24/7</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left">
              &copy; 2025 VivaPet. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Feito com</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>para os pets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
