
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          priority={false}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5 md:gap-2">
          {product.tag && (
            <Badge variant="default" className="bg-primary text-primary-foreground font-headline text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-0.5">
              {product.tag}
            </Badge>
          )}
          <Badge 
            variant={product.stockStatus === 'Disponible' ? 'secondary' : 'outline'}
            className={`font-headline text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-0.5 ${
              product.stockStatus === 'Agotado' ? 'border-destructive text-destructive' : 'bg-white/10 text-white'
            }`}
          >
            {product.stockStatus === 'Disponible' ? 'DISPONIBLE' : 'AGOTADO'}
          </Badge>
        </div>

        {/* Quick Price Overlay */}
        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-black/80 px-2 md:px-3 py-1 border border-white/10 rounded-sm">
          <span className="text-primary font-headline font-bold text-sm md:text-base">S/. {product.price}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-5 flex flex-col flex-1 gap-1.5 md:gap-2">
        <h3 className="font-headline text-base md:text-lg font-bold uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto pt-3 md:pt-4 flex flex-col gap-2">
          <Button 
            onClick={() => window.open(facebookUrl, '_blank')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-headline font-bold uppercase text-[10px] md:text-xs h-11 md:h-12 tracking-widest rounded-none"
          >
            <Facebook className="w-4 h-4 mr-2" />
            PREGUNTAR EN FB
          </Button>
          <Button 
            variant="outline"
            className="w-full border-white/20 hover:border-primary hover:text-primary rounded-none font-headline font-bold uppercase text-[10px] md:text-xs h-11 md:h-12 tracking-widest"
          >
            DETALLES
            <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
