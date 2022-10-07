import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  } 

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT t1.id, t1.userId, JSON_ARRAYAGG(t2.id) AS productsId
    FROM Trybesmith.Orders AS t1
    INNER JOIN Trybesmith.Products AS t2
    ON t1.id = t2.orderId
    GROUP BY t1.id`);
    const [rows] = result;
    return rows as Order[];
  }
}