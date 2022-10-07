import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import generateToken from '../generateToken';

class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(product: User): Promise<User> {
    const result = this.model.create(product);
    return generateToken({ id, username });
  }

  // public async getAll(): Promise<Product[]> {
  //   const product = await this.model.getAll();
  //   return product;
  // }
}

export default ProductService;