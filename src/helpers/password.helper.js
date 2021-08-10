const bcrypt = require('bcrypt');

const { configs } = require('../configs');
const { codes } = require('../constants');
const { ErrorHandler, ErrorMessages } = require('../error');

module.exports = {
    hash: (password) => bcrypt.hash(password, configs.saltRounds),

    compare: async (password, hashPassword) => {
        const isPasswordEqual = await bcrypt.compare(password, hashPassword);

        if (!isPasswordEqual) {
            throw new ErrorHandler(
                codes.NOT_FOUND,
                ErrorMessages.NOT_FOUND.customCode,
                ErrorMessages.NOT_FOUND.message
            );
        }
    }
};
