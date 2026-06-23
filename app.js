const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

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
