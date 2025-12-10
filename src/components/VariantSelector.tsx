import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ColorOption {
  name: string;
  value: string;
}

interface VariantSelectorProps {
  sizes?: string[];
  colors?: ColorOption[];
  selectedSize?: string;
  selectedColor?: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
}

export const VariantSelector = ({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: VariantSelectorProps) => {
  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            Color: <span className="text-muted-foreground">{selectedColor}</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(color.name)}
                className={cn(
                  "relative h-10 w-10 rounded-full border-2 transition-all",
                  selectedColor === color.name
                    ? "border-accent ring-2 ring-accent/30 ring-offset-2 ring-offset-background"
                    : "border-border hover:border-accent/50"
                )}
                style={{ backgroundColor: color.value }}
                title={color.name}
              >
                {selectedColor === color.name && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check className="h-5 w-5 text-white drop-shadow-md" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {sizes && sizes.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">
            Size: <span className="text-muted-foreground">{selectedSize}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={cn(
                  "min-w-[48px] rounded-md border px-4 py-2 text-sm font-medium transition-all",
                  selectedSize === size
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-foreground hover:border-accent/50 hover:bg-muted"
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
