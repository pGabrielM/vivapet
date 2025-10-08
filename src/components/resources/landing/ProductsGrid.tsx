import { products } from "@/utils/products";
import { ProductCard } from "./ProductCard";

export function ProductsGrid() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Catálogo de Produtos
          </h2>
          <p className="text-xl text-gray-600">Tudo que seu pet precisa em um só lugar</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
