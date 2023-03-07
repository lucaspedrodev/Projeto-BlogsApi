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

    module.exports = {
        createUser,
    };