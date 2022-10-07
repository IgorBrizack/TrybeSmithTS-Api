import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateToken = (req: Request, res: Response, next:NextFunction) => {
  const { headers: { authorization } } = req;
  const { body } = req;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    }); 
  }

  try {
    const payload = jwt.verify(authorization, secret);
    req.body = { payload, ...body };
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export default validateToken;