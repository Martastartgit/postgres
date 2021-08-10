const { TokenModel } = require('../dataBase/models');

module.exports = {
    createTokens: (tokenObject) => TokenModel.create(tokenObject),

    findTokens: (filterObject) => TokenModel.findOne({
        where: filterObject
    })

};
