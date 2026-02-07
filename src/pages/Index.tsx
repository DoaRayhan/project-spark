import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { EditorsPick } from "@/components/EditorsPick";
import { BestsellerProducts } from "@/components/BestsellerProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { NeuralBanner } from "@/components/NeuralBanner";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { products } from "@/config/products";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const { cartCount, openCart, addToCart } = useCart();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header cartCount={cartCount} onCartClick={openCart} />
      <Hero />
      <EditorsPick />
      <BestsellerProducts products={products} onAddToCart={addToCart} />
      <PromoBanner />
      <NeuralBanner />
      <FeaturedPosts />
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;
