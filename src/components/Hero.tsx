import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useVideoTexture } from '@react-three/drei';


export const Hero = () => {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Home Fashion-flat - truefutureatire.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/70" />


      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter">
          <span className="text-white">True future Attire</span>
        </h1>
        <p className="mt-6 text-xl lg:text-2xl text-white max-w-2xl">
          Experience the future of shopping. Every product, reimagined in stunning 3D.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="group">
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
