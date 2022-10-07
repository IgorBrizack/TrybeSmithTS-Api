import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.mode';

class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(product: User): Promise<User> {
    return this.model.create(product);
  }

  // public async getAll(): Promise<Product[]> {
  //   const product = await this.model.getAll();
  //   return product;
  // }
}

export default ProductService;