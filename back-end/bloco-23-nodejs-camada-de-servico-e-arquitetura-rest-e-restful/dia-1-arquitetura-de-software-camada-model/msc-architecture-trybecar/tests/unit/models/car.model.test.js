const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const carModel = require('../../../src/models/car.model');

const { registered, car } = require('./mocks/car.model.mock');

describe('Testes de unidade do model carros', function () {
  it('Testa se consegue cadastrar um novo carro', async () => {
    sinon.stub(connection, 'execute').resolves(registered);

    const result = await carModel.registerNewCar({
      model: 'Corolla',
      color: 'Preto',
      licensePlate: 'AUV-6898'
    });

    expect(result).to.equal(registered);
  });

  it('Busca o carro do id 3', async () => {
    sinon.stub(connection, 'execute').resolves(car);

    const result = await carModel.findCarById(3);

    expect(result).to.deep.equal(car);
  });

  afterEach(sinon.restore);
});

