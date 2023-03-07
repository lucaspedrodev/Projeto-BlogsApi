const express = require('express');
const userController = require('../controller/userController');
const validation = require('../utils/middlewares');

const userRouter = express.Router();

userRouter.post('/', validation.displayNameValidation, validation.emailValidation,
validation.passwordValidation, userController.createUser);

module.exports = userRouter;