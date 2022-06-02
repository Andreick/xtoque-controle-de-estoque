import Product from './Product';

export default interface ProductStock {
  _id: string;
  product: Product;
  quantity: number;
}
