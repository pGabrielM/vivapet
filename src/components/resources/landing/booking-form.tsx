"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { Card, CardContent } from "@/components/commons/card";
import { type BookingData } from "@/lib/types";
import {
  Calendar,
  Clock,
  User,
  Phone as PhoneIcon,
  CheckCircle2,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export function BookingForm() {
  const t = useTranslations("booking");
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Phone mask helper
  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.errors.nameRequired") || "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("form.errors.phoneRequired") || "Phone is required";
    } else if (!/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t("form.errors.phoneInvalid") || "Invalid phone format";
    }

    if (!formData.service) {
      newErrors.service = t("form.errors.serviceRequired") || "Please select a service";
    }

    if (!formData.date) {
      newErrors.date = t("form.errors.dateRequired") || "Date is required";
    }

    if (!formData.time) {
      newErrors.time = t("form.errors.timeRequired") || "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "phone") {
      processedValue = formatPhoneNumber(value);
    }

    setFormData({ ...formData, [name]: processedValue });
    if (errors[name as keyof BookingData]) {
      setErrors({ ...errors, [name]: undefined });
    }
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
                {t("success.title")}
              </h3>
              <p className="mb-6 text-slate-600">{t("success.message", { name: formData.name })}</p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-slate-700">
                <p className="mb-3 font-semibold">{t("success.detailsTitle")}</p>
                <div className="space-y-2 text-left">
                  <p>
                    <span className="font-medium">{t("success.date")}:</span> {formData.date}
                  </p>
                  <p>
                    <span className="font-medium">{t("success.time")}:</span> {formData.time}
                  </p>
                  <p>
                    <span className="font-medium">{t("success.service")}:</span> {formData.service}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">{t("form.notice")}</p>
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
            {t("badge")}
          </div>
          <h2 className="mb-6 font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">{t("description")}</p>
        </div>

        <Card className="mx-auto max-w-2xl border-0 bg-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Nome */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <User className="h-4 w-4 text-blue-600" />
                    {t("form.name")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form.namePlaceholder")}
                    className={`h-12 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-blue-600"}`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <PhoneIcon className="h-4 w-4 text-blue-600" />
                    {t("form.phone")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("form.phonePlaceholder")}
                    className={`h-12 font-mono ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-blue-600"}`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <div id="phone-error" className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  {t("form.service")} <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`h-12 w-full rounded-lg border bg-white px-4 text-sm focus:ring-2 focus:ring-blue-600/20 focus:outline-none ${errors.service ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-blue-600"}`}
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                >
                  <option value="">{t("form.servicePlaceholder")}</option>
                  <option value="Consulta Veterinária">{t("services.consultation")}</option>
                  <option value="Vacinas">{t("services.vaccines")}</option>
                  <option value="Cirurgia">{t("services.surgery")}</option>
                  <option value="Exames">{t("services.exams")}</option>
                  <option value="Banho e Tosa">{t("services.grooming")}</option>
                  <option value="Emergência">{t("services.emergency")}</option>
                </select>
                {errors.service && (
                  <div id="service-error" className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.service}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Data */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Calendar className="h-4 w-4 text-blue-600" />
                    {t("form.date")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className={`h-12 ${errors.date ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-blue-600"}`}
                    aria-required="true"
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <div id="date-error" className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.date}
                    </div>
                  )}
                </div>

                {/* Horário */}
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                  >
                    <Clock className="h-4 w-4 text-blue-600" />
                    {t("form.time")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className={`h-12 ${errors.time ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-blue-600"}`}
                    aria-required="true"
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? "time-error" : undefined}
                  />
                  {errors.time && (
                    <div id="time-error" className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.time}
                    </div>
                  )}
                </div>
              </div>

              {/* Notice */}
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-slate-700">{t("form.notice")}</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="h-12 w-full bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {t("form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
