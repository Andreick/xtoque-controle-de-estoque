import { Request, Response } from 'express';
import Product from '../schemas/ProductSchema';

class ProductController {
  public async create(req: Request, res: Response) {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    const product = await newProduct.save();
    res.send(newProduct);
  }

  public async getAll(req: Request, res: Response) {
    const products = await Product.find({});
    res.send(products);
  }

  public async getById(req: Request, res: Response) {
    const product = await Product.findById(req.params.id);
    if (!product) {
      this.productNotFound(res);
      return;
    }
    res.send(product);
  }

  public async updateById(req: Request, res: Response) {
    const id = req.params.id;

    const { matchedCount } = await Product.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      }
    );

    if (matchedCount !== 1) {
      this.productNotFound(res);
      return;
    }

    res.send(await Product.findById(id));
  }

  public async deleteById(req: Request, res: Response) {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      this.productNotFound(res);
      return;
    }
    res.send(product);
  }

  private async findById(id: string) {
    return await Product.findById(id);
  }

  private productNotFound(res: Response) {
    res.status(404).send({ message: 'Product Not Found' });
  }
}

export default new ProductController();
