import Joi from 'joi';

const schema1 = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
});

const schemas = { schema1 };

export default schemas;