"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/commons/button";
import { LanguageMenu } from "@/components/commons/language-menu";
import { MobileMenu } from "./mobile-menu";
import { Phone, Calendar, Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["services", "products", "booking", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#products", label: t("products") },
    { href: "#booking", label: t("booking") },
    { href: "#contact", label: t("contact") },
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
          <a
            href="#"
            className="flex items-center gap-3 transition-transform hover:scale-105"
            aria-label="Ir para o início"
          >
            <div className="relative h-12 w-12">
              <Image
                src="/images/vivapet-logo.svg"
                alt="VivaPet Logo"
                width={48}
                height={48}
                className="drop-shadow-lg"
                priority
              />
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">
                Viva<span className="text-blue-600">Pet</span>
              </h1>
              <p className="text-xs leading-none text-slate-600">{t("taglineClinic")}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "glass-nav-item-active"
                    : "glass-nav-item text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="gap-2 text-slate-700 hover:text-blue-600"
            >
              <a href="tel:+554198765432">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(41) 99876-5432</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="gap-2 bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              <a href="#booking">
                <Calendar className="h-4 w-4" />
                <span>{t("schedule")}</span>
              </a>
            </Button>
            <LanguageMenu />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageMenu />
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
