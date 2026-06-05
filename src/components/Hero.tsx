"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center pt-24 md:pt-20 overflow-hidden nueva-ola-grid">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold animate-in fade-in slide-in-from-bottom-2 duration-700">
              EST. 2026 / TRUJILLO PERÚ
            </h2>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-headline font-bold uppercase leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Kuro <br />
              <span className="text-primary italic">Supply</span>
            </h1>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-[2px] bg-primary mb-6" />
            <p className="text-lg md:text-2xl text-muted-foreground pt-8 leading-relaxed max-w-xl mx-auto animate-in fade-in duration-1000 delay-300">
              Tu dosis diaria de estilo. Encuentra la mejor la calidad que buscas para el día a día.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-black font-headline font-bold uppercase tracking-widest h-14 px-12 rounded-none group" asChild>
              <a href="#catalog">
                Explorar Archivo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 rounded-none border-white/20 hover:border-primary hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom detail */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
