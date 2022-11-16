import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Key from '../../../src/Domain/Key/Key';

describe('Deveria buscar uma chave por meio de seu valor', () => {
  it('Deveria buscar uma chave por valor con sucesso', async function () {
    const keyOutput: Key = new Key(
      '+55 (18) 99765-1187',
      'Jo Soares',
      'phonenumber',
      '63319d80feb9f483ee823ac5',
    );

    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new KeyService();
    const result = service.getByValue('+55 (18) 99765-1187');

    expect(result).to.be.equal(keyOutput);

    sinon.restore();
  });
});