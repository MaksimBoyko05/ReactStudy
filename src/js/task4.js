/*
let user1 = { name: "Іван" };
let user2 = {...user1}

user2.name = "Петро";
console.log(user1.name)*/


let user1 = {
  name: "Іван",
  address: { city: "Київ" }
};

let user2 = JSON.parse(JSON.stringify(user1));

console.log(user1.address.city)


const player1 = {
  nickname: "Dragon",
  inventory: ["меч", "щит"]
};


const player2 = structuredClone(player1);


player2.inventory.push("зілля");
console.log(player1)

