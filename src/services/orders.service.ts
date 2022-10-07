// import Id from '../interfaces/idUserReturn.interface';
// import jwt from 'jsonwebtoken';
// import Login from '../interfaces/login.interface';
// import ProductsInserted from '../interfaces/newProducts.interface';
import Order from '../interfaces/order.interface';
// import RequestExtUser from '../interfaces/request.interface';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';

// const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  // public async create(body: ProductsInserted, id: number): Promise<number[]> {
  //   const id = jwt.verify(auth, secret);
  //   const orderCreated = await this.model.create(id);
  //   const insertedProducts = await this.model.insertProducts(orderCreated.id, body);

  //   return [orderCreated, insertedProducts];
  // }
}

export default OrderService;