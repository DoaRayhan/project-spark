import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ShopFiltersProps {
  totalResults: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const ShopFilters = ({ totalResults, viewMode, onViewModeChange }: ShopFiltersProps) => {
  return (
    <div className="border-b border-border">
      <div className="container px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Showing all {totalResults} results
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Views:</span>
              <button
                onClick={() => onViewModeChange("grid")}
                className={`p-2 rounded border ${
                  viewMode === "grid" 
                    ? "border-foreground" 
                    : "border-border hover:border-foreground"
                } transition-colors`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => onViewModeChange("list")}
                className={`p-2 rounded border ${
                  viewMode === "list" 
                    ? "border-foreground" 
                    : "border-border hover:border-foreground"
                } transition-colors`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
            
            <Select defaultValue="popularity">
              <SelectTrigger className="w-36 bg-background">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};