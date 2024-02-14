let buttons = document.querySelectorAll(".button");
let arr = [...buttons];
let mainSection = document.querySelector(".main_section");
let calculatorHeader = document.querySelector(".calculator_header");
let calculatorDesk = document.querySelector(".calculator_write_board");
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
    if (index == 0) {
      mainSection.style.backgroundColor = "#263257";
      calculatorHeader.style.color = "#fff";
      threeStateToggle.style.backgroundColor = "#242D44";
      calculatorMain.style.backgroundColor = "#181F33";
      calculatorMain.style.color = "#fff";
      calculatorBoard.style.backgroundColor = "#242d44";
      numbers.forEach((item) => {
        item.style.color = "#434A59";
        item.style.backgroundColor = "#EAE3DC";
        item.style.boxShadow = "inset 0px -4px 0px #b3a497";
      });
      deleteBtn.style.backgroundColor = "#647198";
      deleteBtn.style.boxShadow = "inset 0px -4px 0px #414e73";
      resetBtn.style.backgroundColor = "#647198";
      resetBtn.style.boxShadow = "inset 0px -4px 0px #414E73";
      eqaulBtn.style.backgroundColor = "#d03f2f";
      eqaulBtn.style.boxShadow = "inset 0px -4px 0px #93261a";
      circleBtns.forEach((circle) => {
        circle.style.backgroundColor = "#D03F2F";
      });
    } else if (index == 1) {
      mainSection.style.backgroundColor = "#E6E6E6";
      calculatorHeader.style.color = "#36362C";
      threeStateToggle.style.backgroundColor = "#D2CDCD";
      calculatorMain.style.backgroundColor = "#fff";
      calculatorMain.style.color = "#36362C";
      calculatorBoard.style.backgroundColor = "#D2CDCD";
      numbers.forEach((item) => {
        item.style.color = "#36362C";
        item.style.backgroundColor = "#E5E4E1";
        item.style.boxShadow = "inset 0px -4px 0px #A79E91";
      });
      deleteBtn.style.backgroundColor = "#378187";
      deleteBtn.style.boxShadow = "inset 0px -4px 0px #1B6066";
      resetBtn.style.backgroundColor = "#378187";
      resetBtn.style.boxShadow = "inset 0px -4px 0px #1B6066";
      eqaulBtn.style.backgroundColor = "#C85402";
      eqaulBtn.style.boxShadow = "inset 0px -4px 0px #873901";
      circleBtns.forEach((circle) => {
        circle.style.backgroundColor = "#C85402";
      });
    } else {
      mainSection.style.backgroundColor = "#17062A";
      calculatorHeader.style.color = "#FFE53D";
      threeStateToggle.style.backgroundColor = "#1E0936";
      calculatorMain.style.backgroundColor = "#1E0936";
      calculatorMain.style.color = "#FFE53D";
      calculatorBoard.style.backgroundColor = "#1E0936";
      numbers.forEach((item) => {
        item.style.color = "#FFE53D";
        item.style.backgroundColor = "#331C4D";
        item.style.boxShadow = "inset 0px -4px 0px #881C9E";
      });
      deleteBtn.style.backgroundColor = "#56077C";
      deleteBtn.style.boxShadow = "inset 0px -4px 0px #BE15F4";
      resetBtn.style.backgroundColor = "#56077C";
      resetBtn.style.boxShadow = "inset 0px -4px 0px #BE15F4";
      eqaulBtn.style.color = "#1A2327";
      eqaulBtn.style.backgroundColor = "#00DED0";
      eqaulBtn.style.boxShadow = "inset 0px -4px 0px #6CF9F1";
      circleBtns.forEach((circle) => {
        circle.style.backgroundColor = "#00DED0";
      });
      console.log(circleBtns);
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
