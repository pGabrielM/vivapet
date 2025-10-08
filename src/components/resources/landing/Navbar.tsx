"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/commons/button";
import { MobileMenu } from "./mobile-menu";

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

  return (
    <nav
      className={`navbar fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-primary text-2xl font-bold">VivaPet</h1>
            </div>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#services"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Serviços
            </a>
            <a
              href="#doctors"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Veterinários
            </a>
            <a
              href="#booking"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Agendamento
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contato
            </a>
            <Button className="ml-4">Agendar Consulta</Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
}
