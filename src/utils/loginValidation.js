const joi = require('joi');

const loginValidation = (data) => {
  const schema = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(50).required()
  });

  return schema.validate(data);
};

module.exports = {loginValidation};