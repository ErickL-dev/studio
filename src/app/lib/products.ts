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
    id: 'kuro-sh-01',
    name: 'Ghost Runner X1',
    category: 'Calzado',
    price: 450,
    description: 'Silueta de nueva ola con malla aerodinámica y ajuste técnico.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe1/600/600',
    stockStatus: 'Disponible',
    tag: 'Drop Reciente'
  },
  {
    id: 'kuro-sh-02',
    name: 'Sector Boot 09',
    category: 'Calzado',
    price: 520,
    description: 'Botas de combate urbano con refuerzo frontal de alta resistencia.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe2/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-sh-03',
    name: 'Void Slide',
    category: 'Calzado',
    price: 180,
    description: 'Sandalias ergonómicas minimalistas para operaciones post-urbanas.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe3/600/600',
    stockStatus: 'Agotado'
  },
  {
    id: 'kuro-ap-01',
    name: 'Cyber-Kagoule Hoodie',
    category: 'Ropa',
    price: 320,
    description: 'Sudadera táctica sobredimensionada con recubrimiento resistente al agua.',
    imageUrl: 'https://picsum.photos/seed/kurohoodie1/600/600',
    stockStatus: 'Disponible',
    tag: 'Novedad'
  },
  {
    id: 'kuro-ap-02',
    name: 'Matrix Cargo Pants',
    category: 'Ropa',
    price: 280,
    description: 'Sistema de carga multibolsillo con dobladillo ajustable.',
    imageUrl: 'https://picsum.photos/seed/kuropants1/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ap-03',
    name: 'Nueva Ola Print Tee',
    category: 'Ropa',
    price: 120,
    description: 'Camiseta de algodón pesado con gráficos exclusivos de Kuro Vault.',
    imageUrl: 'https://picsum.photos/seed/kurotee1/600/600',
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
  },
  {
    id: 'kuro-ac-02',
    name: 'Cobra Belt Gen.2',
    category: 'Accesorios',
    price: 150,
    description: 'Cinturón de liberación rápida con cinta de nylon de alta tensión.',
    imageUrl: 'https://picsum.photos/seed/kuroacc2/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ac-03',
    name: 'Grid Beanie',
    category: 'Accesorios',
    price: 85,
    description: 'Gorro de punto doble con bordado 3D de alta definición.',
    imageUrl: 'https://picsum.photos/seed/kuroacc3/600/600',
    stockStatus: 'Agotado'
  }
];
