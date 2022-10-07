import { Request, Response, NextFunction } from 'express';
import Schemas from '../Joi/schemas';

const loginValidation = (req: Request, res:Response, next: NextFunction) => {
  const { body } = req;
  const { error } = Schemas.schema1.validate(body);
  if (!error) return next();
  return res.status(400).json({ message: error.message });
};

export default loginValidation;