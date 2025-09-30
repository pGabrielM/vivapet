import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Product } from '../../lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex gap-2 mt-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant={tag === 'Novo' ? 'default' : 'secondary'}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="text-2xl font-bold text-primary">
          ${product.price}
        </CardDescription>
      </CardContent>
    </Card>
  );
}