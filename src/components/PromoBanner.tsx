import { Button } from "@/components/ui/button";

export const PromoBanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop"
              alt="Summer Collection"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-primary-foreground space-y-6">
            <span className="text-sm font-medium uppercase tracking-wider opacity-90">SUMMER 2020</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Vita Classic<br />Product
            </h2>
            <p className="text-primary-foreground/80 max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold">$16.48</span>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};