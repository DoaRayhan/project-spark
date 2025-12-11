import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

export const TopBar = () => {
  return (
    <div className="bg-[hsl(var(--brand-navy))] text-primary-foreground py-2.5 text-sm hidden md:block">
      <div className="container px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:(225)555-0118" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span>(225) 555-0118</span>
          </a>
          <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>
        
        <p className="hidden lg:block font-medium">
          Follow Us and get a chance to win 80% off
        </p>
        
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline">Follow Us :</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80 transition-opacity"><FaInstagram className="h-4 w-4" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaYoutube className="h-4 w-4" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebook className="h-4 w-4" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaTwitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};