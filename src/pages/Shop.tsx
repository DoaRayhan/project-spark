import { useState } from "react";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ShopCategoryCards } from "@/components/ShopCategoryCards";
import { ShopFilters } from "@/components/ShopFilters";
import { BrandLogos } from "@/components/BrandLogos";
import { ShopProductGrid } from "@/components/ShopProductGrid";
import { products } from "@/config/products";
import { useCart } from "@/contexts/CartContext";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const { cartCount, openCart, addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const productsPerPage = 12;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header cartCount={cartCount} onCartClick={openCart} />
      
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
      
      <ShopCategoryCards />
      <ShopFilters totalResults={products.length} viewMode={viewMode} onViewModeChange={setViewMode} />
      <BrandLogos />
      <ShopProductGrid products={paginatedProducts} onAddToCart={addToCart} viewMode={viewMode} />
      
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
      <Cart />
    </div>
  );
};

export default Shop;
