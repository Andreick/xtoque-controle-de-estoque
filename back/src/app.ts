import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/ProductRouter';
import seedRouter from './routers/SeedRouter';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.router();
  }

  private middleware() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({ message: err.message });
      }
    );
  }

  private database() {
    mongoose
      .connect(process.env.MONGO_DB_URI ?? '')
      .then(() => {
        console.info('connected to MongoDB');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  private router() {
    this.express.use('/api/products', productRouter);
    this.express.use('/api/seed', seedRouter);
  }
}

export default new App().express;
