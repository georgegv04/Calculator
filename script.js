let firstNumber = "";
let operator;
let secondNumber = "";

const numberButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const dotButton = document.querySelector(".dot-btn");

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

    case "×":
      return multiply(num1, num2);

    case "÷":
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

    if (operator === undefined) {
      firstNumber = rejectLeadingZeros(firstNumber, numberClicked);
      display.textContent = firstNumber;
    } else {
      secondNumber = rejectLeadingZeros(secondNumber, numberClicked);
      display.textContent = secondNumber;
    }
  });
}

function operatorButtons(operators) {
  operators.addEventListener("click", (e) => {
    operator = e.target.textContent;
  });
}

equalButton.addEventListener("click", () => {
  if (firstNumber === "" && operator === undefined && secondNumber === "") {
    display.textContent = "0";
  } else if (operator === undefined && secondNumber === "") {
    display.textContent = firstNumber;
  } else {
    let result = operate(+firstNumber, operator, +secondNumber);
    result = Number(result.toFixed(2));
    display.textContent = result;
    firstNumber = result.toString();
    operator = undefined;
    secondNumber = "";
  }
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  operator = undefined;
  secondNumber = "";
  display.textContent = "0";
});

backspaceButton.addEventListener("click", () => {
  if (secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = +secondNumber;
  } else if (operator !== undefined && secondNumber === "") {
    operator = undefined;
  } else if (firstNumber !== "") {
    firstNumber = firstNumber.slice(0, -1);
    display.textContent = +firstNumber;
  } else {
    display.textContent = "0";
  }
});

dotButton.addEventListener("click", () => {
  if (operator === undefined) {
    if (firstNumber === "") {
      firstNumber = "0.";
      display.textContent = firstNumber;
    }
    if (!firstNumber.includes(".")) {
      firstNumber = firstNumber + ".";
    }
    display.textContent = firstNumber;
  } else {
    if (secondNumber === "") {
      secondNumber = "0.";
      display.textContent = secondNumber;
    }
    if (!secondNumber.includes(".")) {
      secondNumber = secondNumber + ".";
    }
    display.textContent = secondNumber;
  }
});

numberButtons.forEach(digitButtons);
operatorBtns.forEach(operatorButtons);
