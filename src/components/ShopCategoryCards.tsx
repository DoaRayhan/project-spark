import { Link } from "react-router-dom";

const categories = [
  {
    name: "CLOTHS",
    items: 5,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=200&fit=crop",
    bgColor: "bg-primary"
  },
  {
    name: "CLOTHS",
    items: 5,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=200&fit=crop",
    bgColor: "bg-primary"
  },
  {
    name: "CLOTHS",
    items: 5,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=200&fit=crop",
    bgColor: "bg-transparent"
  },
  {
    name: "CLOTHS",
    items: 5,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=200&fit=crop",
    bgColor: "bg-transparent"
  },
  {
    name: "CLOTHS",
    items: 5,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=200&fit=crop",
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