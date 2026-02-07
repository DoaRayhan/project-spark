import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";

const Team = () => {
  const { cartCount, openCart } = useCart();

  const team = [
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop" },
    { name: "Username", role: "Profession", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={openCart} />
      
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm font-bold text-muted-foreground mb-2">WHAT WE DO</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Innovation tailored for you</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link><span>/</span><span className="text-foreground">Team</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-primary hover:text-primary/80"><FaFacebook className="h-5 w-5" /></a>
                    <a href="#" className="text-primary hover:text-primary/80"><FaInstagram className="h-5 w-5" /></a>
                    <a href="#" className="text-primary hover:text-primary/80"><FaTwitter className="h-5 w-5" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Start your 14 days free trial</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded font-bold hover:bg-primary/90 transition-colors">Try it free now</button>
        </div>
      </section>

      <Footer />
      <Cart />
    </div>
  );
};

export default Team;
