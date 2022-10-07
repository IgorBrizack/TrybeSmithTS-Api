import Order from '../interfaces/order.interface';
import OrderInserted from '../interfaces/orderInserted.interface';
import connection from '../models/connection';
import OrderModel from '../models/orders.model';

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
    await Promise.all(insertedProducts);

    return { userId, productsIds };
  }
}

export default OrderService;