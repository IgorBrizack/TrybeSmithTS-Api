import { Request, Response, NextFunction } from 'express';
import Schemas from '../Joi/schemas';

const productValidation = (req: Request, res:Response, next: NextFunction) => {
  const { body } = req;
  const { error } = Schemas.schema2.validate(body);
  if (!error) return next();
  if (error.message === '"name" is required' || error.message === '"amount" is required') {
    return res.status(400).json({ message: error.message });
  }
  return res.status(422).json({ message: error.message });
};

export default productValidation;