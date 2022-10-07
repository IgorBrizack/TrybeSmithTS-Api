import loginMiddleware from './loginMiddlware';
import productValidation from './productValidation';
import insertUserValidation from './insertUserValidation';

const Middlwares = { 
  loginMiddleware,
  productValidation, 
  insertUserValidation };

export default Middlwares;