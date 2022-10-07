import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductController;