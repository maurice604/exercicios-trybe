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
            margherita: {
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

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const name = order['name'];
    const endereco = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const phone = order['phoneNumber'];
    const street = order[endereco].street;
    const number = order[endereco].number;
    const apartment = order[endereco].apartment;
    console.log(`Olá ${deliveryPerson}, entrega para: ${name}, telefone ${phone}, R.${street}, N.${number}, AP:${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newBuyer = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const newTotal = order.payment.total = '50';

    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);