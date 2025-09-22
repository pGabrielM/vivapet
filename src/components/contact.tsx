'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.contact-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('opacity-100', 'translate-y-0');
                element.classList.remove('opacity-0', 'translate-y-12');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 9999-8888',
      description: 'Ligue para agendar',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@vivapet.com.br',
      description: 'Respondemos em 24h',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua dos Pets, 123',
      description: 'São Paulo - SP',
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg à Sex: 8h às 18h',
      description: 'Sáb: 8h às 16h',
    },
  ];

  return (
    <section id="contact" ref={contactRef} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Fale <span className="text-[var(--primary)]">Conosco</span>
          </h2>
          <p className="text-[var(--foreground)]/80 mx-auto max-w-2xl text-lg">
            Entre em contato para agendar serviços, tirar dúvidas ou conhecer
            melhor nossos produtos.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="contact-animate duration-800 translate-y-12 opacity-0 transition-all ease-out">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[var(--foreground)]">
                Envie sua mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos como podemos ajudar você e seu pet..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-[var(--foreground)]/70">
                    Entraremos em contato em breve. Obrigado!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="contact-animate duration-800 translate-y-12 opacity-0 transition-all ease-out hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[var(--primary)]/10 rounded-full p-3">
                      <info.icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[var(--foreground)]">
                        {info.title}
                      </h3>
                      <p className="mb-1 font-medium text-[var(--foreground)]">
                        {info.value}
                      </p>
                      <p className="text-[var(--foreground)]/70 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="contact-animate duration-800 translate-y-12 overflow-hidden opacity-0 transition-all ease-out">
              <CardContent className="p-0">
                <div className="from-[var(--primary)]/20 to-[var(--secondary)]/20 flex h-64 items-center justify-center bg-gradient-to-br">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-12 w-12 text-[var(--primary)]" />
                    <p className="font-medium text-[var(--foreground)]">
                      Localização VivaPet
                    </p>
                    <p className="text-[var(--foreground)]/70 text-sm">
                      Rua dos Pets, 123 - São Paulo
                    </p>
                    <Button variant="outline" className="mt-3" size="sm">
                      Ver no Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="contact-animate duration-800 translate-y-12 text-center opacity-0 transition-all ease-out hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                WhatsApp
              </h3>
              <p className="text-[var(--foreground)]/70 mb-4 text-sm">
                Fale conosco no WhatsApp para um atendimento rápido
              </p>
              <Button variant="secondary" size="sm">
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="contact-animate duration-800 translate-y-12 text-center opacity-0 transition-all ease-out hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 text-4xl">📧</div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                E-mail Direto
              </h3>
              <p className="text-[var(--foreground)]/70 mb-4 text-sm">
                Envie um e-mail e responderemos em até 24 horas
              </p>
              <Button variant="secondary" size="sm">
                Enviar E-mail
              </Button>
            </CardContent>
          </Card>

          <Card className="contact-animate duration-800 translate-y-12 text-center opacity-0 transition-all ease-out hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 text-4xl">📞</div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                Ligação Direta
              </h3>
              <p className="text-[var(--foreground)]/70 mb-4 text-sm">
                Ligue agora para agendar ou esclarecer dúvidas
              </p>
              <Button variant="secondary" size="sm">
                Ligar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
