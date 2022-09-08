const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findByPlate = async (plate) => {
  const [[car]] = await connection.execute(
    'SELECT * FROM cars WHERE license_plate = ?',
    [plate],
  );
  if (car) return true;
  return false;
};

const registerNewCar = async (car) => {
  if (findByPlate(car.licensePlate)) {
    const columns = Object.keys(snakeize(car))
      .map((key) => `${key}`)
      .join(', ');
    
    const placeholders = Object.keys(car)
      .map((_key) => '?')
      .join(', ');
  
    const [{ insertId }] = await connection.execute(
      `INSERT INTO cars (${columns}) VALUE (${placeholders})`,
      [...Object.values(car)],
    );
    return insertId;
  }
  return 0;
};

const findById = async (id) => {
  const result = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [id],
  );
  return camelize(result);
};

module.exports = {
  registerNewCar,
  findById,
};