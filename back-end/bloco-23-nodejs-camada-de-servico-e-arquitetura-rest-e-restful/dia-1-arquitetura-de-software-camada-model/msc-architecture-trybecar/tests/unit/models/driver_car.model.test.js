const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const driverCarModel = require('../../../src/models/driver_car.model');

const { expected } = require('./mocks/driver_car.model.mock');

describe('Testes de unidade do model de relacionamento de carros com motoristas', function () {
  it('Cadastra o relacionamento das pessoas motoristas com os carros', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const response = await driverCarModel.insert({
      driverId: 3,
      carId: 1,
    });

    expect(response).to.equal(1);
  });

  afterEach(sinon.restore);
});

