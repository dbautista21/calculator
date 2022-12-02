"use strict";

const buttons = document.querySelectorAll(".btn-op");
const display = document.getElementById("display");
display.innerText = "0";
let last_char = null;
let result;

/*
 * Is Operation Function
 */
const isOp = function (x) {
  if (x === "+" || x === "-" || x === "/" || x === "*") {
    return true;
  }
  return false;
};
/*
 * FUNCTION: Input Function: For operations and numbers
 */
const input = function () {
  this.blur();
  last_char = display.innerHTML.charAt(display.innerHTML.length - 1);
  /*
   * Situation: The last and only character is a zero and the current one is a number
   */
  if (
    last_char === "0" &&
    !isOp(this.value) &&
    display.innerHTML.length === 1
  ) {
    display.innerHTML = this.value;
    return;
  }
  // Situation: The last character after the operation is a 0 and the current one is a number
  else if (
    last_char === "0" &&
    !isOp(this.value) &&
    isOp(display.innerHTML.charAt(display.innerHTML.length - 2))
  ) {
    display.innerHTML =
      display.innerHTML.substring(0, display.innerHTML.length - 1) + this.value;
    return;
  }
  /*
   * Situation: The last character is an operation and the current one is a number
   *
   */
  if (isOp(last_char) && !isOp(this.value)) {
    display.innerHTML += this.value;
    return;
  }
  /*
   * Situation: The last character is an operation and the current one is an operation
   */
  if (isOp(last_char) && isOp(this.value)) {
    if (last_char == this.value) {
      return;
    } else {
      display.innerHTML =
        display.innerHTML.substring(0, display.innerHTML.length - 1) +
        this.value;
      return;
    }
  }
  /*
   * Situation: The last character is a number and the current one is an operation
   */
  if (!isOp(last_char) && isOp(this.value)) {
    for (let i = 0; i < display.innerHTML.length; i++) {
      if (isOp(display.innerHTML[i])) {
        equal();
      }
    }
  }
  /*
   * Situation: User inputs a number after a result from a past equation is being
   * displayed on screen
   */
  if (result == display.innerHTML && !isOp(this.value)) {
    display.innerHTML = this.value;
    return;
  }
  display.innerHTML += this.value;
};
function parse(str) {
  return Function(`return ${str}`)();
}
const equal = function () {
  this.blur();
  last_char = display.innerHTML.charAt(display.innerHTML.length - 1);
  /*
   * Situation: The user inputs a number, followed by an operator
   * followed by pressing the = button.
   */
  if (isOp(last_char)) {
    display.innerHTML += display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
    return;
  }
  // Evaluate the terms and operations in the text window, then display them
  display.innerHTML = parse(display.innerHTML);
  result = parse(display.innerHTML);
  console.log(result);
};

/*
 * FUNCTION: Clear the display window
 */
const clear = function () {
  this.blur();
  display.innerHTML = "0";
};
/*
 * FUNCTION: Delete the last character in the display window
 */
const del = function () {
  this.blur();
  // Situation: Last character is a number after the operation
  // Situation: Last character is an operation
  // Situation: Last character is a number before the operation
  display.innerHTML = display.innerHTML.substring(
    0,
    display.innerHTML.length - 1
  );
  // Situation: User deletes all numbers and operations from display window
  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
};

/*
 * Add Event Listeners to all buttons on screen
 */
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].value == "C") {
    buttons[i].addEventListener("click", clear);
  } else if (buttons[i].value == "=") {
    buttons[i].addEventListener("click", equal);
  } else if (buttons[i].value == "Backspace") {
    buttons[i].addEventListener("click", del);
  } else {
    buttons[i].addEventListener("click", input);
  }
}

// Add event listeners to keyboard presses
document.addEventListener("keydown", (e) => {
  for (let i = 0; i < buttons.length; i++) {
    if (e.key == buttons[i].value) buttons[i].click();
    if (e.key == "Enter" && buttons[i].value == "=") buttons[i].click();
  }
});

/*
 * Bugs:
 *
 *  Being responsive to mobile devices and different screen sizes
 *
 *  Dealing with uncommon values such as infinity and NaN
 *
 */
