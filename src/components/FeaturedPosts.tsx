import { Calendar, MessageCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
    tag: "Google",
    tagColor: "bg-destructive",
    title: "Loudest à la Madison #1 (L'integral)",
    excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2023",
    comments: 10
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    tag: "Trending",
    tagColor: "bg-primary",
    title: "Loudest à la Madison #1 (L'integral)",
    excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2023",
    comments: 10
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
    tag: "New",
    tagColor: "bg-accent",
    title: "Loudest à la Madison #1 (L'integral)",
    excerpt: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2023",
    comments: 10
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2">Practice Advice</p>
          <h2 className="text-2xl font-bold text-foreground">Featured Posts</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="bg-background border border-border rounded-sm overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-4 left-4 ${post.tagColor} text-primary-foreground px-3 py-1 text-xs font-bold rounded shadow-lg`}>
                  {post.tag}
                </span>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="text-primary">Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                
                <h3 className="font-bold text-foreground text-lg leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {post.comments} comments
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="#" 
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};