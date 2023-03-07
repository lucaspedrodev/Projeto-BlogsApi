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
module.exports = {
    createUser,
};