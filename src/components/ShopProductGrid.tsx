import { Product } from "@/config/products";

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
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group cursor-pointer ${
                viewMode === "list" ? "flex gap-6 items-start" : ""
              }`}
              onClick={() => onAddToCart(product)}
            >
              <div className={`relative overflow-hidden bg-secondary ${
                viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "aspect-[3/4]"
              }`}>
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className={`space-y-2 ${viewMode === "list" ? "flex-1" : "text-center pt-4"}`}>
                <h3 className="font-bold text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.category}</p>
                <div className={`flex items-center gap-2 ${viewMode === "list" ? "" : "justify-center"}`}>
                  <span className="text-muted-foreground line-through text-sm">${(product.price * 1.5).toFixed(2)}</span>
                  <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                </div>
                <div className={`flex items-center gap-2 pt-2 ${viewMode === "list" ? "" : "justify-center"}`}>
                  {colorSwatches.map((color, index) => (
                    <span 
                      key={index}
                      className={`w-4 h-4 rounded-full ${color}`}
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