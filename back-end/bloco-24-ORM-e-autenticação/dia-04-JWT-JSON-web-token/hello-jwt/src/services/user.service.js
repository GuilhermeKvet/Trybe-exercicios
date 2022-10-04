const { User } = require('../models');

const createUser = async ({ username, password }) => User.create({ username, password });

module.exports = {
  createUser,
};