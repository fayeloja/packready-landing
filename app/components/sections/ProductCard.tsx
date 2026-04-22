import { Product } from "../../../data/getProducts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col">

      {/* Top row — emoji + badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{product.emoji}</span>
        {product.badge && (
          <span
            className="text-xs font-semibold px-2 py-1 rounded-full text-white"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Category */}
      <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">
        {product.category}
      </span>

      {/* Name */}
      <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* Price row */}
      <div className="mt-6 flex items-end justify-between">
        <div>
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--color-brand)" }}
          >
            ₦{product.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 ml-1">/ {product.unit}</span>
        </div>

        
          <a href="#contact"
          className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Order
        </a>
      </div>

    </div>
  );
}