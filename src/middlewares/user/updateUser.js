const { codes } = require('../../constants');
const { ErrorHandler } = require('../../error');
const { updateUserValidator } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const { error } = updateUserValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(codes.BAD_REQUEST, error.details[0].message);
        }

        next();
    } catch (e) {
        next(e);
    }
};
