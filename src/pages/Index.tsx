import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { FadeInSection } from '@/components/FadeInSection';
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

const Index = () => {
  // animated counters
  const [quality, setQuality] = useState(0);
  const [visualization, setVisualization] = useState(0);
  const [support, setSupport] = useState(0);

  useEffect(() => {
    const qualityInterval = setInterval(() => {
      setQuality((prev) => {
        if (prev >= 100) {
          clearInterval(qualityInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const vizInterval = setInterval(() => {
      setVisualization((prev) => {
        if (prev >= 3) {
          clearInterval(vizInterval);
          return 3;
        }
        return prev + 1;
      });
    }, 500);

    const supportInterval = setInterval(() => {
      setSupport((prev) => {
        if (prev >= 24) {
          clearInterval(supportInterval);
          return 24;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(qualityInterval);
      clearInterval(vizInterval);
      clearInterval(supportInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Grid */}
        <ProductGrid />

        {/* Redefining Luxury */}
        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <FadeInSection direction="up">
               <h2 className="text-5xl font-extrabold tracking-tight text-black">

                  Redefining Luxury
                </h2>
              </FadeInSection>

              <FadeInSection direction="up" delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  True Future Attire represents the intersection of{" "}
                  <span className="font-semibold text-foreground">cutting-edge 3D technology</span>{" "}
                  and timeless design. Every product in our collection is meticulously crafted to{" "}
                  <span className="font-semibold text-foreground">elevate your space</span> and inspire your aesthetic sensibilities.  
                  Experience shopping reimagined through the power of{" "}
                  <span className="font-semibold text-foreground">three-dimensional visualization.</span>
                </p>
              </FadeInSection>

              <FadeInSection direction="up" delay={0.4}>
                <div className="grid md:grid-cols-3 gap-8 pt-12">
                  <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
                    <div className="text-5xl font-extrabold text-primary group-hover:scale-110 transition-transform">
                      {quality}%
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Premium Quality
                    </div>
                  </div>

                  <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
                    <div className="text-5xl font-extrabold text-black-600 group-hover:scale-110 transition-transform">
                      {visualization}D
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Product Visualization
                    </div>
                  </div>

                  <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
                    <div className="text-5xl font-extrabold text-black-600 group-hover:scale-110 transition-transform">
                      {support}/7
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wide">
                      Customer Support
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-gray-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="glass-effect rounded-3xl p-12 md:p-16 text-center md:text-left max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
              {/* Left: Text */}
              <FadeInSection direction="left">
                <div className="space-y-6 max-w-xl">
                  <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
                    Ready to Transform Your Space?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Join thousands of satisfied customers who have discovered the
                    True Future Attire difference.
                  </p>
                  <Button
                    size="lg"
                    className="px-12 bg-black text-white transition"
                  >
                    Start Shopping
                  </Button>
                </div>
              </FadeInSection>

              {/* Right: Image / Illustration */}
              <FadeInSection direction="right" delay={0.2}>
                <img
                  src="/logo-true-future.png"
                  alt="Futuristic Fashion"
                  className="rounded-2xl shadow-xl backdrop-blur-lg"
                />
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-40 tracking-tighter">
              <img src="/logo-true-future.png" alt="True Future Attire Logo" />
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 True Future Attire. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
