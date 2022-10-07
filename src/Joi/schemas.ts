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

const schemas = { 
  schema1,
  schema2,
  schema3, 
};

export default schemas;