const { carModel, travelModel, driverModel } = require('../../models');
const { addRequestTravelSchema, addCarSchema, addDriverSchema } = require('./schemas');

const validateRequestTravelSchema = (passengerId, startingAddress, endingAddress, waypoints) => {
  const { error } = addRequestTravelSchema
    .validate({ passengerId, startingAddress, endingAddress, waypoints });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateInputValues = async ({ travelId, driverId }) => {
  const travel = await travelModel.findById(travelId);
  if (!travel) return { type: 'TRAVEL_NOT_FOUND', message: 'travel id not found' };
  const driver = await driverModel.findById(driverId);
  if (!driver) return { type: 'DRIVER_NOT_FOUND', message: 'driver id not found' };
  return { type: null, message: '' };
};

const validateAlreadyDriver = async (travelId) => {
  const travel = await travelModel.findById(travelId);
  if (travel && travel.driverId) {
    return { type: 'TRAVEL_CONFLICT', message: 'travel already assigned' };
  }
  return { type: null, message: '' };
};

const validateNewCar = (model, color, licensePlate) => {
  const { error } = addCarSchema.validate({ model, color, licensePlate });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateNewDriver = async (name, carIds) => {
  const { error } = addDriverSchema.validate({ name, carIds });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  if (carIds) {
    const cars = await Promise.all(
      carIds.map(async (id) => carModel.findById(id)),
    );
  
    const carUndefined = cars.some((car) => car === undefined);
    if (carUndefined) return { type: 'CAR_NOT_FOUND', message: 'Some car is not found' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateRequestTravelSchema,
  validateNewCar,
  validateNewDriver,
  validateInputValues,
  validateAlreadyDriver,
};