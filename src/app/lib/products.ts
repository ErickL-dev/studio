export interface Product {
  id: string;
  name: string;
  category: 'Calzado' | 'Ropa' | 'Accesorios';
  price?: number;
  description: string;
  imageUrl: string;
  stockStatus: 'Disponible' | 'Agotado';
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'kuro-bt-01',
    name: 'Botines Con Punta De Acero Mujer cat',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black1/600/600',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  },
  {
    id: 'kuro-bt-02',
    name: 'Botines Con Punta De Acero Mujer cat',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black2/600/600',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  },
  {
    id: 'kuro-bt-03',
    name: 'Botines Con Punta De Acero Mujer cat',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black3/600/600',
    stockStatus: 'Disponible',
    tag: 'Trujillo Vault'
  }
];
