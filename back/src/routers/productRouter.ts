import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProductController from '../controllers/ProductController';

const productRouter: Router = Router();

productRouter.get('/', expressAsyncHandler(ProductController.getAllProducts));

export default productRouter;
