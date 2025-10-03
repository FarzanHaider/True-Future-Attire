import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[104px] pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>

          <h1 className="text-5xl font-bold tracking-tighter mb-12 animate-fade-in">
            Shopping Cart
          </h1>

          <div className="glass-effect rounded-2xl p-8 text-center animate-fade-in">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 mx-auto glass-effect rounded-full flex items-center justify-center">
                <Trash2 className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Your cart is empty</h2>
              <p className="text-muted-foreground">
                Start adding some products to your cart and they will appear here.
              </p>
              <Button size="lg" onClick={() => navigate('/')}>
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}