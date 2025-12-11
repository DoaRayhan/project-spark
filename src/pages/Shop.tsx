import { useState } from "react";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Cart, CartItem } from "@/components/Cart";
import { ShopCategoryCards } from "@/components/ShopCategoryCards";
import { ShopFilters } from "@/components/ShopFilters";
import { BrandLogos } from "@/components/BrandLogos";
import { ShopProductGrid } from "@/components/ShopProductGrid";
import { products, Product } from "@/config/products";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const productsPerPage = 12;

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

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Page Header */}
      <div className="bg-muted py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-2xl font-bold text-foreground">Shop</h1>
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Shop</span>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Category Cards */}
      <ShopCategoryCards />
      
      {/* Filters */}
      <ShopFilters 
        totalResults={products.length}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      {/* Brand Logos */}
      <BrandLogos />
      
      {/* Product Grid */}
      <ShopProductGrid 
        products={paginatedProducts}
        onAddToCart={handleAddToCart}
        viewMode={viewMode}
      />
      
      {/* Pagination */}
      <div className="container px-4 md:px-6 py-12">
        <div className="flex justify-center items-center gap-2">
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-border rounded text-sm text-muted-foreground hover:bg-muted disabled:opacity-50 transition-colors"
          >
            First
          </button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded text-sm font-medium transition-colors ${
                currentPage === page 
                  ? "bg-primary text-primary-foreground" 
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm text-primary font-medium hover:underline disabled:opacity-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
      
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

export default Shop;