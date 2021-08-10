const router = require('express').Router();

const { userController } = require('../controllers');
const { authMiddleware, userMiddleware } = require('../middlewares');

router.route('/')
    .post(userMiddleware.isUserValid, userMiddleware.isEmailExist, userController.createUser)
    .get(userController.getAllUsers);

router.route('/:userId')
    .all(userMiddleware.isIdValid, authMiddleware.checkAccessToken)
    .put(userMiddleware.isUserUpdateBodyValid, userController.updateUser)
    .get(userController.findUserById);

module.exports = router;
