import { Router } from 'express';
import HelloController from '../controllers/HelloController';

const helloRouter: Router = Router();

helloRouter.get('/', HelloController.hello);

export default helloRouter;
