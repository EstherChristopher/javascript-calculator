const display = document.getElementById('display');

const numberButtons = document.querySelectorAll('.number');

const operationsButtons = document.querySelectorAll('.operations');

const signButtons = document.querySelectorAll('.sign');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked. Value:', button.textContent);
        const number = button.textContent;
        updateDisplay(number);
    });
});
function updateDisplay(value) {
    console.log('Display content:', display.textContent);
    console.log('Value:', value);
    if (display.textContent === '0') {
        console.log('Condition met: Display content is 0');
        console.log('Replacing 0 with', value);
        display.textContent = value;
    } 
    else  {
        console.log('Condition not met: Display content is not 0');
        console.log('Appending', value);
        display.textContent += value;
    }
}

signButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sign = button.dataset.sign;
        modifyDisplay(sign);
    });
});
function modifyDisplay (value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

operationsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operations = button.dataset.sign || button.textContent;
        changeDisplay(operations)
    })
})
function changeDisplay (value) {
    if(display.textContent == '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}
