import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/site";

export function CatalogGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
