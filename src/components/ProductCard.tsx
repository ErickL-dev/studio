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
  // Configuración del enlace dinámico a Facebook Messenger usando el ID de la página
  const messengerUrl = `https://m.me/61590646799807?text=Hola%20Kuro%20Supply,%20me%20interesan%20los%20${encodeURIComponent(product.name)}`;

  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(253,184,19,0.1)] flex flex-col h-full">
      {/* Imagen del Producto - A color y sin filtros */}
      <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
          data-ai-hint="streetwear boot"
        />
        
        {/* Etiquetas */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5 md:gap-2">
          {product.tag && (
            <Badge variant="default" className="bg-primary text-primary-foreground font-headline text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-none">
              {product.tag}
            </Badge>
          )}
          <Badge 
            variant={product.stockStatus === 'Disponible' ? 'secondary' : 'outline'}
            className={`font-headline text-[9px] md:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-none ${
              product.stockStatus === 'Agotado' ? 'border-destructive text-destructive' : 'bg-black/40 backdrop-blur-sm text-white'
            }`}
          >
            {product.stockStatus === 'Disponible' ? 'DISPONIBLE' : 'AGOTADO'}
          </Badge>
        </div>

        {/* Precio destacado - Oculto si es nulo o 0 */}
        {product.price && product.price > 0 && (
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-black/90 px-3 py-1.5 border border-white/10 rounded-none shadow-xl">
            <span className="text-primary font-headline font-bold text-sm md:text-lg">S/. {product.price}</span>
          </div>
        )}
      </div>

      {/* Información del Producto */}
      <div className="p-4 md:p-6 flex flex-col flex-1 gap-2 md:gap-3">
        <h3 className="font-headline text-lg md:text-xl font-bold uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 md:pt-6 flex flex-col gap-2">
          <Button 
            onClick={() => window.open(messengerUrl, '_blank')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-headline font-bold uppercase text-[10px] md:text-xs h-12 md:h-14 tracking-widest rounded-none"
          >
            <Facebook className="w-4 h-4 mr-2" />
            PREGUNTAR EN FB
          </Button>
          <Button 
            variant="outline"
            className="w-full border-white/10 hover:border-primary hover:text-primary rounded-none font-headline font-bold uppercase text-[10px] md:text-xs h-10 md:h-12 tracking-widest bg-white/5"
          >
            VER DETALLES
            <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
