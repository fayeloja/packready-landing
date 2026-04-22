import HeroSection from "./components/sections/HeroSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import ProductsSection from "./components/sections/ProductsSection";
import ContactSection from "./components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <ProductsSection />
      <ContactSection />
    </main>
  );
}