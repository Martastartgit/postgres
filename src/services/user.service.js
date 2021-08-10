const { UserModel } = require('../dataBase/models');

module.exports = {
    createUser: (user) => UserModel.create(user),

    getAllUsers: () => UserModel.findAll(),

    findOneUser: (filterObject) => UserModel.findOne({
        where: filterObject
    }),

    getUserById: (id) => UserModel.findByPk(id),

    updateUserById: async (updatedUser, id) => {
        await UserModel.update(updatedUser, {
            where: { id }
        });
    }

};
