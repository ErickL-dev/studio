
"use client"

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/lib/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Facebook, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Configuración de URL de Facebook Messenger o página
  const facebookUrl = `https://www.facebook.com/messages/t/kurosupply`;

  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(253,184,19,0.1)] flex flex-col h-full">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#151515]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.tag && (
            <Badge variant="default" className="bg-primary text-primary-foreground font-headline text-[10px] uppercase tracking-wider">
              {product.tag}
            </Badge>
          )}
          <Badge 
            variant={product.stockStatus === 'Disponible' ? 'secondary' : 'outline'}
            className={`font-headline text-[10px] uppercase tracking-wider ${
              product.stockStatus === 'Agotado' ? 'border-destructive text-destructive' : 'bg-white/10 text-white'
            }`}
          >
            {product.stockStatus === 'Disponible' ? 'DISPONIBLE' : 'AGOTADO'}
          </Badge>
        </div>

        {/* Quick Price Overlay */}
        <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 border border-white/10 rounded-sm">
          <span className="text-primary font-headline font-bold">S/. {product.price}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 flex gap-2">
          <Button 
            onClick={() => window.open(facebookUrl, '_blank')}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-headline font-bold uppercase text-xs h-11 tracking-widest rounded-none"
          >
            <Facebook className="w-4 h-4 mr-2" />
            PREGUNTAR EN FB
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="w-11 h-11 border-white/20 hover:border-primary hover:text-primary rounded-none"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
