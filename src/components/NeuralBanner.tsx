import { Button } from "@/components/ui/button";

export const NeuralBanner = () => {
  return (
    <section className="relative min-h-[500px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&h=800&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-md ml-auto text-primary-foreground">
          <span className="text-sm font-medium uppercase tracking-wider opacity-90">SUMMER 2020</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
            Part of the Neural<br />Universe
          </h2>
          <p className="opacity-90 mb-8">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              BUY NOW
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};