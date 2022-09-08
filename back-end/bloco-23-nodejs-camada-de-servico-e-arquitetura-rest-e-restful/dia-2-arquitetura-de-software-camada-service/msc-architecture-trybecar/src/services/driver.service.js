const { travelModel, driverModel, driveCarModel, carModel } = require('../models');
const { 
  validateNewDriver,
  validateInputValues,
  validateAlreadyDriver,
 } = require('./validations/validationsInputValues'); 

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const getDrivers = async () => {
  const result = await driverModel.findAll();
  return { type: null, message: result };
};

const getWaitingDriverTravels = async () => {
  const [result] = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: result }; 
};

const travelAssign = async ({ travelId, driverId }) => {
  let error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;
  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  await travelModel.updateTravelById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  const result = await travelModel.findById(travelId);
  return { type: null, message: result };
};

const startTravel = async ({ travelId, driverId }) => {
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  await travelModel.updateTravelById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });

  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const endTravel = async ({ travelId, driverId }) => {
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  await travelModel.updateTravelById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });

  const result = await travelModel.findById(travelId);
  return { type: null, message: result }; 
};

const createDriver = async (name, carIds) => {
  const error = await validateNewDriver(name, carIds);
  if (error.type) return error;

  const newDriver = await driverModel.registerNewDriver({ name });

  if (carIds && carIds.length > 0) {
    await Promise.all(carIds.map(
      async (carId) => driveCarModel.insert({ driverId: newDriver.id, carId }),
    ));

    newDriver.cars = await Promise.all(
      carIds.map(async (carId) => carModel.findById(carId)),
    );
  } else {
    newDriver.cars = [];
  }
  return { type: null, message: newDriver };
};

module.exports = {
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
  travelAssign,
  startTravel,
  endTravel,
};