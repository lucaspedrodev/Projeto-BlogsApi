const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;
    const emailVerify = regex.test(email);

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailVerify) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
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
            message: 'O "password" deve ter pelo menos 6 caracteres',
          }); 
    }
    next();
};

const loginValidation = (req, res, next) => {
    const { email, password } = req.body;

    if (email === '' || password === '') {
    return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (!email && !password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

module.exports = {
loginValidation,
emailValidation,
passwordValidation,

};