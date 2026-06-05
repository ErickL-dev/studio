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

      {/* Marquee de Lanzamientos */}
      <div className="w-full bg-primary py-3 md:py-4 overflow-hidden border-y border-black/10">
        <div className="flex whitespace-nowrap animate-scroll-left">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-headline font-black uppercase text-lg md:text-xl px-4 md:px-8 flex items-center gap-2 md:gap-4">
              Lanzamientos de 2026 <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" /> Archivo Fase Uno <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full" /> Nueva Ola de Moda
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Catálogo de Productos */}
        <div className="w-full">
          <ProductGrid />
        </div>

        {/* Newsletter / Suscripción */}
        <div className="mt-12 md:mt-20 max-w-2xl mx-auto p-6 md:p-12 border border-white/10 bg-white/5 space-y-6 text-center rounded-lg">
          <h3 className="font-headline font-bold uppercase text-xl md:text-2xl tracking-widest text-primary">Boletín Kuro</h3>
          <p className="text-sm md:text-base text-muted-foreground">Suscríbete para recibir notificaciones de lanzamientos y códigos de acceso al archivo.</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-primary flex-1 rounded-none"
            />
            <button className="bg-white text-black font-headline font-bold text-xs uppercase px-8 py-3 hover:bg-primary transition-colors">Unirse</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050505] pt-16 md:pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
            <div className="col-span-1 sm:col-span-2 space-y-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-primary rotate-45" />
                <span className="font-headline font-bold text-2xl md:text-3xl uppercase tracking-tighter">
                  Kuro<span className="text-primary italic">Supply</span>
                </span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-sm mx-auto sm:mx-0">
                Desarrollando el paisaje de la nueva ola de moda desde 2026 en Trujillo. Kuro Supply es más que ropa; es un archivo técnico de la existencia urbana.
              </p>
            </div>
            
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs md:text-sm text-primary">Navegación</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#catalog" className="hover:text-white transition-colors">Archivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lanzamientos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs md:text-sm text-primary">Legal</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/5 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest text-center md:text-left">
              © 2026 KURO SUPPLY CO. TRUJILLO, PERÚ. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-[10px] md:text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="https://www.facebook.com/profile.php?id=61590646799807" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">FACEBOOK</a>
              <a href="#" className="text-[10px] md:text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">TIKTOK</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
