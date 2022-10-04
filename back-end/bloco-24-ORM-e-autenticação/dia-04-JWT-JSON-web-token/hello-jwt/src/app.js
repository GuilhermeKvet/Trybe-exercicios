const express = require('express');

const User = require('./controllers/user.controller');
const validateJWT = require('./middlewares/validateJWT');

const app = express();

app.use(express.json());

app.post('/login', User.login);
app.get('/users/me', validateJWT, User.me);
app.get('/top-secret', validateJWT, User.topSecret);

module.exports = app;