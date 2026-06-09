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
    name: 'Botines Con Punta De Acero Mujer cat - color suela',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://scontent.flim6-2.fna.fbcdn.net/v/t39.30808-6/716829633_122099423607354893_4989234626126494438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aNOwI1NQjtoQ7kNvwFlYGJh&_nc_oc=AdpO73nPNk314NIxZn4ril7bqtx654j7ACpsRdc4a0Ebb0LOKyqzbxPR_rVFdc2nb2w&_nc_zt=23&_nc_ht=scontent.flim6-2.fna&_nc_gid=R5XxXfLcEEGDcThMMlkiBQ&_nc_ss=7b2a8&oh=00_Af_o4Fu41JEJ3jxM4QkrAzwCV2eYu572bgff6v0D9jaW9g&oe=6A28BF29',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  },
  {
    id: 'kuro-bt-02',
    name: 'Botines Con Punta De Acero Mujer cat - color marron oscuro',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://scontent.flim6-2.fna.fbcdn.net/v/t39.30808-6/716137759_122099619333354893_7517532505204123681_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UzzLH0dlsBcQ7kNvwFJAPZi&_nc_oc=AdrZpujHZEnnE9lD6_Nvc1uPeIpU22_87q1oBLSB0UY_GXM7m9SxL5A41Wm5scoAVeI&_nc_zt=23&_nc_ht=scontent.flim6-2.fna&_nc_gid=ncCBz2uAaJr9EOUh9Xog4g&_nc_ss=7b2a8&oh=00_Af92-MpitZ0fUvFUZ3IqTbVZTtsdKr23rkan1sxr3Ot7tA&oe=6A291E30',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  },
  {
    id: 'kuro-bt-03',
    name: 'Botines Con Punta De Acero Hombre cat',
    category: 'Calzado',
    description: 'ultimos 2',
    imageUrl: 'https://scontent.flim6-2.fna.fbcdn.net/v/t39.30808-6/716137759_122099619333354893_7517532505204123681_n.jpg?stp=dst-jpg_tt6&cstp=mx912x1162&ctp=s912x1162&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MU4wOdqowSsQ7kNvwG1lBQy&_nc_oc=AdrN4foEGsKwVpYUs2im0hXJmeLjqWPbG9RFcbuSgAZ-_Z3Td0_OexjdAP9I2ZRR4hk&_nc_zt=23&_nc_ht=scontent.flim6-2.fna&_nc_gid=ShgnwmpCDnVKHG_-WxHfDw&_nc_ss=7b2a8&oh=00_Af8na6Z6lAVm5hfPrZjAEMRW_fiGINogrVLBHc53New60A&oe=6A2D4AF0',
    stockStatus: 'Disponible',
    tag: 'Nueva Ola'
  }
];
