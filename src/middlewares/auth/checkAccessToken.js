const JWT = require('jsonwebtoken');

const { constants, codes } = require('../../constants');
const { configs } = require('../../configs');
const { ErrorHandler, ErrorMessages } = require('../../error');
const { authService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const access_token = await req.get(constants.AUTHORIZATION);

        if (!access_token) {
            throw new ErrorHandler(codes.BAD_REQUEST,
                ErrorMessages.TOKEN_REQUIRED.customCode,
                ErrorMessages.TOKEN_REQUIRED.message);
        }

        const tokens = await authService.findTokens({ access_token });

        if (!tokens) {
            throw new ErrorHandler(codes.FORBIDDEN,
                ErrorMessages.WRONG_TOKEN.customCode,
                ErrorMessages.WRONG_TOKEN.message);
        }

        JWT.verify(access_token, configs.JWT_ACCESS_SECRET, (err) => {
            if (err) {
                throw new ErrorHandler(
                    codes.BAD_REQUEST,
                    ErrorMessages.NOT_VALID_TOKEN.customCode,
                    ErrorMessages.NOT_VALID_TOKEN.message
                );
            }
        });

        next();
    } catch (e) {
        next(e);
    }
};
