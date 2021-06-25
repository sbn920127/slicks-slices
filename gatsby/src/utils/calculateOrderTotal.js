import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((piz) => piz.id === singleOrder.id);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  // calc the total for that pizza
  // add that total to the running total
}
