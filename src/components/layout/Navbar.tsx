
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Features", href: "#features" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-beacon-purple flex items-center justify-center mr-2">
              <div className="h-3 w-3 rounded-full bg-white relative">
                <span className="absolute inset-0 h-full w-full rounded-full bg-white animate-ping-slow opacity-75"></span>
              </div>
            </div>
            <a href="#" className="text-xl font-bold text-beacon-dark-blue">
              Beacon<span className="text-beacon-purple">Hub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-beacon-purple transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-beacon-purple hover:bg-beacon-dark-purple">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[61px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-lg font-medium text-gray-900 hover:text-beacon-purple py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-beacon-purple hover:bg-beacon-dark-purple w-full mt-4">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
