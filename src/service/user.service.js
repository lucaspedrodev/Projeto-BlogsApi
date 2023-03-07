const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const img = (image === undefined) ? '' : image;
    try {
        const newUser = await User.create({ displayName, email, password, image: img });
    return newUser;
     } catch (e) {
    return { type: 'error', message: 'User already registered' };
  }
};

const GetAllUsers = async () => {
   const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getById = async (userId) => {
    const user = await User.findByPk(userId);
    return user;
};
    module.exports = {
        createUser,
        GetAllUsers,
        getById,
    };