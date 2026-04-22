import { getProducts } from "../../../data/getProducts";
import ProductCard from "./ProductCard";

export default async function ProductsSection() {
  // Direct await — no useEffect, no useState, no loading state
  const products = await getProducts();

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything you need for food service and events — available for
            pickup in Ikotun or delivery across Lagos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see what you need? We stock more than what&apos;s listed here.
          </p>
          
            <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            📲 Ask us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}