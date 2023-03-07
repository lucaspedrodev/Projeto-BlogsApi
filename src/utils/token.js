const jwt = require('jsonwebtoken');
// const userService = require('../service/userLogin.service');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);
const verifyToken = (token) => jwt.verify(token, secret);

// const tokenLogin = async (req, res, next) => {
//     const { email, password } = req.body;
//     const user = await userService.login(email, password);
//     const { password: _, ...userWhitoutPass } = user.dataValues; 
//     const tokens = createToken(userWhitoutPass);
//     if (email && password) {
//         return res.status(200).json({ token: tokens });
//     }
//     next();      
// };
module.exports = {
    createToken, 
    verifyToken,
  //  tokenLogin,
};