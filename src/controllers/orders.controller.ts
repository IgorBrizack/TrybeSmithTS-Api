import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class ProductController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  // public create = async (req: Request, res: Response) => {
  //   const product = req.body;

  //   const productCreated = await this.productService.create(product);
  //   res.status(201).json(productCreated);
  // };

  public getAll = async (req: Request, res: Response) => {
    const order = await this.orderService.getAll();
    res.status(200).json(order);
  };
}

export default ProductController;