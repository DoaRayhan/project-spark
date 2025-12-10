import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { getProductById } from "@/config/products";
import { CartItem } from "@/components/Cart";
import { ImageGallery } from "@/components/ImageGallery";
import { VariantSelector } from "@/components/VariantSelector";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Cart } from "@/components/Cart";
import { ArrowLeft, ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]?.name
  );
  const [isLiked, setIsLiked] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const stockCount = useMemo(() => {
    if (!product) return 0;
    const variant = product.variants.find((v) => {
      if (v.size && v.color) return v.size === selectedSize && v.color === selectedColor;
      if (v.size) return v.size === selectedSize;
      if (v.color) return v.color === selectedColor;
      return true;
    });
    return variant?.stock ?? 0;
  }, [product, selectedSize, selectedColor]);

  const handleAddToCart = () => {
    if (product) {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Collection</span>
        </button>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <ImageGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-bold text-accent">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <VariantSelector
              sizes={product.sizes}
              colors={product.colors}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              onSizeChange={setSelectedSize}
              onColorChange={setSelectedColor}
            />

            {/* Stock Info */}
            <p className="text-sm">
              <span className={stockCount > 5 ? "text-green-600" : "text-orange-500"}>
                {stockCount > 0 ? `${stockCount} in stock` : "Out of stock"}
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={stockCount === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart
                  className={`h-5 w-5 ${isLiked ? "fill-accent text-accent" : ""}`}
                />
              </Button>
            </div>

            {/* Features */}
            <div className="grid gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck className="h-5 w-5" />
                <span>Free shipping on orders over $150</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RotateCcw className="h-5 w-5" />
                <span>30-day free returns</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default ProductDetail;
