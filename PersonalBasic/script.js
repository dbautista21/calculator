const buttons = document.querySelectorAll(".btn-op");
const display = document.getElementById("display");

const numInput = function () {
  display.innerHTML += this.value;
};
const subtract = function () {
  display.innerHTML += "-";
};
const plus = function () {
  display.innerHTML += "+";
};
const divide = function () {
  display.innerHTML += "/";
};
const equal = function () {
  display.innerHTML = eval(display.innerHTML);
};
const clear = function () {
  display.innerHTML = "";
};
const multiply = function () {
  display.innerHTML += "*";
};

for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].value == "CE") {
    buttons[i].addEventListener("click", clear);
  } else if (buttons[i].value == "=") {
    buttons[i].addEventListener("click", equal);
  } else {
    buttons[i].addEventListener("click", numInput);
  }
}
