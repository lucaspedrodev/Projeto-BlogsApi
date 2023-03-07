const { Category } = require('../models');

const addCategory = async (name) => {
    const add = await Category.create({ name });
    return add;    
};

const getCategories = async () => {
const categories = await Category.findAll();
return categories;
};

module.exports = {
addCategory,
getCategories,
};