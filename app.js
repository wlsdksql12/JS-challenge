const a = 5;
const b = 2;
let myName = "asj";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "Seong Jin";

console.log("your new name is " + myName);

const amIFat = null;
let something;
console.log(something);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(daysOfWeek);

// const player = {
//   name: "asj",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// console.log(player.name);
// player.points = player.points + 15;
// console.log(player.points);

// function sayHello() {
//   console.log("Hello my name is " + player.name);
// }

// sayHello();

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a + b);
}

plus(8, 60);
divide(98 / 20);

const player = {
  name: "asj",
  seyHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you  ");
  },
};

console.log(player.name);
player.seyHello("lynn");
