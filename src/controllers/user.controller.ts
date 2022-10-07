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

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const userToken = await this.userService.login(user);
    if (userToken === 'invalid') {
      return res.status(401)
        .json({ message: 'Username or password invalid' });
    }
    res.status(200).json({ token: userToken });
  };
}

export default UserController;