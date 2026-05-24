import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import PrecisionSection from "@/components/PrecisionSection";
import BrandLogos from "@/components/BrandLogos";
import ProductGrid from "@/components/ProductGrid";
import MensWatchesSection from "@/components/MensWatchesSection";
import WomensWatchesSection from "@/components/WomensWatchesSection";
import FeatureGrid from "@/components/FeatureGrid";
import VisualGallery from "@/components/VisualGallery";
import Testimonials from "@/components/Testimonials";
import ShopNowCTA from "@/components/ShopNowCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeatureCards />
      <PrecisionSection />
      <BrandLogos />
      <ProductGrid />
      <MensWatchesSection />
      <WomensWatchesSection />
      <FeatureGrid />
      <VisualGallery />
      <Testimonials />
      <ShopNowCTA />
      <Footer />
    </main>
  );
}
