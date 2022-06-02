import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import SeedController from '../controllers/SeedController';

const seedRouter: Router = Router();

seedRouter.get('/', expressAsyncHandler(SeedController.generateSampleData));

export default seedRouter;
