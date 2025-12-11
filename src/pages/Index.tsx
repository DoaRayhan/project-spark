import { useState } from "react";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { EditorsPick } from "@/components/EditorsPick";
import { BestsellerProducts } from "@/components/BestsellerProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { NeuralBanner } from "@/components/NeuralBanner";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Footer } from "@/components/Footer";
import { Cart, CartItem } from "@/components/Cart";
import { products, Product } from "@/config/products";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success(`Added another ${product.name} to cart`);
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success(`${product.name} added to cart`);
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems((items) => {
      return items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <EditorsPick />
      <BestsellerProducts products={products} onAddToCart={handleAddToCart} />
      <PromoBanner />
      <NeuralBanner />
      <FeaturedPosts />
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default Index;