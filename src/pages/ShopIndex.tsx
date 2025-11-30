import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ShopifyProduct, storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Heart } from "lucide-react";

const ShopIndex = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const cartItems = useCartStore(state => state.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50 });
        setProducts(data?.data?.products?.edges || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions
    };

    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header cartCount={cartItems.length} onCartClick={() => {}} />
        <Hero />
        <section className="container px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-secondary/20 rounded-lg mb-4"></div>
                <div className="h-4 bg-secondary/20 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-secondary/20 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header cartCount={cartItems.length} onCartClick={() => {}} />
      <Hero />
      
      <section className="container px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Collection</h2>
            <p className="text-muted-foreground">Handpicked essentials for the modern wardrobe</p>
          </div>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-semibold mb-2">No products found</p>
            <p className="text-muted-foreground mb-6">
              Let's add some products to your store! Tell me what you'd like to sell.
            </p>
            <p className="text-sm text-muted-foreground">
              Example: "Add a Classic Leather Handbag for $249.99"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const firstImage = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              
              return (
                <div key={product.node.id} className="group relative">
                  <Link to={`/product/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20 mb-4">
                      {firstImage && (
                        <img
                          src={firstImage.url}
                          alt={firstImage.altText || product.node.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      )}
                    </div>
                  </Link>
                  
                  <div className="flex justify-between items-start">
                    <Link to={`/product/${product.node.handle}`} className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                        {product.node.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </p>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              );
            })}
          </div>
        )}
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
    </div>
  );
};

export default ShopIndex;
