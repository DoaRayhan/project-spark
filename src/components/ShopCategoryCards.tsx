import { Link } from "react-router-dom";

const categories = [
  {
    name: "CLOTHS",
    items: 8,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300&h=200&fit=crop",
    bgColor: "bg-primary"
  },
  {
    name: "WATCHES",
    items: 6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    bgColor: "bg-primary"
  },
  {
    name: "EYEWEAR",
    items: 5,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop",
    bgColor: "bg-transparent"
  },
  {
    name: "ACCESSORIES",
    items: 12,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
    bgColor: "bg-transparent"
  },
  {
    name: "FRAGRANCE",
    items: 4,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=200&fit=crop",
    bgColor: "bg-primary"
  }
];

export const ShopCategoryCards = () => {
  return (
    <section className="bg-muted py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="#"
              className="relative group overflow-hidden h-40 md:h-52"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                <span className="font-bold text-lg">{category.name}</span>
                <span className="text-sm">{category.items} Items</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};