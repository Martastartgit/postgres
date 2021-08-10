const { codes } = require('../../constants');
const { ErrorHandler, ErrorMessages } = require('../../error');
const { userService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;

        const userWithEmail = await userService.findOneUser({ email });

        if (!userWithEmail) {
            throw new ErrorHandler(
                codes.NOT_FOUND,
                ErrorMessages.NOT_FOUND.customCode,
                ErrorMessages.NOT_FOUND.message
            );
        }

        req.user = userWithEmail;

        next();
    } catch (e) {
        next(e);
    }
};
