/*
const developer = {
  stack: 'React',
  getStackRegular: function() {
    setTimeout(function() {
      console.log('Regular:', this.stack);
    }, 1000);
  },
  getStackArrow: function() {
    setTimeout(() => {
      console.log('Arrow:', this.stack);
    }, 1000);
  }
};

developer.getStackRegular();
developer.getStackArrow();*/

/*

const person = { name: 'Олег' };

function sayHello(greeting) {
  console.log(`${greeting}, я ${this.name}`);
}
sayHello.call(person, "Привіт")

const greetOleg = sayHello.bind(person)
greetOleg("Хей")
*/

function createBankCard(initialBalance) {
  let balance = initialBalance; // Наш "прихований" баланс

  return {
    deposit: function (amount) {
      balance += amount;
    },
    getBalance: function () {
      return balance;
    }
  };
}

const myCard = createBankCard(100);
myCard.deposit(100)
myCard.getBalance()