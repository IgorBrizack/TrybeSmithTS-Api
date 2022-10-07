import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import generateToken from '../generateToken';
import Login from '../interfaces/login.interface';

class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    await this.model.create(user);
    return generateToken(Number(user.id), user.username);
  }

  public async login(login: Login): Promise<string> {
    const result = await this.model.login(login);
    if (result.length && result[0]
      .id) { return generateToken(result[0].id, result[0].username); }
    return 'invalid';
  }
}

export default ProductService;