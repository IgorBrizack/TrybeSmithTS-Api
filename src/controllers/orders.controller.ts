import { Request, Response } from 'express';
// import Login from '../interfaces/login.interface';
// import RequestExtUser from '../interfaces/request.interface';
import OrderService from '../services/orders.service';

class ProductController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAll = async (req: Request, res: Response) => {
    const order = await this.orderService.getAll();
    res.status(200).json(order);
  };

  public create = async (req: Request, res: Response) => {
    // const { body: { productsIds, payload } } = req;
    // const { data: id } = payload;
    console.log(req.body.payload);
    // const orderCreated = await this.orderService.create(productsIds, id);
    res.status(200).json({ message: req.body.payload.data });
  };
}

export default ProductController;