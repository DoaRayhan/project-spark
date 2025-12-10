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
  { 
    id: 1, 
    name: "Classic Leather Bag", 
    price: 249.99, 
    image: product1,
    images: [product1, product2, product3],
    category: "Bags",
    priceId: "price_1SaB0NKviGgWUA8hu6Q3IMiC",
    description: "Crafted from premium full-grain leather, this timeless bag combines elegance with everyday functionality. Features hand-stitched detailing, antique brass hardware, and a spacious interior with multiple compartments.",
    colors: [
      { name: "Cognac", value: "hsl(25, 60%, 35%)" },
      { name: "Black", value: "hsl(0, 0%, 15%)" },
      { name: "Navy", value: "hsl(220, 50%, 25%)" },
    ],
    variants: [
      { color: "Cognac", stock: 12 },
      { color: "Black", stock: 8 },
      { color: "Navy", stock: 5 },
    ]
  },
  { 
    id: 2, 
    name: "Heritage Timepiece", 
    price: 599.99, 
    image: product2,
    images: [product2, product1, product4],
    category: "Watches",
    priceId: "price_1SaB0cKviGgWUA8hiCuLXr43",
    description: "A sophisticated automatic movement watch featuring a sapphire crystal face, genuine leather strap, and water resistance up to 100 meters. The perfect blend of classic design and modern engineering.",
    colors: [
      { name: "Silver", value: "hsl(0, 0%, 75%)" },
      { name: "Gold", value: "hsl(45, 70%, 50%)" },
      { name: "Rose Gold", value: "hsl(10, 50%, 65%)" },
    ],
    variants: [
      { color: "Silver", stock: 6 },
      { color: "Gold", stock: 4 },
      { color: "Rose Gold", stock: 3 },
    ]
  },
  { 
    id: 3, 
    name: "Aviator Sunglasses", 
    price: 189.99, 
    image: product3,
    images: [product3, product5, product6],
    category: "Eyewear",
    priceId: "price_1SaB0xKviGgWUA8h7oOmNinx",
    description: "Iconic aviator frames with polarized lenses offering 100% UV protection. Lightweight titanium construction with adjustable nose pads for a customized fit.",
    colors: [
      { name: "Gold", value: "hsl(45, 70%, 50%)" },
      { name: "Gunmetal", value: "hsl(0, 0%, 35%)" },
      { name: "Black", value: "hsl(0, 0%, 10%)" },
    ],
    variants: [
      { color: "Gold", stock: 15 },
      { color: "Gunmetal", stock: 10 },
      { color: "Black", stock: 20 },
    ]
  },
  { 
    id: 4, 
    name: "Signature Wallet", 
    price: 129.99, 
    image: product4,
    images: [product4, product1, product5],
    category: "Accessories",
    priceId: "price_1SaB1ZKviGgWUA8h8UgnClih",
    description: "Slim profile bi-fold wallet handcrafted from vegetable-tanned leather. Features RFID blocking technology, eight card slots, and a full-length bill compartment.",
    colors: [
      { name: "Tan", value: "hsl(30, 45%, 45%)" },
      { name: "Black", value: "hsl(0, 0%, 12%)" },
      { name: "Burgundy", value: "hsl(345, 45%, 30%)" },
    ],
    variants: [
      { color: "Tan", stock: 25 },
      { color: "Black", stock: 30 },
      { color: "Burgundy", stock: 15 },
    ]
  },
  { 
    id: 5, 
    name: "Premium Leather Belt", 
    price: 89.99, 
    image: product5,
    images: [product5, product4, product1],
    category: "Accessories",
    priceId: "price_1SaB1pKviGgWUA8hjpwRw3fz",
    description: "Full-grain Italian leather belt with a solid brass buckle. Hand-finished edges and reinforced stitching ensure lasting durability and timeless style.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", value: "hsl(25, 50%, 30%)" },
      { name: "Black", value: "hsl(0, 0%, 10%)" },
    ],
    variants: [
      { size: "S", color: "Brown", stock: 8 },
      { size: "M", color: "Brown", stock: 12 },
      { size: "L", color: "Brown", stock: 10 },
      { size: "XL", color: "Brown", stock: 6 },
      { size: "S", color: "Black", stock: 10 },
      { size: "M", color: "Black", stock: 15 },
      { size: "L", color: "Black", stock: 12 },
      { size: "XL", color: "Black", stock: 8 },
    ]
  },
  { 
    id: 6, 
    name: "Luxury Fragrance", 
    price: 159.99, 
    image: product6,
    images: [product6, product3, product2],
    category: "Fragrance",
    priceId: "price_1SaB2OKviGgWUA8hYBBha4we",
    description: "An exquisite blend of bergamot, sandalwood, and amber creates a sophisticated scent that evolves throughout the day. Long-lasting formula in an elegant glass bottle.",
    sizes: ["50ml", "100ml"],
    variants: [
      { size: "50ml", stock: 20 },
      { size: "100ml", stock: 15 },
    ]
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
