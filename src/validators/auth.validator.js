const Joi = require('joi');

const { reqExp } = require('../constants');

module.exports = Joi.object({
    email: Joi.string().regex(reqExp.EMAIL_REGEXP).required(),
    password: Joi.string().regex(reqExp.PASSWORD_REGEXP).required()
});
