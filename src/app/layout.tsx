
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kuro Supply | Archivo Streetwear',
  description: 'Catálogo urbano premium de Kuro Supply. Estética industrial, techwear moderno y lanzamientos exclusivos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
