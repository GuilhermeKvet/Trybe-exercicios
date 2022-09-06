const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const driverModel = require('../../../src/models/driver.model');

const { allDrivers, driver, registered } = require('./mocks/driver.model.mock');

describe('Testes de unidade do model de motoristas', function () {
  it('Lista todos os motoristas', async () => {
    sinon.stub(connection, 'execute').resolves(allDrivers);

    const result = await driverModel.findAll();

    expect(result).to.deep.equal(allDrivers);
  });
  it('Procura pelo motorista com id 2', async () => {
    sinon.stub(connection, 'execute').resolves(driver);

    const result = await driverModel.findById(2);

    expect(result).to.deep.equal(driver);
  });
  it('Testa se consegue cadastrar um novo carro', async () => {
    sinon.stub(connection, 'execute').resolves(registered);

    const result = await driverModel.registerNewDriver({
      name: 'Guilherme'
    });

    expect(result).to.equal(registered);
  });

  afterEach(sinon.restore);
});