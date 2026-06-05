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
    imageUrl: 'https://scontent.flim6-2.fna.fbcdn.net/v/t39.30808-6/716829633_122099423607354893_4989234626126494438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aNOwI1NQjtoQ7kNvwFlYGJh&_nc_oc=AdpO73nPNk314NIxZn4ril7bqtx654j7ACpsRdc4a0Ebb0LOKyqzbxPR_rVFdc2nb2w&_nc_zt=23&_nc_ht=scontent.flim6-2.fna&_nc_gid=R5XxXfLcEEGDcThMMlkiBQ&_nc_ss=7b2a8&oh=00_Af_o4Fu41JEJ3jxM4QkrAzwCV2eYu572bgff6v0D9jaW9g&oe=6A28BF29',
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
