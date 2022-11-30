"use script";

const buttons = document.querySelectorAll(".btn-op");
const display = document.getElementById("display");
display.innerText = "0";
let op_limit = false;

const isOp = function (x) {
  if (x === "+" || x === "-" || x === "/" || x === "*") {
    return true;
  }
  return false;
};

const input = function () {
  last_char = display.innerHTML.charAt(display.innerHTML.length - 1);
  // if the last character is a zero and the current one is not an operation
  // Just replace the zero with the current input
  if (
    last_char === "0" &&
    !isOp(this.value) &&
    display.innerHTML.length === 1
  ) {
    display.innerHTML = this.value;
    return;
  }
  // if the last character is an operation and the current one is not an operation
  // reached maximum number of operations: next operation will result in eval
  if (isOp(last_char) && !isOp(this.value)) {
    // might remove
    op_limit = true;
    display.innerHTML += this.value;
    return;
  }
  // if the last character is an operation and the current one is an operation
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
  // if the last character is a number and current one is an operation
  if (!isOp(last_char) && isOp(this.value)) {
    if (op_limit) {
      equal();
    }
  }
  display.innerHTML += this.value;
};
const equal = function () {
  display.innerHTML = eval(display.innerHTML);
};
const clear = function () {
  display.innerHTML = "0";
};

//Add the event listeners to each button : clear/equal/input
for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].value == "C") {
    buttons[i].addEventListener("click", clear);
  } else if (buttons[i].value == "=") {
    buttons[i].addEventListener("click", equal);
  } else {
    buttons[i].addEventListener("click", input);
  }
}

// Add event listeners to keyboard presses
document.addEventListener("keypress", (e) => {
  for (let i = 0; i < buttons.length; i++) {
    if (e.key == buttons[i].value) buttons[i].click();
  }
});

/*
 * Bugs:
 * Result has potential to overload
 *
 * have to fix what happens if last char is a operation and user presses equals
 *
 * responsive
 */
