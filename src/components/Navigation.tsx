import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnnouncementBar } from './AnnouncementBar';
import { CategoryBar } from './CategoryBar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'About', path: '/#about' },
  { name: 'Contact Us', path: '/contact' },
];


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      {/* --- Fixed Main Navbar --- */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <Link to="/" className="w-40 tracking-tighter">
                <img src="/logo-true-future.png" alt="" />
              </Link>

              {/* Search Bar */}
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6"
              >
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" variant="default">
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-foreground",
                      location.pathname === link.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                {/* Country Dropdown */}
                <div className="hidden md:flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <Select defaultValue="us">
                    <SelectTrigger className="w-[120px] h-8 text-xs border-none bg-transparent">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="in">Pakistan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Cart */}
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </Link>

                {/* Mobile Menu */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile Dropdown Nav */}
            {isOpen && (
              <div className="md:hidden py-4 animate-fade-in">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* --- Category Bar (under fixed navbar) --- */}
      <div className="mt-16">
        <CategoryBar />
      </div>

      {/* --- Announcement Bar (under category bar) --- */}
      <AnnouncementBar />
    </>
  );
};
