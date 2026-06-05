
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden industrial-grid">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-primary font-headline uppercase tracking-[0.3em] text-sm font-bold">
              EST. 2024 / ARCHIVE
            </h2>
            <h1 className="text-6xl md:text-8xl font-headline font-bold uppercase leading-[0.9] tracking-tighter">
              Kuro <br />
              <span className="text-primary italic">Vault</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed border-l-2 border-primary pl-6">
            Architecting the future of street aesthetics. High-contrast industrial gear designed for the urban pioneer.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-black font-headline font-bold uppercase tracking-widest h-14 px-10 rounded-none group">
              Explorar Catálogo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Rotating Typography Badge */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-10 fill-primary">
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="transparent" />
                <text className="font-headline font-bold uppercase tracking-[0.2em] text-[14px]">
                  <textPath href="#circlePath">
                    Premium Streetwear • Kuro Supply Vault • Urban Industrial • Archive Drops •
                  </textPath>
                </text>
              </svg>
            </div>
            
            <div className="relative z-10 w-4/5 h-4/5 bg-white/5 border border-white/10 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="font-headline font-bold text-4xl leading-none">01/</div>
                <div className="text-right font-headline text-xs tracking-widest text-muted-foreground uppercase">
                  Current Drop <br /> Phase One
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-[2px] w-full bg-gradient-to-r from-primary to-transparent" />
                <div className="font-headline font-light text-6xl italic text-primary/80 opacity-50">SHDW</div>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-xs font-mono opacity-50">LOC: LIMA / PERU</div>
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <ArrowRight className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
