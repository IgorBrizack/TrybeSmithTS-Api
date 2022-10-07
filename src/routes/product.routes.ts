import { Router } from 'express';

import ProductController from '../controllers/product.controller';
import Middlwares from '../middlewares';

const router = Router();  

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', Middlwares.productValidation, productController.create);

export default router;