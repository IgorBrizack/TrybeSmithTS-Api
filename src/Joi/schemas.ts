import Joi from 'joi';

const schema1 = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

const schema2 = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const schema3 = Joi.object({
  username: Joi.string().required().min(3),
  classe: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

const schema4 = Joi.object({
  productsIds: Joi.array().min(1).required().items(Joi.number())
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
  payload: Joi.required(),
});

const schemas = { 
  schema1,
  schema2,
  schema3,
  schema4, 
};

export default schemas;