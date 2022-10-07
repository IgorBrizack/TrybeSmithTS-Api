import { Request, Response, NextFunction } from 'express';
import Schemas from '../Joi/schemas';

const errorType = (message: string): number => {
  if (message.includes('required')) return 400;
  return 422;
};

const OrderValidation = (req: Request, res:Response, next: NextFunction) => {
  const { body } = req;
  const { error } = Schemas.schema4.validate(body);
  if (!error) return next();
  const errorStatus = errorType(error.message);
  return res.status(errorStatus).json({ message: error.message });
};

export default OrderValidation;