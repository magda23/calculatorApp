let buttons = document.querySelectorAll(".button");
let arr = [...buttons];
let mainSection = document.querySelector(".main_section");
let calculatorHeader = document.querySelector(".calculator_header");
let calculatorDesk = document.querySelector(".calculator_desk");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let resetBtn = document.querySelector(".resetBtn");
let eqaulBtn = document.querySelector(".equalBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let threeStateToggle = document.querySelector(".three-state-toggle");
let calculatorMain = document.querySelector(".calculator_desk ");
let calculatorBoard = document.querySelector(".calculator_board");
let circleBtns = document.querySelectorAll(".circle");

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 1) {
      mainSection.classList.add("main_section_white");
      threeStateToggle.classList.add("three_state_toggle_light");
      calculatorHeader.classList.add("calculator_header_white");
      calculatorDesk.classList.add("calculatorMain_light_color");
      calculatorBoard.classList.add("calculator_board_light_color");
      numbers.forEach((item) => {
        item.classList.add("numbers_light");
      });
      deleteBtn.classList.add("deleteBtn_light");
      eqaulBtn.classList.add("equalBtn_light");
      resetBtn.classList.add("resetBtn_light");
      circleBtns.forEach((circle) => {
        circle.classList.add("circle_light");
      });
      mainSection.classList.remove("main_section_purple");
      threeStateToggle.classList.remove("three_state_toggle_purple");
      calculatorHeader.classList.remove("calculator_header_purple");
      calculatorDesk.classList.remove("calculatorMain_purple_color");
      calculatorBoard.classList.remove("calculator_board_purple_color");
      numbers.forEach((item) => {
        item.classList.remove("numbers_purple");
      });
      deleteBtn.classList.remove("deleteBtn_purple");
      eqaulBtn.classList.remove("equalBtn_purple");
      resetBtn.classList.remove("resetBtn_purple");
      circleBtns.forEach((circle) => {
        circle.classList.remove("circle_purple");
      });
    } else if (index == 2) {
      mainSection.classList.add("main_section_purple");
      threeStateToggle.classList.add("three_state_toggle_purple");
      calculatorHeader.classList.add("calculator_header_purple");
      calculatorDesk.classList.add("calculatorMain_purple_color");
      calculatorBoard.classList.add("calculator_board_purple_color");
      numbers.forEach((item) => {
        item.classList.add("numbers_purple");
      });
      deleteBtn.classList.add("deleteBtn_purple");
      eqaulBtn.classList.add("equalBtn_purple");
      resetBtn.classList.add("resetBtn_purple");
      circleBtns.forEach((circle) => {
        circle.classList.add("circle_purple");
      });
      mainSection.classList.remove("main_section_white");
      threeStateToggle.classList.remove("three_state_toggle_light");
      calculatorHeader.classList.remove("calculator_header_white");
      calculatorDesk.classList.remove("calculatorMain_light_color");
      calculatorBoard.classList.remove("calculator_board_light_color");
      numbers.forEach((item) => {
        item.classList.remove("numbers_light");
      });
      deleteBtn.classList.remove("deleteBtn_light");
      eqaulBtn.classList.remove("equalBtn_light");
      resetBtn.classList.remove("resetBtn_light");
      circleBtns.forEach((circle) => {
        circle.classList.remove("circle_light");
      });
    } else {
      mainSection.classList.add("main_section");
      calculatorHeader.classList.add("calculator_header");
      calculatorDesk.classList.add("calculator_write_board");
      numbers.forEach((item) => {
        item.classList.add("number");
      });
      deleteBtn.classList.add("deleteBtn");
      eqaulBtn.classList.add("eqaulBtn");
      resetBtn.classList.add("resetBtn");
      circleBtns.forEach((circle) => {
        circle.classList.add("circle");
      });
      mainSection.classList.remove("main_section_white");
      threeStateToggle.classList.remove("three_state_toggle_light");
      calculatorHeader.classList.remove("calculator_header_white");
      calculatorDesk.classList.remove("calculatorMain_light_color");
      calculatorBoard.classList.remove("calculator_board_light_color");
      numbers.forEach((item) => {
        item.classList.remove("numbers_light");
      });
      deleteBtn.classList.remove("deleteBtn_light");
      eqaulBtn.classList.remove("equalBtn_light");
      resetBtn.classList.remove("resetBtn_light");
      circleBtns.forEach((circle) => {
        circle.classList.remove("circle_light");
      });
      mainSection.classList.remove("main_section_purple");
      threeStateToggle.classList.remove("three_state_toggle_purple");
      calculatorHeader.classList.remove("calculator_header_purple");
      calculatorDesk.classList.remove("calculatorMain_purple_color");
      calculatorBoard.classList.remove("calculator_board_purple_color");
      numbers.forEach((item) => {
        item.classList.remove("numbers_purple");
      });
      deleteBtn.classList.remove("deleteBtn_purple");
      eqaulBtn.classList.remove("equalBtn_purple");
      resetBtn.classList.remove("resetBtn_purple");
      circleBtns.forEach((circle) => {
        circle.classList.remove("circle_purple");
      });
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

//calculator

calculatorDesk.textContent = "0";

let lastCharacter = "";
let operatorsItem = ["+", "-", "x", "/", "."];
function calculateFunction() {
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    element.addEventListener("click", function () {
      let buttonText = element.textContent;

      if (calculatorDesk.textContent === "0") {
        calculatorDesk.textContent = "";
      }

      if (lastCharacter !== "" && operatorsItem.includes(buttonText)) {
        if (
          !calculatorDesk.textContent.endsWith("+") &&
          !calculatorDesk.textContent.endsWith("-") &&
          !calculatorDesk.textContent.endsWith("x") &&
          !calculatorDesk.textContent.endsWith("/") &&
          !calculatorDesk.textContent.endsWith(".")
        ) {
          calculatorDesk.textContent += buttonText;
        }
      } else {
        calculatorDesk.textContent += buttonText;
      }

      lastCharacter = buttonText;
    });
  }

  eqaulBtn.addEventListener("click", function () {
    let equalElement = calculatorDesk.textContent;
    equalElement = equalElement.replace(/x/g, "*");
    try {
      let result = eval(equalElement);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid calculation");
      }
      calculatorDesk.textContent = result.toFixed(2);
    } catch (error) {
      calculatorDesk.textContent = "Error";
      console.error("Calculation error:", error.message);
    }
  });

  deleteBtn.addEventListener("click", function () {
    calculatorDesk.textContent = calculatorDesk.textContent.slice(0, -1);
    if (calculatorDesk.textContent === "") {
      calculatorDesk.textContent = "0";
    }
  });
  resetBtn.addEventListener("click", function () {
    calculatorDesk.textContent = "0";
  });
}

calculateFunction();
