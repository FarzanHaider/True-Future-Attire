import { ProductCard } from './ProductCard';
import { FadeInSection } from '@/components/FadeInSection';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';
import product8 from '@/assets/product-8.jpg';

const products = [
  { id: 1, name: 'Leather Jacket', price: 299, category: 'Outerwear', image: product1 },
  { id: 2, name: 'Wool Turtleneck', price: 149, category: 'Knitwear', image: product2 },
  { id: 3, name: 'Slim Fit Trousers', price: 179, category: 'Bottoms', image: product3 },
  { id: 4, name: 'Cotton T-Shirt', price: 49, category: 'Basics', image: product4 },
  { id: 5, name: 'Ankle Boots', price: 249, category: 'Footwear', image: product5 },
  { id: 6, name: 'Linen Shirt', price: 129, category: 'Tops', image: product6 },
  { id: 7, name: 'Wool Overcoat', price: 449, category: 'Outerwear', image: product7 },
  { id: 8, name: 'Minimalist Sneakers', price: 189, category: 'Footwear', image: product8 },
];

export const ProductGrid = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Animated Section Header */}
        <div className="text-center mb-16 space-y-4">
          <FadeInSection direction="up">
            <h2 className="text-5xl font-bold tracking-tighter">
              Featured Collection
            </h2>
          </FadeInSection>
          <FadeInSection direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium fashion pieces, each crafted with precision and attention to detail.
            </p>
          </FadeInSection>
        </div>

        {/* Animated Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <FadeInSection
              key={product.id}
              direction="up"
              delay={index * 0.1}
            >
              <ProductCard {...product} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
