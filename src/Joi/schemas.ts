import Joi from 'joi';

const schema1 = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

const schema2 = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const schemas = { schema1, schema2 };

export default schemas;