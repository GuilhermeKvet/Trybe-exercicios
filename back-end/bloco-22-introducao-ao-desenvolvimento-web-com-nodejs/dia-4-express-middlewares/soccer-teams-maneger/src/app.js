const express = require('express');
require('express-async-errors');
const teamsRouter = require('./routes/teamsRouter');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(express.json());

app.use('/teams', teamsRouter);

app.use(errorMiddleware);

module.exports = app;