import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <span className="text-sm font-medium tracking-wider uppercase text-accent">Spring Collection 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Timeless
            <br />
            <span className="text-accent">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Discover our curated collection of premium fashion and accessories that define modern sophistication.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
