import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { ShopifyProduct, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

const ProductDetail = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.product) {
          const productData = { node: data.data.product } as ShopifyProduct;
          setProduct(productData);
          
          // Initialize selected options with first variant's options
          const firstVariant = data.data.product.variants.edges[0]?.node;
          if (firstVariant) {
            const initialOptions: Record<string, string> = {};
            firstVariant.selectedOptions.forEach((opt: any) => {
              initialOptions[opt.name] = opt.value;
            });
            setSelectedOptions(initialOptions);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (handle) {
      fetchProduct();
    }
  }, [handle]);

  const selectedVariant = product?.node.variants.edges.find(({ node }) => {
    return node.selectedOptions.every(opt => 
      selectedOptions[opt.name] === opt.value
    );
  })?.node;

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions
    };

    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} has been added to your cart`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={0} onCartClick={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-96 bg-secondary/20 rounded-lg mb-4"></div>
            <div className="h-8 bg-secondary/20 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-secondary/20 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartCount={0} onCartClick={() => {}} />
        <div className="container mx-auto px-4 py-8">
          <p>Product not found</p>
          <Link to="/">
            <Button variant="outline" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = product.node.images.edges;
  const currentPrice = selectedVariant?.price || product.node.priceRange.minVariantPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={useCartStore.getState().items.length} onCartClick={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20">
              {images[selectedImage]?.node && (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.node.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={image.node.altText || product.node.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">{product.node.title}</h1>
              <p className="text-3xl font-bold text-primary">
                {currentPrice.currencyCode} {parseFloat(currentPrice.amount).toFixed(2)}
              </p>
            </div>

            {product.node.description && (
              <div className="prose prose-sm">
                <p className="text-muted-foreground">{product.node.description}</p>
              </div>
            )}

            {/* Options */}
            {product.node.options.map(option => (
              <div key={option.name} className="space-y-2">
                <label className="text-sm font-medium">{option.name}</label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map(value => (
                    <Button
                      key={value}
                      variant={selectedOptions[option.name] === value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedOptions({ ...selectedOptions, [option.name]: value })}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {selectedVariant && !selectedVariant.availableForSale && (
              <Badge variant="destructive">Out of Stock</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
