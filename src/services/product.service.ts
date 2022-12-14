import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }
}

export default ProductService;