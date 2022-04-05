const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

//2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const recipientPerson = order.name;
  const numberCell = order.phoneNumber;
  const addressRecipient = order.address.street;
  const numberHouse = order.address.number;
  const numberAP = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${recipientPerson}, Telefone: ${numberCell}, R. ${addressRecipient}, Nº: ${numberHouse}, AP: ${numberAP}`)
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luis Silva';
  const recipientPerson = order.name;
  const flavorPizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const total = order.payment.total = '50';

  console.log(`Ola ${recipientPerson}, o total do seu pedido de ${flavorPizza} e ${drink} é R$ ${total}`);

}

orderModifier(order);
