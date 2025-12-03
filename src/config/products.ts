import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  priceId: string;
}

export const products: Product[] = [
  { 
    id: 1, 
    name: "Classic Leather Bag", 
    price: 249.99, 
    image: product1, 
    category: "Bags",
    priceId: "price_1SaB0NKviGgWUA8hu6Q3IMiC"
  },
  { 
    id: 2, 
    name: "Heritage Timepiece", 
    price: 599.99, 
    image: product2, 
    category: "Watches",
    priceId: "price_1SaB0cKviGgWUA8hiCuLXr43"
  },
  { 
    id: 3, 
    name: "Aviator Sunglasses", 
    price: 189.99, 
    image: product3, 
    category: "Eyewear",
    priceId: "price_1SaB0xKviGgWUA8h7oOmNinx"
  },
  { 
    id: 4, 
    name: "Signature Wallet", 
    price: 129.99, 
    image: product4, 
    category: "Accessories",
    priceId: "price_1SaB1ZKviGgWUA8h8UgnClih"
  },
  { 
    id: 5, 
    name: "Premium Leather Belt", 
    price: 89.99, 
    image: product5, 
    category: "Accessories",
    priceId: "price_1SaB1pKviGgWUA8hjpwRw3fz"
  },
  { 
    id: 6, 
    name: "Luxury Fragrance", 
    price: 159.99, 
    image: product6, 
    category: "Fragrance",
    priceId: "price_1SaB2OKviGgWUA8hYBBha4we"
  },
];
