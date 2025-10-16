"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/commons/card";
import { Badge } from "@/components/commons/badge";
import { Button } from "@/components/commons/button";
import { type Product } from "@/lib/types";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations();

  const name = product.nameKey ? t(product.nameKey) : product.name || "Product";
  const description = product.descriptionKey
    ? t(product.descriptionKey)
    : product.description || "";
  const category = product.categoryKey ? t(product.categoryKey) : product.category || "";

  return (
    <Card
      className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={name}
          width={400}
          height={300}
          className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"
            }`}
        />

        {/* Overlay with Actions */}
        <div
          className={`absolute inset-0 bg-slate-900/60 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3">
            <Button
              asChild
              size="sm"
              className="bg-white text-slate-900 shadow-lg hover:bg-slate-100"
            >
              <a href="#contact">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {t("products.buy")}
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-0 bg-white/90 shadow-lg hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                alert("Item adicionado aos favoritos!");
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge
              key={tag}
              className="border-0 bg-white/95 font-semibold text-slate-900 shadow-md"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className="mb-2 text-xs">
            {category}
          </Badge>
        </div>

        <h3 className="mb-2 line-clamp-2 min-h-[3.5rem] text-lg font-bold text-slate-900">
          {name}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-slate-600">{description}</p>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </div>
            <div className="text-xs text-slate-500">ou 3x sem juros</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
