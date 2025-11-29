import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">New Arrivals</a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">Men</a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">Women</a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">Accessories</a>
                <a href="#" className="text-lg font-medium hover:text-accent transition-colors">Sale</a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">New Arrivals</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Men</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Women</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Accessories</a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">Sale</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
