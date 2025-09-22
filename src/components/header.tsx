'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: 'hero' },
    { label: 'Serviços', href: 'services' },
    { label: 'Produtos', href: 'products' },
    { label: 'Contato', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex cursor-pointer items-center"
            onClick={() => handleNavClick('hero')}
          >
            <div className="text-2xl font-bold text-[var(--primary)]">
              Viva<span className="text-[var(--secondary)]">Pet</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-medium text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => handleNavClick('contact')}
              size="lg"
              className="hidden sm:inline-flex"
            >
              Agendar Serviço
            </Button>

            {/* Mobile menu button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="space-y-2 border-t border-[var(--border)] bg-white py-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full px-4 py-2 text-left text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--primary)]"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => handleNavClick('contact')}
                size="lg"
                className="w-full"
              >
                Agendar Serviço
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
