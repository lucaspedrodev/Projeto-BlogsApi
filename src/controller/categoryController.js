const categoryService = require('../service/category.service');

const addCategory = async (req, res) => {
const { name } = req.body; 
const response = await categoryService.addCategory(name);
    if (!name) {
    return res.status(400).json({ message: '"name" is required' });
}
    
        return res.status(201).json(response);        
};
 
module.exports = {
    addCategory,
};