const jwt = require('jsonwebtoken');
 // const userService = require('../service/user.service');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
          try {
     //   const { data: { userId } } = jwt.verify(token, secret);
        const payload = jwt.verify(token, secret);
        // const user = await userService.getById(payload.getById);
        
    req.user = payload.data;
    next();
          } catch (e) {
        return res.status(401).json({
            message: 'Expired or invalid token' });
    }
    };
  
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