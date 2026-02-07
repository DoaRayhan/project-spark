import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Cart, CartItem } from "@/components/Cart";
import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-foreground mb-6">CONTACT US</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get in touch today!
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md">
                We know how large objects will act, but things on a small scale
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-foreground font-bold text-lg">Phone ; +451 215 215</p>
                <p className="text-foreground font-bold text-lg">Fax : +451 215 215</p>
              </div>
              <div className="flex items-center gap-5">
                <FaTwitter className="h-6 w-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
                <FaFacebook className="h-6 w-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
                <FaInstagram className="h-6 w-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
                <FaLinkedin className="h-6 w-6 text-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="relative flex justify-center">
              {/* Decorative circles */}
              <div className="absolute top-4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-pink-100 -z-10" />
              <div className="absolute top-12 right-8 w-3 h-3 rounded-full bg-purple-500" />
              <div className="absolute bottom-24 left-8 w-3 h-3 rounded-full bg-purple-500" />
              <div className="absolute bottom-0 right-1/4 w-4 h-4 rounded-full bg-pink-200" />
              <img 
                src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=600&h=700&fit=crop" 
                alt="Happy family shopping" 
                className="relative z-10 max-h-[500px] md:max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-foreground mb-3">VISIT OUR OFFICE</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-lg mx-auto">
              We help small businesses with big ideas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone Card */}
            <div className="bg-background border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-14 w-14 text-primary mx-auto mb-5" />
              <p className="text-muted-foreground text-sm mb-1">georgia.young@example.com</p>
              <p className="text-muted-foreground text-sm mb-4">georgia.young@ple.com</p>
              <p className="font-bold text-foreground mb-4">Get Support</p>
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                Submit Request
              </Button>
            </div>
            {/* Location Card - Dark */}
            <div className="bg-foreground text-background rounded-lg p-8 text-center">
              <MapPin className="h-14 w-14 text-primary mx-auto mb-5" />
              <p className="text-background/70 text-sm mb-1">georgia.young@example.com</p>
              <p className="text-background/70 text-sm mb-4">georgia.young@ple.com</p>
              <p className="font-bold text-background mb-4">Get Support</p>
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                Submit Request
              </Button>
            </div>
            {/* Mail Card */}
            <div className="bg-background border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-14 w-14 text-primary mx-auto mb-5" />
              <p className="text-muted-foreground text-sm mb-1">georgia.young@example.com</p>
              <p className="text-muted-foreground text-sm mb-4">georgia.young@ple.com</p>
              <p className="font-bold text-foreground mb-4">Get Support</p>
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <ArrowDown className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-sm font-bold text-foreground mb-3">WE Can't WAIT TO MEET YOU</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Let's Talk</h2>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base rounded-md">
              Try it free now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
};

export default Contact;
