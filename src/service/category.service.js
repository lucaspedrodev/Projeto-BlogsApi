const { Category } = require('../models');

const addCategory = async (name) => {
    const add = await Category.create({ name });
    return add;    
};

module.exports = {
addCategory,
};