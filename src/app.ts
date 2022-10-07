import express from 'express';
import ProductRouter from './routes/product.routes';

// const router = Router();

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

export default app;
