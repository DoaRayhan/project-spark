import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Cart, CartItem } from "@/components/Cart";
import { Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
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

  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      date: "22 April 2021",
      comments: 10,
      category: "Google"
    },
    {
      id: 2,
      title: "Loudest à la Madison #2 (L'integral)",
      excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
      date: "22 April 2021",
      comments: 15,
      category: "Trending"
    },
    {
      id: 3,
      title: "Loudest à la Madison #3 (L'integral)",
      excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      date: "22 April 2021",
      comments: 8,
      category: "New"
    },
    {
      id: 4,
      title: "The Future of Fashion Technology",
      excerpt: "Exploring the intersection of technology and fashion in the modern retail landscape.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      date: "18 April 2021",
      comments: 22,
      category: "Technology"
    },
    {
      id: 5,
      title: "Sustainable Fashion Trends 2024",
      excerpt: "How eco-friendly practices are reshaping the fashion industry for a better tomorrow.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop",
      date: "15 April 2021",
      comments: 18,
      category: "Sustainability"
    },
    {
      id: 6,
      title: "Minimalist Wardrobe Essentials",
      excerpt: "Building a timeless wardrobe with fewer, better quality pieces that last.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop",
      date: "10 April 2021",
      comments: 12,
      category: "Style"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm font-bold text-muted-foreground mb-2">BLOG</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Latest Articles</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-background border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {post.comments} comments
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <Link to="#" className="text-sm font-bold text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
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

export default Blog;
