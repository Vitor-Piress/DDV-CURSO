const calcular = (num1, num2, operation) => {
  switch (operation) {
    case "somar":
    case "+":
      return num1 + num2;
    case "subtrair":
    case "-":
      return num1 - num2;
    case "multiplicar":
    case "*":
    case "X":
    case "x":
      return num1 * num2;
    case "dividir":
    case "/":
      return num1 / num2;
  }
};

console.log(calcular(12, 2, "*"));
