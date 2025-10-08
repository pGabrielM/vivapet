import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { Badge } from "@/components/commons/badge";
import { type Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="h-48 w-full rounded-t-lg object-cover"
        />
        <div className="mt-2 flex gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant={tag === "Novo" ? "default" : "secondary"}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="text-primary text-2xl font-bold">
          ${product.price}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
