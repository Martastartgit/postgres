const { passwordHasher, tokenizer } = require('../helpers');
const { authService } = require('../services');

module.exports = {
    authorization: async (req, res, next) => {
        try {
            const { user, body: { password } } = req;

            await passwordHasher.compare(password, user.password);

            const tokens = tokenizer();

            await authService.createTokens({ ...tokens, userId: user.id });

            res.json(tokens);
        } catch (e) {
            next(e);
        }
    }
};
