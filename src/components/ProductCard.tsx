import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  colors?: string[]; // hex values
  sizes?: string[];
}

export const ProductCard = ({
  id,
  name,
  price,
  category,
  image,
  colors = ["#000000", "#ffffff", "#808080"], // default colors
  sizes = ["S", "M", "L", "XL"], // default sizes
}: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="group relative bg-background rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Product Image */}
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
              {category}
            </span>
          </div>

          {/* Wishlist Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-md shadow hover:bg-white transition"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between space-y-4">
        <div>
          <Link to={`/product/${id}`}>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
          <p className="text-xl font-bold text-primary mt-1">${price}</p>
        </div>

{/* Color Options + Size Dropdown */}
<div className="flex items-center justify-between gap-4">
  {/* Color Options */}
  <div className="flex items-center gap-2">
    {colors.map((color) => (
      <button
        key={color}
        onClick={() => setSelectedColor(color)}
        className={`w-6 h-6 rounded-full border-2 transition-transform ${
          selectedColor === color
            ? "border-primary scale-110"
            : "border-gray-300"
        }`}
        style={{ backgroundColor: color }}
      />
    ))}
  </div>

  {/* Size Dropdown */}
  <select
    value={selectedSize}
    onChange={(e) => setSelectedSize(e.target.value)}
    className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
  >
    {sizes.map((size) => (
      <option key={size} value={size}>
        {size}
      </option>
    ))}
  </select>
</div>

        {/* Add to Cart Button */}
        <Button className="w-full flex items-center justify-center gap-2 rounded-full group">
          <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};
