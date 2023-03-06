const userService = require('../service/user.service');
const { createToken } = require('../utils/token');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
const { email, password } = req.body;

if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
}

const user = await userService.login(email, password);
if (!user || user.password !== password) return res.status(400).json({ message: 'Invalid fields' });

const { password: _, ...userWhitoutPass } = user.dataValues; 
const tokens = createToken(userWhitoutPass);
return res.status(200).json({ token: tokens });
};

module.exports = {
    login,
};