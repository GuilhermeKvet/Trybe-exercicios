import Payment from '../Domain/Payment/Payment';
import IPayment from '../Interfaces/IPayment';
import PaymentODM from '../Models/PaymentODM';
import KeyService from './KeyService';

class TransferService {
  private isValidKey(key: string): boolean {
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    return cpfRegex.test(key);
  }

  private createPaymentDomain(payment: IPayment | null): Payment | null {
    if (payment) {
      return new Payment(
        payment.payByPerson,
        payment.payToPerson,
        payment.amount,
        payment.key,
        payment.id,
        payment.status,
      );
    }
    return null;
  }

  public async transfer(payment: IPayment) {
    const keyService = new KeyService();
    const result = await keyService.getByValue(payment.key);

    if (result) {
      // Criar instância da Model de Payment usando Mongoose
      const paymentODM = new PaymentODM();
      // Inserir os dados no banco
      const newPayment = await paymentODM.create(payment);
      // Retornar os dados com o id
      return this.createPaymentDomain(newPayment);
    }

    throw new Error('Invalid Key!');
  }

  public async undoTransfer(id: string, payment: IPayment) {
    if (!this.isValidKey(payment.key)) throw new Error('Invalid Key!');
    const paymentODM = new PaymentODM();
    return paymentODM.update(id, payment);
  }
}

export default TransferService;