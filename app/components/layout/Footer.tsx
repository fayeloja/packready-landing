import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer
      className="text-white mt-20"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📦</span>
            <span className="font-bold text-lg">PackReady Supplies</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for disposable food packaging and event consumables in Alimosho LGA and across Lagos.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#why-us" className="hover:text-white transition-colors">Why PackReady</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Request a Quote</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-300">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Ikotun, Alimosho LGA, Lagos</li>
            <li>📞 +234 800 000 0000</li>
            <li>✉️ hello@packready.ng</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-600 py-4">
        © <CurrentYear /> PackReady Supplies Ltd. All rights reserved.
      </div>
    </footer>
  );
}