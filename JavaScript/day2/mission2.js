function calculate(a, b, op) {
  switch (op) {
    case "+":
      return console.log(a + b);
    case "-":
      return console.log(a - b);
    case "*":
      return console.log(a * b);
    case "/":
      return console.log(a / b);
    default:
      return console.log(null);
  }
}

calculate(10, 5, "+");
calculate(10, 5, "-");
