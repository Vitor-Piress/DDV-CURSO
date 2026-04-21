const resultInput = document.getElementById("result-input");
const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");
const equalButton = document.getElementById("equal-button");

const operationsButton = document.querySelectorAll(".operations");
const numberButtons = document.querySelectorAll(".number");

let value1;
let value2;
let operation;

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    resultInput.value += this.textContent; // this faz referência button
  });
});

operationsButton.forEach((button) => {
  button.addEventListener("click", function () {
    value1 = Number(resultInput.value);
    operation = button.id;
    resultInput.value = "";
  });
});

equalButton.addEventListener("click", function (e) {
  e.preventDefault();
  value2 = Number(resultInput.value);

  switch (operation) {
    case "add-button":
      resultInput.value = value1 + value2;
      break;
    case "minus-button":
      resultInput.value = value1 - value2;
      break;
    case "multiply-button":
      resultInput.value = value1 * value2;
      break;
    case "multiply-button":
      resultInput.value = value1 * value2;
      break;
    case "divide-button":
      resultInput.value = value1 / value2;
      break;
  }
});
