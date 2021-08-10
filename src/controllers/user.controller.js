const { passwordHasher } = require('../helpers');
const { userService } = require('../services');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.json('user created');
        } catch (e) {
            next(e);
        }
    },
    findUserById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const oneUser = await userService.getUserById(userId);

            res.json(oneUser);
        } catch (e) {
            next(e);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await userService.updateUserById(req.body, userId);

            res.json('user update');
        } catch (e) {
            next(e);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },
};
