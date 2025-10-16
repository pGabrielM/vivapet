"use client";

import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/commons/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/vivapet-logo.svg"
                    alt="VivaPet Logo"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold">
                    Viva<span className="text-blue-400">Pet</span>
                  </h3>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-slate-400">{t("tagline")}</p>
              <div className="flex gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-[#1877F2] hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                >
                  <a
                    href="https://facebook.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-[#E1306C] hover:bg-[#E1306C]/10 hover:text-[#E1306C]"
                >
                  <a
                    href="https://instagram.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-slate-200 hover:bg-slate-200/10 hover:text-slate-200"
                >
                  <a
                    href="https://twitter.com/vivapet"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                {t("quickLinks")}
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#services", labelKey: "services" },
                  { href: "#products", labelKey: "products" },
                  { href: "#booking", labelKey: "booking" },
                  { href: "#contact", labelKey: "contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-blue-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 transition-all group-hover:w-3" />
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                {t("contactInfo")}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span>
                    Rua XV de Novembro, 850
                    <br />
                    Centro, Curitiba - PR
                    <br />
                    CEP: 80020-310
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a href="tel:+554198765432" className="transition-colors hover:text-blue-400">
                    (41) 99876-5432
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    href="mailto:contato@vivapet.vet.br"
                    className="transition-colors hover:text-blue-400"
                  >
                    contato@vivapet.vet.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="mb-6 font-[family-name:var(--font-poppins)] text-lg font-bold">
                {t("hours")}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">{t("weekdays")}</div>
                    <div>{t("schedule.weekdayRange")}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">{t("saturday")}</div>
                    <div>{t("schedule.saturdayRange")}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div className="text-slate-400">
                    <div className="mb-1 font-semibold text-white">{t("sunday")}</div>
                    <div>{t("schedule.sundayRange")}</div>
                  </div>
                </li>
                <li className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
                  <div className="text-sm font-semibold text-emerald-400">
                    ⚡ {t("emergencies")}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left">{t("copyright")}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>{t("madeWith")}</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>{t("forPets")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
