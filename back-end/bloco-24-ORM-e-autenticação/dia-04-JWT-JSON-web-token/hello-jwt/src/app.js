const express = require('express');

const User = require('./controllers/user.controller');
const validateJWT = require('./middlewares/validateJWT');

const app = express();

app.use(express.json());

app.post('/login', validateJWT, User.login);

module.exports = app;