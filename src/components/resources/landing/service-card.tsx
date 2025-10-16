"use client";

import { useTranslations, useLocale } from "next-intl";
import { Card, CardContent } from "@/components/commons/card";
import { Button } from "@/components/commons/button";
import { type Service } from "@/lib/types";
import { formatCurrency } from "@/utils/currency";
import {
  Stethoscope,
  Scissors,
  Syringe,
  Microscope,
  Sparkles,
  Ambulance,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap = {
  Stethoscope,
  Scissors,
  Syringe,
  Microscope,
  Sparkles,
  Ambulance,
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations();
  const locale = useLocale() as "pt" | "en" | "es";
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Stethoscope;

  const title = service.titleKey ? t(service.titleKey) : service.title || "Service";
  const description = service.descKey ? t(service.descKey) : service.desc || "";
  const formattedPrice = service.price ? formatCurrency(service.price, locale) : null;

  return (
    <Card
      className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={title}
          width={600}
          height={400}
          className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"
            }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

        {/* Icon Badge */}
        <div className="absolute top-4 right-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">
          <Icon className="h-7 w-7 text-blue-600" />
        </div>

        {/* Price Badge */}
        {formattedPrice && (
          <div className="absolute bottom-4 left-4 flex items-center justify-center rounded-xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
            <span className="font-semibold text-slate-900">{formattedPrice}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="mb-3 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">
          {title}
        </h3>
        <p className="mb-6 leading-relaxed text-slate-600">{description}</p>

        <Button
          asChild
          variant="ghost"
          className="w-full justify-between transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
        >
          <a href="#booking">
            <span className="font-semibold">{t("services.learnMore")}</span>
            <ArrowRight
              className={`h-5 w-5 transition-transform ${isHovered ? "translate-x-1" : "translate-x-0"
                }`}
            />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
