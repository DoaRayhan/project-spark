import { Product } from "@/config/products";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ShopProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  viewMode: "grid" | "list";
}

const colorSwatches = [
  "bg-primary",
  "bg-green-600", 
  "bg-accent",
  "bg-foreground"
];

export const ShopProductGrid = ({ products, onAddToCart, viewMode }: ShopProductGridProps) => {
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
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-4 md:gap-8 ${
          viewMode === "grid" 
            ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group cursor-pointer bg-card rounded-lg overflow-hidden border border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-lg ${
                viewMode === "list" ? "flex gap-4 md:gap-6 items-start p-4" : ""
              }`}
              onClick={() => handleProductClick(product.id)}
            >
              <div className={`relative overflow-hidden bg-secondary ${
                viewMode === "list" ? "w-32 md:w-48 h-32 md:h-48 flex-shrink-0 rounded-md" : "aspect-[3/4]"
              }`}>
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
              
              <div className={`space-y-1 md:space-y-2 ${viewMode === "list" ? "flex-1" : "text-center p-3 md:p-4"}`}>
                <h3 className="font-bold text-foreground text-sm md:text-base line-clamp-2">{product.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{product.category}</p>
                <div className={`flex items-center gap-2 ${viewMode === "list" ? "" : "justify-center"}`}>
                  <span className="text-muted-foreground line-through text-xs md:text-sm">${(product.price * 1.5).toFixed(2)}</span>
                  <span className="text-primary font-bold text-sm md:text-base">${product.price.toFixed(2)}</span>
                </div>
                <div className={`flex items-center gap-1.5 md:gap-2 pt-1 md:pt-2 ${viewMode === "list" ? "" : "justify-center"}`}>
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
