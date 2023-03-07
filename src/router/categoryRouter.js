const express = require('express');
const categoryController = require('../controller/categoryController');
const validation = require('../utils/token');

const categoryRouter = express.Router();

categoryRouter.post('/', validation.verifyToken, categoryController.addCategory);

module.exports = categoryRouter;