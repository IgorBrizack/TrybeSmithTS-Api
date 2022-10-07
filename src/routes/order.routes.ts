import { Router } from 'express';

import OrderController from '../controllers/orders.controller';
import tokenValidation from '../validation/tokenValidation';
import OrderValidation from '../middlewares/orderValidation';

const router = Router();  

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', tokenValidation, OrderValidation, orderController.create);

export default router;