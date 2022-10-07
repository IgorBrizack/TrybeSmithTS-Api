// import Id from '../interfaces/idUserReturn.interface';
// import jwt from 'jsonwebtoken';
// import Login from '../interfaces/login.interface';
// import ProductsInserted from '../interfaces/newProducts.interface';
import Order from '../interfaces/order.interface';
import OrderInserted from '../interfaces/orderInserted.interface';
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

  public async create(productsIds: number[], userId: number): Promise<OrderInserted> {
    const orderId = await this.model.create(userId);
    const insertedProducts = productsIds.map((el) => (
      this.model.insertProducts(Number(orderId), el)
    ));
    Promise.all(insertedProducts);

    return { userId, productsIds };
  }
}

export default OrderService;