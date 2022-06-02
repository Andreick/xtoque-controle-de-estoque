import Product from './interfaces/Product';
import ProductStock from './interfaces/ProductStock';

export const products: Product[] = [
  {
    _id: '1',
    name: 'saco de café',
    price: 15,
  },
  {
    _id: '2',
    name: 'saco de açucar',
    price: 15,
  },
  {
    _id: '3',
    name: 'caixa de leite',
    price: 7,
  },
  {
    _id: '4',
    name: 'saco de arroz',
    price: 23,
  },
];

export const stocks: ProductStock[] = [
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
