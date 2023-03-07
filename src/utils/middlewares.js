const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;
    const emailVerify = regex.test(email);

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailVerify) {
        return res.status(400).json({
            message: '"email" must be a valid email',
          });
    }
    next();
}; 

const passwordValidation = (req, res, next) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório',
});
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
          }); 
    }
    next();
};

const displayNameValidation = (req, res, next) => {
 const { displayName } = req.body;
 if (displayName.length < 8) {
  return res.status(400).json({
    message: '"displayName" length must be at least 8 characters long',
  });
 }
 next();
};

module.exports = {
displayNameValidation,
emailValidation,
passwordValidation,

};