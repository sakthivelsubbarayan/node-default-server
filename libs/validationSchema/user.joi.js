const Joi = require('@hapi/joi');
const signup = Joi.object().keys({

  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(1)
    .max(100)
    .required(),
});

const login = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(1)
    .max(255)
    .required(),
});


module.exports = {
  signup,
  login,
};
