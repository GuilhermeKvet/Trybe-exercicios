const { validateNewCar } = require('./validations/validationsInputValues'); 
const { carModel } = require('../models');

const createCar = async (model, color, licensePlate) => {
  const error = validateNewCar(model, color, licensePlate);
  if (error.type) return error;
  const newCar = await carModel.registerNewCar({ model, color, licensePlate });
  return { type: null, message: newCar };
};

module.exports = {
  createCar,
};
