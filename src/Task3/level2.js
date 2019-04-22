/**
 * Теперь на вход приходит список заказов. Для каждого заказа нужно приготовить блюда которые в нем есть.
 */


const recipeBook = {
    omelet: () => console.log('Cook omelet.'),
    cake: () => console.log('Cook сake.'),
    steak: () => console.log('Cook steak.'),
};

const cookOrders = (orders) => {
    orders.forEach(order => {
        order.dishes.forEach(dish => recipeBook[dish]());
    });
};

const orders = [
    {name: 'Order 1', dishes: ['cake', 'steak']},
    {name: 'Order 2', dishes: ['steak']},
    {name: 'Order 3', dishes: ['omelet', 'omelet']},
];

cookOrders(orders);

/**
 * Вывод:
 *
 * == Order 1 ==
 * Cook сake.
 * Cook steak.
 *
 * == Order 2 ==
 * Cook steak.
 *
 * == Order 3 ==
 * Cook omelet.
 * Cook omelet.
 */
