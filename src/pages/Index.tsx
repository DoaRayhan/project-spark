import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard, Product } from "@/components/ProductCard";
import { Cart, CartItem } from "@/components/Cart";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products: Product[] = [
  { id: 1, name: "Classic Leather Bag", price: 249.99, image: product1, category: "Bags" },
  { id: 2, name: "Heritage Timepiece", price: 599.99, image: product2, category: "Watches" },
  { id: 3, name: "Aviator Sunglasses", price: 189.99, image: product3, category: "Eyewear" },
  { id: 4, name: "Signature Wallet", price: 129.99, image: product4, category: "Accessories" },
  { id: 5, name: "Premium Leather Belt", price: 89.99, image: product5, category: "Accessories" },
  { id: 6, name: "Luxury Fragrance", price: 159.99, image: product6, category: "Fragrance" },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
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

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      
      <section className="container px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Collection</h2>
            <p className="text-muted-foreground">Handpicked essentials for the modern wardrobe</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">All</Button>
            <Button variant="ghost">Bags</Button>
            <Button variant="ghost">Watches</Button>
            <Button variant="ghost">Accessories</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $100</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="border-t border-border/40 py-8 mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 LUXE. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
