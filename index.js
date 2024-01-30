var currentValue = "";
        var currentOperator = "";
        var display = document.getElementById("resultado");
  
        function appendToDisplay(value) {
          currentValue += value;
          updateDisplay();
        }
        function appendOperator(operator) {
          if (currentOperator !== "") {
            calculate();
          }
          currentOperator = operator;
          currentValue += " " + operator + " ";
          updateDisplay();
        }
        function calculate() {
          var expression = currentValue.replace(/x/g, "*").replace(/÷/g, "/");
          currentValue = eval(expression);
          currentOperator = "";
          updateDisplay();
        }
  
        function clearDisplay() {
          currentValue = "";
          currentOperator = "";
          updateDisplay();
        }
  
        function deleteLastChar() {
          currentValue = currentValue.slice(0, -1);
          updateDisplay();
        }
  
        function updateDisplay() {
          display.innerHTML = currentValue;
        }