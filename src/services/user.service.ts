import User from '../interfaces/user.interface';
// import JwtConfig from '../interfaces/jwtConfig.interface';
// import UserData from '../interfaces/userData.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import generateToken from '../generateToken';

class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const result = await this.model.create(user);
    return generateToken({ id: result.id, username: result.username });
  }

  // public async getAll(): Promise<Product[]> {
  //   const product = await this.model.getAll();
  //   return product;
  // }
}

export default ProductService;