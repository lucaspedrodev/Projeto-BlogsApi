const express = require('express');
const userController = require('../controller/userController');
const validation = require('../utils/middlewares');
const validateToken = require('../utils/token');

const userRouter = express.Router();

userRouter.post('/', validation.displayNameValidation, validation.emailValidation,
validation.passwordValidation, userController.createUser);

userRouter.get('/', validateToken.verifyToken, userController.getAllUsers);
userRouter.get('/:id', validateToken.verifyToken, userController.getById);

module.exports = userRouter;