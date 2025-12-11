import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden bg-primary">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=800&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-xl space-y-6">
          <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
            SUMMER 2020
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-md">
            We know how large objects will act, but things on a small scale.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-base"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};