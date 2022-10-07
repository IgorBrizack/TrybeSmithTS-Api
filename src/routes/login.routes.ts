import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();  

const userController = new UserController();

// router.get('/', userController.getAll);
router.post('/', userController.login);

export default router;