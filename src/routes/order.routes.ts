import { Router } from 'express';

import OrderController from '../controllers/orders.controller';
import tokenValidation from '../validation/tokenValidation';

const router = Router();  

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', tokenValidation, orderController.create);

export default router;