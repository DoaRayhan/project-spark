import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Top section with brand and social */}
      <div className="border-b border-border">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-foreground">Bandage</h2>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:opacity-80 transition-opacity">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Company Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrier</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">We are hiring</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrier</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">We are hiring</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Features</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Business Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">User Analytic</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Unlimited Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">IOS & Android</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4">Get In Touch</h3>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your Email"
                className="rounded-r-none border-r-0 bg-muted"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright */}
      <div className="bg-muted py-6">
        <div className="container px-4 md:px-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};