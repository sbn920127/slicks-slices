import calculatePizzaPrice from './calculatePizzaPrice';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((piz) => piz.id === item.id);
    return {
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluid.src,
      price: calculatePizzaPrice(pizza.price, item.size),
    };
  });
}
