import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(201).json({ token: userCreated });
  };

  // public getAll = async (req: Request, res: Response) => {
  //   const products = await this.productService.getAll();
  //   res.status(200).json(products);
  // };
}

export default UserController;