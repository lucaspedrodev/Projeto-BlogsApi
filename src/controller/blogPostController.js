const blogPostService = require('../service/blogPost.service');

const findAllPosts = async (_req, res) => {
    const allPosts = await blogPostService.findAllPosts();
       return res.status(200).json(allPosts);
};

module.exports = {
    findAllPosts,
};