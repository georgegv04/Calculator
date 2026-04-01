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

// function rejectLeadingZeros(number) {
//   if (number === "") {
//     if (numberClicked === "0") {
//       number = "0";
//     } else {
//       number = numberClicked;
//     }
//   } else if (number === "0") {
//     if (numberClicked === "0") {
//       number = "0";
//     } else {
//       number = numberClicked;
//     }
//   } else {
//     number += numberClicked;
//   }
// }

const numberButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");

function digitButtons(digits) {
  digits.addEventListener("click", (e) => {
    let numberClicked = e.target.textContent;

    if (operator === undefined) {
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
    } else {
      if (secondNumber === "") {
        if (numberClicked === "0") {
          secondNumber = "0";
        } else {
          secondNumber = numberClicked;
        }
      } else if (secondNumber === "0") {
        if (numberClicked === "0") {
          secondNumber = "0";
        } else {
          secondNumber = numberClicked;
        }
      } else {
        secondNumber += numberClicked;
      }
      display.textContent = secondNumber;
    }
  });
}

function operatorButtons(operators) {
  operators.addEventListener("click", (e) => {
    operator = e.target.textContent;
  });
}

numberButtons.forEach(digitButtons);
operatorBtns.forEach(operatorButtons);
