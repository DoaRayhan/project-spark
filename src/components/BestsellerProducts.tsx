import { Product } from "@/config/products";

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
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-2">Featured Products</p>
          <h2 className="text-2xl font-bold text-foreground mb-2">BESTSELLER PRODUCTS</h2>
          <p className="text-muted-foreground">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => onAddToCart(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="font-bold text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.category}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through">${(product.price * 1.5).toFixed(2)}</span>
                  <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-center gap-2 pt-2">
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