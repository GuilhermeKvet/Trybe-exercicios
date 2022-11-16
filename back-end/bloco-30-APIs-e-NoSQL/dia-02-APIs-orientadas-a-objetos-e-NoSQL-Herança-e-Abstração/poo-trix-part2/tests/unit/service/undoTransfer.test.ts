import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IPayment from '../../../src/Interfaces/IPayment';
import TransferService from '../../../src/Services/TransferService';

describe('Lançando exceção quando se tentar estornar o Pix', function () {
  it('Deveria lançar uma exceção quando a key é inválida', async function () {
    //arrange
    const paymentInput: IPayment = {
      payByPerson: 'Guilherme',
      payToPerson: 'Edoarda',
      amount: 10000,
      key: '000.123.456-XX', //estrutura errada
    };

    sinon.stub(Model, 'update').resolves();

    //act
    try {
      const service = new TransferService();
      await service.undoTransfer('63320b77aa12f0db4f210b00', paymentInput);
    } catch (error) {
      //assert
      expect((error as Error).message).to.be.equal('Invalid Key!');
    }
  });
  it('Deveria lançar uma exceção quando o ID é inválida', async function () {
    //arrange
    const paymentInput: IPayment = {
      payByPerson: 'Guilherme',
      payToPerson: 'Edoarda',
      amount: 10000,
      key: '000.123.456-78',
    };

    sinon.stub(Model, 'update').resolves();

    //act
    try {
      const service = new TransferService();
      await service.undoTransfer('WRONG ID', paymentInput);
    } catch (error) {
      //assert
      expect((error as Error).message).to.be.equal('Invalid Mongo id');
    }
  });

  afterEach(() => sinon.restore());
});