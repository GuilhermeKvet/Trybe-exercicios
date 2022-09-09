const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const carModel = require('../../../src/models/car.model');

const { registered, car } = require('./mocks/car.model.mock');

describe('Testes de unidade do model carros', function () {
  const newCar = {
    model: 'Corolla',
    color: 'Preto',
    licensePlate: 'AUV-6898',
  };
  it('Testa se consegue cadastrar um novo carro', async function () {
    const execute = { insertId: 1 };
    sinon.stub(connection, 'execute').resolves([execute]);

    const result = await carModel.registerNewCar(newCar);

    expect(result).to.equal(registered);
  });
  it('Busca o carro do id 3', async function () {
    sinon.stub(connection, 'execute').resolves(car);

    const result = await carModel.findById(3);

    expect(result).to.deep.equal(car);
  });

  afterEach(sinon.restore);
});
