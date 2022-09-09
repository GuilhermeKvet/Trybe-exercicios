const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { driverService } = require('../../../src/services');
const driverController = require('../../../src/controllers/driver.controller');

const { allDrivers, newDriver } = require('./mocks/driver.controller.mock');

describe('Teste de unidade do driverController', function () {
  it('Buscando as viagens em aberto quando não tem nenhuma viagem cadastrada', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(driverService, 'getWaitingDriverTravels')
      .resolves({ type: null, message: [] });

    await driverController.openTravel(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([]);
  });
  it('Busca por todos os motoristas cadastrados', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(driverService, 'getDrivers').resolves({ type: null, message: allDrivers });

    await driverController.getDrivers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allDrivers);
  });
  it('Cadastra um novo motorista', async function () {
    const res = {};
    const req = { body: { name: 'Guilherme', carIds: [] } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(driverService, 'createDriver').resolves({ type: null, message: newDriver });

    await driverController.createDriver(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newDriver);
  });
});