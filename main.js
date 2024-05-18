const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".bi.bi-circle-fill.icon-2");

// const percentageButton = document.querySelectorAll(".percentage");

const signButtons = document.querySelectorAll(".bi.bi-circle-fill");

const button = document.getElementById("bi.bi-circle-fill");

// const signSymbols = document.getElementById("symbols");

//! For digits

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const number = button.textContent;
//     if (signClicked) {
//       display.textContent = number;
//       signClicked = false;
//     } else {
//       updateDisplay(number);
//     }
//   });
// });

numberButtons.forEach((container) => {
  container.addEventListener("click", () => {
    const button = container.querySelector(".number");
    const number = button.textContent;

    if(signClicked) {
      display.textContent = number;
      signClicked = false;
    } else {
      updateDisplay(number);
    }
  })
})

//  ! To display values

function updateDisplay(value) {
  if (display.textContent.length === 9 && !isNaN(parseInt(value))) {
    return;
  }
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }

  let storedValue = localStorage.getItem("digit") || "";
  storedValue += value;
  localStorage.setItem("digit", storedValue);
}

let firstOperand = "";
let operator = "";
let signClicked = false;

// ! For operators

// signButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const sign = button.dataset.sign;
//     signClicked = true;

//     if (sign !== "/") {
//       if (firstOperand === "") {
//         firstOperand = display.textContent;
//         operator = sign;
//         display.textContent = "";
//       } else {
//         // If there's first operand, calculate the result
//         const secondOperand = display.textContent;
//         const result = calculateResult(
//           parseFloat(firstOperand),
//           parseFloat(secondOperand),
//           operator
//         );
//         display.textContent = result;
//         firstOperand = "";
//         operator = "";
//       }
//     } else {
//       // If the clicked sign is division
//       const firstOperand = display.textContent; // change first operand to second
//       operator = sign;
//       display.textContent = "";
//     }

//     let storedSigns = localStorage.getItem("sign") || "";
//     storedSigns = sign;
//     localStorage.setItem("operator", storedSigns);

//     // Update localStorage
//     if (
//       display.textContent.length === 9 ||
//       (!isNaN(parseInt(sign)) && display.textContent.length < 9)
//     ) {
//       display.textContent = "";
//     }
//   });
// });

signButtons.forEach((container) => {
  container.addEventListener("click", () => {
    const button = container.querySelector(".sign")
    const sign = button.dataset.sign;
    signClicked = true;

    if (firstOperand === "") {
      firstOperand = display.textContent;
      operator = sign; // Assign the clicked sign to the operator
      display.textContent = "";
    } else {
      // If there's first operand, calculate the result
      const secondOperand = display.textContent;
      const result = calculateResult(
        parseFloat(firstOperand),
        parseFloat(secondOperand),
        operator
      );
      display.textContent = result;
      firstOperand = "";
      operator = "";
    }

    let storedOperators = localStorage.getItem("operator") || "";
    storedOperators = sign; // Append the clicked sign to the stored operators
    localStorage.setItem("operator", storedOperators);

    // Update localStorage
    if (
      display.textContent.length === 9 ||
      (!isNaN(parseInt(sign)) && display.textContent.length < 9)
    ) {
      display.textContent = "";
    }
  });
});

function calculateResult(firstOperand, secondOperand, operator) {
  // if (operator === "/") {
  //   return firstOperand / secondOperand;
  // }
  if (operator === "*") {
    return firstOperand * secondOperand;
  }
  if (operator === "+") {
    return firstOperand + secondOperand;
  }
  if (operator === "-") {
    return firstOperand - secondOperand;
  }
}

// ! Equal to (result)

// equalButton.addEventListener("click", () => {
//   const secondOperand = display.textContent;
//   const result = calculateResult(parseFloat(firstOperand), parseFloat(secondOperand), parseFloat(operator));
//   display.textContent = result;
//   firstOperand = "";
//   operator = "";
// });
// ! AC and C

const toggleClearMode = () => {
  if (button.textContent === "C") {
    button.textContent = "AC";
  } else if (button.textContent === "AC") {
    button.textContent = "C";
  }
};

button.addEventListener("click", () => {
  if (button.textContent === "AC") {
    display.textContent = "";
    localStorage.clear();
  } else if (button.textContent === "C") {
    display.textContent = display.textContent.slice(0, -1);
  }
  toggleClearMode();
});
toggleClearMode();

//! +/-
const signSymbolButton = document.getElementById("symbols");

signSymbolButton.addEventListener("click", () => {
  if (display.textContent.startsWith("-")) {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = "-" + display.textContent;
  }

  localStorage.setItem("displayContent", display.textContent);
});

const percentageButton = document.querySelector('#percentage[data-sign="%"]');
percentageButton.addEventListener("click", () => {
  const number = parseFloat(display.textContent);
  const percentage = number / 100;
  display.textContent = percentage.toString();
  localStorage.setItem("percent", percentage.toString());
});

// Setting the equal to button
// AC and C should clear stuff from localStorage for each operation Done
// Use console.log
// The number after operator is showing for the result (=) instead of mathematical result. Check this!!
// Take out C, leave only AC
// Explain code, number following C isn't saved to localStorage, do the other signs work like the division sign,  something wrong with code, Kcee
// Not just division, any sign
// Either commented sign button code or new one
// ! functions of the signs
