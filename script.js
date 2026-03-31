let firstNumber = "";
let operator;
let secondNumber = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);
  }
}

const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");

function clickButtons(digits) {
  digits.addEventListener("click", (e) => {
    console.log(e.target);
  });
}

digitButtons.forEach(clickButtons);
