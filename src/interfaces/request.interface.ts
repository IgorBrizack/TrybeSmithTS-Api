import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default interface RequestExtUser extends Request {
  user: string | JwtPayload
}