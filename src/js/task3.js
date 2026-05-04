/*
PROMISE EXAMPLE

function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5){
        resolve("200 ")
      }else {
        reject("500 Internal Error")
      }
    }, 1000);
  });
}

async function loadData() {
  try {
    const data = await fakeFetch()
    console.log("Успіх", data)
  } catch (err) {
    console.log(err)
  }
}

loadData();*/

/* ==== FETCH API */

async function getUsers(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    console.log(data[0])
  }catch (err){
    console.error("Помилка отримання даних", err)
  }
}
getUsers();
