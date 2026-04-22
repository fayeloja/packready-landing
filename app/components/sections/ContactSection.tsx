"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  business: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    business: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMessage(data.message);
        setForm({ name: "", phone: "", business: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setResponseMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Fill the form and we&apos;ll respond within the hour during business
            hours. Prefer WhatsApp? Message us directly.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📍", label: "Location", value: "Ikotun, Alimosho LGA, Lagos" },
              { icon: "📞", label: "Phone / WhatsApp", value: "+234 800 000 0000" },
              { icon: "✉️", label: "Email", value: "hello@packready.ng" },
              { icon: "🕐", label: "Business Hours", value: "Mon – Sat, 8am – 6pm" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-gray-700 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp shortcut */}
          
            <a href="https://wa.me/234869775830"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <span className="text-xl">💬</span>
            Chat us on WhatsApp
          </a>
        </div>

        {/* Right — Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

          {status === "success" ? (
            // Success state
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Request Sent!
              </h3>
              <p className="text-gray-500 mb-6">{responseMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm font-semibold underline"
                style={{ color: "var(--color-brand)" }}
              >
                Send another request
              </button>
            </div>
          ) : (
            // Form state
            <div className="space-y-5">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                📦 Tell us what you need
              </h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Fatai Adekunle"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "var(--color-brand)" } as React.CSSProperties}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 08012345678"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>

              {/* Business name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name (optional)
                </label>
                <input
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="e.g. Mama Tunde Catering"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need? *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g. 200 packs of disposable plates and 100 takeaway containers for a wedding on Saturday..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-lg">
                  ⚠️ {responseMessage}
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                {status === "loading" ? "Sending..." : "Send Quote Request"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We typically respond within 1 hour during business hours.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}