import { Request, Response } from 'express';
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
    const { body: { productsIds, payload: { id } } } = req;
    const orderCreated = await this.orderService.create(productsIds, id);
    res.status(201).json(orderCreated);
  };
}

export default ProductController;