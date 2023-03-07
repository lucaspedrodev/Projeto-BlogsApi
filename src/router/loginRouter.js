const express = require('express');
const loginController = require('../controller/userLogin.controller');
// const tokenLog = require('../utils/token');

const loginRouter = express.Router();

loginRouter.post('/', loginController.login);

module.exports = loginRouter;