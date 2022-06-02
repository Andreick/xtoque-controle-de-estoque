import { Request, Response } from 'express';
import { products } from '../sampleData';
import Product from '../schemas/ProductSchema';

class SeedController {
  public async generateSampleData(req: Request, res: Response) {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(products);
    console.log('createdProducts');
    res.send({ createdProducts });
  }
}

export default new SeedController();
