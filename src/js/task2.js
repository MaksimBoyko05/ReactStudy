console.log('Початок');

setTimeout(() => console.log('Таймер'), 0);

Promise.resolve()
  .then(() => console.log('Проміс 1'))
  .then(() => console.log('Проміс 2'));

console.log('Кінець');

function delay(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms) });
}

console.log("1. Відправляємо запит...");

delay(2000).then(() => {
  console.log("2. Отримали дані через 2 секунди!");
});
