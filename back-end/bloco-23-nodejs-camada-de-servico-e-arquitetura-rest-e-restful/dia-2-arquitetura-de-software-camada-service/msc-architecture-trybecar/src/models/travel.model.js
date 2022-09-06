const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insert = async (travel) => {
  const columns = Object.keys(snakeize(travel))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(travel)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
    [...Object.values(travel)],
  );

  return insertId;
};

const findByTravelStatusId = async (travelStatusId) => {
  const [result] = await connection.execute(
    'SELECT * FROM travels WHERE travel_status_id = ?',
    [travelStatusId],
  );
  return camelize(result);
};

const findById = async (travelId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM travels WHERE id = ?',
    [travelId],
  );

  return camelize(result);
};

const updateTravelById = async (travelId, dataUpdate) => {
  const formattedColumns = Object.keys(snakeize(dataUpdate))
    .map((key) => `${key} = ?`)
    .join(', ');

  const result = await connection.execute(
    `UPDATE travels SET ${formattedColumns} WHERE id = ?`,
    [...Object.values, travelId],
  );
  return result;
};

module.exports = {
  insert,
  findByTravelStatusId,
  updateTravelById,
  findById,
};