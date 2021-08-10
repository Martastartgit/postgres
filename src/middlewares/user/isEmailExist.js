const { codes } = require('../../constants');
const { ErrorHandler, ErrorMessages } = require('../../error');
const { userService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;

        const existEmail = await userService.findOneUser({ email });

        if (existEmail) {
            throw new ErrorHandler(
                codes.BAD_REQUEST,
                ErrorMessages.EMAIl_EXISTS.customCode,
                ErrorMessages.EMAIl_EXISTS.message
            );
        }

        next();
    } catch (e) {
        next(e);
    }
};
