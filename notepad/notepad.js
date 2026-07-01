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

// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const age = parseInt(prompt("How old are you?"));

// console.log(age);
// console.log(isNaN(age));

// if (isNaN(age) || age < 0) {
//   console.log("Please write a real positive number");
// } else if (age < 18) {
//   console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

const title = document.querySelector(".hello h1");

title.innerText = "Hello";

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  title.style.color = newColor;
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
