import { products } from "@/utils/products";
import { ProductCard } from "./product-card";

export function ProductsGrid() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Pet Shop
          </div>
          <h2 className="mb-6 font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 md:text-5xl">
            Produtos para seu Pet
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
            Selecionamos os melhores produtos para a saúde, bem-estar e diversão do seu pet.
            Qualidade garantida e preços especiais.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
