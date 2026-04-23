export default function Cart() {
  const cart = [
    {id: 1, name: "Ноутбук", price: 1000},
    {id: 2, name: "Мишка", price: 50},
    {id: 3, name: "Клавіатура", price: 100}
  ];

  const discountCart = cart.filter((product) => product.price > 60).map(product => {
    return {...product, price: product.price * 0.9}
  })
  const messages = ['Завантаження', 'Підключення', 'Доступ заборонено', 'Отримання даних'];
  for (const message of messages) {
    if (message === 'Доступ заборонено') {
      console.log('Доступ заборонено!')
      break;
    }
    console.log(message)
  }
  const totalPrice = discountCart.reduce((acc, item) => {
    return acc + item.price;
  }, 0)
  const saveToDatabase = (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Saved to DB: ${item.name}`);
      }, 1000);
    });
}

async function syncCart(items) {
  for (const item of items) {
    const result = await saveToDatabase(item);
    console.log(result);
  }
}

return (
  <>
    <div>
      <ul>
        {discountCart.map(prod => (
          <li>
            {prod.price}
          </li>
        ))}
      </ul>
      <p>Total price: {totalPrice}</p>
      <button onClick={() => syncCart(discountCart)}>Save</button>
    </div>
  </>
)
}