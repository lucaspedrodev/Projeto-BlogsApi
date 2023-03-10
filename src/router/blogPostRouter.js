const express = require('express');
const blogPostController = require('../controller/blogPostController');
const validation = require('../utils/token');

const blogPostRoute = express.Router();

blogPostRoute.get('/', validation.verifyToken, blogPostController.findAllPosts);

module.exports = blogPostRoute;