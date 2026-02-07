import { Product } from "@/config/products";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BestsellerProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const colorSwatches = [
  "bg-blue-500",
  "bg-green-600", 
  "bg-orange-500",
  "bg-foreground"
];

export const BestsellerProducts = ({ products, onAddToCart }: BestsellerProductsProps) => {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleLike = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">BESTSELLER PRODUCTS</h2>
          <div className="border-b border-border mt-3" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary rounded-sm">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-1 pt-3 md:pt-4">
                <h3 className="font-bold text-foreground text-sm md:text-base line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{product.category}</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-muted-foreground line-through text-xs md:text-sm">${(product.price * 1.5).toFixed(2)}</span>
                  <span className="text-primary font-bold text-sm md:text-base">${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
