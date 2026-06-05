"use client"

import React, { useState } from 'react';
import { PRODUCTS } from '@/app/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CATEGORIES = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Calzado', value: 'Calzado' },
  { label: 'Ropa', value: 'Ropa' },
  { label: 'Accesorios', value: 'Accesorios' }
] as const;

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12 md:mb-20 gap-6">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Archivo de <span className="text-primary italic">Productos</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base uppercase tracking-[0.2em] font-headline font-bold">
            Trujillo, Perú / Fase Uno
          </p>
        </div>

        <Tabs defaultValue="Todos" className="w-full max-w-3xl mt-4">
          <TabsList className="bg-white/5 border border-white/10 p-1 h-auto md:h-14 rounded-none flex flex-wrap justify-center overflow-hidden">
            {CATEGORIES.map(cat => (
              <TabsTrigger 
                key={cat.value}
                value={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className="flex-1 min-w-[100px] data-[state=active]:bg-primary data-[state=active]:text-black rounded-none font-headline font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] px-6 h-10 md:h-full transition-all"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-muted-foreground font-headline uppercase tracking-widest text-sm">
            No se encontraron artículos en este sector.
          </p>
        </div>
      )}
    </section>
  );
}
