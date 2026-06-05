
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

  const menuItems = [
    { name: 'ARCHIVO', href: '#catalog' },
    { name: 'LANZAMIENTOS', href: '#' },
    { name: 'NOSOTROS', href: '#' },
    { name: 'CONTACTO', href: '#' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
      isScrolled ? "py-3 md:py-4 kuro-glass border-b border-white/10" : "py-6 md:py-8 bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rotate-45 flex items-center justify-center">
            <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-black -rotate-45" />
          </div>
          <span className="font-headline font-bold text-xl md:text-2xl uppercase tracking-tighter">
            Kuro<span className="text-primary italic">Supply</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] lg:text-xs font-headline font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="w-9 h-9 md:w-10 md:h-10 hover:text-primary">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-9 h-9 md:w-10 md:h-10 relative hover:text-primary">
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            <span className="absolute top-1 right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-primary text-black text-[8px] md:text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden w-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] md:top-[80px] bg-background/95 backdrop-blur-lg z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-2xl font-headline font-bold uppercase tracking-widest border-b border-white/5 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-4">
              <Button className="w-full bg-primary text-black font-bold uppercase tracking-widest rounded-none h-14">
                Mi Carrito (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
