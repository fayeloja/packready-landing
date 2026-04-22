const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "50+", label: "Product SKUs" },
  { value: "Same Day", label: "Delivery in Alimosho" },
  { value: "Wholesale", label: "Pricing Available" },
];

const reasons = [
  {
    icon: "🏪",
    title: "Local & Reliable",
    description:
      "Based in Ikotun. We know Alimosho — delivery is fast because we're already in your area.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description:
      "Buy in bulk and save. We offer tiered pricing for restaurants, caterers, and event businesses.",
  },
  {
    icon: "📲",
    title: "WhatsApp First",
    description:
      "No complicated ordering process. Send us a WhatsApp message and your order is on its way.",
  },
  {
    icon: "🎉",
    title: "Event Ready",
    description:
      "Planning a wedding, burial, or corporate event? We supply in large quantities with advance booking.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden mb-20"
          style={{ backgroundColor: "var(--color-brand)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white m-px flex flex-col items-center justify-center py-8 px-4 text-center first:rounded-tl-2xl last:rounded-br-2xl"
            >
              <span
                className="text-3xl font-bold"
                style={{ color: "var(--color-brand)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Why us grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why Choose PackReady?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We&apos;re not a big-box supplier. We&apos;re your neighbourhood packaging
            partner — and that makes all the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              style={{ backgroundColor: "var(--color-brand-light)" }}
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}