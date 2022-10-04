const express = require('express');

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatient,
  getPatientsAndSurgeriesNoDoctor
} = require('./controllers/patientsController');

const { getAllPlans } = require('./controllers/plansController');

const { getDoctorSurgeries } = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());

app.get('/:id', getAllPlans);
app.get('/surgeries/:name', getDoctorSurgeries);
app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.post('/', createPatient);

module.exports = app;