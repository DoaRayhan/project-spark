import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { useCart } from "@/contexts/CartContext";

const About = () => {
  const { cartCount, openCart } = useCart();

  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "Sarah Johnson", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Mike Chen", role: "Lead Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={openCart} />
      
      <section className="relative bg-muted py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-muted-foreground mb-4">ABOUT COMPANY</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">ABOUT US</h1>
              <p className="text-muted-foreground text-lg mb-8">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:bg-primary/90 transition-colors">
                Get Quote Now
              </button>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="About us" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h3 className="text-4xl font-bold text-foreground mb-2">15K</h3><p className="text-muted-foreground">Happy Customers</p></div>
            <div><h3 className="text-4xl font-bold text-foreground mb-2">150K</h3><p className="text-muted-foreground">Monthly Visitors</p></div>
            <div><h3 className="text-4xl font-bold text-foreground mb-2">15</h3><p className="text-muted-foreground">Countries Worldwide</p></div>
            <div><h3 className="text-4xl font-bold text-foreground mb-2">100+</h3><p className="text-muted-foreground">Top Partners</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Problems trying to resolve the conflict between the two major realms of Classical physics.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
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

export default About;
