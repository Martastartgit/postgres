const { codes } = require('../../constants');
const { ErrorHandler, ErrorMessages } = require('../../error');
const { userService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const userId = +req.params.userId;

        if (userId < 0 || Number.isNaN(userId) || !Number.isInteger(userId)) {
            throw new ErrorHandler(
                codes.BAD_REQUEST,
                ErrorMessages.NOT_VALID_ID.customCode,
                ErrorMessages.NOT_VALID_ID.message
            );
        }

        const user = await userService.getUserById(userId);

        if (!user) {
            throw new ErrorHandler(
                codes.NOT_FOUND,
                ErrorMessages.NOT_FOUND.customCode,
                ErrorMessages.NOT_FOUND.message
            );
        }

        next();
    } catch (e) {
        next(e);
    }
};
