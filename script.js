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

function operate(num1, operator, num2) {
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

const numberButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");

function digitButtons(digits) {
  digits.addEventListener("click", (e) => {
    let numberClicked = e.target.textContent;

    if (firstNumber === "") {
      if (numberClicked === "0") {
        firstNumber = "0";
      } else {
        firstNumber = numberClicked;
      }
    } else if (firstNumber === "0") {
      if (numberClicked === "0") {
        firstNumber = "0";
      } else {
        firstNumber = numberClicked;
      }
    } else {
      firstNumber += numberClicked;
    }
    display.textContent = firstNumber;
  });
}

function operatorButtons(operators) {
  operators.addEventListener("click", (e) => {
    let clickedOperator = e.target.textContent;
  });
}

numberButtons.forEach(digitButtons);
operatorBtns.forEach(operatorButtons);
