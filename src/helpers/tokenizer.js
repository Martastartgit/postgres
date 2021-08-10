const JWT = require('jsonwebtoken');

const { configs } = require('../configs');

module.exports = () => {
    const access_token = JWT.sign({}, configs.JWT_ACCESS_SECRET, { expiresIn: configs.ACCESS_TOKEN_LIFETIME });
    const refresh_token = JWT.sign({}, configs.JWT_REFRESH_SECRET , { expiresIn: configs.REFRESH_TOKEN_LIFETIME });

    return {
        access_token,
        refresh_token
    };
};
