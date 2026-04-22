export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">

      {/* Background tint */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "var(--color-brand-light)" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — Copy */}
        <div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{
              backgroundColor: "var(--color-brand)",
              color: "white",
            }}
          >
            Alimosho&apos;s #1 Packaging Supplier
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Packaging That&apos;s Ready{" "}
            <span style={{ color: "var(--color-brand)" }}>
              When You Are
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Disposable plates, cups, food containers, and event consumables —
            available wholesale and retail. Fast delivery across Lagos.
            Perfect for restaurants, caterers, and event planners.
          </p>

          <div className="flex flex-wrap gap-4">
            
             <a href="#contact"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              Request a Quote
            </a>
            
              <a href="#products"
              className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors"
            >
              Browse Products →
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>✅ Bulk discounts available</span>
            <span>✅ Same-day delivery (Alimosho)</span>
            <span>✅ WhatsApp orders accepted</span>
          </div>
        </div>

        {/* Right — Visual card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">

            {/* Main card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-6xl text-center mb-4">📦</div>
              <h3 className="text-center font-bold text-gray-800 text-lg mb-6">
                Popular This Week
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  { label: "Disposable Plates (50-pack)", price: "₦1,800" },
                  { label: "Takeaway Food Containers", price: "₦2,400" },
                  { label: "Plastic Cups (100-pack)", price: "₦1,500" },
                  { label: "Serving Trays", price: "₦3,200" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50"
                  >
                    <span>{item.label}</span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-brand)" }}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              
                <a href="#contact"
                className="mt-6 block text-center py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Order Now via WhatsApp
              </a>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg px-4 py-2 text-xs font-bold border border-gray-100"
              style={{ color: "var(--color-brand)" }}
            >
              🚚 Free delivery over ₦20k
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}