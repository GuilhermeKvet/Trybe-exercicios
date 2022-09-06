const express = require('express');
const activitiesRoutes = require('./routes/activitiesRoutes');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRoutes);

module.exports = app;