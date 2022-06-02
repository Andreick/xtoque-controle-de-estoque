import { IProduct } from './schemas/ProductSchema';

export const products: IProduct[] = [
  {
    name: 'saco de café',
    price: 15,
  },
  {
    name: 'saco de açucar',
    price: 15,
  },
  {
    name: 'caixa de leite',
    price: 7,
  },
  {
    name: 'saco de arroz',
    price: 23,
  },
];

export const stocks = [
  {
    _id: '1',
    product: products[0],
    quantity: 110,
  },
  {
    _id: '2',
    product: products[1],
    quantity: 60,
  },
  {
    _id: '3',
    product: products[2],
    quantity: 71,
  },
  {
    _id: '4',
    product: products[3],
    quantity: 89,
  },
];
