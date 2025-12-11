import { ShoppingBag, Search, Menu, User, LogOut, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const { user } = useUser();
  const { signOut } = useClerk();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-foreground">
            Bandage
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pages</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Auth section */}
          <div className="hidden md:flex items-center gap-2 text-primary">
            <User className="h-4 w-4" />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary text-sm p-0 h-auto hover:bg-transparent">
                    {user.firstName || "Account"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.firstName || "User"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.primaryEmailAddress?.emailAddress}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <span className="text-sm">
                <Link to="/auth" className="hover:underline">Login</Link>
                {" / "}
                <Link to="/auth" className="hover:underline">Register</Link>
              </span>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="text-primary">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-primary"
            onClick={onCartClick}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex text-primary">
            <Heart className="h-5 w-5" />
          </Button>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">Home</Link>
                <Link to="/shop" className="text-lg font-medium hover:text-primary transition-colors">Shop</Link>
                <Link to="#" className="text-lg font-medium hover:text-primary transition-colors">About</Link>
                <Link to="#" className="text-lg font-medium hover:text-primary transition-colors">Blog</Link>
                <Link to="#" className="text-lg font-medium hover:text-primary transition-colors">Contact</Link>
                <Link to="#" className="text-lg font-medium hover:text-primary transition-colors">Pages</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};