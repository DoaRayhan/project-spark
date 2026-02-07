import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Pricing = () => {
  const { cartCount, openCart } = useCart();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { name: "FREE", price: 0, description: "Organize across all apps by hand", features: ["Unlimited product updates", "1GB Cloud storage", "Email and community support"], highlighted: false },
    { name: "STANDARD", price: isYearly ? 99.99 : 9.99, description: "Organize across all apps by hand", features: ["Unlimited product updates", "5GB Cloud storage", "Email and community support", "Personal help center", "Access to new features"], highlighted: true },
    { name: "PREMIUM", price: isYearly ? 199.99 : 19.99, description: "Organize across all apps by hand", features: ["Unlimited product updates", "Unlimited Cloud storage", "Priority email support", "Personal help center", "Access to new features", "24/7 Phone support"], highlighted: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={openCart} />
      
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm font-bold text-muted-foreground mb-2">PRICING</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Simple Pricing</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link><span>/</span><span className="text-foreground">Pricing</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            <div className="flex items-center justify-center gap-4">
              <span className={`font-bold ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
              <button onClick={() => setIsYearly(!isYearly)} className={`relative w-12 h-6 rounded-full transition-colors ${isYearly ? 'bg-primary' : 'bg-muted-foreground/30'}`}>
                <span className={`absolute top-1 w-4 h-4 bg-background rounded-full transition-transform ${isYearly ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <span className={`font-bold ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly</span>
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">Save 25%</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`rounded-lg p-8 text-center ${plan.highlighted ? 'bg-foreground text-background scale-105' : 'bg-background border'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'opacity-80' : 'text-muted-foreground'}`}>{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">${plan.price}</span>
                  <span className={`${plan.highlighted ? 'opacity-80' : 'text-muted-foreground'}`}>/{isYearly ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <Check className={`h-4 w-4 ${plan.highlighted ? 'text-background' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.highlighted ? '' : 'text-muted-foreground'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Try for free</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Cart />
    </div>
  );
};

export default Pricing;
