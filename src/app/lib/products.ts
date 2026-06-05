export interface Product {
  id: string;
  name: string;
  category: 'Calzado' | 'Ropa' | 'Accesorios';
  price: number;
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
    price: 380,
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black1/600/600',
    stockStatus: 'Disponible',
    tag: 'Drop Exclusivo'
  },
  {
    id: 'kuro-bt-02',
    name: 'Botines Con Punta De Acero Mujer cat',
    category: 'Calzado',
    price: 380,
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black2/600/600',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  },
  {
    id: 'kuro-bt-03',
    name: 'Botines Con Punta De Acero Mujer cat',
    category: 'Calzado',
    price: 380,
    description: 'ultimos 2',
    imageUrl: 'https://picsum.photos/seed/black3/600/600',
    stockStatus: 'Disponible',
    tag: 'Trujillo Vault'
  },
  {
    id: 'kuro-ap-01',
    name: 'Cyber-Kagoule Hoodie',
    category: 'Ropa',
    price: 320,
    description: 'Sudadera táctica sobredimensionada con recubrimiento resistente al agua.',
    imageUrl: 'https://picsum.photos/seed/kurohoodie1/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ac-01',
    name: 'Tactical Chest Rig',
    category: 'Accesorios',
    price: 210,
    description: 'Pack de pecho utilitario con puntos de fijación modulares.',
    imageUrl: 'https://picsum.photos/seed/kuroacc1/600/600',
    stockStatus: 'Disponible'
  }
];
