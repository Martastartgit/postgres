const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/', authMiddleware.checkPasswordAndEmail, authMiddleware.checkIsUserExist, authController.authorization);

module.exports = router;
