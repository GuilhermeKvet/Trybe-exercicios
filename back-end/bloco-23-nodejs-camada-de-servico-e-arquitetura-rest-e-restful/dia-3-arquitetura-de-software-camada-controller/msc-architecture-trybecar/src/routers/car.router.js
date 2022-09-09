const express = require('express');
const carController = require('../controllers/car.controller');
const { validateCarFields } = require('../middlewares/validateCarFields.middleware');

const router = express.Router();

router.get('/', validateCarFields, carController.createCar);

module.exports = router;