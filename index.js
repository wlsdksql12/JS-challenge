const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");

const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username == "") {
//     alert("Please write your name");
//   } else if (username.length > 15) {
//     alert("Your name is too long");
//   }
// }

// loginButton.addEventListener("click", onLoginBtnClick);

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let time = "";
  if (hours > 12) {
    hours = hours - 12;
    time = `오후 ${hours}:${minutes}:${seconds}`;
  } else {
    time = `오전 ${hours}:${minutes}:${seconds}`;
  }

  clock.innerText = time;
}

getClock();
setInterval(getClock, 1000);

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
