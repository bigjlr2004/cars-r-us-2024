export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=wheel&_expand=interior"
  );
  ("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size");
  const orders = await fetchResponse.json();

  let ordersHTML = orders.map((order) => {
    if (order.paintId) {
      let variableWithTotalPrice =
        order.paint.price +
        order.wheel.price +
        order.interior.price +
        order.technology.price;

      let convertedCost = variableWithTotalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      return `<div class="choiceOptions" id="${order.id}"> ${order.paint.color} car with ${order.wheel.description} wheels, ${order.interior.type} interior,
       and ${order.technology.package} for a cost of $  ${convertedCost}.
        
           </div>`;
    }
  });

  return ordersHTML.join("");
};
