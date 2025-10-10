"use client";

import { useState } from "react";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { Card, CardContent } from "@/components/commons/card";
import { type BookingData } from "@/lib/types";
import { Calendar, Clock, User, Phone as PhoneIcon, CheckCircle2, Sparkles } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-md border-0 bg-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="mb-4 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">
                Agendamento Confirmado!
              </h3>
              <p className="mb-6 text-slate-600">
                Obrigado, <span className="font-semibold">{formData.name}</span>! Recebemos seu
                agendamento e entraremos em contato em breve para confirmar os detalhes.
              </p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-slate-700">
                <p className="mb-2 font-semibold">Detalhes do Agendamento:</p>
                <div className="space-y-1 text-left">
                  <p>
                    📅 Data: <span className="font-medium">{formData.date}</span>
                  </p>
                  <p>
                    ⏰ Horário: <span className="font-medium">{formData.time}</span>
                  </p>
                  <p>
                    🐾 Serviço: <span className="font-medium">{formData.service}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Calendar className="mr-2 h-4 w-4" />
            Agende Agora
          </div>
          <h2 className="mb-6 font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 md:text-5xl">
            Reserve um Horário
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu
            agendamento.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl border-0 bg-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Nome */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <User className="h-4 w-4 text-blue-600" />
                    Nome Completo
                  </label>
                  <Input
                    id="name"
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

                {/* Telefone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <PhoneIcon className="h-4 w-4 text-blue-600" />
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="h-12 border-slate-300 focus:border-blue-600"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
                  aria-required="true"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Consulta Veterinária">Consulta Veterinária</option>
                  <option value="Vacinas">Vacinas e Prevenção</option>
                  <option value="Cirurgia">Cirurgia</option>
                  <option value="Exames">Exames Laboratoriais</option>
                  <option value="Banho e Tosa">Banho e Tosa</option>
                  <option value="Emergência">Emergência 24h</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Data */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Data Preferida
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="h-12 border-slate-300 focus:border-blue-600"
                    aria-required="true"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Horário */}
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Clock className="h-4 w-4 text-blue-600" />
                    Horário Preferido
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="h-12 border-slate-300 focus:border-blue-600"
                    aria-required="true"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-blue-600 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Confirmar Agendamento
              </Button>

              <p className="text-center text-sm text-slate-500">
                ✨ Entraremos em contato em até 24 horas para confirmar
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
