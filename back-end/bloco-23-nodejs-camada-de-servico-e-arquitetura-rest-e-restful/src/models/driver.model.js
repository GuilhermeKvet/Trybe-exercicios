const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const result = await connection.execute(
    'SELECT * FROM drivers'
  );
  return camelize(result);
};

const findById = async (id) => {
  const result = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [id],
  )
  return camelize(result);
};

const findByDriverName = async (driverName) => {
  const [[driver]] = await connection.execute(
    'SELECT * FROM drivers WHERE name = ?',
    [plate],
  );
  if (driver) return true;
  return false;
};

const registerNewDriver = async (driver) => {
  if (findByDriverName(driver.name)) {
    await connection.execute(
      `INSERT INTO driver name VALUE ?`,
      [driver.name],
    );
    return 1;
  }
  return 0;
};

module.exports = {
  findAll,
  findById,
  registerNewDriver
};
