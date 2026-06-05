
"use client"

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/app/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CATEGORIES = ['Todos', 'Calzado', 'Ropa', 'Accesorios'] as const;

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">
            Archivo de <span className="text-primary italic">Productos</span>
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <Tabs defaultValue="Todos" className="w-full md:w-auto">
          <TabsList className="bg-white/5 border border-white/10 p-1 h-12 rounded-none">
            {CATEGORIES.map(cat => (
              <TabsTrigger 
                key={cat}
                value={cat}
                onClick={() => setActiveCategory(cat)}
                className="data-[state=active]:bg-primary data-[state=active]:text-black rounded-none font-headline font-bold uppercase text-xs tracking-widest px-6"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground font-headline uppercase tracking-widest">
            No items found in this sector.
          </p>
        </div>
      )}
    </section>
  );
}
