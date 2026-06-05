
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
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
              Lanzamientos Recientes 2024 <div className="w-2 h-2 bg-black rounded-full" /> Archivo Fase Uno <div className="w-2 h-2 bg-black rounded-full" /> Nueva Ola Industrial
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Product Catalog Section - Centered and full width now that AI is gone */}
        <div className="w-full">
          <ProductGrid />
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 max-w-2xl mx-auto p-12 border border-white/10 bg-white/5 space-y-6 text-center">
          <h3 className="font-headline font-bold uppercase text-2xl tracking-widest text-primary">Boletín Kuro</h3>
          <p className="text-muted-foreground">Suscríbete para recibir notificaciones de lanzamientos y códigos de acceso al archivo.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="bg-transparent border border-white/20 px-6 py-3 text-sm focus:outline-none focus:border-primary flex-1"
            />
            <button className="bg-white text-black font-headline font-bold text-xs uppercase px-8 py-3 hover:bg-primary transition-colors">Unirse</button>
          </div>
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
                  Kuro<span className="text-primary italic">Supply</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Desarrollando el paisaje del streetwear industrial desde 2024. Kuro Supply es más que ropa; es un archivo técnico de la existencia urbana.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Navegación</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-white transition-colors">Archivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lookbook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-sm text-primary">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/5 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              © 2024 KURO SUPPLY CO. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-6">
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">INSTAGRAM</span>
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">FACEBOOK</span>
              <span className="text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary cursor-pointer">TIKTOK</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
