import { model, Schema, Types } from 'mongoose';

export interface IProduct {
  name: string;
  price: number;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>('Product', productSchema);
export default Product;
