import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface ProductVariant {
  size?: string;
  color?: string;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  priceId: string;
  description: string;
  sizes?: string[];
  colors?: { name: string; value: string }[];
  variants: ProductVariant[];
}

export const products: Product[] = [
  // CLOTHS
  { 
    id: 1, 
    name: "Classic Leather Jacket", 
    price: 299.99, 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"],
    category: "Cloths",
    priceId: "price_1SpNd4KviGgWUA8hK0lIAx9Z",
    description: "Premium leather jacket with a timeless design. Perfect for any casual or semi-formal occasion.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "hsl(0, 0%, 10%)" },
      { name: "Brown", value: "hsl(25, 50%, 30%)" },
    ],
    variants: [
      { size: "S", color: "Black", stock: 10 },
      { size: "M", color: "Black", stock: 15 },
      { size: "L", color: "Black", stock: 12 },
      { size: "XL", color: "Black", stock: 8 },
    ]
  },
  { 
    id: 2, 
    name: "Cashmere Sweater", 
    price: 189.99, 
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop"],
    category: "Cloths",
    priceId: "price_1SpNdFKviGgWUA8hFG6St0x2",
    description: "Luxuriously soft cashmere sweater for ultimate comfort and style.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", value: "hsl(40, 30%, 90%)" },
      { name: "Navy", value: "hsl(220, 50%, 25%)" },
    ],
    variants: [
      { size: "M", color: "Cream", stock: 20 },
      { size: "L", color: "Navy", stock: 15 },
    ]
  },
  { 
    id: 3, 
    name: "Tailored Blazer", 
    price: 259.99, 
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"],
    category: "Cloths",
    priceId: "price_1SpNdPKviGgWUA8hyWNV8DCl",
    description: "Perfectly tailored blazer for a sophisticated look.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", value: "hsl(0, 0%, 25%)" },
      { name: "Navy", value: "hsl(220, 50%, 25%)" },
    ],
    variants: [
      { size: "M", color: "Charcoal", stock: 12 },
      { size: "L", color: "Navy", stock: 10 },
    ]
  },
  { 
    id: 4, 
    name: "Silk Blouse", 
    price: 149.99, 
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop"],
    category: "Cloths",
    priceId: "price_1SpNdYKviGgWUA8h9xv8wxJ6",
    description: "Elegant silk blouse with a flowing silhouette.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ivory", value: "hsl(40, 30%, 95%)" },
      { name: "Blush", value: "hsl(350, 50%, 85%)" },
    ],
    variants: [
      { size: "S", color: "Ivory", stock: 18 },
      { size: "M", color: "Blush", stock: 14 },
    ]
  },

  // WATCHES
  { 
    id: 5, 
    name: "Heritage Timepiece", 
    price: 599.99, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop"],
    category: "Watches",
    priceId: "price_1SaB0cKviGgWUA8hiCuLXr43",
    description: "A sophisticated automatic movement watch featuring a sapphire crystal face.",
    colors: [
      { name: "Silver", value: "hsl(0, 0%, 75%)" },
      { name: "Gold", value: "hsl(45, 70%, 50%)" },
    ],
    variants: [
      { color: "Silver", stock: 6 },
      { color: "Gold", stock: 4 },
    ]
  },
  { 
    id: 6, 
    name: "Minimalist Watch", 
    price: 349.99, 
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop"],
    category: "Watches",
    priceId: "price_1SpNdlKviGgWUA8h5iEl3O0u",
    description: "Clean lines and understated elegance define this minimalist timepiece.",
    colors: [
      { name: "Black", value: "hsl(0, 0%, 10%)" },
      { name: "White", value: "hsl(0, 0%, 95%)" },
    ],
    variants: [
      { color: "Black", stock: 10 },
      { color: "White", stock: 8 },
    ]
  },
  { 
    id: 7, 
    name: "Sport Chronograph", 
    price: 449.99, 
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=500&fit=crop"],
    category: "Watches",
    priceId: "price_1SpNduKviGgWUA8hrCNSB2HW",
    description: "Professional-grade chronograph for the active lifestyle.",
    colors: [
      { name: "Steel", value: "hsl(0, 0%, 65%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    variants: [
      { color: "Steel", stock: 7 },
      { color: "Black", stock: 5 },
    ]
  },

  // EYEWEAR
  { 
    id: 8, 
    name: "Aviator Sunglasses", 
    price: 189.99, 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop"],
    category: "Eyewear",
    priceId: "price_1SaB0xKviGgWUA8h7oOmNinx",
    description: "Iconic aviator frames with polarized lenses offering 100% UV protection.",
    colors: [
      { name: "Gold", value: "hsl(45, 70%, 50%)" },
      { name: "Gunmetal", value: "hsl(0, 0%, 35%)" },
    ],
    variants: [
      { color: "Gold", stock: 15 },
      { color: "Gunmetal", stock: 10 },
    ]
  },
  { 
    id: 9, 
    name: "Round Frames", 
    price: 159.99, 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop"],
    category: "Eyewear",
    priceId: "price_1SpNeCKviGgWUA8hxNDwwVCc",
    description: "Classic round frames for a vintage-inspired look.",
    colors: [
      { name: "Tortoise", value: "hsl(30, 60%, 30%)" },
      { name: "Black", value: "hsl(0, 0%, 10%)" },
    ],
    variants: [
      { color: "Tortoise", stock: 12 },
      { color: "Black", stock: 18 },
    ]
  },
  { 
    id: 10, 
    name: "Cat Eye Sunglasses", 
    price: 175.99, 
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=500&fit=crop"],
    category: "Eyewear",
    priceId: "price_1SpNeOKviGgWUA8hHEGgkS75",
    description: "Retro cat eye sunglasses with modern lens technology.",
    colors: [
      { name: "Black", value: "hsl(0, 0%, 10%)" },
      { name: "Red", value: "hsl(0, 70%, 40%)" },
    ],
    variants: [
      { color: "Black", stock: 14 },
      { color: "Red", stock: 8 },
    ]
  },

  // ACCESSORIES
  { 
    id: 11, 
    name: "Classic Leather Bag", 
    price: 249.99, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop"],
    category: "Accessories",
    priceId: "price_1SaB0NKviGgWUA8hu6Q3IMiC",
    description: "Crafted from premium full-grain leather with hand-stitched detailing.",
    colors: [
      { name: "Cognac", value: "hsl(25, 60%, 35%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
    ],
    variants: [
      { color: "Cognac", stock: 12 },
      { color: "Black", stock: 8 },
    ]
  },
  { 
    id: 12, 
    name: "Signature Wallet", 
    price: 129.99, 
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop"],
    category: "Accessories",
    priceId: "price_1SaB1ZKviGgWUA8h8UgnClih",
    description: "Slim profile bi-fold wallet with RFID blocking technology.",
    colors: [
      { name: "Tan", value: "hsl(30, 45%, 45%)" },
      { name: "Black", value: "hsl(0, 0%, 12%)" },
    ],
    variants: [
      { color: "Tan", stock: 25 },
      { color: "Black", stock: 30 },
    ]
  },
  { 
    id: 13, 
    name: "Premium Leather Belt", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=500&fit=crop"],
    category: "Accessories",
    priceId: "price_1SaB1pKviGgWUA8hjpwRw3fz",
    description: "Full-grain Italian leather belt with a solid brass buckle.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", value: "hsl(25, 50%, 30%)" },
      { name: "Black", value: "hsl(0, 0%, 10%)" },
    ],
    variants: [
      { size: "M", color: "Brown", stock: 12 },
      { size: "L", color: "Black", stock: 15 },
    ]
  },
  { 
    id: 14, 
    name: "Silk Scarf", 
    price: 79.99, 
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop"],
    category: "Accessories",
    priceId: "price_1SplW2KviGgWUA8hAwlmSeDY",
    description: "Luxurious silk scarf with elegant patterns.",
    colors: [
      { name: "Navy", value: "hsl(220, 50%, 25%)" },
      { name: "Burgundy", value: "hsl(345, 45%, 30%)" },
    ],
    variants: [
      { color: "Navy", stock: 20 },
      { color: "Burgundy", stock: 16 },
    ]
  },

  // FRAGRANCE
  { 
    id: 15, 
    name: "Luxury Eau de Parfum", 
    price: 159.99, 
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop"],
    category: "Fragrance",
    priceId: "price_1SaB2OKviGgWUA8hYBBha4we",
    description: "An exquisite blend of bergamot, sandalwood, and amber.",
    sizes: ["50ml", "100ml"],
    variants: [
      { size: "50ml", stock: 20 },
      { size: "100ml", stock: 15 },
    ]
  },
  { 
    id: 16, 
    name: "Fresh Cologne", 
    price: 119.99, 
    image: "https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=400&h=500&fit=crop"],
    category: "Fragrance",
    priceId: "price_1SplWMKviGgWUA8hI9FcqaAC",
    description: "Light and refreshing cologne for everyday wear.",
    sizes: ["50ml", "100ml"],
    variants: [
      { size: "50ml", stock: 25 },
      { size: "100ml", stock: 18 },
    ]
  },
  { 
    id: 17, 
    name: "Oud Intense", 
    price: 229.99, 
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop"],
    category: "Fragrance",
    priceId: "price_1SplWfKviGgWUA8hFhYpsoEt",
    description: "Rich and intense oud fragrance for special occasions.",
    sizes: ["50ml", "100ml"],
    variants: [
      { size: "50ml", stock: 10 },
      { size: "100ml", stock: 8 },
    ]
  },
  { 
    id: 18, 
    name: "Floral Mist", 
    price: 89.99, 
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop"],
    category: "Fragrance",
    priceId: "price_1SplWtKviGgWUA8hYVbxZ9Q9",
    description: "Delicate floral notes for a feminine touch.",
    sizes: ["30ml", "50ml"],
    variants: [
      { size: "30ml", stock: 22 },
      { size: "50ml", stock: 18 },
    ]
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
