"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/commons/button";
import { MobileMenu } from "./mobile-menu";
import { Phone, Calendar, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Serviços" },
    { href: "#products", label: "Produtos" },
    { href: "#booking", label: "Agendamento" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow">
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">
                Viva<span className="text-blue-600">Pet</span>
              </h1>
              <p className="text-xs leading-none text-slate-600">Clínica Veterinária</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-medium text-slate-700 transition-colors hover:text-blue-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-700 hover:text-blue-600">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(11) 9999-9999</span>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              <Calendar className="h-4 w-4" />
              <span>Agendar</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 transition-colors hover:text-blue-600 focus:outline-none"
              aria-label="Alternar menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} navLinks={navLinks} />
    </nav>
  );
}
