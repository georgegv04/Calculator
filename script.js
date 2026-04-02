let firstNumber = "";
let operator;
let secondNumber = "";

const numberButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");

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

function rejectLeadingZeros(currentNumber, digitClicked) {
  if (currentNumber === "") {
    if (digitClicked === "0") {
      currentNumber = "0";
    } else {
      currentNumber = digitClicked;
    }
  } else if (currentNumber === "0") {
    if (digitClicked === "0") {
      currentNumber = "0";
    } else {
      currentNumber = digitClicked;
    }
  } else {
    currentNumber += digitClicked;
  }

  return currentNumber;
}

function digitButtons(digits) {
  digits.addEventListener("click", (e) => {
    let numberClicked = e.target.textContent;
  });
}

function operatorButtons(operators) {
  operators.addEventListener("click", (e) => {
    operator = e.target.textContent;
  });
}

numberButtons.forEach(digitButtons);
operatorBtns.forEach(operatorButtons);
