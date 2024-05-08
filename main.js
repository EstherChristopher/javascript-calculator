const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");

const operationsButtons = document.querySelectorAll(".operations");

const signButtons = document.querySelectorAll(".sign");

// let basket = [];

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    updateDisplay(number);
    // localStorage.setItem('digit', number);
  });
});
function updateDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
    // const initialValue = display.textContent;
    // localStorage.setItem('digit', initialValue)
  } else {
    display.textContent += value;
  }
  let storedValue = localStorage.getItem("digit") || "";
  storedValue += value;

  localStorage.setItem("digit", storedValue);
  // localStorage.setItem('digit', value)
}

signButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sign = button.dataset.sign;
    localStorage.setItem("operator", sign);
  });
});
function modifyDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

operationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operations = button.dataset.sign || button.textContent;
    changeDisplay(operations);
  });
});
function changeDisplay(value) {
  if (display.textContent == "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

clearAll = () => {
  button.addEventListener("click", () => {});
};

clearLast = () => {
  button.addEventListener("click", () => {});
};
