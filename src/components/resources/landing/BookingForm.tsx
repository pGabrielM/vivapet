"use client";

import { useState } from "react";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { type BookingData } from "@/lib/types";

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
    // Mock submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="booking" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Agendamento Confirmado!</CardTitle>
              <CardDescription>
                Obrigado, {formData.name}. Entraremos em contato em breve para confirmar os
                detalhes.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Agende seu Serviço</h2>
          <p className="text-xl text-gray-600">Reserve um horário para cuidar do seu pet</p>
        </div>
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Formulário de Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Serviço
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="border-input bg-background h-10 w-full rounded-md border px-3 py-2 text-sm"
                  aria-required="true"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="banho">Banho</option>
                  <option value="tosa">Tosa</option>
                  <option value="hospedagem">Hospedagem</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Data
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Horário
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <Button type="submit" className="w-full">
                Agendar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
