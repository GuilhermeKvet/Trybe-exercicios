import IKey from '../../Interfaces/IKey';
import IValid from '../../Interfaces/IValid';
import KeyTypes from '../../utils/KeyTypes';
import CPF from './CPF';
import Mail from './Mail';
import PhoneNumber from './PhoneNumber';
import Random from './Random';

class KeyFactory {
  static create(key: IKey): IKey & IValid {
    if (key.type === KeyTypes.CPF) {
      return new CPF(key.owner, key.value);
    }
    
    if (key.type === KeyTypes.PHONE_NUMBER) {
      return new PhoneNumber(key.owner, key.value);
    }

    if (key.type === KeyTypes.MAIL) {
      return new Mail(key.owner, key.value);
    }

    if (key.type === KeyTypes.RANDOM) {
      return new Random(key.owner, key.value);
    }
    throw new Error('Invalid Key Type');
  }
}

export default KeyFactory;