const express = require('express');
const connection = require('./models/connection');
const travelModel = require('./models/travel.model');

const app = express();

app.use(express.json());

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const isPassengerExists = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => connection.execute(
      'INSERT INTO waypoints (address, stop_order, travel_id) VALUE (?, ?, ?)',
      [value.address, value.stopOrder, travelId],
    ));
  }
  return [];
};

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  if (isPassengerExists(passengerId)) {
    const travelId = await travelModel.insert({ passengerId, startingAddress, endingAddress });
    await Promise.all(saveWaypoints(waypoints, travelId));

    const response = await travelModel.findById(travelId);
    res.status(201).json(response);
    return;
  }

  res.status(500).json({ message: 'Ocorreu um erro' });
});

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.updateTravelById(travelId, { driverId });

  await travelModel.updateTravelById(travelId, { travelStatusId: DRIVER_ON_THE_WAY });

  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.updateTravelById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });
  
  const result = await travelModel.findById();
  
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;
  
  await travelModel.updateTravelById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });

  const result = await travelModel.findById(travelId);
  
  res.status(200).json(result);
});

module.exports = app;
