const Joi = require('joi');

const { reqExp } = require('../constants');

module.exports = Joi.object({
    first_name: Joi.string().regex(reqExp.ONLY_LETTERS),
    last_name: Joi.string().regex(reqExp.ONLY_LETTERS),
    email: Joi.string().regex(reqExp.EMAIL_REGEXP),
    phone: Joi.string().regex(reqExp.PHONE),
    password: Joi.string().regex(reqExp.PASSWORD_REGEXP)
});
