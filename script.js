// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousAnswer = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      // Clear everything
      currentInput = "";
      display.value = "";
    } else if (value === "del") {
      // Delete the last character
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "Enter") {
      // Calculate and display result
      try {
        // Replace % with percentage operation
        currentInput = currentInput.replace(/%/g, "/100");
        previousAnswer = eval(currentInput); // Evaluate the expression
        display.value = previousAnswer;
        currentInput = previousAnswer.toString(); // Store result as new input
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
    } else if (value === "ans") {
      // Add the previous answer
      currentInput += previousAnswer;
      display.value = currentInput;
    } else if (value === "√") {
      // Square root of the current input
      try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      // Add the clicked value to the current input
      currentInput += value;
      display.value = currentInput;
    }
  });
});
