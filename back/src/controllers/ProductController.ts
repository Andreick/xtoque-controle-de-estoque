import { Request, Response } from 'express';
import Product from '../schemas/ProductSchema';

class ProductController {
  public async getAllProducts(req: Request, res: Response) {
    const products = await Product.find({});
    res.send(products);
  }
}

export default new ProductController();
