import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProductController from '../controllers/ProductController';

const productRouter: Router = Router();

productRouter.post('/', expressAsyncHandler(ProductController.create));
productRouter.get('/', expressAsyncHandler(ProductController.getAll));
productRouter.get('/:id', expressAsyncHandler(ProductController.getById));
productRouter.put('/:id', expressAsyncHandler(ProductController.updateById));
productRouter.delete('/:id', expressAsyncHandler(ProductController.deleteById));

export default productRouter;
