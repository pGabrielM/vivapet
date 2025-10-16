"use client";

import { Card, CardContent } from "@/components/commons/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/commons/button";
import { useTranslations } from "next-intl";

export function ContactDetails() {
  const t = useTranslations("contact");

  return (
    <div className="space-y-6">
      {/* Main Info Card */}
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl">
        <CardContent className="p-8 md:p-10">
          <h3 className="mb-6 font-[family-name:var(--font-poppins)] text-2xl font-bold">
            {t("info.title")}
          </h3>
          <div className="space-y-6">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">{t("info.address")}</div>
                <p className="leading-relaxed text-blue-100">
                  Rua XV de Novembro, 850
                  <br />
                  Centro, Curitiba - PR
                  <br />
                  CEP: 80020-310
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">{t("info.phone")}</div>
                <p className="text-blue-100">(41) 99876-5432</p>
                <p className="text-blue-100">(41) 3322-1100</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-1 font-semibold">{t("info.email")}</div>
                <p className="text-blue-100">contato@vivapet.vet.br</p>
                <p className="text-blue-100">emergencia@vivapet.vet.br</p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="mb-2 font-semibold">{t("info.hours")}</div>
                <div className="space-y-1 text-blue-100">
                  <p>{t("info.schedule.weekdays")}</p>
                  <p>{t("info.schedule.saturday")}</p>
                  <p>{t("info.schedule.sunday")}</p>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold">
                  ⚡ {t("info.emergencies")}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Card */}
      <Card className="border-0 bg-white shadow-xl">
        <CardContent className="p-8">
          <h4 className="mb-4 font-[family-name:var(--font-poppins)] text-lg font-bold text-slate-900">
            {t("social.title")}
          </h4>
          <p className="mb-6 text-slate-600">{t("social.subtitle")}</p>
          <div className="flex gap-3">
            <Button size="lg" className="flex-1 gap-2 bg-[#1877F2] hover:bg-[#1665D8]">
              <FaFacebook className="h-5 w-5" />
              Facebook
            </Button>
            <Button
              size="lg"
              className="flex-1 gap-2 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90"
            >
              <FaInstagram className="h-5 w-5" />
              Instagram
            </Button>
          </div>
          <div className="mt-3 flex gap-3">
            <Button size="lg" className="flex-1 gap-2 bg-[#000000] hover:bg-[#333333]">
              <FaXTwitter className="h-5 w-5" />
              Twitter
            </Button>
            <Button size="lg" className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BA5A]">
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
