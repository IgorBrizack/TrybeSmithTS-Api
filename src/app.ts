import express from 'express';
import ProductRouter from './routes/product.routes';
import UserRouter from './routes/user.routes';
import OrderRouter from './routes/order.routes';
import LoginRouter from './routes/login.routes';
import Middlwares from './middlewares';

// const router = Router();

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/login', Middlwares.loginMiddleware, LoginRouter);

export default app;
