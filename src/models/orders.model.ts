import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import Id from '../interfaces/idUserReturn.interface';
// import ProductsInserted from '../interfaces/newProducts.interface';
// import Login from '../interfaces/login.interface';
// import RequestExtUser from '../interfaces/request.interface';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  } 

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(`SELECT t1.id, t1.userId, JSON_ARRAYAGG(t2.id) AS productsIds
    FROM Trybesmith.Orders AS t1
    INNER JOIN Trybesmith.Products AS t2
    ON t1.id = t2.orderId
    GROUP BY t1.id`);
    const [rows] = result;
    return rows as Order[];
  }

  public async create(userId: string): Promise<Id> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders userId VALUES (?)',
      [userId],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId };
  }

  // public async insertProducts(orderCreated: number | undefined, body: ProductsInserted): Promise<Id> {
    
  // }
}