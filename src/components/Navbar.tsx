
"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
      isScrolled ? "py-4 kuro-glass border-b border-white/10" : "py-8 bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-black -rotate-45" />
          </div>
          <span className="font-headline font-bold text-2xl uppercase tracking-tighter">
            Kuro<span className="text-primary italic">Vault</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Archive', 'Drops', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-headline font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative hover:text-primary">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-black text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-2 duration-300">
          {['Archive', 'Drops', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xl font-headline font-bold uppercase tracking-widest border-b border-white/5 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
