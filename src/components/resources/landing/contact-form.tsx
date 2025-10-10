"use client";

import { useState } from "react";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { Card, CardContent } from "@/components/commons/card";
import { User, Mail as MailIcon, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <Card className="border-0 bg-white shadow-2xl">
        <CardContent className="p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <h3 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">
            Mensagem Enviada!
          </h3>
          <p className="text-slate-600">
            Obrigado, <span className="font-semibold">{formData.name}</span>! Recebemos sua mensagem
            e responderemos o mais breve possível.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-white shadow-2xl">
      <CardContent className="p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <User className="h-4 w-4 text-blue-600" />
              Nome Completo
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="h-12 border-slate-300 focus:border-blue-600"
              aria-required="true"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <MailIcon className="h-4 w-4 text-blue-600" />
              E-mail
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="h-12 border-slate-300 focus:border-blue-600"
              aria-required="true"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <MessageSquare className="h-4 w-4 text-blue-600" />
              Mensagem
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Como podemos ajudar você e seu pet?"
              className="h-32 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
              aria-required="true"
            />
          </div>

          <Button
            type="submit"
            className="h-12 w-full bg-blue-600 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <Send className="mr-2 h-5 w-5" />
            Enviar Mensagem
          </Button>

          <p className="text-center text-sm text-slate-500">✨ Responderemos em até 24 horas</p>
        </form>
      </CardContent>
    </Card>
  );
}
