import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import helloRouter from './routers/helloRouter';

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
    this.express.use('/api/hello', helloRouter);
  }
}

export default new App().express;
