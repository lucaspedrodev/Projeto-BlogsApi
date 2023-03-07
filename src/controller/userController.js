const userService = require('../service/user.service');
const userLoginService = require('../service/userLogin.service');
const { createToken } = require('../utils/token');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
        const response = await userService.createUser(displayName, email, password, image);
        const user = await userLoginService.login(email, password);  
    if (response.type) return res.status(409).json({ message: 'User already registered' });
        const { password: _, ...userWhitoutPass } = user.dataValues; 
        const tokens = createToken(userWhitoutPass);
            return res.status(201).json({ token: tokens });    
};

const getAllUsers = async (_req, res) => {
        const allUsers = await userService.GetAllUsers();
return res.status(200).json(allUsers);
    };

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    const { password: _, ...data } = user.dataValues;
    if (!user) {
 return res.status(404).json({
        message: 'User does not exist' }); 
}
 return res.status(200).json(data);
};

module.exports = {
    createUser,
    getAllUsers,
    getById,
};