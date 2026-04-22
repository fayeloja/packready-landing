import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "PackReady Supplies Ltd | Food Packaging & Event Consumables Lagos",
  description:
    "Wholesale and retail disposable food packaging, plates, cups, and event consumables. Serving businesses and event planners across Alimosho LGA and Lagos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}