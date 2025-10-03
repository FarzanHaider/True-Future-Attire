import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';
import product8 from '@/assets/product-8.jpg';

const products = [
  { 
    id: 1, 
    name: 'Leather Jacket', 
    price: 299, 
    category: 'Outerwear', 
    image: product1,
    description: 'Premium Italian leather jacket with a minimalist design. Features a slim fit silhouette and high-quality hardware.',
    colors: ['Black', 'Charcoal', 'Brown'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  { 
    id: 2, 
    name: 'Wool Turtleneck', 
    price: 149, 
    category: 'Knitwear', 
    image: product2,
    description: 'Luxurious merino wool turtleneck with exceptional softness. Perfect for layering in any season.',
    colors: ['Black', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  { 
    id: 3, 
    name: 'Slim Fit Trousers', 
    price: 179, 
    category: 'Bottoms', 
    image: product3,
    description: 'Tailored trousers crafted from premium wool blend. Modern slim fit with clean lines.',
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['28', '30', '32', '34', '36']
  },
  { 
    id: 4, 
    name: 'Cotton T-Shirt', 
    price: 49, 
    category: 'Basics', 
    image: product4,
    description: 'Essential cotton t-shirt with a perfect fit. Made from organic cotton for ultimate comfort.',
    colors: ['White', 'Black', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  { 
    id: 5, 
    name: 'Ankle Boots', 
    price: 249, 
    category: 'Footwear', 
    image: product5,
    description: 'Handcrafted leather ankle boots with a sleek silhouette. Features a comfortable insole and durable sole.',
    colors: ['Black', 'Brown'],
    sizes: ['39', '40', '41', '42', '43', '44']
  },
  { 
    id: 6, 
    name: 'Linen Shirt', 
    price: 129, 
    category: 'Tops', 
    image: product6,
    description: 'Breathable linen shirt perfect for warm weather. Classic collar with a relaxed fit.',
    colors: ['White', 'Beige', 'Light Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  { 
    id: 7, 
    name: 'Wool Overcoat', 
    price: 449, 
    category: 'Outerwear', 
    image: product7,
    description: 'Elegant wool overcoat with a timeless design. Features a structured shoulder and refined tailoring.',
    colors: ['Black', 'Camel', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  { 
    id: 8, 
    name: 'Minimalist Sneakers', 
    price: 189, 
    category: 'Footwear', 
    image: product8,
    description: 'Contemporary sneakers with a clean aesthetic. Premium leather upper with a cushioned sole.',
    colors: ['White', 'Black'],
    sizes: ['39', '40', '41', '42', '43', '44']
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id)) || products[0];
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[104px] pb-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="glass-effect rounded-2xl overflow-hidden animate-fade-in sticky top-[120px]">
              <img
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-5xl font-bold tracking-tighter mt-2">
                  {product.name}
                </h1>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="text-4xl font-bold">
                ${product.price}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          selectedColor === color
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Size</h3>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 group">
                  <ShoppingCart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="glass-effect p-6 rounded-lg space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Free shipping</span>
                  <span className="font-medium">On orders over $200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Returns</span>
                  <span className="font-medium">30-day guarantee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Warranty</span>
                  <span className="font-medium">2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}