import { Link } from "react-router-dom";

const categories = [
  {
    name: "MEN",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&h=500&fit=crop",
    className: "col-span-1 row-span-2"
  },
  {
    name: "WOMEN",
    image: "https://images.unsplash.com/photo-1485968579169-a6b287892dc8?w=400&h=500&fit=crop",
    className: "col-span-1 row-span-2"
  },
  {
    name: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=240&fit=crop",
    className: "col-span-1 row-span-1"
  },
  {
    name: "KIDS",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=300&h=240&fit=crop",
    className: "col-span-1 row-span-1"
  }
];

export const EditorsPick = () => {
  return (
    <section className="py-20 bg-[hsl(var(--brand-light-gray))]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">EDITOR'S PICK</h2>
          <p className="text-muted-foreground">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto h-auto md:h-[500px]">
          {/* Men - Large */}
          <Link 
            to="#" 
            className="relative group overflow-hidden md:row-span-2 h-[300px] md:h-full"
          >
            <img 
              src={categories[0].image}
              alt="Men"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-background text-foreground px-8 py-3 font-bold text-sm">
                MEN
              </span>
            </div>
          </Link>
          
          {/* Women - Large */}
          <Link 
            to="#" 
            className="relative group overflow-hidden md:row-span-2 h-[300px] md:h-full"
          >
            <img 
              src={categories[1].image}
              alt="Women"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-background text-foreground px-8 py-3 font-bold text-sm">
                WOMEN
              </span>
            </div>
          </Link>
          
          {/* Accessories - Small */}
          <Link 
            to="#" 
            className="relative group overflow-hidden md:col-span-2 h-[200px] md:h-auto"
          >
            <img 
              src={categories[2].image}
              alt="Accessories"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-background text-foreground px-8 py-3 font-bold text-sm">
                ACCESSORIES
              </span>
            </div>
          </Link>
          
          {/* Kids - Small */}
          <Link 
            to="#" 
            className="relative group overflow-hidden md:col-span-2 h-[200px] md:h-auto"
          >
            <img 
              src={categories[3].image}
              alt="Kids"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-background text-foreground px-8 py-3 font-bold text-sm">
                KIDS
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};