const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { carService } = require('../../../src/services');
const carController = require('../../../src/controllers/car.controller');

const { newCar } = require('./mocks/car.controller.mock');

describe('Teste de unidade do carController', function () {
  it('Cadastra um novo carro', async function () {
    const res = {};
    const req = { body: { model: 'Onix', color: 'Branco', licensePlate: 'GUI-2022'} };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(carService, 'createCar')
      .resolves({ type: null, message: newCar });

    await carController.createCar(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newCar);
  });
});