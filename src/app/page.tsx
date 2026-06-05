
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { StyleMatcher } from '@/components/StyleMatcher';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Feature Section: Drops Recientes Marquee */}
      <div className="w-full bg-primary py-4 overflow-hidden border-y border-black/10">
        <div className="flex whitespace-nowrap animate-scroll-left">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-headline font-black uppercase text-xl px-8 flex items-center gap-4">
              Recent Drops 2024 <div className="w-2 h-2 bg-black rounded-full" /> Phase One Archive <div className="w-2 h-2 bg-black rounded-full" /> New Industrial Wave
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Style Matcher Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-8">
            <StyleMatcher />
            <div className="p-8 border border-white/10 bg-white/5 space-y-4">
              <h3 className="font-headline font-bold uppercase text-lg tracking-widest text-primary">Kuro Newsletter</h3>
              <p className="text-sm text-muted-foreground">Subscribe to receive drop notifications and archive access codes.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-transparent border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-primary flex-1"
                />
                <button className="bg-white text-black font-headline font-bold text-xs uppercase px-4 hover:bg-primary transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Catalog Section */}
        <div className="lg:col-span-2">
          <ProductGrid />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rotate-45" />
                <span className="font-headline font-bold text-3xl uppercase tracking-tighter">
                  Kuro<span className="text-primary italic">Vault</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Developing the industrial streetwear landscape since 2024. Kuro Supply is more than apparel; it's a technical archive of urban existence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Archive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/5 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 KURO SUPPLY CO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">INSTAGRAM</span>
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">TWITTER</span>
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">DISCORD</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
