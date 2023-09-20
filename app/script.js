const display = document.querySelector("#res-box");
const quesdisplay = document.querySelector("#ques-box");
let Input = "";
let Operator = "";
let firstInput = 0;
let result = 0;
const numbers = document.querySelectorAll(".number");
for (i = 0; i < numbers.length; i++) {
  const operand = numbers[i];
  operand.addEventListener("click", () => {
    Input += operand.textContent;
    display.textContent = Input;
  });
}
const operators = document.querySelectorAll(".operator");
for (i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener("click", () => {
    if (Input !== "") {
      Operator = operator.textContent;
      result = parseFloat(Input);
      firstInput = parseFloat(Input);
      Input = "";
    }
  });
}
const equalButton = document.querySelector("#equalbtn");
equalButton.addEventListener("click", () => {
  if (Input !== "") {
    const secondOperand = parseFloat(Input);

    switch (Operator) {
      case "+":
        result += secondOperand;
        break;
      case "-":
        result -= secondOperand;
        break;
      case "*":
        result *= secondOperand;
        break;
      case "/":
        result /= secondOperand;
        break;
    }
    // Input = "";
    // Operator = "";
    quesdisplay.textContent = `${firstInput} ${Operator} ${secondOperand} =`;
    display.textContent = result;
  }
});

const clearButton = document.querySelector("#btnclear");
clearButton.addEventListener("click", () => {
  Input = "";
  Operator = "";
  quesdisplay.textContent = "";
  display.textContent = "";
});
