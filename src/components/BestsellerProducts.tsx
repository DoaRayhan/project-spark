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
        <div className="text-center mb-8 md:mb-12">
          <p className="text-muted-foreground text-sm mb-2">Featured Products</p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">BESTSELLER PRODUCTS</h2>
          <p className="text-muted-foreground text-sm md:text-base">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-lg"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button 
                  onClick={(e) => handleLike(e, product.id)}
                  className="absolute top-2 md:top-4 right-2 md:right-4 p-1.5 md:p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 md:h-5 md:w-5 transition-colors ${
                      likedProducts.includes(product.id) ? 'fill-accent text-accent' : 'text-foreground'
                    }`} 
                  />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full text-xs md:text-sm" 
                    size="sm"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <ShoppingCart className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="text-center space-y-1 md:space-y-2 p-3 md:p-4">
                <h3 className="font-bold text-foreground text-sm md:text-base line-clamp-2">{product.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{product.category}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through text-xs md:text-sm">${(product.price * 1.5).toFixed(2)}</span>
                  <span className="text-primary font-bold text-sm md:text-base">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 md:gap-2 pt-1 md:pt-2">
                  {colorSwatches.map((color, index) => (
                    <span 
                      key={index}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${color}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
