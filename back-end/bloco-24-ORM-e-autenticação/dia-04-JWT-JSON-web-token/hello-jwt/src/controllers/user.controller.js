const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await UserService.createUser({ username, password });
    if (!newUser) throw Error;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    return res.status(401).json('Invalid username or password');
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return res.status(200).json({ token });
};

const me = (req, res) => {
  const { username, admin } = req.user;
  res.status(200).json({ username, admin });
};

const topSecret = (req, res) => {
  const { user } = req;
  if (!user.admin) res.status(403).json({ message: 'Restricted access' });
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};

module.exports = {
  createUser,
  login,
  me,
  topSecret,
};
