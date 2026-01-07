import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Cart, CartItem } from "@/components/Cart";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-muted-foreground mb-4">CONTACT US</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in touch today!</h1>
              <p className="text-muted-foreground text-lg mb-8">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <div className="space-y-4">
                <p className="text-foreground font-bold">Phone: +451 215 215</p>
                <p className="text-foreground font-bold">Fax: +451 215 215</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop" 
                alt="Contact us" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-muted-foreground mb-2">VISIT OUR OFFICE</p>
            <h2 className="text-3xl font-bold text-foreground">We help small businesses with big ideas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">georgia.young@example.com</p>
              <p className="text-muted-foreground mb-4">georgia.young@ple.com</p>
              <p className="font-bold text-foreground mb-4">Get Support</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Submit Request
              </Button>
            </div>
            <div className="bg-foreground text-background rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="opacity-80 mb-2">georgia.young@example.com</p>
              <p className="opacity-80 mb-4">georgia.young@ple.com</p>
              <p className="font-bold mb-4">Get Support</p>
              <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                Submit Request
              </Button>
            </div>
            <div className="bg-background border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">georgia.young@example.com</p>
              <p className="text-muted-foreground mb-4">georgia.young@ple.com</p>
              <p className="font-bold text-foreground mb-4">Get Support</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Let's Talk</h2>
            <p className="text-muted-foreground mb-8">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Your Name *" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input 
                type="email" 
                placeholder="Your Email *" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea 
                placeholder="Your Message *" 
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
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
