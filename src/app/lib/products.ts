
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
    description: 'Techwear silhouette with aerodynamic mesh and industrial strapping.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe1/600/600',
    stockStatus: 'Disponible',
    tag: 'Drop Reciente'
  },
  {
    id: 'kuro-sh-02',
    name: 'Sector Boot 09',
    category: 'Calzado',
    price: 520,
    description: 'Heavyweight urban combat boots featuring reinforced toe cap.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe2/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-sh-03',
    name: 'Void Slide',
    category: 'Calzado',
    price: 180,
    description: 'Minimalist ergonomic slides for post-urban operations.',
    imageUrl: 'https://picsum.photos/seed/kuroshoe3/600/600',
    stockStatus: 'Agotado'
  },
  {
    id: 'kuro-ap-01',
    name: 'Cyber-Kagoule Hoodie',
    category: 'Ropa',
    price: 320,
    description: 'Oversized tactical hoodie with water-resistant coating.',
    imageUrl: 'https://picsum.photos/seed/kurohoodie1/600/600',
    stockStatus: 'Disponible',
    tag: 'Novedad'
  },
  {
    id: 'kuro-ap-02',
    name: 'Matrix Cargo Pants',
    category: 'Ropa',
    price: 280,
    description: 'Multi-pocket cargo system with adjustable hem drawstrings.',
    imageUrl: 'https://picsum.photos/seed/kuropants1/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ap-03',
    name: 'Industrial Print Tee',
    category: 'Ropa',
    price: 120,
    description: 'Heavyweight cotton tee with distressed Kuro Vault graphics.',
    imageUrl: 'https://picsum.photos/seed/kurotee1/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ac-01',
    name: 'Tactical Chest Rig',
    category: 'Accesorios',
    price: 210,
    description: 'Utility chest pack with modular attachment points.',
    imageUrl: 'https://picsum.photos/seed/kuroacc1/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ac-02',
    name: 'Cobra Belt Gen.2',
    category: 'Accesorios',
    price: 150,
    description: 'Quick-release buckle belt with high-tensile nylon webbing.',
    imageUrl: 'https://picsum.photos/seed/kuroacc2/600/600',
    stockStatus: 'Disponible'
  },
  {
    id: 'kuro-ac-03',
    name: 'Grid Beanie',
    category: 'Accesorios',
    price: 85,
    description: 'Double-knit acrylic beanie with 3D embroidery.',
    imageUrl: 'https://picsum.photos/seed/kuroacc3/600/600',
    stockStatus: 'Agotado'
  }
];
