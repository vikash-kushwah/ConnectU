// Using Joi for validation
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().max(100).required(),
});

const validateUser = (data) => userSchema.validate(data);

module.exports = validateUser;
